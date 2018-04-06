(ns simpleserver.webserver.server
  (:require
    [clojure.data.json :as json]
    [clojure.tools.logging :as log]
    [compojure.core :as co-core]
    [compojure.route :as co-route]
    [ring.util.response :as ri-resp]
    [ring.middleware.json :as ri-json]
    [ring.middleware.defaults :as ri-defaults]
    [environ.core :refer [env]]
    [simpleserver.util.prop :as ss-prop]
    [simpleserver.userdb.users :as ss-users]
    ))


(defn -read-configuration
  "Reads configuration for web server."
  []
  (log/trace "ENTER -read-configuration")
  )


(defn initialize-web-server
  "Initializes the web server. See :ring in project.clj."
  []
  (log/trace "ENTER initialize-web-server")
  (log/trace "***** ***** SIMPLE SERVER STARTING... ***** ***** ")
  (-read-configuration))


(defn -get-info
  []
  (log/trace "ENTER -get-info")
  (let [response {:info "index.html => Info in HTML format"}]
    (json/write-str response)))


(defn -check-token
  [token]
  (let [ok-hash (ss-prop/get-str-value "token-as-hash")
        hashed-token (str (int (hash token)))]
    (= hashed-token ok-hash)))


(defn -token-error
  []
  (json/write-str {:error "Wrong token"}))


(defn -validate-sign-in
  "Extremely simple validator - just request that all fields must have some value."
  [field-values]
  (every? #(not (empty? %)) field-values))


;; As in headers check with curl that the http status is properly set.
(defn -set-http-status
  [ring-response ret]
  (if (= ret :ok)
    ring-response
    (ri-resp/status ring-response 400)))


(defn -sign-in
  [req]
  (log/trace "ENTER -sign-in")
  ;(log/trace (str "req: " req))
  (let [body (:body req)
        first-name (:first-name body)
        last-name (:last-name body)
        password (:password body)
        email (:email body)
        validation-passed (-validate-sign-in [email first-name last-name password])
        response-value (if validation-passed
                         (ss-users/add-new-user email first-name last-name password)
                         {:ret :failed, :msg "Validation failed - some fields were empty"})]
    (-set-http-status (ri-resp/response response-value) (:ret response-value))))


(co-core/defroutes app-routes
                   (co-core/GET "/info" [] (-get-info))
                   (co-core/POST "/sign-in" req (-sign-in req))
                   (co-route/resources "/")
                   (co-route/not-found "Not Found. Use /info to get information how to use the commands."))


(defn -cors-handling [response]
  (->
    response
    (assoc-in [:headers "Access-Control-Allow-Origin"] "*")
    (assoc-in [:headers "Access-Control-Allow-Headers"] "X-Requested-With,Content-Type,Cache-Control")
    (assoc-in [:headers "Access-Control-Allow-Methods"] "GET,PUT,POST,DELETE,OPTIONS")
    (assoc-in [:headers "Content-Type"] "application/json")
    ))

;; Check with curl -v (verbose) that the headers are there:
;; curl -v -H "Content-Type: application/json" -X POST -d '{"first-name":"Jamppa", "last-name": "Tuominen", "email": "jamppa.3.tuominen@tieto.com", "password":"123"}' http://localhost:3000/sign-in
(defn -my-wrap-cors [handler]
  (fn
    ([request]
     (-> (handler request) (-cors-handling)))
    ([request respond raise]
     (handler request #(respond (-cors-handling %)) raise))))


;; NOTE: Start web-server in development mode like:
;; CS_CONFIG_FILE=resources/simpleserver.properties lein with-profile +log-dev ring server-headless
(def web-server
  (->
    app-routes
    (ri-defaults/wrap-defaults ri-defaults/api-defaults)
    (-my-wrap-cors)
    (ri-json/wrap-json-body {:keywords? true})
    (ri-json/wrap-json-response)

    ))




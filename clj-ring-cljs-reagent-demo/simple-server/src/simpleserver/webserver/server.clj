(ns simpleserver.webserver.server
  (:require
    [clojure.data.json :as json]
    [clojure.tools.logging :as log]
    [compojure.core :as co-core]
    [compojure.route :as co-route]
    [ring.util.response :as ri-resp]
    [ring.middleware.json :as ri-json]
    [ring.middleware.defaults :as ri-defaults]
    [ring.middleware.cors :refer [wrap-cors]]
    [environ.core :refer [env]]
    [simpleserver.util.prop :as ss-prop]
    [simpleserver.userdb.users :as ss-users]
    ))


;; NOTE: my-body atom is just for testing purposes using remote REPL:
;; lein repl :connect localhost:55444
;; Use ClojureScript Simple Frontend, curl or Postman to send a signin POST request,
;; and then in remote REPL you can check the body like:
;; user=> @simpleserver.webserver.server/my-body
;; => {:first-name "Jamppa", :last-name "Tuominen", :email "jamppa.tuominen@foo.com", :password "p"}

(def my-body (atom nil))

(defn -reset-body
  [body]
  (reset! my-body body))

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
  (log/trace (str "req: " req))
  (let [body (:body req)
        dummy (-reset-body body)
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
                   (co-core/POST "/signin" req (-sign-in req))
                   (co-route/resources "/")
                   (co-route/not-found "Not Found. Use /info to get information how to use the commands."))


(defn -cors-handler [routes]
  ; TODO: Why cannot we see this log entry?
  (log/trace "ENTER -cors-handler")
  (wrap-cors routes :access-control-allow-origin [#".*"]
             :access-control-allow-headers ["Content-Type"]
             :access-control-allow-methods [:get :put :post :delete :options])
  )


;; NOTE: Start web-server in development mode like:
;; CS_CONFIG_FILE=resources/simpleserver.properties lein with-profile +log-dev ring server-headless
(def web-server
  (->
    app-routes
    ;; NOTE: Not working with wrap-cors, why?
    ;(ri-defaults/wrap-defaults ri-defaults/api-defaults)
    (ri-json/wrap-json-body {:keywords? true})
    (-cors-handler)
    (ri-json/wrap-json-response)
    ))




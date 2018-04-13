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
    [buddy.sign.jwt :as buddy-jwt]
    [environ.core :refer [env]]
    [simpleserver.util.prop :as ss-prop]
    [simpleserver.userdb.users :as ss-users]
    [simpleserver.webserver.login :as ss-login]
    [simpleserver.domain :as ss-domain]
    ))



;; NOTE: my-body atom is just for testing purposes using remote REPL:
;; lein repl :connect localhost:55444
;; Use ClojureScript Simple Frontend, curl or Postman to send a signin POST request,
;; and then in remote REPL you can check the body like:
;; user=> @simpleserver.webserver.server/my-body
;; => {:first-name "Jamppa", :last-name "Tuominen", :email "jamppa.tuominen@foo.com", :password "p"}

(def my-body (atom nil))


(defn -reset-body
  "Resets the my body atom which is just for debugging purposes."
  [body]
  (reset! my-body body))

(defn -read-configuration
  "Reads configuration for web server."
  []
  (log/trace "ENTER -read-configuration"))



(defn initialize-web-server
  "Initializes the web server. See :ring in project.clj."
  []
  (log/trace "ENTER initialize-web-server")
  (log/trace "***** ***** SIMPLE SERVER STARTING... ***** ***** ")
  (-read-configuration))


(defn -get-info
  "Gets the info page."
  []
  (log/trace "ENTER -get-info")
  (let [response {:info "index.html => Info in HTML format"}]
    (json/write-str response)))


(defn -check-token
  "Checks the token."
  [token]
  (let [ok-hash (ss-prop/get-str-value "token-as-hash")
        hashed-token (str (int (hash token)))]
    (= hashed-token ok-hash)))


(defn -token-error
  "Returns token error."
  []
  (json/write-str {:error "Wrong token"}))


(defn -validate-parameters
  "Extremely simple validator - just request that all fields must have some value."
  [field-values]
  (every? #(not (empty? %)) field-values))


;; As in headers check with curl that the http status is properly set.
(defn -set-http-status
  "Sets the http status either to 200 (ret=ok) or 400 (otherwise)."
  [ring-response ret]
  (if (= ret :ok)
    ring-response
    (ri-resp/status ring-response 400)))


(defn -signin
  "Provides API for sign-in page."
  [req]
  (log/trace "ENTER -signin")
  (log/trace (str "req: " req))
  (let [body (:body req)
        dummy (-reset-body body)
        first-name (:first-name body)
        last-name (:last-name body)
        password (:password body)
        email (:email body)
        validation-passed (-validate-parameters [email first-name last-name password])
        response-value (if validation-passed
                         (ss-users/add-new-user email first-name last-name password)
                         {:ret :failed, :msg "Validation failed - some fields were empty"})]
    (-set-http-status (ri-resp/response response-value) (:ret response-value))))


(defn -login
  "Provides API for login page."
  [req]
  (log/trace "ENTER -login")
  (log/trace (str "req: " req))
  (let [body (:body req)
        dummy (-reset-body body)
        email (:email body)
        password (:password body)
        validation-passed (-validate-parameters [email password])
        credentials-ok (if validation-passed
                         (ss-users/credentials-ok? email password)
                         nil)
        json-web-token (if credentials-ok
                         (ss-login/create-json-web-token email)
                         nil)
        response-value (if (not validation-passed)
                         {:ret :failed, :msg "Validation failed - some fields were empty"}
                         (if (not credentials-ok)
                           {:ret :failed, :msg "Credentials are not good - either email or password is not correct"}
                           (if (not json-web-token)
                             {:ret :failed, :msg "Internal error when creating the json web token"}
                             {:ret :ok, :msg "Credentials ok" :json-web-token json-web-token})))
        ]
    (-set-http-status (ri-resp/response response-value) (:ret response-value))))


(defn -product-groups
  "Get product groups"
  []
  (log/trace "ENTER -product-groups")
  (let [response-value (ss-domain/get-product-groups)]
    (-set-http-status (ri-resp/response response-value) (:ret response-value))))


(co-core/defroutes app-routes
                   (co-core/GET "/info" [] (-get-info))
                   (co-core/GET "/product-groups" [] (-product-groups))
                   (co-core/POST "/signin" req (-signin req))
                   (co-core/POST "/login" req (-login req))
                   (co-route/resources "/")
                   (co-route/not-found "Not Found. Use /info to get information how to use the commands."))


(defn -cors-handler
  "Adds cors handling to response."
  [routes]
  ; TODO: Why cannot we see this log entry?
  (log/trace "ENTER -cors-handler")
  (wrap-cors routes :access-control-allow-origin [#".*"]
             :access-control-allow-headers ["Content-Type"]
             :access-control-allow-methods [:get :put :post :delete :options]))



;; NOTE: Start web-server in development mode like:
;; CS_CONFIG_FILE=resources/simpleserver.properties lein with-profile +log-dev ring server-headless
(def web-server
  (->
    app-routes
    ;; NOTE: Not working with wrap-cors, why?
    ;(ri-defaults/wrap-defaults ri-defaults/api-defaults)
    (ri-json/wrap-json-body {:keywords? true})
    (-cors-handler)
    (ri-json/wrap-json-response)))





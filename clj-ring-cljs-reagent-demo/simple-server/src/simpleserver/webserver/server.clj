(ns simpleserver.webserver.server
  (:require
    [clojure.string :as string]
    [clojure.data.json :as json]
    [clojure.tools.logging :as log]
    [clojure.data.codec.base64 :as base64]
    [compojure.core :as co-core]
    [compojure.route :as co-route]
    [ring.util.response :as ri-resp]
    [ring.middleware.json :as ri-json]
    [ring.middleware.cors :refer [wrap-cors]]
    [simpleserver.userdb.users-factory :as ss-users-factory]
    [simpleserver.userdb.users-service-interface :as ss-users-svc]
    [simpleserver.domaindb.domain-factory :as ss-domain-factory]
    [simpleserver.domaindb.domain-service-interface :as ss-domain-svc]
    [simpleserver.sessiondb.session-factory :as ss-session-factory]
    [simpleserver.sessiondb.session-service-interface :as ss-session-svc]
    ))

(def users-svc (ss-users-factory/create-users))
(def domain-svc (ss-domain-factory/create-domain))
(def session-svc (ss-session-factory/create-session))

;; NOTE: my-body atom is just for testing purposes using remote REPL:
;; lein repl :connect localhost:55444
;; Use ClojureScript Simple Frontend, curl or Postman to send a signin POST request,
;; and then in remote REPL you can check the body like:
;; user=> @simpleserver.webserver.server/my-body
;; => {:first-name "Jamppa", :last-name "Tuominen", :email "jamppa.tuominen@foo.com", :password "p"}
(def my-body
  "my-body atom is just for testing purposes using remote REPL.
  See the comment in source file."
  (atom nil))


(defn -reset-body
  "Resets the my-body atom which is just for debugging purposes."
  [body]
  (reset! my-body body))


(defn -read-configuration
  "Reads configuration for web server. Not used at the moment."
  []
  (log/debug "ENTER -read-configuration"))


(defn initialize-web-server
  "Initializes the web server. See :ring in file project.clj."
  []
  (log/debug "ENTER initialize-web-server")
  (log/debug "***** ***** SIMPLE SERVER STARTING... ***** ***** ")
  (-read-configuration))


(defn -get-info
  "Gets the info page."
  []
  (log/debug "ENTER -get-info")
  (let [response {:info "index.html => Info in HTML format"}]
    (json/write-str response)))


(defn -validate-parameters
  "Extremely simple validator - just request that all fields must have some value.
  `field-values` - a list of fields to validate."
  [field-values]
  (every? #(not (empty? %)) field-values))


;; As in headers check with curl that the http status is properly set.
(defn -set-http-status
  "Sets the http status either to 200 (ret=ok) or 400 (otherwise)."
  [ring-response ret]
  (if (= ret :ok)
    ring-response
    (ri-resp/status ring-response 400)))


;; Note: you can simulate signin API http POST in REPL as:
;; (simpleserver.webserver.server/-signin {:body {:first-name "Pena", :last-name "Neponen", :email "pena.neponen@foo.com", :password  "Pena"}})
;; => {:status 200, :headers {}, :body {:email "pena.neponen@foo.com", :ret :ok}}
(defn -signin
  "Provides API for sign-in page. `req` provides post body.
  See source code how to experiment with REPL."
  [req]
  (log/debug "ENTER -signin")
  (log/debug (str "req: " req))
  (let [body (:body req)
        dummy (-reset-body body)
        first-name (:first-name body)
        last-name (:last-name body)
        password (:password body)
        email (:email body)
        validation-passed (-validate-parameters [email first-name last-name password])
        response-value (if validation-passed
                         (ss-users-svc/add-new-user users-svc email first-name last-name password)
                         {:ret :failed, :msg "Validation failed - some fields were empty"})]
    (-set-http-status (ri-resp/response response-value) (:ret response-value))))


;; Note: you can simulate login API http POST in REPL as:
;;(simpleserver.webserver.server/-login  {:body {:email "pena.neponen@foo.com", :password "Pena"}})
(defn -login
  "Provides API for login page.
  See source code how to experiment with REPL."
  [req]
  (log/debug "ENTER -login")
  (log/debug (str "req: " req))
  (let [body (:body req)
        dummy (-reset-body body)
        email (:email body)
        password (:password body)
        validation-passed (-validate-parameters [email password])
        credentials-ok (if validation-passed
                         (ss-users-svc/credentials-ok? users-svc email password)
                         nil)
        json-web-token (if credentials-ok
                         (ss-session-svc/create-json-web-token session-svc email)
                         nil)
        response-value (if (not validation-passed)
                         {:ret :failed, :msg "Validation failed - some fields were empty"}
                         (if (not credentials-ok)
                           {:ret :failed, :msg "Credentials are not good - either email or password is not correct"}
                           (if (not json-web-token)
                             {:ret :failed, :msg "Internal error when creating the json web token"}
                             {:ret :ok, :msg "Credentials ok" :json-web-token json-web-token})))]

    (-set-http-status (ri-resp/response response-value) (:ret response-value))))


;; Use curl and simple server log to see how token is parsed.
;; Or use this trick: You got a JSON web token from -login. Supply JSON web token to:
;; (simpleserver.webserver.server/-create-testing-basic-authentication-from-json-webtoken "<token" )
;; I.e. (simpleserver.webserver.server/-valid-token? (simpleserver.webserver.server_test/-create-testing-basic-authentication-from-json-webtoken "<token>"))
(defn -valid-token?
  "Parses the token from the http authorization header and asks session ns to validate the token.
  See source code how to experiment with REPL."
  [req]
  (log/debug "ENTER -valid-token?")
  (let [basic ((:headers req) "authorization")
        dummy (log/debug (str "basic: " basic))
        basic-str (and basic
                       (last (re-find #"^Basic (.*)$" basic)))
        raw-token (and basic-str
                       (apply str (map char (base64/decode (.getBytes basic-str)))))
        dummy (log/debug (str "raw-token: " raw-token))
        ; Finally strip the password part if testing with curl
        token (and raw-token
                   (string/replace raw-token #":NOT" ""))]
    ;; Session namespace does the actual validation logic.
    (if (not token)
      nil
      (ss-session-svc/validate-token session-svc token))))


;; In REPL e.g.;
;; (simpleserver.webserver.server/-product-groups (simpleserver.webserver.server/-create-testing-basic-authentication-from-json-webtoken "<token>"))
(defn -product-groups
  "Gets product groups.
  See source code how to experiment with REPL."
  [req]
  (log/debug "ENTER -product-groups")
  (log/debug (str "req: " req))
  (let [token-ok? (-valid-token? req)
        response-value (if (not token-ok?)
                         {:ret :failed, :msg "Given token is not valid"}
                         {:ret :ok, :product-groups (ss-domain-svc/get-product-groups domain-svc)})]
    (-set-http-status (ri-resp/response response-value) (:ret response-value))))


;; In REPL:
;; (simpleserver.webserver.server/-products (conj (simpleserver.webserver.server/-create-testing-basic-authentication-from-json-webtoken "<token>") {:params {:pg-id "1"}}))
;; I.e. you inject the params to the req which is parsed in this function.
(defn -products
  "Gets products for a product group.
  See source code how to experiment with REPL."
  [req]
  (log/debug "ENTER -products")
  (log/debug (str "req: " req))
  (let [pg-id ((req :params) :pg-id)
        dummy (log/debug (str "pg-id: " pg-id))
        token-ok? (-valid-token? req)
        products (ss-domain-svc/get-products domain-svc pg-id)
        response-value (if (not token-ok?)
                         {:ret :failed, :msg "Given token is not valid"}
                         (if (not products)
                           {:ret :failed, :msg (str "Did not find product group: " pg-id)}
                           {:ret :ok, :pg-id pg-id, :products products}))]
    (-set-http-status (ri-resp/response response-value) (:ret response-value))))


(defn -product
  "Gets product."
  [req]
  (log/debug "ENTER -product")
  (log/debug (str "req: " req))
  (let [pg-id ((req :params) :pg-id)
        p-id ((req :params) :p-id)
        dummy (log/debug (str "pg-id: " pg-id))
        dummy (log/debug (str "p-id: " p-id))
        token-ok? (-valid-token? req)
        product (ss-domain-svc/get-product domain-svc pg-id p-id)
        response-value (if (not token-ok?)
                         {:ret :failed, :msg "Given token is not valid"}
                         (if (not product)
                           {:ret :failed, :msg (str "Did not find product for pg-id: " pg-id ", and p-id: " p-id)}
                           {:ret :ok, :pg-id pg-id, :p-id p-id :product product}))]
    (-set-http-status (ri-resp/response response-value) (:ret response-value))))


(co-core/defroutes app-routes
                   "Compojure routes."
                   (co-core/GET "/info" [] (-get-info))
                   (co-core/GET "/product-groups" req (-product-groups req))
                   (co-core/GET "/products/:pg-id" req (-products req))
                   (co-core/GET "/product/:pg-id/:p-id" req (-product req))
                   (co-core/POST "/signin" req (-signin req))
                   (co-core/POST "/login" req (-login req))
                   (co-route/resources "/")
                   (co-route/not-found "Not Found. Use /info to get information how to use the commands."))


(defn -cors-handler
  "Adds cors handling to response."
  [routes]
  ; TODO: Why cannot we see this log entry?
  (log/debug "ENTER -cors-handler")
  (wrap-cors routes :access-control-allow-origin [#".*"]
             :access-control-allow-headers ["Content-Type" "Authorization"]
             :access-control-allow-methods [:get :put :post :delete :options]))


;; NOTE: Start web-server in development mode like:
;; CS_CONFIG_FILE=resources/simpleserver.properties lein with-profile +log-dev ring server-headless
(def web-server
  "Web server startup function.
  See source code how to experiment with REPL."
  (->
    app-routes
    ;; NOTE: Not working with wrap-cors, why?
    ;(ri-defaults/wrap-defaults ri-defaults/api-defaults)
    (ri-json/wrap-json-body {:keywords? true})
    ;(ri-json/wrap-json-params)
    (-cors-handler)
    (ri-json/wrap-json-response)))





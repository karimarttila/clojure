(ns simpleserver.webserver.server
  (:require [clojure.tools.logging :as log]
            [clojure.string :as string]
            [clojure.data.codec.base64 :as base64]
            [ring.middleware.cors :refer [wrap-cors]]
            [ring.middleware.params :as ri-params]
            [ring.util.response :as ri-resp]
            [ring.adapter.jetty :refer [run-jetty]]
            [reitit.ring.middleware.muuntaja :as re-mu]
            [reitit.ring :as re-ring]
            [reitit.ring.coercion :as re-co]
            [reitit.coercion.spec :as re-co-spec]
            [muuntaja.core :as mu-core]
            [simpleserver.domain.domain-config :as ss-domain-config]
            [simpleserver.domain.domain-interface :as ss-domain-i]
            [simpleserver.user.user-config :as ss-user-config]
            [simpleserver.user.user-interface :as ss-user-i]
            [simpleserver.session.session-config :as ss-session-config]
            [simpleserver.session.session-interface :as ss-session-i]))

;; Use curl and simple server log to see how token is parsed.
;; Or use this trick: You got a JSON web token from -login. Supply JSON web token to:
;; (simpleserver.webserver.server/-create-testing-basic-authentication-from-json-webtoken "<token" )
;; I.e. (simpleserver.webserver.server/-valid-token? (simpleserver.webserver.server_test/-create-testing-basic-authentication-from-json-webtoken "<token>"))


(defn -valid-token?
  "Parses the token from the http authorization header and asks session ns to validate the token."
  [req]
  (log/debug "ENTER -valid-token?")
  (let [basic (get-in req [:headers "authorization"])
        ;_ (log/debug (str "basic: " basic))
        basic-str (and basic
                       (last (re-find #"^Basic (.*)$" basic)))
        raw-token (and basic-str
                       (apply str (map char (base64/decode (.getBytes basic-str)))))
        ;_ (log/debug (str "raw-token: " raw-token))
        ; Finally strip the password part if testing with curl
        token (and raw-token
                   (string/replace raw-token #":NOT" ""))]
    ;; Session namespace does the actual validation logic.
    ;; Note: clj-kondo complains if else branch is missing.
    (if token
      (ss-session-i/validate-token ss-session-config/session token)
      nil)))

;; As in headers check with curl that the http status is properly set.
(defn -set-http-status
  "Sets the http status either to 200 (ret=ok) or 400 (otherwise)."
  [ring-response ret]
  (if (= ret :ok)
    ring-response
    (ri-resp/status ring-response 400)))


;; NOTE: Not yet tested with reitit.


(defn -cors-handler
  "Adds cors handling to response."
  [routes]
  ; TODO: Why cannot we see this log entry?
  (log/debug "ENTER -cors-handler")
  (wrap-cors routes :access-control-allow-origin [#".*"]
             :access-control-allow-headers ["Content-Type" "Authorization"]
             :access-control-allow-methods [:get :put :post :delete :options]))

(defn -info
  "Gets the info."
  []
  (log/debug "ENTER -info")
  {:status 200 :body {:info "index.html => Info in HTML format"}})

(defn -validate-parameters
  "Extremely simple validator - just checks that all fields must have some value.
  `field-values` - a list of fields to validate."
  [field-values]
  (every? #(seq %) field-values))

(defn -signin
  "Provides API for sign-in page."
  [first-name last-name password email]
  (log/debug "ENTER -signin")
  (let [validation-passed (-validate-parameters [email first-name last-name password])
        response-value (if validation-passed
                         (ss-user-i/add-new-user ss-user-config/user email first-name last-name password)
                         {:ret :failed, :msg "Validation failed - some fields were empty"})]
    (-set-http-status (ri-resp/response response-value) (:ret response-value))))

;        (comment        credentials-ok (if (validation-passed  1)))

(defn -login
  "Provides API for login page."
  [email password]
  (log/debug "ENTER -login")
  (let [validation-passed (-validate-parameters [email password])
        credentials-ok (if validation-passed
                         (ss-user-i/credentials-ok? ss-user-config/user email password)
                         nil)
        json-web-token (if credentials-ok
                         (ss-session-i/create-json-web-token ss-session-config/session email)
                         nil)
        response-value (if (not validation-passed)
                         {:ret :failed, :msg "Validation failed - some fields were empty"}
                         (if (not credentials-ok)
                           {:ret :failed, :msg "Credentials are not good - either email or password is not correct"}
                           (if (not json-web-token)
                             {:ret :failed, :msg "Internal error when creating the json web token"}
                             {:ret :ok, :msg "Credentials ok" :json-web-token json-web-token})))]
    (-set-http-status (ri-resp/response response-value) (:ret response-value))))

(defn -product-groups
  "Gets product groups."
  [req]
  (log/debug "ENTER -product-groups")
  (let [token-ok (-valid-token? req)
        response-value (if token-ok
                         {:ret :ok, :product-groups (ss-domain-i/get-product-groups ss-domain-config/domain)}
                         {:ret :failed, :msg "Given token is not valid"})]
    (-set-http-status (ri-resp/response response-value) (:ret response-value))))

(defn -products
  "Gets products."
  [req]
  (log/debug "ENTER -products")
  (let [pg-id (get-in req [:path-params :pg-id])
        token-ok (-valid-token? req)
        response-value (if token-ok
                         {:ret :ok, :pg-id pg-id :products (ss-domain-i/get-products ss-domain-config/domain pg-id)}
                         {:ret :failed, :msg "Given token is not valid"})]
    (-set-http-status (ri-resp/response response-value) (:ret response-value))))

(defn -product
  "Gets product."
  [req]
  (log/debug "ENTER -product")
  (let [pg-id (get-in req [:path-params :pg-id])
        p-id (get-in req [:path-params :p-id])
        token-ok (-valid-token? req)
        response-value (if token-ok
                         {:ret     :ok,
                          :pg-id   pg-id
                          :p-id    p-id
                          :product (ss-domain-i/get-product ss-domain-config/domain pg-id p-id)}
                         {:ret :failed, :msg "Given token is not valid"})]
    (-set-http-status (ri-resp/response response-value) (:ret response-value))))

(def routes
  [["/info" {:get (fn [{}] (-info))}]
   ["/print-req-get/:jee" {:get (fn [req] (prn (str "req: ") req))}] ; An example how to print the ring request
   ["/print-req-post" {:post (fn [req] (prn (str "req: ") req))}] ; An example how to print the ring request
   ["/signin" {:post (fn [{{:keys [first-name last-name password email]} :body-params}] (-signin first-name last-name password email))}]
   ["/login" {:post (fn [{{:keys [email password]} :body-params}] (-login email password))}]
   ["/product-groups" {:get {:handler (fn [req] (-product-groups req))}}]
   ["/products/:pg-id" {:get {:handler (fn [req] (-products req))}}]
   ["/product/:pg-id/:p-id" {:get {:handler (fn [req] (-product req))}}]])

;; NOTE: If you want to check what middlware does you can uncomment rows 67-69 in:
;; https://github.com/metosin/reitit/blob/master/examples/ring-swagger/src/example/server.clj#L67-L69

(def web-server
  "Web server startup function.
  See source code how to experiment with REPL."
  (re-ring/ring-handler
    (re-ring/router [routes]
                    {:data {:muuntaja   mu-core/instance
                            :coercion   re-co-spec/coercion
                            :middleware [ri-params/wrap-params
                                         re-mu/format-middleware
                                         re-co/coerce-exceptions-middleware
                                         re-co/coerce-request-middleware
                                         re-co/coerce-response-middleware]}})
    (re-ring/routes
      (re-ring/create-resource-handler {:path "/"})
      (re-ring/create-default-handler))))

(defonce server (atom {:status :stopped, :server nil, :port nil}))

(defn start-web-server
  "Starts the web server."
  [port]
  (log/debug "ENTER start-web-server")
  (let [state (:status @server)]
    (if (= state :stopped)
      (let [new-server (run-jetty web-server {:port port :join? false})]
        (reset! server {:status :running, :server new-server, :port port})
        (log/info (str "Started server: " new-server)))
      (log/warn (str "Server was already running: " (@server :server))))))

(defn stop-web-server
  "Stops the web server."
  []
  (log/debug "ENTER stop-web-server")
  (let [state (:status @server)]
    (if (= state :running)
      (let [old-server (@server :server)]
        (.stop old-server)
        (reset! server {:status :stopped, :server nil, :port nil})
        (log/info (str "Stopped server: " old-server)))
      (log/warn "Server was already stopped"))))

(defn reset-web-server
  "Stops and starts the web server."
  [port]
  (stop-web-server)
  (start-web-server port))



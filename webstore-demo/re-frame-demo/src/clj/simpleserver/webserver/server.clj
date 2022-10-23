(ns simpleserver.webserver.server
  (:require [clojure.tools.logging :as log]
            [clojure.string :as string]
            [clojure.data.codec.base64 :as base64]
            [ring.util.http-response :as ring-response]
            [reitit.ring :as reitit-ring]
            [reitit.coercion.malli]
            [reitit.swagger :as reitit-swagger]
            [reitit.swagger-ui :as reitit-swagger-ui]
            [reitit.ring.malli]
            [reitit.ring.coercion :as reitit-coercion]
            [reitit.ring.middleware.muuntaja :as reitit-muuntaja]
            [reitit.ring.middleware.exception :as reitit-exception]
            [reitit.ring.middleware.parameters :as reitit-parameters]
            [reitit.ring.middleware.dev]
            [muuntaja.core :as mu-core]
            [simpleserver.service.domain.domain-service :as ss-domain-s]
            [simpleserver.service.user.user-service :as ss-user-s]
            [simpleserver.service.session.session-service :as ss-session-s]))

;; Use curl and simple server log to see how token is parsed.
;; Or use this trick: You got a JSON web token from -login. Supply JSON web token to:
;; (simpleserver.webserver.server/-create-testing-basic-authentication-from-json-webtoken "<token" )
;; I.e. (simpleserver.webserver.server/-valid-token? (simpleserver.webserver.server_test/-create-testing-basic-authentication-from-json-webtoken "<token>"))

(defn -valid-token?
  "Parses the token from the http authorization header and asks session ns to validate the token."
  [env auth]
  (log/debug "ENTER -valid-token?")
  (let [basic auth
        basic-str (and basic (last (re-find #"^Basic (.*)$" basic)))
        raw-token (and basic-str
                       (apply str (map char (base64/decode (.getBytes basic-str)))))
        ; Finally strip the password part if testing with curl
        token (and raw-token
                   (string/replace raw-token #":NOT" ""))]
    ;; Session namespace does the actual validation logic.
    ;; Note: clj-kondo complains if else branch is missing.
    (if token
      (ss-session-s/validate-token env token)
      nil)))

(defn -info
  "Gets the info."
  [_]
  (log/debug "ENTER -info")
  {:status 200 :body {:info "/info.html => Info in HTML format"}})

(defn -validate-parameters
  "Extremely simple validator - just checks that all fields must have some value.
  `field-values` - a list of fields to validate."
  [field-values]
  (every? #(seq %) field-values))

(defn make-response [response-value]
  (if (= (:ret response-value) :ok)
    (ring-response/ok response-value)
    (ring-response/bad-request response-value)))

(defn -signin
  "Provides API for sign-in page."
  [env first-name last-name password email]
  (log/debug "ENTER -signin")
  (let [validation-passed (-validate-parameters [email first-name last-name password])
        response-value (if validation-passed
                         (ss-user-s/add-new-user env email first-name last-name password)
                         {:ret :failed, :msg "Validation failed - some fields were empty"})]
    (make-response response-value)))

(defn -login
  "Provides API for login page."
  [env email password]
  (log/debug "ENTER -login")
  (let [validation-passed (-validate-parameters [email password])
        credentials-ok (if validation-passed
                         (ss-user-s/credentials-ok? env email password)
                         nil)
        json-web-token (if credentials-ok
                         (ss-session-s/create-json-web-token env email)
                         nil)
        response-value (if (not validation-passed)
                         {:ret :failed, :msg "Validation failed - some fields were empty"}
                         (if (not credentials-ok)
                           {:ret :failed, :msg "Credentials are not good - either email or password is not correct"}
                           (if (not json-web-token)
                             {:ret :failed, :msg "Internal error when creating the json web token"}
                             {:ret :ok, :msg "Credentials ok" :json-web-token json-web-token})))]
    (make-response response-value)))

(defn -product-groups
  "Gets product groups."
  [env auth]
  (log/debug "ENTER -product-groups")
  (let [token-ok (-valid-token? env auth)
        response-value (if token-ok
                         {:ret :ok, :product-groups (ss-domain-s/get-product-groups env)}
                         {:ret :failed, :msg "Given token is not valid"})]
    (make-response response-value)))

(defn -products
  "Gets products."
  [env auth pg-id]
  (log/debug "ENTER -products")
  (let [token-ok (-valid-token? env auth)
        response-value (if token-ok
                         {:ret :ok, :pg-id pg-id :products (ss-domain-s/get-products env pg-id)}
                         {:ret :failed, :msg "Given token is not valid"})]
    (make-response response-value)))

(defn -product
  "Gets product."
  [env auth pg-id p-id]
  (log/debug "ENTER -product")
  (let [token-ok (-valid-token? env auth)
        response-value (if token-ok
                         {:ret :ok,
                          :pg-id pg-id
                          :p-id p-id
                          :product (ss-domain-s/get-product env pg-id p-id)}
                         {:ret :failed, :msg "Given token is not valid"})]
    (make-response response-value)))

;; UI is in http://localhost:6161/index.html
(defn routes
  "Routes."
  [env]
  ;; http://localhost:6161/swagger.json
  [["/swagger.json"
    {:get {:no-doc true
           :swagger {:info {:title "simpleserver api"
                            :description "SimpleServer Api"}
                     :tags [{:name "api", :description "api"}]}
           :handler (reitit-swagger/create-swagger-handler)}}]
   ;; http://localhost:6161/api-docs/index.html
   ["/api-docs/*"
    {:get {:no-doc true
           :handler (reitit-swagger-ui/create-swagger-ui-handler
                     {:config {:validatorUrl nil}
                      :url "/swagger.json"})}}]
   ["/api"
    {:swagger {:tags ["api"]}}
    ; For development purposes. Try curl http://localhost:6161/api/ping
    ["/ping" {:get {:summary "ping get"
                    ; Don't allow any query parameters.
                    :parameters {:query [:map]}
                    :responses {200 {:description "Ping success"}}
                    :handler (constantly (make-response {:ret :ok, :reply "pong"}))}
              :post {:summary "ping post"
                     :responses {200 {:description "Ping success"}}
                     ;; reitit adds mt/strip-extra-keys-transformer - probably changes in reitit 1.0,
                     ;; and therefore {:closed true} is not used with reitit < 1.0.
                     :parameters {:body [:map {:closed true} [:ping string?]]}
                     :handler (fn [req]
                                (let [body (get-in req [:parameters :body])
                                      myreq (:ping body)]
                                  (-> {:ret :ok :request myreq :reply "pong"}
                                      (make-response))))}}]
    ["/info" {:get {:summary "Get info regarding the api"
                    :parameters {:query [:map]}
                    :responses {200 {:description "Info success"}}
                    :handler (fn [{}] (-info env))}}]
    ["/signin" {:post {:summary "Sign-in to get an account"
                       :responses {200 {:description "Sign-in success"}}
                       :parameters {:body [:map
                                           [:first-name string?]
                                           [:last-name string?]
                                           [:email string?]
                                           [:password string?]]}
                       :handler (fn [req]
                                  (let [body (get-in req [:parameters :body])
                                        {:keys [first-name last-name password email]} body]
                                    (-signin env first-name last-name password email)))}}]
    ["/login" {:post {:summary "Login to the web-store"
                      :responses {200 {:description "Login success"}}
                      :parameters {:body [:map
                                          [:email string?]
                                          [:password string?]]}
                      :handler (fn [req]
                                 (let [body (get-in req [:parameters :body])
                                       {:keys [password email]} body]
                                   (-login env email password)))}}]
    ["/product-groups" {:get {:summary "Get products groups"
                              :responses {200 {:description "Product groups success"}}
                              :parameters {:query [:map]}
                              :handler (fn [req]
                                         (let [auth (get-in req [:headers "authorization"])]
                                           (-product-groups env auth)))}}]
    ["/products/:pg-id" {:get {:summary "Get products"
                               :responses {200 {:description "Products success"}}
                               :parameters {:query [:map]
                                            :path [:map [:pg-id string?]]}
                               :handler (fn [req]
                                          (let [auth (get-in req [:headers "authorization"])
                                                pg-id (get-in req [:parameters :path :pg-id])]
                                            (-products env auth pg-id)))}}]
    ["/product/:pg-id/:p-id" {:get {:summary "Get product"
                                    :responses {200 {:description "Product success"}}
                                    :parameters {:query [:map]
                                                 :path [:map [:pg-id string?] [:p-id string?]]}
                                    :handler (fn [req]
                                               (let [auth (get-in req [:headers "authorization"])
                                                     pg-id (get-in req [:parameters :path :pg-id])
                                                     p-id (get-in req [:parameters :path :p-id])]
                                                 (-product env auth pg-id p-id)))}}]]])

;; NOTE: If you want to check what middleware does you can uncomment rows 67-69 in:
;; https://github.com/metosin/reitit/blob/master/examples/ring-swagger/src/example/server.clj#L67-L69

(defn handler
  "Handler."
  [routes]
  (->
   (reitit-ring/ring-handler
    (reitit-ring/router routes {; Use this to debug middleware handling:
                                  ;:reitit.middleware/transform reitit.ring.middleware.dev/print-request-diffs
                                :data {:muuntaja mu-core/instance
                                       :coercion (reitit.coercion.malli/create
                                                  {;; set of keys to include in error messages
                                                   :error-keys #{:type :coercion :in #_:schema #_:value #_:errors :humanized #_:transformed}
                                                      ;; validate request & response
                                                   :validate true
                                                      ;; top-level short-circuit to disable request & response coercion
                                                   :enabled true
                                                      ;; strip-extra-keys (effects only predefined transformers)
                                                   :strip-extra-keys true
                                                      ;; add/set default values
                                                   :default-values true
                                                      ;; malli options
                                                   :options nil}) ;; malli
                                       :middleware [;; swagger feature
                                                    reitit-swagger/swagger-feature
                                                      ;; query-params & form-params
                                                    reitit-parameters/parameters-middleware
                                                      ;; content-negotiation
                                                    reitit-muuntaja/format-negotiate-middleware
                                                      ;; encoding response body
                                                    reitit-muuntaja/format-response-middleware
                                                      ;; exception handling
                                                    (reitit-exception/create-exception-middleware
                                                     (merge
                                                      reitit-exception/default-handlers
                                                      {::reitit-exception/wrap (fn [handler ^Exception e request]
                                                                                 (log/error e (.getMessage e))
                                                                                 (handler e request))}))
                                                      ;; decoding request body
                                                    reitit-muuntaja/format-request-middleware
                                                      ;; coercing response bodys
                                                    reitit-coercion/coerce-response-middleware
                                                      ;; coercing request parameters
                                                    reitit-coercion/coerce-request-middleware]}})
    (reitit-ring/routes
     (reitit-ring/redirect-trailing-slash-handler)
     (reitit-ring/create-file-handler {:path "/", :root "target/shadow/dev/resources/public"})
     (reitit-ring/create-resource-handler {:path "/"})
     (reitit-ring/create-default-handler)))))

; Rich comment.
(comment

  (require '[clj-http.client])

  (clj-http.client/get
   (str "http://localhost:6161/api/info") {:debug true :accept "application/json"})

  (clj-http.client/get
   (str "http://localhost:6161/index.html") {:debug true})

  (clj-http.client/get
   (str "http://localhost:6161") {:debug true})

  (clj-http.client/get
   (str "http://localhost:6161/index.html") {:debug true})

  (user/system)
  (ss-domain-s/get-product-groups (user/env))
  (simpleserver.test-config/go)
  (ss-domain-s/get-product-groups (simpleserver.test-config/test-env))
  (ss-domain-s/get-product-groups (user/env))
  (handler {:routes (routes (user/env))})

  (clj-http.client/get
   (str "https://reqres.in/api/users/2") {:debug true :accept "application/json"})

  (clj-http.client/get
   (str "http://localhost:6161/info") {:debug true :accept "application/edn"}))

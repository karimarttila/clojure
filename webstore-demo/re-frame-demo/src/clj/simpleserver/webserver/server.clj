(ns simpleserver.webserver.server
  (:require [clojure.tools.logging :as log]
            [clojure.string :as string]
            [clojure.data.codec.base64 :as base64]
            [ring.util.response :as ri-resp]
            [reitit.ring :as re-ring]
            [reitit.coercion.malli]
            [reitit.swagger :as re-swagger]
            [reitit.ring.malli]
            [reitit.ring.coercion :as re-coercion]
            [reitit.ring.middleware.muuntaja :as re-muuntaja]
            [reitit.ring.middleware.exception :as re-exception]
            [reitit.ring.middleware.parameters :as re-parameters]
            [reitit.ring.middleware.dev]
            [reitit.swagger :as swagger]
            [reitit.swagger-ui :as swagger-ui]
            [malli.util :as m-util]
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
  [env req]
  (log/debug "ENTER -valid-token?")
  (let [basic (get-in req [:headers "authorization"])
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

;; As in headers check with curl that the http status is properly set.
(defn -set-http-status
  "Sets the http status either to 200 (ret=ok) or 400 (otherwise)."
  [ring-response ret]
  (if (= ret :ok)
    ring-response
    (ri-resp/status ring-response 400)))

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

(defn -signin
  "Provides API for sign-in page."
  [env first-name last-name password email]
  (log/debug "ENTER -signin")
  (let [validation-passed (-validate-parameters [email first-name last-name password])
        response-value (if validation-passed
                         (ss-user-s/add-new-user env email first-name last-name password)
                         {:ret :failed, :msg "Validation failed - some fields were empty"})]
    (-set-http-status (ri-resp/response response-value) (:ret response-value))))

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
    (-set-http-status (ri-resp/response response-value) (:ret response-value))))

(defn -product-groups
  "Gets product groups."
  [env req]
  (log/debug "ENTER -product-groups")
  (let [token-ok (-valid-token? env req)
        response-value (if token-ok
                         {:ret :ok, :product-groups (ss-domain-s/get-product-groups env)}
                         {:ret :failed, :msg "Given token is not valid"})]
    (-set-http-status (ri-resp/response response-value) (:ret response-value))))

(defn -products
  "Gets products."
  [env req]
  (log/debug "ENTER -products")
  (let [pg-id (get-in req [:path-params :pg-id])
        token-ok (-valid-token? env req)
        response-value (if token-ok
                         {:ret :ok, :pg-id pg-id :products (ss-domain-s/get-products env pg-id)}
                         {:ret :failed, :msg "Given token is not valid"})]
    (-set-http-status (ri-resp/response response-value) (:ret response-value))))

(defn -product
  "Gets product."
  [env req]
  (log/debug "ENTER -product")
  (let [pg-id (get-in req [:path-params :pg-id])
        p-id (get-in req [:path-params :p-id])
        token-ok (-valid-token? env req)
        response-value (if token-ok
                         {:ret :ok,
                          :pg-id pg-id
                          :p-id p-id
                          :product (ss-domain-s/get-product env pg-id p-id)}
                         {:ret :failed, :msg "Given token is not valid"})]
    (-set-http-status (ri-resp/response response-value) (:ret response-value))))

;; TODO: Add swagger to reitit routes!

(defn routes
  "Routes."
  [env]
  ;; http://localhost:6161/swagger.json
  [["/swagger.json"
    {:get {:no-doc true
           :swagger {:info {:title "simpleserver api"
                            :description "SimpleServer Api"}
                     :tags [{:name "api", :description "api"}]}
           :handler (swagger/create-swagger-handler)}}]
   ;; http://localhost:6161/api-docs/index.html
   ["/api-docs/*"
    {:get {:no-doc true
           :handler (swagger-ui/create-swagger-ui-handler
                      {:config {:validatorUrl nil}
                       :url "/swagger.json"})}}]
   ["/api"
    {:swagger {:tags ["api"]}}
    ; For development purposes. Try curl http://localhost:6161/api/ping
    ["/ping" {:get {:summary "ping get"
                    ; Don't allow any query parameters.
                    :parameters {:query [:map]}
                    :responses {200 {:description "Ping success"}}
                    :handler (fn [_]
                               (-> {:ret :ok :reply "pong"}
                                   (ri-resp/response)
                                   (-set-http-status :ok)))}
              :post {:summary "ping post"
                     :responses {200 {:description "Ping success"}}
                     ;; reitit adds mt/strip-extra-keys-transformer - probably changes in reitit 1.0,
                     ;; and therefore {:closed true} is not used with reitit < 1.0.
                     :parameters {:body [:map {:closed true} [:ping string?]]}
                     :handler (fn [req]
                                (let [body (get-in req [:parameters :body])
                                      myreq (:ping body)]
                                  (-> {:ret :ok :request myreq :reply "pong"}
                                      (ri-resp/response)
                                      (-set-http-status :ok))))}}]
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
                       :handler (fn [{{:keys [first-name last-name password email]}
                                      :body-params}] (-signin env first-name last-name password email))}}]
    ["/login" {:post {:summary "Login to the web-store"
                      :responses {200 {:description "Login success"}}
                      :parameters {:body [:map
                                          [:email string?]
                                          [:password string?]]}
                      :handler (fn [{{:keys [email password]}
                                     :body-params}] (-login env email password))}}]
    ["/product-groups" {:get {:summary "Get products groups"
                              :responses {200 {:description "Product groups success"}}
                              :parameters {:query [:map]}
                              :handler (fn [req] (-product-groups env req))}}]
    ["/products/:pg-id" {:get {:summary "Get products"
                               :responses {200 {:description "Products success"}}
                               :parameters {:query [:map]}
                               :handler (fn [req] (-products env req))}}]
    ["/product/:pg-id/:p-id" {:get {:summary "Get product"
                                    :responses {200 {:description "Product success"}}
                                    :parameters {:query [:map]}
                                    :handler (fn [req] (-product env req))}}]]])

;; NOTE: If you want to check what middleware does you can uncomment rows 67-69 in:
;; https://github.com/metosin/reitit/blob/master/examples/ring-swagger/src/example/server.clj#L67-L69

(defn handler
  "Handler."
  [routes]
  (->
    (re-ring/ring-handler
      #_(-> routes
            (wrap-cors :access-control-allow-origin [#"http://localhost"]
                       :access-control-allow-methods [:get :put :post :delete]))
      (re-ring/router routes {
                              ; Use this to debug middleware handling:
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
                                                  re-swagger/swagger-feature
                                                  ;; query-params & form-params
                                                  re-parameters/parameters-middleware
                                                  ;; content-negotiation
                                                  re-muuntaja/format-negotiate-middleware
                                                  ;; encoding response body
                                                  re-muuntaja/format-response-middleware
                                                  ;; exception handling
                                                  (re-exception/create-exception-middleware
                                                    (merge
                                                      re-exception/default-handlers
                                                      {::re-exception/wrap (fn [handler ^Exception e request]
                                                                             (log/error e (.getMessage e))
                                                                             (handler e request))}))
                                                  ;; decoding request body
                                                  re-muuntaja/format-request-middleware
                                                  ;; coercing response bodys
                                                  re-coercion/coerce-response-middleware
                                                  ;; coercing request parameters
                                                  re-coercion/coerce-request-middleware]}})
      (re-ring/routes
        (re-ring/redirect-trailing-slash-handler)
        (re-ring/create-file-handler {:path "/", :root "target/shadow/dev/resources/public"})
        (re-ring/create-resource-handler {:path "/"})
        (re-ring/create-default-handler)))
    ; Testing with my previous Simple Frontend which is running in localhost:8000.
    #_(wrap-cors :access-control-allow-origin #"http://localhost:8000"
                 :access-control-allow-methods [:get :put :post :delete])
    ))

; Rich comment.
(comment

  (clj-http.client/get
    (str "http://localhost:6161/info") {:debug true :accept "application/json"})

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
    (str "http://localhost:6161/info") {:debug true :accept "application/edn"})

  )

(ns simpleserver.webserver.server-test
  (:require [clojure.test :refer [deftest use-fixtures is testing]]
            [clojure.tools.logging :as log]
            [clojure.data.codec.base64 :as base64]
            [clj-http.client :as http-client]
            [simpleserver.util.config :as ss-config]
            [simpleserver.webserver.server :as ss-ws]
            [simpleserver.user.user-interface :as ss-user-i]
            [simpleserver.user.user-config :as ss-user-config]
            [simpleserver.session.session-interface :as ss-session-i]
            [simpleserver.session.session-config :as ss-session-config]))

(defn webserver-test-fixture
  [f]
  (log/debug "ENTER webserver-test-fixture")
  (ss-user-i/-reset-users! ss-user-config/user)
  (ss-session-i/-reset-sessions! ss-session-config/session)
  (ss-ws/start-web-server (get-in ss-config/config [:server :port]))
  (f)
  (ss-ws/stop-web-server)
  (log/debug "EXIT webserver-test-fixture"))

; Register test fixtures.
(use-fixtures :each webserver-test-fixture)

(defn -call-api [verb path headers body]
  (let [my-port (get-in ss-config/config [:server :port])
        my-fn (cond
                (= verb :get) http-client/get
                (= verb :post) http-client/post)]
    (try
      (select-keys
        (my-fn (str "http://localhost:" my-port "/" path)
               {:as               :json
                :form-params      body
                :headers          headers
                :content-type     :json
                :throw-exceptions false
                :coerce           :always}
               ) [:status :body]))))

(deftest info-test
  (log/debug "ENTER info-test")
  (testing "GET: /info"
    (let [ret (-call-api :get "info" nil nil)]
      (is (= (ret :status) 200))
      (is (= (ret :body) {:info "index.html => Info in HTML format"})))))

(deftest signin-test
  (log/debug "ENTER signin-test")
  (testing "POST: /signin"
    ; First time should create the user since the email does not yet exist.
    (let [test-body {:first-name "mikko" :last-name "mikkonen" :password "salainen" :email "mikko.mikkonen@foo.com"}]
      (let [ret (-call-api :post "signin" nil test-body)]
        (is (= (ret :status) 200))
        (is (= (ret :body) {:email "mikko.mikkonen@foo.com" :ret "ok"})))
      ; Second time should fail since the email already exists.
      (let [ret (-call-api :post "signin" nil test-body)]
        (is (= (ret :status) 400))
        (is (= (ret :body) {:email "mikko.mikkonen@foo.com" :ret "failed" :msg "Email already exists"}))))))

(deftest login-test
  (log/debug "ENTER login-test")
  (testing "POST: /login"
    ; First with good credentials.
    (let [good-test-body {:email "kari.karttinen@foo.com" :password "Kari"}
          bad-test-body {:email "kari.karttinen@foo.com" :password "WRONG-PASSWORD"}]
      (let [ret (-call-api :post "login" nil good-test-body)]
        (is (= (ret :status) 200))
        (is (= (get-in ret [:body :ret]) "ok"))
        (is (= (get-in ret [:body :msg]) "Credentials ok"))
        (is (> (count (get-in ret [:body :json-web-token])) 30)))
      ; Next with bad credentials.
      (let [ret (-call-api :post "login" nil bad-test-body)]
        (is (= (ret :status) 400))
        (is (= (get-in ret [:body :ret]) "failed"))
        (is (= (get-in ret [:body :msg]) "Credentials are not good - either email or password is not correct"))))))


(defn -create-basic-authentication
  "A helper method to create basic authentication for ceNrtain get methods which
  require the json-web-token in header."
  [json-webtoken]
  (log/debug "ENTER -create-basic-authentication")
  (let [added-token (str json-webtoken ":NOT")
        encoded-token (apply str (map char (base64/encode (.getBytes added-token))))
        basic-str (str "Basic " encoded-token)]
    {"authorization" basic-str}))


(deftest product-groups-test
  (log/debug "ENTER product-groups-test")
  (testing "GET: /product-groups"
    (let [login-ret (-call-api :post "login" nil {:email "kari.karttinen@foo.com" :password "Kari"})
          _ (log/debug (str "Got login-ret: " login-ret))
          json-web-token (get-in login-ret [:body :json-web-token])
          params (-create-basic-authentication json-web-token)
          get-ret (-call-api :get "/product-groups" params nil)
          status (:status get-ret)
          body (:body get-ret)
          right-body {:ret "ok", :product-groups {:1 "Books", :2 "Movies"}}]
      (is (= (not (nil? json-web-token)) true))
      (is (= status 200))
      (is (= body right-body)))))

(deftest products-test
  (log/debug "ENTER products-test")
  (testing "GET: /products"
    (let [login-ret (-call-api :post "login" nil {:email "kari.karttinen@foo.com" :password "Kari"})
          _ (log/debug (str "Got login-ret: " login-ret))
          json-web-token (get-in login-ret [:body :json-web-token])
          params (-create-basic-authentication json-web-token)
          get-ret (-call-api :get "/products/1" params nil)
          status (:status get-ret)
          body (:body get-ret)
          pg-id (:pg-id body)
          ret (:ret body)
          products (:products body)]
      (is (= (not (nil? json-web-token)) true))
      (is (= status 200))
      (is (= ret "ok"))
      (is (= pg-id "1"))
      (is (= (count products) 35)))))

(deftest product-test
  (log/debug "ENTER product-test")
  (testing "GET: /product"
    (let [login-ret (-call-api :post "login" nil {:email "kari.karttinen@foo.com" :password "Kari"})
          _ (log/debug (str "Got login-ret: " login-ret))
          json-web-token (get-in login-ret [:body :json-web-token])
          params (-create-basic-authentication json-web-token)
          get-ret (-call-api :get "/product/2/49" params nil)
          status (:status get-ret)
          body (:body get-ret)
          pg-id (:pg-id body)
          p-id (:p-id body)
          ret (:ret body)
          product (:product body)
          right-product ["49" "2" "Once Upon a Time in the West" "14.4" "Leone, Sergio" "1968" "Italy-USA" "Western"]]
      (is (= (not (nil? json-web-token)) true))
      (is (= status 200))
      (is (= ret "ok"))
      (is (= pg-id "2"))
      (is (= p-id "49"))
      (is (= product right-product)))))

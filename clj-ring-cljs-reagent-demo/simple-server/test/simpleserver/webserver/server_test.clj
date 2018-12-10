(ns simpleserver.webserver.server-test
  (:require [clojure.test :refer :all]
            [clojure.tools.logging :as log]
            [environ.core :as environ]
            [simpleserver.userdb.users-single-node :as user-db]
            [simpleserver.sessiondb.session-single-node :as sess]
            [simpleserver.webserver.server :as ws]
            [simpleserver.testutils.users-util :as ss-users-test-util]
            [clojure.data.codec.base64 :as base64]
            [simpleserver.userdb.users-factory :as ss-users-factory]
            [simpleserver.userdb.users-service-interface :as ss-users-svc]
            [simpleserver.sessiondb.session-factory :as ss-session-factory]
            [simpleserver.sessiondb.session-service-interface :as ss-session-interface]
            [simpleserver.testutils.session-util :as ss-session-test-util]
            ))

;; A simple end-to-end testing of main API calls.

(def users-svc (ss-users-factory/create-users))
(def session-svc (ss-session-factory/create-session))


(defn -reset-sessions
  []
  (log/debug "ENTERED -reset-sessions")
  (ss-session-test-util/initialize-sessions))


(defn server-test-fixture
  [f]
  (do
    (log/debug "ENTERED server-test-fixture")
    (ss-users-test-util/initialize-userdb)
    (-reset-sessions)
    (f)))


(use-fixtures :each server-test-fixture)


(defn -create-basic-authentication
  "A helper method to create basic authentication for ceNrtain get methods which
  require the json-web-token in header."
  [json-webtoken]
  (log/debug "ENTER -create-basic-authentication")
  (let [added-token (str json-webtoken ":NOT")
        encoded-token (apply str (map char (base64/encode (.getBytes added-token))))
        basic-str (str "Basic " encoded-token)]
    {"authorization" basic-str}))


(defn -call-request [routes uri method params body]
  (let [localhost "127.0.0.1"]
    (routes {:server-port    8080
             :server-name    localhost
             :uri            uri
             :body           (or body {})
             :scheme         :http
             :headers        (or params {})
             :request-method method})))


(deftest get-info-test
  (log/debug "ENTER get-info-test")
  (testing "GET: /info"
    (let [ret (-call-request ws/app-routes "/info" :get nil nil)
          dummy (log/debug (str "Got result: " ret))
          status (:status ret)
          body (:body ret)
          right-body "{\"info\":\"index.html => Info in HTML format\"}"]
      (is (= status 200))
      (is (= body right-body)))))


(deftest post-signin-test
  (log/debug "ENTER post-signin-test")
  (testing "Successful POST: /signin"
    (let [initial-users @user-db/users
          dummy (log/debug (str "Initial users: " initial-users))
          req-body {:first-name "Pena", :last-name "Neponen", :email "pena.neponen@foo.com", :password "Pena"}
          ret (-call-request ws/app-routes "/signin" :post nil req-body)
          dummy (log/debug (str "Got result: " ret))
          status (:status ret)
          body (:body ret)
          right-body {:email "pena.neponen@foo.com" :ret :ok}
          new-users (ss-users-svc/get-users users-svc)
          dummy (log/debug (str "New users: " new-users))]
      (is (= status 200))
      (is (= body right-body))
      (is (= (count initial-users) 3))
      (is (= (count new-users) 4))))
  ; So, we have added Mr. Neponen to user db, let's try to add him again - should fail.
  (testing "Unsuccessful POST: /signin (email already used)"
    (let [initial-users (ss-users-svc/get-users users-svc)
          dummy (log/debug (str "Initial users: " initial-users))
          req-body {:first-name "Pena", :last-name "Neponen", :email "pena.neponen@foo.com", :password "Pena"}
          ret (-call-request ws/app-routes "/signin" :post nil req-body)
          dummy (log/debug (str "Got result: " ret))
          status (:status ret)
          body (:body ret)
          right-body {:email "pena.neponen@foo.com", :ret :failed, :msg "Email already exists"}
          new-users (ss-users-svc/get-users users-svc)
          dummy (log/debug (str "New users: " new-users))]
      (is (= status 400))
      (is (= body right-body))
      (is (= (count initial-users) 4))
      (is (= (count new-users) 4)))))


(deftest post-login-test
  (log/debug "ENTER post-login-test")
  (testing "Successful POST: /login"
    (let [initial-sessions @sess/my-sessions
          dummy (log/debug (str "Initial sessions " initial-sessions))
          req-body {:email "kari.karttinen@foo.com", :password "Kari"}
          ret (-call-request ws/app-routes "/login" :post nil req-body)
          dummy (log/debug (str "Got result: " ret))
          status (:status ret)
          body (:body ret)
          json-web-token (:json-web-token body)
          msg (:msg body)
          ret (:ret body)
          right-body {:email "pena.neponen@foo.com" :ret :ok}
          new-sessions (ss-session-interface/get-sessions (ss-session-factory/create-session))
          dummy (log/debug (str "New sessions: " new-sessions))]
      (is (= status 200))
      (is (= ret :ok))
      (is (= msg "Credentials ok"))
      (is (= (not (nil? json-web-token)) true))
      (is (> (count json-web-token) 10))
      (is (= (count initial-sessions) 0))
      (is (= (count new-sessions) 1))))
  (testing "Unsuccessful POST: /login"
    (let [initial-sessions (ss-session-interface/get-sessions (ss-session-factory/create-session))
          dummy (log/debug (str "Initial sessions " initial-sessions))
          req-body {:email "kari.karttinen@foo.com", :password "WRONG-PASSWORD"}
          login-ret (-call-request ws/app-routes "/login" :post nil req-body)
          dummy (log/debug (str "Got result: " login-ret))
          status (:status login-ret)
          body (:body login-ret)
          json-web-token (:json-web-token body)
          msg (:msg body)
          ret (:ret body)
          right-body {:email "pena.neponen@foo.com" :ret :ok}
          new-sessions (ss-session-interface/get-sessions (ss-session-factory/create-session))
          dummy (log/debug (str "New sessions: " new-sessions))]
      (is (= status 400))
      (is (= ret :failed))
      (is (= msg "Credentials are not good - either email or password is not correct"))
      (is (= (nil? json-web-token) true))
      (is (= (count initial-sessions) 1))
      (is (= (count new-sessions) 1)))))


(deftest get-product-groups-test
  (log/debug "ENTER get-product-groups-test")
  (testing "GET: /product-groups"
    (let [req-body {:email "kari.karttinen@foo.com", :password "Kari"}
          login-ret (-call-request ws/app-routes "/login" :post nil req-body)
          dummy (log/debug (str "Got login-ret: " login-ret))
          login-body (:body login-ret)
          json-web-token (:json-web-token login-body)
          params (-create-basic-authentication json-web-token)
          get-ret (-call-request ws/app-routes "/product-groups" :get params nil)
          dummy (log/debug (str "Got body: " get-ret))
          status (:status get-ret)
          body (:body get-ret)
          right-body {:ret :ok, :product-groups {"1" "Books", "2" "Movies"}}
          ]
      (is (= (not (nil? json-web-token)) true))
      (is (= status 200))
      (is (= body right-body)))))


(deftest get-products-test
  (log/debug "ENTER get-products-test")
  (testing "GET: /products/1"
    (let [req-body {:email "kari.karttinen@foo.com", :password "Kari"}
          login-ret (-call-request ws/app-routes "/login" :post nil req-body)
          dummy (log/debug (str "Got login-ret: " login-ret))
          login-body (:body login-ret)
          json-web-token (:json-web-token login-body)
          params (-create-basic-authentication json-web-token)
          get-ret (-call-request ws/app-routes "/products/1" :get params nil)
          dummy (log/debug (str "Got body: " get-ret))
          status (:status get-ret)
          body (:body get-ret)
          pg-id (:pg-id body)
          ret (:ret body)
          products (:products body)
          ]
      (is (= (not (nil? json-web-token)) true))
      (is (= status 200))
      (is (= pg-id "1"))
      (is (= ret :ok))
      (is (= (count products) 35)))))


(deftest get-product-test
  (log/debug "ENTER get-product-test")
  (testing "GET: /product/1/10"
    (let [req-body {:email "kari.karttinen@foo.com", :password "Kari"}
          login-ret (-call-request ws/app-routes "/login" :post nil req-body)
          dummy (log/debug (str "Got login-ret: " login-ret))
          login-body (:body login-ret)
          json-web-token (:json-web-token login-body)
          params (-create-basic-authentication json-web-token)
          get-ret (-call-request ws/app-routes "/product/2/49" :get params nil)
          dummy (log/debug (str "Got body: " get-ret))
          status (:status get-ret)
          body (:body get-ret)
          pg-id (:pg-id body)
          p-id (:p-id body)
          ret (:ret body)
          product (:product body)
          ;; What a coincidence! The chosen movie is the best western of all times!
          right-product ["49" "2" "Once Upon a Time in the West" "14.4" "Leone, Sergio" "1968" "Italy-USA" "Western"]
          ]
      (is (= (not (nil? json-web-token)) true))
      (is (= status 200))
      (is (= pg-id "2"))
      (is (= p-id "49"))
      (is (= ret :ok))
      (is (= product right-product)))))







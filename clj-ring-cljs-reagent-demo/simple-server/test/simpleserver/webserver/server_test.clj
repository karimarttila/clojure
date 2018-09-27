(ns simpleserver.webserver.server_test
  (:require [clojure.test :refer :all]
            [clojure.tools.logging :as log]
            [simpleserver.userdb.users :as user-db]
            [simpleserver.webserver.session :as sess]
            [simpleserver.webserver.server :as ws]
            [simpleserver.testutils.users-util :as utu]))

;; A simple end-to-end testing of main API calls.

(defn -reset-sessions
  []
  (log/trace "ENTERED -reset-sessions")
  (reset! sess/my-sessions #{}))


(defn server-test-fixture
  [f]
  (do
    (log/trace "ENTERED server-test-fixture")
    (utu/initialize-userdb)
    (-reset-sessions)
    (f)))


(use-fixtures :each server-test-fixture)


;; Used for testing purposes.
(def my-json-web-token
  (atom ""))


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
  (log/trace "ENTER get-info-test")
  (testing "GET: /info"
    (let [ret (-call-request ws/app-routes "/info" :get nil nil)
          dummy (log/trace (str "Got result: " ret))
          status (:status ret)
          body (:body ret)
          right-body "{\"info\":\"index.html => Info in HTML format\"}"]
      (is (= status 200))
      (is (= body right-body)))))


(deftest post-signin-test
  (log/trace "ENTER post-signin-test")
  (testing "Successful POST: /login"
    (let [initial-users @user-db/users
          dummy (log/trace (str "Initial users: " initial-users))
          req-body {:first-name "Pena", :last-name "Neponen", :email "pena.neponen@foo.com", :password "Pena"}
          ret (-call-request ws/app-routes "/signin" :post nil req-body)
          dummy (log/trace (str "Got result: " ret))
          status (:status ret)
          body (:body ret)
          right-body {:email "pena.neponen@foo.com" :ret :ok}
          new-users @user-db/users
          dummy (log/trace (str "New users: " new-users))]
      (is (= status 200))
      (is (= body right-body))
      (is (= (count initial-users) 3))
      (is (= (count new-users) 4))))
  ; So, we have added Mr. Neponen to user db, let's try to add him again - should fail.
  (testing "Unsuccessful POST: /login (email already used)"
    (let [initial-users @user-db/users
          dummy (log/trace (str "Initial users: " initial-users))
          req-body {:first-name "Pena", :last-name "Neponen", :email "pena.neponen@foo.com", :password "Pena"}
          ret (-call-request ws/app-routes "/signin" :post nil req-body)
          dummy (log/trace (str "Got result: " ret))
          status (:status ret)
          body (:body ret)
          right-body {:email "pena.neponen@foo.com", :ret :failed, :msg "Email already exists"}
          new-users @user-db/users
          dummy (log/trace (str "New users: " new-users))]
      (is (= status 400))
      (is (= body right-body))
      (is (= (count initial-users) 4))
      (is (= (count new-users) 4)))))


(deftest post-login-test
  (log/trace "ENTER post-login-test")
  (testing "Successful POST: /login"
    (let [initial-sessions @sess/my-sessions
          dummy (log/trace (str "Initial sessions " initial-sessions))
          req-body {:email "kari.karttinen@foo.com", :password "Kari"}
          ret (-call-request ws/app-routes "/login" :post nil req-body)
          dummy (log/trace (str "Got result: " ret))
          status (:status ret)
          body (:body ret)
          json-web-token (:json-web-token body)
          msg (:msg body)
          ret (:ret body)
          right-body {:email "pena.neponen@foo.com" :ret :ok}
          new-sessions @sess/my-sessions
          dummy (log/trace (str "New sessions: " new-sessions))]
      (is (= status 200))
      (is (= ret :ok))
      (is (= msg "Credentials ok"))
      (is (not (nil? json-web-token)))
      (is (> (count json-web-token) 10))
      (is (= (count initial-sessions) 0))
      (is (= (count new-sessions) 1))))
  (testing "Unsuccessful POST: /login"
    (let [initial-sessions @sess/my-sessions
          dummy (log/trace (str "Initial sessions " initial-sessions))
          req-body {:email "kari.karttinen@foo.com", :password "WRONG-PASSWORD"}
          ret (-call-request ws/app-routes "/login" :post nil req-body)
          dummy (log/trace (str "Got result: " ret))
          status (:status ret)
          body (:body ret)
          json-web-token (:json-web-token body)
          msg (:msg body)
          ret (:ret body)
          right-body {:email "pena.neponen@foo.com" :ret :ok}
          new-sessions @sess/my-sessions
          dummy (log/trace (str "New sessions: " new-sessions))]
      (is (= status 400))
      (is (= ret :failed))
      (is (= msg "Credentials are not good - either email or password is not correct"))
      (is (nil? json-web-token))
      (is (= (count initial-sessions) 1))
      (is (= (count new-sessions) 1)))))




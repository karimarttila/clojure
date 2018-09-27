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
  (reset! sess/my-sessions {}))


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
  (testing "POST: /login"
    (let [initial-users @user-db/users
          dummy (log/trace (str "Initial users: " initial-users))
          req {:first-name "Pena", :last-name "Neponen", :email "pena.neponen@foo.com", :password "Pena"}
          ret (-call-request ws/app-routes "/signin" :post nil req)
          dummy (log/trace (str "Got result: " ret))
          status (:status ret)
          body (:body ret)
          right-body {:email "pena.neponen@foo.com" :ret   :ok}
          new-users @user-db/users
          dummy (log/trace (str "New users: " new-users))]
      (is (= status 200))
      (is (= body right-body))
      (is (= (count initial-users) 3))
      (is (= (count new-users) 4)))))




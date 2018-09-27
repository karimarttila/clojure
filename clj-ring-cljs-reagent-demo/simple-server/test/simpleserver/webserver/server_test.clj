(ns simpleserver.webserver.server_test
  (:require [clojure.test :refer :all]
            [clojure.tools.logging :as log]
            [simpleserver.userdb.users :as user-db]
            [simpleserver.webserver.server :as ws]
            [simpleserver.testutils.users-util :as utu]))

;; A simple end-to-end testing of main API calls.

(defn server-test-fixture
  [f]
  (do
    (log/trace "ENTERED server-test-fixture")
    (utu/initialize-userdb)
    (f)))

(use-fixtures :each server-test-fixture)

(defn fake-request [routes uri method & params]
  (let [localhost "127.0.0.1"]
    (routes {:server-port    80
             :server-name    localhost
             :remote-addr    localhost
             :uri            uri
             :scheme         :http
             :headers        (or params {})
             :request-method method})))

(deftest get-info-test
  (log/trace "ENTER get-info-test")
  (testing "GET: /info"
    (let [ret (fake-request ws/app-routes "/info" :get)
          dummy (log/trace (str "Got result: " ret))
          status (:status ret)
          body (:body ret)
          right-body "{\"info\":\"index.html => Info in HTML format\"}"]
      (is (= status 200))
      (is (= body right-body)))))



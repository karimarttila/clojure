(ns simpleserver.webserver.session-test
  (:require [clojure.test :refer :all]
            [clojure.tools.logging :as log]
            [simpleserver.webserver.session :as sess]
            ))


(defn session-test-fixture
  [f]
  (do
    (log/trace "ENTERED session-test-fixture")
    (sess/reset-mysessions)
    (f)))

(use-fixtures :each session-test-fixture)


(deftest create-json-web-token
  (log/trace "ENTER create-json-web-token")
  (testing "Create json web token and validate it"
    (let [initial-len (count @sess/my-sessions)
          test-email "kari.karttinen@foo.com"
          jwt (sess/create-json-web-token test-email)
          dummy (log/trace (str "Got jwt: " jwt))
          new-len (count @sess/my-sessions)
          dummy (log/trace (str "Sessions: " @sess/my-sessions))
          ret (sess/validate-token jwt)
          dummy (log/trace (str "validation returned: " ret))
          ret-email (ret :email)
          ]
      (is (= initial-len 0))
      (is (= new-len 1))
      (is (= ret-email test-email)))))
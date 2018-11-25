(ns simpleserver.webserver.session-test
  (:require [clojure.test :refer :all]
            [clojure.tools.logging :as log]
            [simpleserver.webserver.session :as sess]
            ))


(defn session-test-fixture
  [f]
  (do
    (log/debug "ENTERED session-test-fixture")
    (sess/reset-mysessions)
    (f)))

(use-fixtures :each session-test-fixture)


(deftest create-json-web-token
  (log/debug "ENTER create-json-web-token")
  (testing "Create json web token and validate it"
    (let [initial-len (count @sess/my-sessions)
          test-email "kari.karttinen@foo.com"
          jwt (sess/create-json-web-token test-email)
          dummy (log/debug (str "Got jwt: " jwt))
          new-len (count @sess/my-sessions)
          dummy (log/debug (str "Sessions: " @sess/my-sessions))
          ret (sess/validate-token jwt)
          dummy (log/debug (str "validation returned: " ret))
          ret-email (ret :email)
          ]
      (is (= initial-len 0))
      (is (= new-len 1))
      (is (= ret-email test-email)))))
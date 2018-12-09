(ns simpleserver.sessiondb.session-test
  (:require [clojure.test :refer :all]
            [clojure.tools.logging :as log]
            [simpleserver.sessiondb.session-factory :as ss-session-factory]
            [simpleserver.sessiondb.session-service-interface :as ss-session-svc]
            [simpleserver.testutils.session-util :as ss-session-test-util]))

(def session-svc (ss-session-factory/create-session))

(defn session-test-fixture
  [f]
  (do
    (log/debug "ENTERED session-test-fixture")
    (ss-session-test-util/initialize-sessions)
    (f)))

(use-fixtures :each session-test-fixture)


(deftest create-json-web-token
  (log/debug "ENTER create-json-web-token")
  (testing "Create json web token and validate it"
    (let [initial-len (count (ss-session-svc/get-sessions session-svc))
          test-email "kari.karttinen@foo.com"
          jwt (ss-session-svc/create-json-web-token session-svc test-email)
          dummy (log/debug (str "Got jwt: " jwt))
          new-len (count (ss-session-svc/get-sessions session-svc))
          dummy (log/debug (str "Sessions: " (ss-session-svc/get-sessions session-svc)))
          ret (ss-session-svc/validate-token session-svc jwt)
          dummy (log/debug (str "validation returned: " ret))
          ret-email (ret :email)
          ]
      (is (= initial-len 0))
      (is (= new-len 1))
      (is (= ret-email test-email)))))
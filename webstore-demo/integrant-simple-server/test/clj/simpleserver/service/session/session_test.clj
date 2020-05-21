(ns simpleserver.service.session.session-test
  (:require [clojure.test :refer [deftest use-fixtures is testing]]
            [clojure.tools.logging :as log]
            [simpleserver.test-config :as ss-tc]
            [simpleserver.service.service :as ss-service]
            [simpleserver.service.session.session-interface :as ss-session-i]
            ))

(defn reset-sessions! []
  (log/debug "ENTER reset-sessions!")
  (ss-session-i/-reset-sessions! (ss-service/get-service (ss-tc/test-service) :session) (ss-tc/test-env))
  (log/debug "EXIT reset-sessions!"))

(defn reset-state
  "Reset states needed in this test ns."
  [f]
  (log/debug "ENTER reset-state")
  (reset-sessions!)
  (f)
  (log/debug "EXIT reset-state"))

; Register test fixtures.
(use-fixtures :each reset-state)

(deftest create-json-web-token
  (log/debug "ENTER create-json-web-token")
  (testing "Create json web token and validate it"
    (let [initial-len (count (ss-session-i/-get-sessions (ss-service/get-service (ss-tc/test-service) :session) (ss-tc/test-env)))
          test-email "kari.karttinen@foo.com"
          jwt (ss-session-i/create-json-web-token (ss-service/get-service (ss-tc/test-service) :session) (ss-tc/test-env) test-email)
          _ (log/debug (str "Got jwt: " jwt))
          new-len (count (ss-session-i/-get-sessions (ss-service/get-service (ss-tc/test-service) :session) (ss-tc/test-env)))
          _ (log/debug (str "Sessions: " new-len))
          ret (ss-session-i/validate-token (ss-service/get-service (ss-tc/test-service) :session) jwt (ss-tc/test-env))
          _ (log/debug (str "validation returned: " ret))
          ret-email (ret :email)
          ]
      (is (= initial-len 0))
      (is (= new-len 1))
      (is (= ret-email test-email)))))

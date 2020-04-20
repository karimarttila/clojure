(ns simpleserver.session.session-test
  (:require [clojure.test :refer [deftest use-fixtures is testing]]
            [clojure.tools.logging :as log]
            [simpleserver.util.config]
            [simpleserver.session.session-config]
            [simpleserver.session.session-interface]
            ))

(defn reset-sessions! []
  (log/debug "ENTER reset-sessions!")
  (let [my-session simpleserver.session.session-config/session]
    (simpleserver.session.session-interface/-reset-sessions! my-session))
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
    (let [my-session simpleserver.session.session-config/session
          initial-len (count (simpleserver.session.session-interface/-get-sessions my-session))
          test-email "kari.karttinen@foo.com"
          jwt (simpleserver.session.session-interface/create-json-web-token my-session test-email)
          _ (log/debug (str "Got jwt: " jwt))
          new-len (count (simpleserver.session.session-interface/-get-sessions my-session))
          _ (log/debug (str "Sessions: " new-len))
          ret (simpleserver.session.session-interface/validate-token my-session jwt)
          _ (log/debug (str "validation returned: " ret))
          ret-email (ret :email)
          ]
      (is (= initial-len 0))
      (is (= new-len 1))
      (is (= ret-email test-email)))))

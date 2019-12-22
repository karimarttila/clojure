(ns simpleserver.session.session-test
  (:require [clojure.test :refer :all]
            [clojure.tools.logging :as log]
            [mount.core :as mount-core]
            [simpleserver.util.config]
            [simpleserver.session.session-config]
            [simpleserver.session.session-interface]
            ))


(defn reset-states
  "Reset states needed in this test ns."
  [f]
  (do
    (log/debug "ENTER reset-states")
    (log/debug "Stopping config and session states...")
    (mount-core/stop #'simpleserver.util.config/config-state)
    (mount-core/stop #'simpleserver.session.session-config/session-state)
    (log/debug "Starting config and session states...")
    (mount-core/start #'simpleserver.util.config/config-state)
    (mount-core/start #'simpleserver.session.session-config/session-state)
    (log/debug "config-state: " simpleserver.util.config/config-state)
    (log/debug "session-state: " simpleserver.session.session-config/session-state)
    (f)
    (log/debug "EXIT reset-states")))


; Register test fixtures.
(use-fixtures :each reset-states)



(deftest create-json-web-token
  (log/debug "ENTER create-json-web-token")
  (testing "Create json web token and validate it"
    (let [my-session simpleserver.session.session-config/session-state
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

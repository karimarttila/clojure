(ns simpleserver.service.session.session-test
  (:require [clojure.test :refer [deftest use-fixtures is testing]]
            [clojure.tools.logging :as log]
            [simpleserver.test-config :as ss-tc]
            [simpleserver.service.service :as ss-service]
            [simpleserver.service.session.session-interface :as ss-session-i]
            ))


(defn init-fixture []
  (ss-session-i/-reset-sessions! (:session (ss-tc/test-service)) (ss-tc/test-env)))

(defn session-test-fixture
  [f]
  (log/debug "ENTER session-test-fixture")
  (ss-tc/test-system-fixture-runner init-fixture f)
  (log/debug "EXIT session-test-fixture"))

(use-fixtures :each session-test-fixture)

(deftest create-json-web-token
  (log/debug "ENTER create-json-web-token")
  (testing "Create json web token and validate it"
    (let [initial-len (count (ss-session-i/-get-sessions (:session (ss-tc/test-service)) (ss-tc/test-env)))
          test-email "kari.karttinen@foo.com"
          jwt (ss-session-i/create-json-web-token (:session (ss-tc/test-service)) (ss-tc/test-env) test-email)
          _ (log/debug (str "Got jwt: " jwt))
          new-len (count (ss-session-i/-get-sessions (:session (ss-tc/test-service)) (ss-tc/test-env)))
          _ (log/debug (str "Sessions: " new-len))
          ret (ss-session-i/validate-token (:session (ss-tc/test-service)) (ss-tc/test-env) jwt)
          _ (log/debug (str "validation returned: " ret))
          ret-email (:email ret)]
      (is (= initial-len 0))
      (is (= new-len 1))
      (is (= ret-email test-email)))))

(comment
  (ss-tc/go)
  (->> (:out (clojure.java.shell/sh "netstat" "-an")) (clojure.string/split-lines) (filter #(re-find #".*:::61.*LISTEN.*" %)))
  (ss-session-i/create-json-web-token (:session (ss-tc/test-service)) (ss-tc/test-env) "jee@com")
  (ss-session-i/validate-token (:session (ss-tc/test-service)) "eyJhbGciOiJIUzI1NiJ9.eyJlbWFpbCI6ImplZUBjb20iLCJleHAiOjE1OTA1MTg3Nzh9.hNk1f1Wuog2bFhqwpohTimc5JqNmz15jXADQVdCGMaI" (ss-tc/test-env))
  ss-tc/test-system
  (ss-tc/halt)
  )
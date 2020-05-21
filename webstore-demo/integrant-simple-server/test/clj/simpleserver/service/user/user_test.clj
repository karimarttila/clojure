(ns simpleserver.service.user.user-test
  (:require [clojure.test :refer [deftest use-fixtures is testing]]
            [clojure.tools.logging :as log]
            [simpleserver.test-config :as ss-tc]
            [simpleserver.service.service :as ss-service]
            [simpleserver.service.user.user-interface :as ss-user-i]))


(defn reset-users!
  "Resets users for testing purposes. Not used in production."
  [env]
  (log/debug "ENTER reset-users!")
  (ss-user-i/-reset-users! (ss-service/get-service env :user) env)
  (log/debug "EXIT reset-users!"))


(defn reset-state
  "Reset states needed in this test ns."
  [env f]
  (log/debug "ENTER reset-state")
  (reset-users! env)
  (f)
  (log/debug "EXIT reset-state"))

; Register test fixtures.
(use-fixtures :each reset-state)


(deftest initial-users-db-test
  (log/debug "ENTER initial-users-db-test")
  (testing "Initial usersdb count"
    (let [initial-len (count (ss-user-i/-get-users (ss-service/get-service (ss-tc/test-service) :user) (ss-tc/test-env)))]
      (is (= initial-len 3)))))

(deftest email-already-exists?-test
  (log/debug "ENTER email-already-exists?-test")
  (testing "Existing email should return true"
    (let [ret (ss-user-i/email-already-exists? (ss-service/get-service (ss-tc/test-service) :user) (ss-tc/test-env) "kari.karttinen@foo.com")]
      (is (= ret true))))
  (testing "Non-existing email should return nil"
    (let [ret (ss-user-i/email-already-exists? (ss-service/get-service (ss-tc/test-service) :user) (ss-tc/test-env) "non-existing@foo.com")]
      (is (= ret false)))))

(deftest add-new-user-test
  (log/debug "ENTER add-new-user-test")
  (testing "Adding a new non-existing user, should succeed"
    (let [ret (ss-user-i/add-new-user (ss-service/get-service (ss-tc/test-service) :user) (ss-tc/test-env) "jamppa.tuominen@foo.com" "Jamppa" "Tuominen" "passw0rd")]
      (is (= ret {:email "jamppa.tuominen@foo.com", :ret :ok}))))
  (testing "Adding a new existing user, should fail"
    (let [ret (ss-user-i/add-new-user (ss-service/get-service (ss-tc/test-service) :user) (ss-tc/test-env) "jamppa.tuominen@foo.com" "Jamppa" "Tuominen" "passw0rd")]
      (is (= ret {:email "jamppa.tuominen@foo.com", :ret :failed, :msg "Email already exists"})))))

(deftest credentials-ok?-test
  (log/debug "ENTER credentials-ok?-test")
  (testing "Testing good credentials"
    (let [email "jamppa.tuominen@foo.com"
          password "passw0rd"
          _ (ss-user-i/add-new-user (ss-service/get-service (ss-tc/test-service) :user) (ss-tc/test-env) email "Jamppa" "Tuominen" password)
          ret (ss-user-i/credentials-ok? (ss-service/get-service (ss-tc/test-service) :user) (ss-tc/test-env) email password)]
      (is (= ret true))))
  (testing "Testing bad credentials"
    (let [email "jamppa.tuominen@foo.com"
          password "wrong-password"
          ret (ss-user-i/credentials-ok? (ss-service/get-service (ss-tc/test-service) :user) (ss-tc/test-env) email password)]
      (is (= ret false)))))


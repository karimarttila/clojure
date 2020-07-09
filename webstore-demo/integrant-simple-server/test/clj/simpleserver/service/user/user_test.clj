(ns simpleserver.service.user.user-test
  (:require [clojure.test :refer [deftest use-fixtures is testing]]
            [clojure.tools.logging :as log]
            [simpleserver.test-config :as ss-tc]
            [simpleserver.test-utils.test-service :as ss-test-service]
            [simpleserver.service.user.user-service :as ss-user-s]))

(defn init-fixture []
  (ss-test-service/reset-users! (ss-tc/test-env)))

(defn user-test-fixture
  [f]
  (log/debug "ENTER user-test-fixture")
  (ss-tc/test-system-fixture-runner init-fixture f)
  (log/debug "EXIT user-test-fixture"))

(use-fixtures :each user-test-fixture)

(deftest initial-users-db-test
  (log/debug "ENTER initial-users-db-test")
  (testing "Initial usersdb count"
    (let [initial-len (count (ss-test-service/get-users (ss-tc/test-env)))]
      (is (= initial-len 2)))))

(deftest email-already-exists?-test
  (log/debug "ENTER email-already-exists?-test")
  (testing "Existing email should return true"
    (let [ret (ss-user-s/email-already-exists? (ss-tc/test-env) "test-kari.karttinen@foo.com")]
      (is (= ret true))))
  (testing "Non-existing email should return nil"
    (let [ret (ss-user-s/email-already-exists? (ss-tc/test-env) "non-existing@foo.com")]
      (is (= ret false)))))

(deftest add-new-user-test
  (log/debug "ENTER add-new-user-test")
  (testing "Adding a new non-existing user, should succeed"
    (let [ret (ss-user-s/add-new-user (ss-tc/test-env) "test-jamppa.tuominen@foo.com" "Jamppa" "Tuominen" "passw0rd")]
      (is (= ret {:email "test-jamppa.tuominen@foo.com", :ret :ok}))))
  (testing "Adding a new existing user, should fail"
    (let [ret (ss-user-s/add-new-user (ss-tc/test-env) "test-jamppa.tuominen@foo.com" "Jamppa" "Tuominen" "passw0rd")]
      (is (= ret {:email "test-jamppa.tuominen@foo.com", :ret :failed, :msg "Email already exists"})))))

(deftest credentials-ok?-test
  (log/debug "ENTER credentials-ok?-test")
  (testing "Testing good credentials"
    (let [email "test-jamppa.tuominen@foo.com"
          password "passw0rd"
          _ (ss-user-s/add-new-user (ss-tc/test-env) email "Jamppa" "Tuominen" password)
          ret (ss-user-s/credentials-ok? (ss-tc/test-env) email password)]
      (is (= ret true))))
  (testing "Testing bad credentials"
    (let [email "test-jamppa.tuominen@foo.com"
          password "wrong-password"
          ret (ss-user-s/credentials-ok? (ss-tc/test-env) email password)]
      (is (= ret false)))))

; Rich comment.
#_(comment
    (ss-tc/go)
    (ss-tc/test-env)
    (ss-tc/halt)
    )
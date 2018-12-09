(ns simpleserver.userdb.users-test
  (:require [clojure.test :refer :all]
            [clojure.tools.logging :as log]
            [environ.core :as environ]
            [simpleserver.userdb.users-factory :as ss-users-factory]
            [simpleserver.userdb.users-service-interface :as ss-users-svc]
            [simpleserver.testutils.users-util :as utu]))

(def users-svc (ss-users-factory/create-users))

(defn userdb-test-fixture
  [f]
  (do
    (log/debug "ENTERED userdb-test-fixture")
    (utu/initialize-userdb)
    (f)))

(use-fixtures :each userdb-test-fixture)


(deftest initial-users-db-test
  (log/debug "ENTER initial-users-db-test")
  (testing "Initial usersdb count"
    (let [initial-len (count (ss-users-svc/get-users users-svc))]
      (is (= initial-len 3)))))


(deftest email-already-exists?-test
  (log/debug "ENTER email-already-exists?-test")
  (testing "Existing email should return true"
    (let [ret (ss-users-svc/email-already-exists? users-svc "kari.karttinen@foo.com")]
      (is (= ret true))))
  (testing "Non-existing email should return nil"
    (let [ret (ss-users-svc/email-already-exists? users-svc "non-existing@foo.com")]
      (is (= ret false)))))


(deftest add-new-user-test
  (log/debug "ENTER add-new-user-test")
  (testing "Adding a new non-existing user, should succeed"
    (let [ret (ss-users-svc/add-new-user users-svc "jamppa.tuominen@foo.com" "Jamppa" "Tuominen" "passw0rd")]
      (is (= ret {:email "jamppa.tuominen@foo.com", :ret :ok}))))
  (testing "Adding a new existing user, should fail"
    (let [ret (ss-users-svc/add-new-user users-svc "jamppa.tuominen@foo.com" "Jamppa" "Tuominen" "passw0rd")]
      (is (= ret {:email "jamppa.tuominen@foo.com", :ret :failed, :msg "Email already exists"})))))


(deftest credentials-ok?-test
  (log/debug "ENTER credentials-ok?-test")
  (testing "Testing good credentials"
    (let [email "jamppa.tuominen@foo.com"
          password "passw0rd"
          newUser (ss-users-svc/add-new-user users-svc email "Jamppa" "Tuominen" password)
          ret (ss-users-svc/credentials-ok? users-svc email password)]
      (is (= ret true))))
  (testing "Testing bad credentials"
    (let [email "jamppa.tuominen@foo.com"
          password "wrong-password"
          ret (ss-users-svc/credentials-ok? users-svc email password)]
      (is (= ret false)))))


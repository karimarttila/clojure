(ns simpleserver.userdb.users-test
  (:require [clojure.test :refer :all]
            [clojure.tools.logging :as log]
            [simpleserver.userdb.users :as user-db]
            [simpleserver.testutils.users-util :as utu]))


(defn userdb-test-fixture
  [f]
  (do
    (log/trace "ENTERED userdb-test-fixture")
    (utu/initialize-userdb)
    (f)))

(use-fixtures :each userdb-test-fixture)


(deftest initial-users-db-test
  (log/trace "ENTER initial-users-db-test")
  (testing "Initial usersdb count"
    (let [initialLen (count @user-db/users )]
      (is (= initialLen 3)))))


(deftest email-already-exists?-test
  (log/trace "ENTER email-already-exists?-test")
  (testing "Existing email should return true"
    (let [ret (user-db/-email-already-exists? "kari.karttinen@foo.com")]
      (is (= ret true))))
  (testing "Non-existing email should return nil"
    (let [ret (user-db/-email-already-exists? "non-existing@foo.com")]
      (is (= ret nil)))))


(deftest add-new-user-test
  (log/trace "ENTER add-new-user-test")
  (testing "Adding a new non-existing user, should succeed"
    (let [ret (user-db/add-new-user "foo1@foo.com" "Steve" "Stevenson" "passw0rd")]
      (is (= ret {:email "foo1@foo.com", :ret :ok}))))
  (testing "Adding a new existing user, should fail"
    (let [ret (user-db/add-new-user "foo1@foo.com" "Steve" "Stevenson" "passw0rd")]
      (is (= ret {:email "foo1@foo.com", :ret :failed, :msg "Email already exists"}))))  )


(deftest credentials-ok?-test
  (log/trace "ENTER credentials-ok?-test")
  (testing "Testing good credentials"
    (let [email "foo1@foo.com"
          password "passw0rd"
          newUser (user-db/add-new-user email "Steve" "Stevenson" password)
          ret (user-db/credentials-ok? email password)]
      (is (= ret true))))
  (testing "Testing bad credentials"
    (let [email "foo1@foo.com"
          password "wrong-password"
          ret (user-db/credentials-ok? email password)]
      (is (= ret nil))))  )


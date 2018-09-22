(ns simpleserver.userdb.users-test
  (:require [clojure.test :refer :all]
            [clojure.tools.logging :as log]
            [simpleserver.userdb.users :as myUserdb]))



(defn -initialize-userdb
  []
  (let [test-users (atom
             {1 {:userid          "1",
                 :email           "kari.karttinen@foo.com",
                 :first-name      "Kari",
                 :last-name       "Karttinen"
                 :hashed-password "1340477763"}
              2 {:userid          "2",
                 :email           "timo.tillinen@foo.com",
                 :first-name      "Timo",
                 :last-name       "Tillinen"
                 :hashed-password "-36072128"}
              3 {:userid          "3",
                 :email           "erkka.erkkila@foo.com",
                 :first-name      "Erkka",
                 :last-name       "Erkkilä"
                 :hashed-password "1655387230"}})
        ]
    (reset! myUserdb/users @test-users)))


(defn userdb-test-fixture
  [f]
  (do
    (log/trace "ENTERED userdb-test-fixture")
    (-initialize-userdb)
    (f)))

(use-fixtures :each userdb-test-fixture)


(deftest initial-usersdb-test
  (log/trace "ENTER initial-usersdb-test")
  (testing "Initial usersdb count"
    (let [initialLen (count @myUserdb/users )]
      (is (= initialLen 3)))))

(deftest email-already-exists?-test
  (log/trace "ENTER email-already-exists?-test")
  (testing "Existing email should return true"
    (let [ret (myUserdb/-email-already-exists? "kari.karttinen@foo.com")]
      (is (= ret true))))
  (testing "Non-existing email should return nil"
    (let [ret (myUserdb/-email-already-exists? "non-existing@foo.com")]
      (is (= ret nil)))))

(deftest add-new-user-test
  (log/trace "ENTER add-new-user-test")
  (testing "Adding a new non-existing user, should succeed"
    (let [ret (myUserdb/add-new-user "foo1@foo.com" "Steve" "Stevenson" "passw0rd")]
      (is (= ret {:email "foo1@foo.com", :ret :ok}))))
  (testing "Adding a new existing user, should fail"
    (let [ret (myUserdb/add-new-user "foo1@foo.com" "Steve" "Stevenson" "passw0rd")]
      (is (= ret {:email "foo1@foo.com", :ret :failed, :msg "Email already exists"}))))  )

(deftest credentials-ok?-test
  (log/trace "ENTER credentials-ok?-test")
  (testing "Testing good credentials"
    (let [email "foo1@foo.com"
          password "passw0rd"
          newUser (myUserdb/add-new-user email "Steve" "Stevenson" password)
          ret (myUserdb/credentials-ok? email password)]
      (is (= ret true))))
  (testing "Testing bad credentials"
    (let [email "foo1@foo.com"
          password "wrong-password"
          ret (myUserdb/credentials-ok? email password)]
      (is (= ret nil))))  )


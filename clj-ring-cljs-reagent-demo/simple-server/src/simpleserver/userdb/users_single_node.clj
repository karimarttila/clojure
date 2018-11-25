(ns simpleserver.userdb.users-single-node
  (:require
    [clojure.tools.logging :as log]
    [simpleserver.userdb.users-protocol :as ss-users-protocol]
    [simpleserver.util.environment :as ss-util-env]
    [simpleserver.userdb.users-protocol :as ss-users-protocol]
    [environ.core :refer [env]]
    )
  (:import [simpleserver.util.environment Env-single-node])
  )

(defn -get-test-userdb
  []
  (log/debug "ENTERED -get-test-userdb")
  (let [test-users
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
            :hashed-password "1655387230"}}
        ]
    test-users))

(def users
  "A simple dynamic user database for demonstration purposes."
  (atom (-get-test-userdb)))

(defn -swap-userdb!
  "Initializes the database."
  []
  (log/debug "ENTERED -swap-userdb!")
  (reset! users (-get-test-userdb)))


(extend-type Env-single-node
  ss-users-protocol/UsersProtocol
  (email-already-exists?
    [env email]
    (some
      (fn [user]
        (= (:email user) email))
      (vals @users)))

  (add-new-user [env email first-name last-name password]
    (log/debug (str "ENTER add-new-user, email: " email))
    (let [already-exists (ss-users-protocol/email-already-exists? env email)]
      (if already-exists
        (do
          (log/debug (str "Failure: email already exists: " email))
          {:email email, :ret :failed :msg "Email already exists"})
        (do
          (let [new-id (inc (apply max (keys @users)))]
            (swap! users assoc
                   new-id
                   {:userid          (str new-id),
                    :email           email,
                    :first-name      first-name,
                    :last-name       last-name,
                    :hashed-password (str (hash password))}))
          {:email email, :ret :ok}))))

  (credentials-ok?
    [env email password]
    (log/debug (str "ENTER credentials-ok?, email: " email))
    (some
      (fn [user]
        (and
          (= (:email user) email)
          (= (:hashed-password user) (str (hash password)))))
      (vals @users)))

  (get-users
    [env]
    (log/debug (str "ENTER get-users"))
    @users)
  )




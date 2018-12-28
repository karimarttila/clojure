(ns simpleserver.userdb.users-single-node
  (:require
    [clojure.tools.logging :as log]
    [simpleserver.userdb.users-service-interface :as ss-users-service-interface]
    [simpleserver.userdb.initial-users :as ss-users-initial-users]))

(defn uuid
  []
  (.toString (java.util.UUID/randomUUID)))


(defn -get-test-userdb
  []
  (log/debug "ENTERED -get-test-userdb")
  (ss-users-initial-users/get-initial-users))

(def users
  "A simple dynamic user database for demonstration purposes."
  (atom (-get-test-userdb)))

(defn -swap-userdb!
  "Initializes the database."
  []
  (log/debug "ENTERED -swap-userdb!")
  (reset! users (-get-test-userdb)))


(defrecord Env-single-node [ssenv]
  ss-users-service-interface/UsersServiceInterface

  (email-already-exists?
    [ssenv email]
    (log/debug (str "ENTER email-already-exists?, email: " email))
    (let [ret (some
                (fn [user]
                  (= (:email user) email))
                (vals @users))]
      (not (nil? ret))))

  (add-new-user
    [ssenv email first-name last-name password]
    (log/debug (str "ENTER add-new-user, email: " email))
    (let [already-exists (ss-users-service-interface/email-already-exists? ssenv email)]
      (if already-exists
        (do
          (log/debug (str "Failure: email already exists: " email))
          {:email email, :ret :failed :msg "Email already exists"})
        (do
          (let [new-id (uuid)]
            (swap! users assoc
                   new-id
                   {:userid          (str new-id),
                    :email           email,
                    :first-name      first-name,
                    :last-name       last-name,
                    :hashed-password (str (hash password))}))
          {:email email, :ret :ok}))))

  (credentials-ok?
    [ssenv email password]
    (log/debug (str "ENTER credentials-ok?, email: " email))
    (let [ret (some
                (fn [user]
                  (and
                    (= (:email user) email)
                    (= (:hashed-password user) (str (hash password)))))
                (vals @users))]
      (not (nil? ret))))

  (get-users
    [ssenv]
    (log/debug (str "ENTER get-users"))
    @users)
  )




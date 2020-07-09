(ns simpleserver.service.user.user-csv
  (:require
    [clojure.tools.logging :as log]
    [simpleserver.service.user.user-interface :as ss-user-i]
    [simpleserver.service.user.user-common :as ss-user-common]))

(defrecord CsvR [db]
  ss-user-i/UserInterface

  (email-already-exists?
    [_ _ email]
    (log/debug (str "ENTER email-already-exists?, email: " email))
    (let [ret (some
                (fn [user]
                  (= (:email user) email))
                (vals (:user @db)))]
      (not (nil? ret))))

  (add-new-user
    [this env email first-name last-name password]
    (log/debug (str "ENTER add-new-user"))
    (let [already-exists (ss-user-i/email-already-exists? this env email)]
      (if already-exists
        (do
          (log/debug (str "Failure: email already exists: " email))
          {:email email, :ret :failed :msg "Email already exists"})
        (do
          (let [new-id (ss-user-common/uuid)]
            (swap! db assoc-in [:user new-id]
                   {:userid (str new-id),
                    :email email,
                    :first-name first-name,
                    :last-name last-name,
                    :hashed-password (str (hash password))}))
          {:email email, :ret :ok}))))

  (credentials-ok?
    [_ _ email password]
    (log/debug (str "ENTER credentials-ok?"))
    (let [ret (some
                (fn [user]
                  (and
                    (= (:email user) email)
                    (= (:hashed-password user) (str (hash password)))))
                (vals (:user @db)))]
      (not (nil? ret)))))

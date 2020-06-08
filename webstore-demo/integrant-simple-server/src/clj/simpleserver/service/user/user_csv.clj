(ns simpleserver.service.user.user-csv
  (:require
    [clojure.tools.logging :as log]
    [simpleserver.service.user.user-interface :as ss-user-i]
    [simpleserver.service.user.user-common :as ss-user-common]
    [simpleserver.util.config :as ss-config]
    ))



; Atom for testing purposes.
(def my-users (atom (ss-user-common/get-initial-users)))


(defrecord CsvR []
  ss-user-i/UserInterface

  (email-already-exists?
    [_ env email]
    (log/debug (str "ENTER email-already-exists?, email: " email))
    (let [ret (some
                (fn [user]
                  (= (:email user) email))
                (vals @my-users))]
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
            (swap! my-users assoc
                   new-id
                   {:userid          (str new-id),
                    :email           email,
                    :first-name      first-name,
                    :last-name       last-name,
                    :hashed-password (str (hash password))}))
          {:email email, :ret :ok}))))

  (credentials-ok?
    [_ env email password]
    (log/debug (str "ENTER credentials-ok?"))
    (let [ret (some
                (fn [user]
                  (and
                    (= (:email user) email)
                    (= (:hashed-password user) (str (hash password)))))
                (vals @my-users))]
      (not (nil? ret))))

  (-get-users
    [_ env]
    (log/debug (str "ENTER -get-users"))
    @my-users)

  (-reset-users!
    [_ env]
    (log/debug (str "ENTER -reset-users!"))
    (if (= (get-in env [:config :runtime-env]) :dev)
      (reset! my-users (ss-user-common/get-initial-users))
      (throw (UnsupportedOperationException. "You can reset sessions only in development environment!")))))

;; ****************************************************************
;; Rich comment.

;; Commented out for clj-kondo
(comment

  (:simpleserver.core/config (user/system))
  (get-in (user/system) [:simpleserver.core/env])
  (get-in (user/system) [:simpleserver.core/service :user])
  (ss-user-common/get-initial-users)
  (ss-user-i/-get-users
    (get-in (user/system) [:simpleserver.core/service :user])
    (get-in (user/system) [:simpleserver.core/env]))
  ; Remember to compile user-interface, user-single-node and then user-config!
  (ss-user-i/email-already-exists?
    (get-in (user/system) [:simpleserver.core/service :user])
    (get-in (user/system) [:simpleserver.core/env])
    "kari.karttinen@foo.com")
  (simpleserver.user.user-interface/email-already-exists?
    simpleserver.user.user-config/user "kari.karttinen@NOT.FOUND")
  )

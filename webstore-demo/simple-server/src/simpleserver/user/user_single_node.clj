(ns simpleserver.user.user-single-node
  (:require
    [clojure.tools.logging :as log]
    [clojure.data.csv :as csv]
    [clojure.java.io :as io]
    [simpleserver.user.user-interface :as ss-user-i]
    [simpleserver.user.user-common :as ss-user-common]
    [simpleserver.util.config :as ss-config]
    ))

(defn -get-initial-users
  []
  (let [data-dir (get-in ss-config/config [:single-node-data :data-dir])
        raw-users (try
                    (with-open [reader (io/reader (str data-dir "/initial-users.csv"))]
                      (doall
                        (csv/read-csv reader :separator \tab)))
                    (catch java.io.FileNotFoundException e []))]
    (reduce (fn [users user]
              (assoc users (first user)
                           {:userid          (nth user 0)
                            :email           (nth user 1)
                            :first-name      (nth user 2)
                            :last-name       (nth user 3)
                            :hashed-password (nth user 4)})) {} raw-users)))

; Atom for testing purposes.
(def my-users (atom (-get-initial-users)))


(defrecord SingleNodeR []
  ss-user-i/UserInterface

  (email-already-exists?
    [this email]
    (log/debug (str "ENTER email-already-exists?, email: " email))
    (let [ret (some
                (fn [user]
                  (= (:email user) email))
                (vals @my-users))]
      (not (nil? ret))))

  (add-new-user
    [this email first-name last-name password]
    (log/debug (str "ENTER add-new-user"))
    (let [already-exists (ss-user-i/email-already-exists? this email)]
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
    [this email password]
    (log/debug (str "ENTER credentials-ok?"))
    (let [ret (some
                (fn [user]
                  (and
                    (= (:email user) email)
                    (= (:hashed-password user) (str (hash password)))))
                (vals @my-users))]
      (not (nil? ret))))

  (-get-users
    [this]
    (log/debug (str "ENTER -get-users"))
    @my-users)

  (-reset-users!
    [this]
    (log/debug (str "ENTER -reset-users!"))
    (if (= (ss-config/config :runtime-env) "dev")
      (reset! my-users (-get-initial-users))
      (throw (java.lang.UnsupportedOperationException. "You can reset sessions only in development environment!")))))

;; ****************************************************************
;; Rich comment.

(comment
  users
  (-get-initial-users)

  ; Remember to compile user-interface, user-single-node and then user-config!
  (simpleserver.user.user-interface/email-already-exists?
    simpleserver.user.user-config/user "kari.karttinen@foo.com")
  (simpleserver.user.user-interface/email-already-exists?
    simpleserver.user.user-config/user "kari.karttinen@NOT.FOUND")
  )
(ns simpleserver.service.user.user-datomic
  (:require [clojure.tools.logging :as log]
            [simpleserver.service.user.user-interface :as ss-user-i]
            [simpleserver.service.user.user-common :as ss-user-common]
            [datomic.api :as d]))

(defrecord DatomicR [conn]
  ss-user-i/UserInterface

  (email-already-exists?
    [_ _ email]
    (log/debug (str "ENTER email-already-exists?, email: " email))
    (let [found (ffirst (d/q '[:find ?email
                               :in $ ?email
                               :where
                               [?e :user.user/email ?email]]
                             (d/db conn) email))]
      (if found
        (= found email)
        false)))

  (add-new-user
    [this env email first-name last-name password]
    (log/debug (str "ENTER add-new-user"))
    (let [already-exists (ss-user-i/email-already-exists? this env email)]
      (if already-exists
        (do
          (log/debug (str "Failure: email already exists: " email))
          {:email email, :ret :failed :msg "Email already exists"})
        (let [new-id (ss-user-common/uuid)
              new-user {:user.user/id new-id
                        :user.user/email email
                        :user.user/first-name first-name
                        :user.user/last-name last-name
                        :user.user/hashed-password (str (hash password))}]
          @(d/transact conn [new-user])
          {:email email, :ret :ok}))))

  (credentials-ok?
    [_ _ email password]
    (log/debug (str "ENTER credentials-ok?"))
    (let [found (d/q '[:find ?email ?hashed-password
                       :in $ ?email ?hashed-password
                       :where
                       [?e :user.user/email ?email]
                       [?e :user.user/hashed-password ?hashed-password]]
                     (d/db conn) email (str (hash password)))]
      (if found
        (= found #{[email (str (hash password))]})
        false))))

(comment

  )
(ns simpleserver.service.user.user-postgres
  (:require [clojure.tools.logging :as log]
            [hugsql.core :as hugsql]
            [simpleserver.service.user.user-interface :as ss-user-i]
            [simpleserver.service.user.user-common :as ss-user-common]))

(declare sql-get-user-by-email)
(declare sql-insert-user)
(declare sql-get-user-by-email-and-password)

(hugsql/def-db-fns "simpleserver/service/user/user-postgres.sql" {:quoting :ansi})

(defrecord PostgresR [db]
  ss-user-i/UserInterface

  (email-already-exists?
    [_ _ email]
    (log/debug (str "ENTER email-already-exists?, email: " email))
    (let [found  (sql-get-user-by-email db {:email email})]
      (if found
        (= found {:email email})
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
              new-user {:id new-id, :email email, :fname first-name, :lname last-name, :hpwd (str (hash password))}]
          (sql-insert-user db new-user)
          {:email email, :ret :ok}))))

  (credentials-ok?
    [_ _ email password]
    (log/debug (str "ENTER credentials-ok?"))
    (let [found (sql-get-user-by-email-and-password db {:email email :hpwd (str (hash password))})]
      (if found
        (= found {:email email :hpwd (str (hash password))})
        false))))

; Rich comment.
(comment
  (hash "oo")
  (simpleserver.service.user.user-service/credentials-ok? (user/env) "kari.karttinen@foo.com" "oo")
  (simpleserver.service.user.user-service/email-already-exists? (user/env) "kari.karttinen@foo.comX")
  (sql-get-user-by-email (get-in (user/env) [:service :user :db]) {:email "kari.karttinen@foo.com"})
  (sql-insert-user (get-in (user/env) [:service :user :db]) {:id "ASDF2"
                                                             :email "kari2.karttinen@foo.com"
                                                             :fname "kari"
                                                             :lname "karttinen"
                                                             :hpwd "jee"})



    )

(ns simpleserver.userdb.users-table-storage
  (:require
    [clojure.tools.logging :as log]
    [environ.core :as environ]
    [simpleserver.userdb.users-service-interface :as ss-users-service-interface]
    ))


(defrecord Env-table-storage [ssenv]
  ss-users-service-interface/UsersServiceInterface

  (email-already-exists?
    [ssenv email]
    (log/debug (str "ENTER email-already-exists?, email: " email))
    (log/debug (str "NOT IMPLEMENTED YET"))
    )

  (add-new-user
    [ssenv email first-name last-name password]
    (log/debug (str "ENTER add-new-user, email: " email))
    (log/debug (str "NOT IMPLEMENTED YET"))
    )

  (credentials-ok?
    [ssenv email password]
    (log/debug (str "ENTER credentials-ok?, email: " email))
    (log/debug (str "NOT IMPLEMENTED YET"))
    )

  (get-users
    [ssenv]
    (log/debug (str "ENTER get-users"))
    (log/debug (str "NOT IMPLEMENTED YET"))
    ))




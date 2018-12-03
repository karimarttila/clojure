(ns simpleserver.userdb.users-local-dynamodb
  (:require
    [clojure.tools.logging :as log]
    [environ.core :refer [env]]
    [simpleserver.userdb.users-service-interface :as ss-users-service-interface]))




(defrecord Env-local-dynamodb [env]
  ss-users-service-interface/UsersServiceInterface

  (email-already-exists?
    [env email]
    (log/debug (str "ENTER email-already-exists?, email: " email))
    )

  (add-new-user [env email first-name last-name password]
    (log/debug (str "ENTER add-new-user, email: " email))
    )

  (credentials-ok?
    [env email password]
    (log/debug (str "ENTER credentials-ok?, email: " email))
    )

  (get-users
    [env]
    (log/debug (str "ENTER get-users"))
    )
  )




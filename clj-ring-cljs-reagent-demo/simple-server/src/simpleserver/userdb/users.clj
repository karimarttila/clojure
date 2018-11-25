(ns simpleserver.userdb.users
  (:require
    [clojure.tools.logging :as log]
    [environ.core :refer [env]]
    [simpleserver.userdb.users-protocol :as ss-user-protocol]
    [simpleserver.userdb.environment :as ss-user-env])
  )


(def my-env (ss-user-env/-m-create-my-env (env :ss-env)))


(defn email-already-exists?
  [email]
  (log/debug (str "ENTER email-already-exists?, email: " email))
  (ss-user-protocol/email-already-exists? my-env email))

(defn add-new-user
  [email first-name last-name password]
  (log/debug (str "ENTER add-new-user, email: " email))
  (log/trace (str "my-env: " my-env))
  (log/trace (str "satisfies?: " (satisfies? simpleserver.userdb.users-protocol/UsersProtocol simpleserver.userdb.users/my-env)))
  (ss-user-protocol/add-new-user my-env email first-name last-name password))

(defn credentials-ok?
  [email password]
  (log/debug (str "ENTER credentials-ok?, email: " email))
  (ss-user-protocol/credentials-ok? my-env email password))

(defn get-users
  []
  (log/debug (str "ENTER get-users"))
  (log/trace (str "my-env: " my-env))
  (ss-user-protocol/get-users my-env))
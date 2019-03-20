(ns simpleserver.userdb.users-table-storage
  (:require
    [clojure.tools.logging :as log]
    [environ.core :as environ]
    [simpleserver.userdb.users-service-interface :as ss-users-service-interface]
    [simpleserver.util.azure-utils :as ss-azure-utils]
    [simpleserver.userdb.users-common :as ss-users-common])
  (:import (com.microsoft.azure.storage.table TableQuery TableQuery$QueryComparisons TableOperation)))


;; Table-client is bound once so that we call the slow multimethod gets called only once (instead of calling it every time in the defrecord functions).
(def table-client (ss-azure-utils/get-table-client))


(defrecord Env-table-storage [ssenv]
  ss-users-service-interface/UsersServiceInterface

  (email-already-exists?
    [ssenv email]
    (log/debug (str "ENTER email-already-exists?, email: " email))
    (let [table-filter (TableQuery/generateFilterCondition "PartitionKey" TableQuery$QueryComparisons/EQUAL email)
          table-query (TableQuery/from simpleserver.util.azure.tableserviceentity.Users)
          table-query (. table-query where table-filter)
          my-env (environ/env :my-env)
          my-prefix (environ/env :azure-table-prefix)
          users-table (. table-client getTableReference (str my-prefix my-env "users"))
          raw-users (into [] (. users-table execute table-query))
          my-count (count raw-users)]
      (not (= my-count 0))))

  (add-new-user
    [ssenv email first-name last-name password]
    (log/debug (str "ENTER add-new-user, email: " email))
    (let [already-exists (ss-users-service-interface/email-already-exists? ssenv email)]
      (if already-exists
        (do
          (log/debug (str "Failure: email already exists: " email))
          {:email email, :ret :failed :msg "Email already exists"})
        (let [my-env (environ/env :my-env)
              my-prefix (environ/env :azure-table-prefix)
              table-query (TableQuery/from simpleserver.util.azure.tableserviceentity.Users)
              users-table (. table-client getTableReference (str my-prefix my-env "users"))
              new-user (new simpleserver.util.azure.tableserviceentity.Users)
              _ (.setPartitionKey new-user email)
              _ (.setRowKey new-user (ss-users-common/uuid))
              _ (.setFirstname new-user first-name)
              _ (.setLastname new-user last-name)
              _ (.setHpwd new-user (str (hash password)))
              table-insert (TableOperation/insert new-user)
              ; In real production code we should check the result value, of course.
              result (. users-table execute table-insert)
              ]
          {:email email, :ret :ok}))))

  (credentials-ok?
    [ssenv email password]
    (log/debug (str "ENTER credentials-ok?, email: " email))
    (let [table-filter (TableQuery/generateFilterCondition "PartitionKey" TableQuery$QueryComparisons/EQUAL email)
          table-query (TableQuery/from simpleserver.util.azure.tableserviceentity.Users)
          table-query (. table-query where table-filter)
          my-env (environ/env :my-env)
          my-prefix (environ/env :azure-table-prefix)
          users-table (. table-client getTableReference (str my-prefix my-env "users"))
          raw-users (into [] (. users-table execute table-query))
          user (first raw-users)]
      (if (nil? user)
        false
        (let [hashed-password (. user getHpwd)]
          (= hashed-password (str (hash password)))))))

  (get-users
    [ssenv]
    (log/debug (str "ENTER get-users"))
    (let [my-env (environ/env :my-env)
          my-prefix (environ/env :azure-table-prefix)
          table-query (TableQuery/from simpleserver.util.azure.tableserviceentity.Users)
          users-table (. table-client getTableReference (str my-prefix my-env "users"))
          items (. users-table execute table-query)]
      (reduce (fn [users user]
                (assoc users (. user getRowKey)
                             {:userid          (. user getRowKey)
                              :email           (. user getPartitionKey)
                              :first-name      (. user getFirstname)
                              :last-name       (. user getLastname)
                              :hashed-password (. user getHpwd)}))
              {}
              items))))




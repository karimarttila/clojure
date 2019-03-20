(ns simpleserver.testutils.reset-azure-table-storage-users-table
  (:require [clojure.test :refer :all]
            [clojure.tools.logging :as log]
            [simpleserver.sessiondb.session-service-interface :as ss-session-interface]
            [simpleserver.userdb.users-factory :as ss-users-factory]
            [simpleserver.userdb.users-service-interface :as ss-users-interface]
            [simpleserver.sessiondb.session-table-storage :as ss-session-table-storage]
            [environ.core :as environ]
            [simpleserver.util.azure-utils :as ss-azure-utils]
            [simpleserver.userdb.initial-users :as ss-users-initial-users])
  (:import (com.microsoft.azure.storage.table TableOperation TableQuery TableQuery$QueryComparisons)))


(def users-svc (ss-users-factory/create-users))

(def table-client (ss-azure-utils/get-table-client))


(defn -get-raw-user
  [email]
  (let [my-env (environ/env :my-env)
        my-prefix (environ/env :azure-table-prefix)
        table-filter (TableQuery/generateFilterCondition "PartitionKey" TableQuery$QueryComparisons/EQUAL email)
        table-query (TableQuery/from simpleserver.util.azure.tableserviceentity.Users)
        table-query (. table-query where table-filter)
        users-table (. table-client getTableReference (str my-prefix my-env "users"))
        raw-users (. users-table execute table-query)]
    (first raw-users)))


(defn -remove-user
  [email]
  (log/debug (str "ENTER remove-user: " email))
  (let [delete-user (-get-raw-user email)]
    (if (nil? delete-user)
      (log/warn (str "User not found for removal: " email))
      (let [my-env (environ/env :my-env)
            my-prefix (environ/env :azure-table-prefix)
            users-table (. table-client getTableReference (str my-prefix my-env "users"))
            table-delete (TableOperation/delete delete-user)
            result (. users-table execute table-delete)]
        ; In real production code we should check the result value, of course.
        result))))


(defn -add-new-user
  [user]
  (let [my-env (environ/env :my-env)
        my-prefix (environ/env :azure-table-prefix)
        table-query (TableQuery/from simpleserver.util.azure.tableserviceentity.Users)
        users-table (. table-client getTableReference (str my-prefix my-env "users"))
        email (user :email)
        userid (user :userid)
        first-name (user :first-name)
        last-name (user :last-name)
        hashed-password (user :hashed-password)
        new-user (new simpleserver.util.azure.tableserviceentity.Users)
        _ (.setPartitionKey new-user email)
        _ (.setRowKey new-user userid)
        _ (.setFirstname new-user first-name)
        _ (.setLastname new-user last-name)
        _ (.setHpwd new-user hashed-password)
        table-insert (TableOperation/insert new-user)
        ; In real production code we should check the result value, of course.
        result (. users-table execute table-insert)
        ]
    result))

(defn -add-initial-users
  []
  (let [initial-users (vals (ss-users-initial-users/get-initial-users))]
    (dorun (map -add-new-user initial-users))))

(defn reset-azure-table-storage-users-table
  []
  (log/debug "ENTER reset-azure-table-storage-users-table")
  (let [current-users (ss-users-interface/get-users users-svc)
        emails (map #(:email %) (vals current-users))]
    (do
      (dorun (map -remove-user emails))
      (-add-initial-users))))
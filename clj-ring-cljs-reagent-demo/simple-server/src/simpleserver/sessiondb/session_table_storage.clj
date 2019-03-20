(ns simpleserver.sessiondb.session-table-storage
  (:import (com.microsoft.azure.storage CloudStorageAccount)
           (com.microsoft.azure.storage.table CloudTableClient)
           (com.microsoft.azure.storage.table TableOperation)
           (com.microsoft.azure.storage.table TableQuery TableQuery$QueryComparisons)
           (com.microsoft.azure.storage.table TableQuery TableQuery$Operators))
  (:require
    [clojure.tools.logging :as log]
    [clj-time.core :as c-time]
    [buddy.sign.jwt :as buddy-jwt]
    [environ.core :as environ]
    [simpleserver.util.prop :as ss-prop]
    [simpleserver.sessiondb.session-service-interface :as ss-session-service-interface]
    [simpleserver.sessiondb.session-common :as ss-session-common]
    [simpleserver.util.azure-utils :as ss-azure-utils]
    ))

;; Table-client is bound once so that we call the slow multimethod gets called only once (instead of calling it every time in the defrecord functions).
(def table-client (ss-azure-utils/get-table-client))


(defn get-raw-session
  [token]
  (let [my-env (environ/env :my-env)
        my-prefix (environ/env :azure-table-prefix)
        table-filter (TableQuery/generateFilterCondition "PartitionKey" TableQuery$QueryComparisons/EQUAL token)
        table-query (TableQuery/from simpleserver.util.azure.tableserviceentity.Session)
        table-query (. table-query where table-filter)
        session-table (. table-client getTableReference (str my-prefix my-env "session"))
        raw-sessions (. session-table execute table-query)]
    (first raw-sessions)
    )
  )

(defn get-token
  [token]
  (log/debug (str "ENTER get-token: " token))
  (let [raw-session (get-raw-session token)]
    (if (nil? raw-session)
      nil
      (. raw-session getPartitionKey))))


(defn remove-token
  [token]
  (log/debug (str "ENTER remove-token: " token))
  (let [delete-session (get-raw-session token)]
    (if (nil? delete-session)
      (log/warn (str "Token not found for removal: " token))
      (let [my-env (environ/env :my-env)
            my-prefix (environ/env :azure-table-prefix)
            session-table (. table-client getTableReference (str my-prefix my-env "session"))
            table-delete (TableOperation/delete delete-session)
            result (. session-table execute table-delete)]
        ; In real production code we should check the result value, of course.
        result))))


(defrecord Env-table-storage [env]
  ss-session-service-interface/SessionServiceInterface

  (create-json-web-token
    [env email]
    (log/debug (str "ENTER create-json-web-token, email: " email))
    (let [json-web-token (ss-session-common/create-json-web-token email)
          my-env (environ/env :my-env)
          my-prefix (environ/env :azure-table-prefix)
          session-table (. table-client getTableReference (str my-prefix my-env "session"))
          new-session (new simpleserver.util.azure.tableserviceentity.Session)
          _ (.setPartitionKey new-session json-web-token)
          _ (.setRowKey new-session "dummy-row-key")
          table-insert (TableOperation/insert new-session)
          ; In real production code we should check the result value, of course.
          result (. session-table execute table-insert)]
      json-web-token))


  (validate-token
    [env token]
    (log/debug (str "ENTER validate-token, token: " token))
    (ss-session-common/validate-token token get-token remove-token))


  (get-sessions
    [env]
    (log/debug (str "ENTER get-sessions"))
    (let [my-env (environ/env :my-env)
          my-prefix (environ/env :azure-table-prefix)
          table-query (TableQuery/from simpleserver.util.azure.tableserviceentity.Session)
          session-table (. table-client getTableReference (str my-prefix my-env "session"))
          items (. session-table execute table-query)]
      (reduce (fn [sessions session]
                (conj sessions (. session getPartitionKey)))
              #{}
              items))))


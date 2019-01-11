(ns simpleserver.util.azure-utils
  (:import (com.microsoft.azure.storage CloudStorageAccount)
           (com.microsoft.azure.storage.table CloudTableClient)
           (com.microsoft.azure.storage.table TableOperation)
           (com.microsoft.azure.storage.table TableQuery TableQuery$QueryComparisons)
           (com.microsoft.azure.storage.table TableQuery TableQuery$Operators))
  (:require [environ.core :as environ]
            [clojure.tools.logging :as log]))


(defmulti -m-get-table-storage-config (fn [ssenv] ssenv))


(defmethod -m-get-table-storage-config "single-node"
  [env]
  (log/debug "ENTERED -m-get-table-storage-config - single-node")
  (throw (IllegalArgumentException.
           (str "Not supported in single-node environment"))))


(defmethod -m-get-table-storage-config "local-table"
  [env]
  (log/debug "ENTERED -m-get-table-storage-config - local-table")
  {:endpoint (environ/env :endpoint)})


; For real azure table storage service read account and key from environmental variables.
(defmethod -m-get-table-storage-config "azure-table-storage"
  [env]
  (log/debug "ENTERED -m-get-table-storage-config - azure-table-storage")
  (let [my-azure-connection-string (environ/env :azure-connection-string)]
    {:endpoint my-azure-connection-string}))


(defmethod -m-get-table-storage-config :default
  [env]
  (log/debug "ENTERED -m-get-table-storage-config - default")
  (throw (IllegalArgumentException.
           (str "Unknown environment: " env))))


(defn get-table-storage-config
  []
  (log/debug "ENTERED get-table-storage-config")
  (let [ssenv (environ/env :ss-env)]
    (-m-get-table-storage-config ssenv)))



(defn -get-table-client
  []
  (log/debug "ENTERED -get-table-client")
  (let [table-config (get-table-storage-config)
        cloud-storage-account (CloudStorageAccount/parse (:endpoint table-config))
        table-client (. cloud-storage-account createCloudTableClient)]
    table-client
    ))

;; The multimethod is necessary so that table-client is properly called only for azure related profiles.
(defmulti -m-get-table-client (fn [ssenv] ssenv))

(defmethod -m-get-table-client "local-table"
  [env]
  (log/debug "ENTERED -m-get-table-client - local-table")
  (-get-table-client))

(defmethod -m-get-table-client "azure-table-storage"
  [env]
  (log/debug "ENTERED -m-get-table-client - azure-table-storage")
  (-get-table-client))

(defmethod -m-get-table-client :default
  [env]
  (log/debug "ENTERED -m-get-table-client - default")
  (log/debug "Doing nothing in other profiles than Azure Table Storage related profiles"))

(defn get-table-client
  []
  (log/debug "ENTERED get-table-client")
  (let [ssenv (environ/env :ss-env)]
    (-m-get-table-client ssenv)))

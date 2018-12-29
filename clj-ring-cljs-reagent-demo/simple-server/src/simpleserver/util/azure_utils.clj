(ns simpleserver.util.azure-utils
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
  (let [my-azure-storage-account (environ/env :azure-storage-account)
        my-azure-storage-key (environ/env :azure-storage-key)]
    {:endpoint (str "DefaultEndpointsProtocol=https;AccountName=" my-azure-storage-account ";AccountKey=" my-azure-storage-key)}))


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



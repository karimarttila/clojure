(ns simpleserver.domaindb.domain-table-storage
  (:import (com.microsoft.azure.storage CloudStorageAccount)
           (com.microsoft.azure.storage.table CloudTableClient)
           (com.microsoft.azure.storage.table TableOperation)
           (com.microsoft.azure.storage.table TableQuery))
  (:require
    [clojure.data.csv :as csv]
    [clojure.java.io :as io]
    [clojure.string :as str]
    [clojure.tools.logging :as log]
    [environ.core :as environ]
    [simpleserver.util.azure-utils :as ss-azure-utils]
    [simpleserver.domaindb.domain-service-interface :as ss-domain-service-interface])
  )

(compile 'simpleserver.util.azuregenclass.productgroup)


(defmulti -m-get-table-client (fn [ssenv] ssenv))


(defmethod -m-get-table-client "local-table"
  [env]
  (log/debug "ENTERED -m-get-table-client - local-table")
  (let [table-config (ss-azure-utils/get-table-storage-config)
        cloud-storage-account (CloudStorageAccount/parse (:endpoint table-config))
        table-client (. cloud-storage-account createCloudTableClient)]
    table-client
    ))

(defmethod -m-get-table-client :default
  [env]
  (log/debug "ENTERED -m-get-table-client - default")
  (log/debug "Doing nothing in other profiles than Azure Table Storage related profiles"))


(defrecord Env-table-storage [env]
  ss-domain-service-interface/DomainServiceInterface


  (get-product-groups
    [env]
    (log/debug "ENTER get-product-groups")
    (let [table-client (-m-get-table-client (environ/env :ss-env))
          table-query (TableQuery/from simpleserver.util.azuregenclass.productgroup)
          productgroup-table (. table-client getTableReference "sseksdevproductgroup")
          raw-product-groups (. productgroup-table execute table-query)]
      (reduce
        (fn
          [mymap item]
          (conj mymap {(. item getPartitionKey) (. item getRowKey)}))
        {}
        raw-product-groups)))


  (get-products
    [env pg-id]
    (log/debug (str "ENTER get-products, pg-id: " pg-id))
    (log/debug (str "NOT IMPLEMENTED YET"))
    )


  (get-product
    [env pg-id p-id]
    (log/debug (str "ENTER get-product, pg-id: " pg-id ", p-id: " p-id))
    (log/debug (str "NOT IMPLEMENTED YET"))
    ))

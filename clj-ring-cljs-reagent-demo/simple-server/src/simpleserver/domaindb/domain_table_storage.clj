(ns simpleserver.domaindb.domain-table-storage
  (:import (com.microsoft.azure.storage CloudStorageAccount)
           (com.microsoft.azure.storage.table CloudTableClient)
           (com.microsoft.azure.storage.table TableOperation)
           (com.microsoft.azure.storage.table TableQuery TableQuery$QueryComparisons))
  (:require
    [clojure.data.csv :as csv]
    [clojure.java.io :as io]
    [clojure.string :as str]
    [clojure.tools.logging :as log]
    [environ.core :as environ]
    [simpleserver.util.azuregenclass.productgroup]
    [simpleserver.util.azuregenclass.product]
    [simpleserver.util.azure-utils :as ss-azure-utils]
    [simpleserver.domaindb.domain-service-interface :as ss-domain-service-interface])
  )

;; Ask to compile here or otherwise other profiles fail.
;; In the next project I have to figure out a better solution.
(compile 'simpleserver.util.azuregenclass.productgroup)
(compile 'simpleserver.util.azuregenclass.product)

(defn -get-table-client
  []
  (log/debug "ENTERED -get-table-client")
  (let [table-config (ss-azure-utils/get-table-storage-config)
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


;; Table-client is bound once so that we call the slow multimethod gets called only once (instead of calling it every time in the defrecord functions).
(def table-client (-m-get-table-client (environ/env :ss-env)))


(defrecord Env-table-storage [env]
  ss-domain-service-interface/DomainServiceInterface


  (get-product-groups
    [env]
    (log/debug "ENTER get-product-groups")
    (let [table-query (TableQuery/from simpleserver.util.azuregenclass.productgroup)
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
    (let [table-filter (TableQuery/generateFilterCondition "RowKey" TableQuery$QueryComparisons/EQUAL (str pg-id))
          table-query (TableQuery/from simpleserver.util.azuregenclass.product)
          table-query (. table-query where table-filter)
          product-table (. table-client getTableReference "sseksdevproduct")
          raw-products (. product-table execute table-query)
          result-list (seq (map
                             (fn
                               [item]
                               (seq [(. item getPartitionKey) (. item getRowKey) (. item getTitle) (. item getPrice)]))
                             raw-products))
          ]
      (if (nil? result-list)
        '()
        result-list)))


  (get-product
    [env pg-id p-id]
    (log/debug (str "ENTER get-product, pg-id: " pg-id ", p-id: " p-id))
    (log/debug (str "NOT IMPLEMENTED YET"))
    ))

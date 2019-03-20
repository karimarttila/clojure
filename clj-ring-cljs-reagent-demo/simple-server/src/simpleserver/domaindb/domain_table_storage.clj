(ns simpleserver.domaindb.domain-table-storage
  (:import (com.microsoft.azure.storage CloudStorageAccount)
           (com.microsoft.azure.storage.table CloudTableClient)
           (com.microsoft.azure.storage.table TableOperation)
           (com.microsoft.azure.storage.table TableQuery TableQuery$QueryComparisons)
           (com.microsoft.azure.storage.table TableQuery TableQuery$Operators))
  (:require
    [clojure.data.csv :as csv]
    [clojure.java.io :as io]
    [clojure.string :as str]
    [clojure.tools.logging :as log]
    [environ.core :as environ]
    [simpleserver.util.azure-utils :as ss-azure-utils]
    [simpleserver.domaindb.domain-service-interface :as ss-domain-service-interface])
  )


;; Table-client is bound once so that we call the slow multimethod gets called only once (instead of calling it every time in the defrecord functions).
(def table-client (ss-azure-utils/get-table-client))


(defrecord Env-table-storage [env]
  ss-domain-service-interface/DomainServiceInterface


  (get-product-groups
    [env]
    (log/debug "ENTER get-product-groups")
    (let [my-env (environ/env :my-env)
          my-prefix (environ/env :azure-table-prefix)
          table-query (TableQuery/from simpleserver.util.azure.tableserviceentity.ProductGroup)
          productgroup-table (. table-client getTableReference (str my-prefix my-env "productgroup"))
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
    (let [table-filter (TableQuery/generateFilterCondition "PartitionKey" TableQuery$QueryComparisons/EQUAL (str pg-id))
          table-query (TableQuery/from simpleserver.util.azure.tableserviceentity.Product)
          table-query (. table-query where table-filter)
          my-env (environ/env :my-env)
          my-prefix (environ/env :azure-table-prefix)
          product-table (. table-client getTableReference (str my-prefix my-env "product"))
          raw-products (. product-table execute table-query)
          result-list (seq (map
                             (fn
                               [item]
                               (seq [(. item getRowKey) (. item getPartitionKey) (. item getTitle) (. item getPrice)]))
                             raw-products))]
      (if (nil? result-list)
        '()
        result-list)))


  (get-product
    [env pg-id p-id]
    (log/debug (str "ENTER get-product, pg-id: " pg-id ", p-id: " p-id))
    (let [table-filter-rowkey (TableQuery/generateFilterCondition "RowKey" TableQuery$QueryComparisons/EQUAL (str p-id))
          table-filter-partitionkey (TableQuery/generateFilterCondition "PartitionKey" TableQuery$QueryComparisons/EQUAL (str pg-id))
          table-filter (TableQuery/combineFilters table-filter-rowkey TableQuery$Operators/AND table-filter-partitionkey)
          table-query (TableQuery/from simpleserver.util.azure.tableserviceentity.Product)
          table-query (. table-query where table-filter)
          my-env (environ/env :my-env)
          my-prefix (environ/env :azure-table-prefix)
          product-table (. table-client getTableReference (str my-prefix my-env "product"))
          items (. product-table execute table-query)
          product (first items)]
      (if (nil? product)
        nil
        [(. product getRowKey) (. product getPartitionKey) (. product getTitle) (. product getPrice) (. product getAorD) (. product getYear) (. product getCountry) (. product getGorL)]))))


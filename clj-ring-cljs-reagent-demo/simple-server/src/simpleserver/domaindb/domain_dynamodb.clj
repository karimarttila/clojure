(ns simpleserver.domaindb.domain-dynamodb
  (:require
    [clojure.java.io :as io]
    [clojure.string :as str]
    [clojure.tools.logging :as log]
    [amazonica.aws.dynamodbv2 :as dynamodb]
    [environ.core :as environ]
    [simpleserver.domaindb.domain-service-interface :as ss-domain-service-interface]
    [simpleserver.util.aws-utils :as ss-aws-utils]))

;; Test connection in REPL: (amazonica.aws.dynamodbv2/list-tables local-dynamodb-config)
;=> {:table-names ["sseks-dev-product" "sseks-dev-product-group" "sseks-dev-session" "sseks-dev-users"]}



;; NOTE: We are skipping the pagination here since this is an exercise and
;; we know that the query results will always be less than 1MB.
;; See: https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/Query.html#Query.Pagination
;; In real life we should anticipate pagination and also test it.

(defrecord Env-dynamodb [ssenv]
  ss-domain-service-interface/DomainServiceInterface

  (get-product-groups
    [ssenv]
    (log/debug "ENTER get-product-groups")
    (let [my-env (environ/env :my-env)
          my-table-prefix (environ/env :ss-table-prefix)
          my-table (str my-table-prefix "-" my-env "-product-group")
          ret (dynamodb/scan (ss-aws-utils/get-dynamodb-config) :table-name my-table)
          items (ret :items)]
      (reduce
        (fn
          [mymap item]
          (conj mymap {(item :pgid) (item :pgname)}))
        {}
        items)))

  (get-products
    [ssenv pg-id]
    (log/debug (str "ENTER get-products, pg-id: " pg-id))
    (let [my-env (environ/env :my-env)
          my-table-prefix (environ/env :ss-table-prefix)
          my-table (str my-table-prefix "-" my-env "-product")
          ret (dynamodb/query (ss-aws-utils/get-dynamodb-config)
                              :table-name my-table
                              :select "ALL_PROJECTED_ATTRIBUTES"
                              :index-name "PGIndex"
                              :key-conditions {:pgid {:attribute-value-list [(str pg-id)]
                                                      :comparison-operator  "EQ"}})
          items (ret :items)
          result-list (seq (map
                             (fn
                               [item]
                               (seq [(item :pid) (item :pgid) (item :title) (item :price)]))
                             items))]
      (if (nil? result-list)
        '()
        result-list)))


  (get-product
    [ssenv pg-id p-id]
    (log/debug (str "ENTER get-product, pg-id: " pg-id ", p-id: " p-id))
    (let [my-env (environ/env :my-env)
          my-table-prefix (environ/env :ss-table-prefix)
          my-table (str my-table-prefix "-" my-env "-product")
          ret (dynamodb/query (ss-aws-utils/get-dynamodb-config)
                              :table-name my-table
                              :select "ALL_ATTRIBUTES"
                              :key-conditions {:pgid {:attribute-value-list [(str pg-id)]
                                                      :comparison-operator  "EQ"}
                                               :pid  {:attribute-value-list [(str p-id)]
                                                      :comparison-operator  "EQ"}})
          items (ret :items)
          product (first items)]

      (if (nil? product)
        nil
        [(product :pid) (product :pgid) (product :title) (product :price) (product :a_or_d) (product :year) (product :country) (product :g_or_l)]))))

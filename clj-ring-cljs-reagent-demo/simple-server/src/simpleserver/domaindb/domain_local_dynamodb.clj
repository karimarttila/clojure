(ns simpleserver.domaindb.domain-local-dynamodb
  (:require
    [clojure.java.io :as io]
    [clojure.string :as str]
    [clojure.tools.logging :as log]
    [amazonica.aws.dynamodbv2 :as dynamodb]
    [environ.core :refer [env]]
    [simpleserver.domaindb.domain-service-interface :as ss-domain-service-interface]))

;; Test connection in REPL: (amazonica.aws.dynamodbv2/list-tables local-dynamodb-config)
;=> {:table-names ["sseks-dev-product" "sseks-dev-product-group" "sseks-dev-session" "sseks-dev-users"]}

(def local-dynamodb-config {:access-key (env :access-key)
                            :secret-key (env :secret-key)
                            :endpoint   (env :endpoint)})

;; NOTE: We are skipping the pagination here since this is an exercise and
;; we know that the query results will always be less than 1MB.
;; See: https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/Query.html#Query.Pagination
;; In real life we should anticipate and test pagination.

(defrecord Env-local-dynamodb [env]
  ss-domain-service-interface/DomainServiceInterface

  (get-product-groups
    [env]
    (log/debug "ENTER get-product-groups")
    (let [ret (dynamodb/scan local-dynamodb-config :table-name "sseks-dev-product-group")
          items (ret :items)]
      (reduce
        (fn [mymap item]
          (conj mymap {(item :pgid) (item :pgname)}))
        {}
        items)))

  (get-products
    [env pg-id]
    (log/debug (str "ENTER get-products, pg-id: " pg-id))
    (let [ret (dynamodb/query local-dynamodb-config :table-name "sseks-dev-product" :select "ALL_ATTRIBUTES" :key-conditions
                              {:pgid {:attribute-value-list [(str pg-id)] :comparison-operator "EQ"}})
          items (ret :items)
          result-list (seq (map (fn [item] (seq [(item :pid) (item :pgid) (item :title) (item :price)])) items))]
      (if (nil? result-list)
        '()
        result-list)))


  (get-product
    [env pg-id p-id]
    (log/debug (str "ENTER get-product, pg-id: " pg-id ", p-id: " p-id))
    (let [ret (dynamodb/query local-dynamodb-config :table-name "sseks-dev-product" :select "ALL_ATTRIBUTES" :key-conditions
                {:pgid {:attribute-value-list [(str pg-id)] :comparison-operator "EQ"}
                 :pid {:attribute-value-list [(str p-id)] :comparison-operator "EQ"}}
                )
          items (ret :items)
          product (first items)]

      (if (nil? product)
        nil
        [(product :pid)(product :pgid)(product :title)(product :price)(product :a_or_d)(product :year)(product :country)(product :g_or_l)]))))

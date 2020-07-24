(ns simpleserver.service.domain.domain-postgres
  (:require [simpleserver.service.domain.domain-interface :as ss-domain-i]
            [hugsql.core :as hugsql]
            [clojure.tools.logging :as log]))


(declare sql-get-product-groups)
(declare sql-get-products)
(declare sql-get-product)

(hugsql/def-db-fns "simpleserver/service/domain/domain-postgres.sql" {:quoting :ansi})

()

(defrecord PostgresR [db]
  ss-domain-i/DomainInterface

  (get-product-groups
    [_ _]
    (log/debug "ENTER get-product-groups")
    (let [raw (sql-get-product-groups db)]
      (reduce (fn [acc kv]
                (let [id (:id kv)
                      name (:name kv)]
                  (assoc acc id name)))
              {} raw)))

  (get-products
    [_ _ pg-id]
    (log/debug (str "ENTER get-products, pg-id: " pg-id))
    (let [raw (sql-get-products db {:pg-id (str pg-id)})]
      (map (fn [kv]
             [(:id kv) (:pg_id kv) (:title kv) (.toPlainString (.stripTrailingZeros (:price kv)))])
           raw)))

  (get-product
    [_ _ pg-id p-id]
    (log/debug (str "ENTER get-product, pg-id: " pg-id ", p-id: " p-id))
    ))


(comment
  (simpleserver.test-config/go)
  (simpleserver.test-config/test-env)
  (let [db (get-in (simpleserver.test-config/test-env) [:service :domain :db])]
    (sql-get-products db {:pg-id (str 2)}))
  )
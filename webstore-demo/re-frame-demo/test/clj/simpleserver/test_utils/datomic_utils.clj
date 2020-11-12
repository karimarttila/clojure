(ns simpleserver.test-utils.datomic-utils
  (:require [simpleserver.test-utils.test-data :as test-data]
            [simpleserver.test-utils.test-service :as test-service]
            [clojure.tools.logging :as log]
            [datomic.api :as d])
  )


;; ******************************************************
;; Domain

(defn- init-product-groups-table [conn product-groups]
  (log/debug "ENTER init-product-groups-table")
  (let [product-group-datoms (mapv
                               (fn [item]
                                 (let [k (key item)
                                       v (val item)]
                                   {:domain.product-group/id (Long/parseLong k)
                                    :domain.product-group/name v}))
                               product-groups)]
    @(d/transact conn product-group-datoms)))

(defn- init-product-table [conn products]
  (log/debug "ENTER init-product-table")
  (let [product-datoms (mapv (fn [product]
                               (let [p-id (Long/parseLong (nth product 0))
                                     pg-id (Long/parseLong (nth product 1))
                                     title (nth product 2)
                                     price (Double/parseDouble (nth product 3))
                                     a_or_d (nth product 4)
                                     year (Long/parseLong (nth product 5))
                                     country (nth product 6)
                                     g_or_l (nth product 7)
                                     ]
                                 {:domain.product/id p-id
                                  :domain.product/pg-id pg-id
                                  :domain.product/title title
                                  :domain.product/price price
                                  :domain.product/a_or_d a_or_d
                                  :domain.product/year year
                                  :domain.product/country country
                                  :domain.product/g_or_l g_or_l}))
                             products)]
    @(d/transact conn product-datoms)))

(defn- empty-domain-tables [conn]
  (log/debug "ENTER empty-domain-tables"))

(defmethod test-service/init-domain :datomic [env]
  (log/debug "ENTER init-domain")
  (if (= (:profile env) :test)
    (let [conn (get-in env [:service :domain :conn])]
      (empty-domain-tables conn)
      (init-product-groups-table conn (test-data/product-groups))
      (doseq [pg-id (keys (test-data/product-groups))]
        (let [products (test-data/raw-products pg-id)]
          (init-product-table conn products))))
    (throw (java.lang.UnsupportedOperationException. "You can reset domain only in test environment!"))))


(comment

  (simpleserver.test-config/go)
  (simpleserver.test-config/test-env)
  (test-service/init-domain (simpleserver.test-config/test-env))
  (simpleserver.test-config/halt)

  (test-data/raw-products "2")

  (d/q '[:find ?name
         :where [_ :domain.product-group/name ?name]]
       (d/db (get-in (simpleserver.test-config/test-env) [:service :domain :conn])))
  (d/q '[:find ?title
         :where [_ :domain.product/title ?title]]
       (d/db (get-in (simpleserver.test-config/test-env) [:service :domain :conn])))

  )


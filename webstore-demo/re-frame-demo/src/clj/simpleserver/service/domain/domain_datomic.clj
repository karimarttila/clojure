(ns simpleserver.service.domain.domain-datomic
  (:require [simpleserver.service.domain.domain-interface :as ss-domain-i]
            [datomic.api :as d]
            [clojure.tools.logging :as log]))


(defrecord DatomicR [conn]
  ss-domain-i/DomainInterface

  (get-product-groups
    [_ _]
    (log/debug "ENTER get-product-groups")
    (let [raw-pg (d/q '[:find ?id ?name
                        :where [?e :domain.product-group/id ?id]
                        [?e :domain.product-group/name ?name]]
                      (d/db conn))]
      (reduce (fn [acc [id name]]
                (assoc acc (str id) name))
              {}
              raw-pg)))

  (get-products
    [_ _ pg-id]
    (log/debug (str "ENTER get-products, pg-id: " pg-id))
    (let [pg-id (if (string? pg-id) (Long/parseLong pg-id) pg-id)
          raw-products (d/q '[:find ?id ?pg-id ?title ?price
                              :in $ ?pg-id
                              :where
                              [?e :domain.product/id ?id]
                              [?e :domain.product/pg-id ?pg-id]
                              [?e :domain.product/title ?title]
                              [?e :domain.product/price ?price]]
                            (d/db conn) pg-id)]
      (map (fn [[p-id pg-id title price]]
         [(str p-id) (str pg-id) title (str price)]) raw-products)))

  (get-product
    [_ _ pg-id p-id]
    (log/debug (str "ENTER get-product, pg-id: " pg-id ", p-id: " p-id))
    (let [pg-id (if (string? pg-id) (Long/parseLong pg-id) pg-id)
          p-id (if (string? p-id) (Long/parseLong p-id) p-id)
          raw-product (d/q '[:find ?id ?pg-id ?title ?price ?a_or_d ?year ?country ?g_or_l
                             :in $ ?pg-id ?id
                             :where
                             [?e :domain.product/id ?id]
                             [?e :domain.product/pg-id ?pg-id]
                             [?e :domain.product/title ?title]
                             [?e :domain.product/price ?price]
                             [?e :domain.product/a_or_d ?a_or_d]
                             [?e :domain.product/year ?year]
                             [?e :domain.product/country ?country]
                             [?e :domain.product/g_or_l ?g_or_l]]
                           (d/db conn) pg-id p-id)]
      (first (map (fn [[id pg-id title price a_or_d year country g_or_l]]
                    [(str id) (str pg-id) title (str price) a_or_d (str year) country g_or_l])
                  raw-product)))))

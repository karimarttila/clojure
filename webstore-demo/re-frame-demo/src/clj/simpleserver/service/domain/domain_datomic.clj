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
    )

  (get-product
    [_ _ pg-id p-id]
    (log/debug (str "ENTER get-product, pg-id: " pg-id ", p-id: " p-id))
    ))

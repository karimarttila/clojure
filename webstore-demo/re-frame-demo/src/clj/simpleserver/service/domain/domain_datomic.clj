(ns simpleserver.service.domain.domain-datomic
  (:require [simpleserver.service.domain.domain-interface :as ss-domain-i]
            [datomic.api :as d]
            [clojure.tools.logging :as log]))


(defrecord DatomicR [conn]
  ss-domain-i/DomainInterface

  (get-product-groups
    [_ _]
    (log/debug "ENTER get-product-groups")
    )

  (get-products
    [_ _ pg-id]
    (log/debug (str "ENTER get-products, pg-id: " pg-id))
    )

  (get-product
    [_ _ pg-id p-id]
    (log/debug (str "ENTER get-product, pg-id: " pg-id ", p-id: " p-id))
    ))

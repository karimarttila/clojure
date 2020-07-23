(ns simpleserver.service.domain.domain-postgres
  (:require [simpleserver.service.domain.domain-interface :as ss-domain-i]
            [clojure.tools.logging :as log]))

(defrecord PostgresR [db]
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

(ns simpleserver.service.domain.domain-csv
  (:require
    [clojure.tools.logging :as log]
    [simpleserver.service.domain.domain-interface :as ss-domain-i]))

(defrecord CsvR [db]
  ss-domain-i/DomainInterface

  (get-product-groups
    [_ _]
    (log/debug "ENTER get-product-groups")
    (if-let [product-groups (get-in @db [:domain :product-groups])]
      product-groups
      {}))

  (get-products
    [_ _ pg-id]
    (log/debug (str "ENTER get-products, pg-id: " pg-id))
    (let [my-key (str "pg-" pg-id "-raw-products")]
      (if-let [raw-products (get-in @db [:domain my-key])]
        (map
          (fn [item]
            (take 4 item)) raw-products))))

  (get-product
    [_ _ pg-id p-id]
    (log/debug (str "ENTER get-product, pg-id: " pg-id ", p-id: " p-id))
    (let [my-key (str "pg-" pg-id "-raw-products")
          raw-products (get-in @db [:domain my-key])]
      (first (filter (fn [item]
                       (let [id (first item)]
                         (= id (str p-id))))
                     raw-products)))))


;; Rich comment.
#_(comment
    (user/system)
    (user/env)
    (simpleserver.service.domain.domain-service/get-product-groups (user/env))
    (simpleserver.service.domain.domain-service/get-products (user/env) 2)
    (simpleserver.service.domain.domain-service/get-product (user/env) 2 49)
    )

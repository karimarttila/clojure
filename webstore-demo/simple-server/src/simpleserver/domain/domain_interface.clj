(ns simpleserver.domain.domain-interface)


(defprotocol DomainInterface
  (get-product-groups [env]
    "Gets product groups")
  (get-products [env pg-id]
    "Gets products for a product group, returns list of items: [p-id, pg-id, name, price]")
  (get-product [env pg-id p-id]
    "Gets product info for a product, returned item varies related to product group")
  )


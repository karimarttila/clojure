(ns simpleserver.domain.domain-interface)


(defprotocol DomainInterface
  (get-product-groups [this]
    "Gets product groups")
  (get-products [this pg-id]
    "Gets products for a product group, returns list of items: [p-id, pg-id, name, price]")
  (get-product [this pg-id p-id]
    "Gets product info for a product, returned item varies related to product group")
  )


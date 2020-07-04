(ns simpleserver.service.domain.domain-interface
  "Domain interface. Use only through domain service.")

(defprotocol DomainInterface
  (get-product-groups [this env]
    "Gets product groups")
  (get-products [this env pg-id]
    "Gets products for a product group, returns list of items: [p-id, pg-id, name, price]")
  (get-product [this env pg-id p-id]
    "Gets product info for a product, returned item varies related to product group"))


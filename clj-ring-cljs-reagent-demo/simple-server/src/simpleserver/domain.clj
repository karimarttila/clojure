(ns simpleserver.domain
  (:require
    [clojure.data.csv :as csv]
    [clojure.java.io :as io]
    [clojure.string :as str]
    [clojure.tools.logging :as log]))




; Store all domain objects to this cache once read from csv files.
(def my-domain-atom (atom {}))

(defn get-product-groups
  "Get product groups"
  []
  (log/trace "ENTER get-product-groups")
  (if-let [product-groups (@my-domain-atom :product-groups)]
    product-groups
    (let [raw (with-open [reader (io/reader "resources/product-groups.csv")]
                (doall
                  (csv/read-csv reader)))
          product-groups-from-file (into {} (map
                                              (fn [[item]]
                                                (str/split item #"\t"))
                                              raw))]
      (swap! my-domain-atom assoc :product-groups product-groups-from-file)
      product-groups-from-file)))


(defn get-products
  "Get products for a product group"
  [pg-id]
  (log/trace "ENTER get-products, pg-id: " pg-id)
  (let [my-key (str "pg-" pg-id "-products")]
    (if-let [products (@my-domain-atom my-key)]
      products
      (let [raw (with-open [reader (io/reader (str "resources/pg-" pg-id "-products.csv"))]
                  (doall
                    (csv/read-csv reader)))
            products-from-file (into [] (map
                                          (fn [[item]]
                                            (str/split item #"\t"))
                                          raw))]
        (swap! my-domain-atom assoc my-key products-from-file)
        products-from-file)))
  )
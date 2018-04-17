(ns simpleserver.domain
  (:require
    [clojure.data.csv :as csv]
    [clojure.java.io :as io]
    [clojure.string :as str]
    [clojure.tools.logging :as log])
  )


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
      (let [raw (try
                  (with-open [reader (io/reader (str "resources/pg-" pg-id "-products.csv"))]
                    (doall
                      (csv/read-csv reader)))
                  (catch java.io.FileNotFoundException e nil))
            products-from-file (and raw (into [] (map
                                                   (fn [[item]]
                                                     (str/split item #"\t"))
                                                   raw)))]
        (if products-from-file
          (do
            (swap! my-domain-atom assoc my-key products-from-file)
            products-from-file)
          nil)))))

(defn get-product
  "Gets product info for a product"
  [pg-id p-id]
  (let [products (get-products pg-id)]
    (first (filter (fn [item]
                     (let [id (first item)]
                       (= id (str p-id))))
                   products))))
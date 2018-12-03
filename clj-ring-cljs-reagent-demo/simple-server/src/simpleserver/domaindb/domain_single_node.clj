(ns simpleserver.domaindb.domain-single-node
  (:require
    [clojure.data.csv :as csv]
    [clojure.java.io :as io]
    [clojure.string :as str]
    [clojure.tools.logging :as log]
    [simpleserver.domaindb.domain-service-interface :as ss-domain-service-interface]))


(def my-domain-atom
  "Stores all domain objects into this cache once read from csv files."
  (atom {}))

(defn -get-raw-products
  "Gets raw products for a product group, returns the whole product information for each product."
  [pg-id]
  (log/debug (str "ENTER get-raw-products, pg-id: " pg-id))
  (let [my-key (str "pg-" pg-id "-raw-products")]
    (if-let [raw-products (@my-domain-atom my-key)]
      raw-products
      (let [raw-products-from-file
            (try
              (with-open [reader (io/reader (str "resources/pg-" pg-id "-products.csv"))]
                (doall
                  (csv/read-csv reader :separator \tab)))
              (catch java.io.FileNotFoundException e nil))]
        (if raw-products-from-file
          (do
            (swap! my-domain-atom assoc my-key raw-products-from-file)
            raw-products-from-file)
          nil)))))


(defrecord Env-single-node [env]
  ss-domain-service-interface/DomainServiceInterface

  (get-product-groups
    [env]
    (log/debug "ENTER get-product-groups")
    (if-let [product-groups (@my-domain-atom :product-groups)]
      product-groups
      (let [raw (with-open [reader (io/reader "resources/product-groups.csv")]
                  (doall
                    (csv/read-csv reader)))
            product-groups-from-file (into {}
                                           (map
                                             (fn [[item]]
                                               (str/split item #"\t"))
                                             raw))]
        (swap! my-domain-atom assoc :product-groups product-groups-from-file)
        product-groups-from-file)))

  (get-products
    [env pg-id]
    (log/debug (str "ENTER get-products, pg-id: " pg-id))
    (let [my-key (str "pg-" pg-id "-products")]
      (if-let [products (@my-domain-atom my-key)]
        products
        (let [raw (-get-raw-products pg-id)
              products-from-file (and raw
                                      (map
                                        (fn [item]
                                          (take 4 item)) raw))]
          (if products-from-file
            (do
              (swap! my-domain-atom assoc my-key products-from-file)
              products-from-file)
            nil)))))


  (get-product
    [env pg-id p-id]
    (log/debug (str "ENTER get-product, pg-id: " pg-id ", p-id: " p-id))
    (let [products (-get-raw-products pg-id)]
      (first (filter (fn [item]
                       (let [id (first item)]
                         (= id (str p-id))))
                     products)))))

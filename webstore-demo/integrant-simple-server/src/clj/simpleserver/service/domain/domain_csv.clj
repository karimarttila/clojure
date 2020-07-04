(ns simpleserver.service.domain.domain-csv
  (:require
    [clojure.data.csv :as csv]
    [clojure.java.io :as io]
    [clojure.string :as str]
    [clojure.tools.logging :as log]
    [simpleserver.service.domain.domain-interface :as ss-domain-i])
  (:import (java.io FileNotFoundException)))

(defonce my-domain-atom (atom {}))

(defn -get-raw-products
  "Gets raw products for a product group, returns the whole product information for each product."
  [data-dir pg-id]
  (log/debug (str "ENTER get-raw-products, pg-id: " pg-id))
  (let [my-key (str "pg-" pg-id "-raw-products")]
    (if-let [raw-products (@my-domain-atom my-key)]
      raw-products
      (let [raw-products-from-file
            (try
              (with-open [reader (io/reader (str data-dir "/pg-" pg-id "-products.csv"))]
                (doall
                  (csv/read-csv reader :separator \tab)))
              (catch FileNotFoundException _ nil))]
        (if raw-products-from-file
          (do
            (swap! my-domain-atom assoc my-key raw-products-from-file)
            raw-products-from-file)
          nil)))))


(defrecord CsvR [data-dir]
  ss-domain-i/DomainInterface

  (get-product-groups
    [_ _]
    (log/debug "ENTER get-product-groups")
    (if-let [product-groups (@my-domain-atom :product-groups)]
      product-groups
      (let [raw (with-open [reader (io/reader (str data-dir "/product-groups.csv"))]
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
    [_ _ pg-id]
    (log/debug (str "ENTER get-products, pg-id: " pg-id))
    (let [my-key (str "pg-" pg-id "-products")]
      (if-let [products (@my-domain-atom my-key)]
        products
        (let [raw (-get-raw-products data-dir pg-id)
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
    [_ _ pg-id p-id]
    (log/debug (str "ENTER get-product, pg-id: " pg-id ", p-id: " p-id))
    (let [products (-get-raw-products data-dir pg-id)]
      (first (filter (fn [item]
                       (let [id (first item)]
                         (= id (str p-id))))
                     products)))))


;; Rich comment.
#_(comment
  (:simpleserver.core/config (user/system))
  (get-in (user/system) [:simpleserver.core/config :db :csv :data-dir])
  (-get-raw-products (get-in (user/system) [:simpleserver.core/config :db :csv :data-dir]) 2)

  (def jee (str "asdf"))
  )

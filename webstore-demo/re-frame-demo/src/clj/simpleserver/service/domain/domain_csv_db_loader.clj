(ns simpleserver.service.domain.domain-csv-db-loader
  "Loads the data from csv into memory-db."
  (:require
    [clojure.tools.logging :as log]
    [clojure.data.csv :as csv]
    [clojure.java.io :as io]
    [clojure.string :as str])
  (:import (java.io FileNotFoundException)))

(defn load-product-groups [data-dir db]
  (log/debug (str "ENTER load-product-groups"))
  (let [raw (with-open [reader (io/reader (str data-dir "/product-groups.csv"))]
              (doall
                (csv/read-csv reader)))
        product-groups (into {}
                                       (map
                                         (fn [[item]]
                                           (str/split item #"\t"))
                                         raw))]
    (swap! db update-in [:domain :product-groups] (constantly product-groups))
    product-groups))

(defn load-raw-products [data-dir db pg-id]
  (log/debug (str "ENTER load-raw-products, pg-id: " pg-id))
  (let [my-key (str "pg-" pg-id "-raw-products")
        raw-products-from-file (try
            (with-open [reader (io/reader (str data-dir "/pg-" pg-id "-products.csv"))]
              (doall
                (csv/read-csv reader :separator \tab)))
            (catch FileNotFoundException _ nil))]
    (if raw-products-from-file
      (swap! db update-in [:domain my-key] (constantly raw-products-from-file)))
    raw-products-from-file))

(defn load-products [data-dir db product-groups]
  (doseq [pg-id (keys product-groups)]
    (load-raw-products data-dir db pg-id)))

(defn load-csv-db [{:keys [data-dir db]}]
  (let [product-groups (load-product-groups data-dir db)]
    (load-products data-dir db product-groups)))


#_(comment
  (user/system)
  (user/env)
  )
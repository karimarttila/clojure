(ns simpleserver.service.domain.domain-datomic-loader
  "Loads the data from csv into Datomic dev-local db."
  (:require
    [clojure.tools.logging :as log]
    [clojure.data.csv :as csv]
    [clojure.java.io :as io]
    [clojure.string :as str])
  )

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
    ; TODO (swap! db update-in [:domain :product-groups] (constantly product-groups))
    product-groups))




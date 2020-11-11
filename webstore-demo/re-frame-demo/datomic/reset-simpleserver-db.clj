(require '[datomic.api :as d])
(println "**********************************")
(println "Starting to reset Simpleserver databases...")
(def db-uri "datomic:dev://localhost:4334/simpleserver")
(def test-db-uri "datomic:dev://localhost:4334/simpleserver_test")
(println "Listing databases before reset...")
(d/get-database-names "datomic:dev://localhost:4334/*")
(println "Deleting databases...")
(d/delete-database db-uri)
(d/delete-database test-db-uri)
(println "Listing databases after deletes...")
(d/get-database-names "datomic:dev://localhost:4334/*")
(println "Creating databases...")
(d/create-database db-uri)
(d/create-database test-db-uri)
(println "Listing databases after creations...")
(d/get-database-names "datomic:dev://localhost:4334/*")
(def exercise-dir "/a/prs/github/clojure/webstore-demo/re-frame-demo")
(def ss-schema (read-string (slurp (str exercise-dir "/datomic/simpleserver-schema.edn"))))
(def ss-conn (d/connect db-uri))
(def test-ss-conn (d/connect test-db-uri))
@(d/transact ss-conn ss-schema)
@(d/transact test-ss-conn ss-schema)

(require '[clojure.java.io :as io]
         '[clojure.data.csv :as csv]
         '[clojure.string :as str])

(defn load-product-groups []
    (let [raw (with-open [reader (io/reader (str exercise-dir
                                                 "/resources/data"
                                                 "/product-groups.csv"))]
                (doall
                  (csv/read-csv reader)))]
      (into []
            (map
              (fn [[item]]
                (let [[k v] (str/split item #"\t")]
                  {:id (Long/parseLong k) :name v}))
              raw))))

(defn get-product-group-datoms [product-groups]
    (mapv (fn [product-group]
            (let [id (:id product-group)
                  name (:name product-group)]
              {:domain.product-group/id id
               :domain.product-group/name name}))
          product-groups))

(def product-groups (load-product-groups))
(def product-group-datoms (get-product-group-datoms product-groups))

@(d/transact ss-conn product-group-datoms)

(defn load-raw-products [pg-id]
    (with-open [reader (io/reader
                         (str exercise-dir
                              "/resources/data" "/pg-" pg-id "-products.csv"))]
      (doall
        (csv/read-csv reader :separator \tab))))

(defn get-product-datoms [product-groups]
    (let [pg-ids (map :id (load-product-groups))
          raw-products (mapcat load-raw-products pg-ids)]
      (mapv (fn [product]
            (let [p-id (Long/parseLong (nth product 0))
                  pg-id (Long/parseLong (nth product 1))
                  title (nth product 2)
                  price (Double/parseDouble (nth product 3))
                  a_or_d (nth product 4)
                  year (Long/parseLong (nth product 5))
                  country (nth product 6)
                  g_or_l (nth product 7)
                  ]
              {:domain.product/id p-id
               :domain.product/pg-id pg-id
               :domain.product/title title
               :domain.product/price price
               :domain.product/a_or_d a_or_d
               :domain.product/year year
               :domain.product/country country
               :domain.product/g_or_l g_or_l}))
          raw-products)))

(def product-datoms (get-product-datoms product-groups))

@(d/transact ss-conn product-datoms)

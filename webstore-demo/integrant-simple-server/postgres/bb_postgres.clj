(ns bb-postgres
  "Loads the data from csv into Postgres.
   Used with babashka to initialize development Postgres database."
  (:require
    [clojure.data.csv :as csv]
    [clojure.java.io :as io]
    [clojure.string :as str]
    [clojure.java.shell :as sh]))

(defn run-sql [command]
  (sh/sh "psql" "--host" "localhost" "--port" "5532" "--username=simpleserver" "--dbname=simpleserver" "-c" command))

(defn get-product-groups [data-dir]
  (let [raw (with-open [reader (io/reader (str data-dir "/product-groups.csv"))]
              (doall
                (csv/read-csv reader)))
        product-groups (into {}
                             (map
                               (fn [[item]]
                                 (str/split item #"\t"))
                               raw))]
    product-groups))

(defn insert-product-group! [product-group]
  (println "Inserting product-group: " product-group)
  (let [[id name] product-group
        command (str "INSERT INTO product_group VALUES ('" id "', '" name "');")]
    (run-sql command)))

(defn load-product-groups [product-groups]
  (doseq [pg product-groups]
    (insert-product-group! pg)))

(defn get-raw-products [data-dir pg-id]
  (let [raw-products-from-file (try
                                 (with-open [reader (io/reader (str data-dir "/pg-" pg-id "-products.csv"))]
                                   (doall
                                     (csv/read-csv reader :separator \tab))))]
    raw-products-from-file))

(defn insert-product! [product]
  (println "Inserting product: " product)
  (let [[p-id pg-id title price a-or-d year country g-or-l] product
        command (str "INSERT INTO product VALUES ('"
                     p-id "', '"
                     pg-id "' , '"
                     (clojure.string/replace title #"'" "''") "' , '"
                     price "' , '"
                     a-or-d "' , '"
                     year "' , '"
                     country "' , '"
                     g-or-l "' );")]
    (run-sql command)))

(defn load-products [products]
  (doseq [product products]
    (insert-product! product)))


(defn delete-product-groups! []
  (let [command (str "DELETE FROM product_group;")]
    (println "Deleting product groups...")
    (run-sql command))
  )

(defn delete-products! []
  (let [command (str "DELETE FROM product")]
    (println "Deleting products...")
    (run-sql command))
  )

(defn delete-users! []
  (let [command (str "DELETE FROM ssuser")]
    (println "Deleting users...")
    (run-sql command)))

(defn delete-sessions! []
  (let [command (str "DELETE FROM session")]
    (println "Deleting sessions...")
    (run-sql command)))

(defn nextId
  [num]
  (str (inc num)))

(defn get-users [data-dir]
  (let [raw-users (try
                    (with-open [reader (io/reader (str data-dir "/initial-users.csv"))]
                      (doall
                        (csv/read-csv reader :separator \tab))))]
    (reduce (fn [users user]
              (assoc users (first user)
                           {:userid          (nth user 0)
                            :email           (nth user 1)
                            :first-name      (nth user 2)
                            :last-name       (nth user 3)
                            :hashed-password (nth user 4)})) {} raw-users)))


(defn insert-user! [user]
  (println "Inserting user: " user)
  (let [{userid :userid email :email fname :first-name lname :last-name hpwd :hashed-password} user
        command (str "INSERT INTO ssuser VALUES ('"
                     (str userid) "', '"
                     email "', '"
                     fname "', '"
                     lname "', '"
                     hpwd "');")]
    (run-sql command)))

(defn load-users [users]
  (doseq [user users]
    (insert-user! user)))

(comment
  (load-users (vals (get-users data-dir)))
  )

(defn import-data []
  (let [data-dir "dev-resources/data"
        product-groups (get-product-groups data-dir)]
    (delete-products!)
    (delete-product-groups!)
    (delete-users!)
    (delete-sessions!)
    (load-product-groups product-groups)
    (doseq [pg-id (keys product-groups)]
      (let [products (get-raw-products data-dir pg-id)]
        (load-products products)))
    (let [users (get-users data-dir)]
      (load-users (vals users)))))

(defn db-get-all-product-groups []
  (let [command (str "SELECT * FROM product_group;")]
    (run-sql command)))

(defn db-get-all-products []
  (let [command (str "SELECT * FROM product;")]
    (run-sql command)))

(defn run-me
  "Loads data only if running from babashka script which sets the environment variable.
  We don't want the repl to load the data when reloading the namespace.
  In repl experimentation use the rich comment below."
  []
  (let [running-bb? (System/getenv "RUNNING_BB")]
    (if (= running-bb? "TRUE")
      (import-data))))

(run-me)

(comment
  (def data-dir "dev-resources/data")
  (get-raw-products data-dir 2)
  (get-product-groups data-dir)
  (do
    (delete-products!)
    (delete-product-groups!))
  (vals (get-users data-dir))
  (load-users (vals (get-users data-dir)))
  (import-data)
  (db-get-all-product-groups)
  (db-get-all-products)
  )


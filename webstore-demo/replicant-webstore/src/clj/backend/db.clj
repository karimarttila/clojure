(ns backend.db
  (:require [clojure.java.io :as io]
            [clojure.tools.logging :as log]
            [clojure.string :as s]
            [malli.core :as m]
            [malli.transform :as mt]
            [integrant.core :as ig]
            [common.schema :as schema]))


(defn book-line
  "Transforms a vector of book attributes into a map with appropriate keys."
  [[id product-group title price author year country language]]
  (zipmap [:id :product-group :title :price :author :year :country :language]
          [id product-group title price author year country language]))


(defn movie-line
  "Transforms a vector of movie attributes into a map with appropriate keys."
  [[id product-group title price director year country genre]]
  (zipmap [:id :product-group :title :price :director :year :country :genre]
          [id product-group title price director year country genre]))


(defn book-str
  "Coerces the string values of a book map to their appropriate types (id: int, etc.) as defined in the schema."
  [book]
  (m/decode schema/book book mt/string-transformer))


(defn movie-str
  "Coerces the string values of a movie map to their appropriate types (id: int, etc.) as defined in the schema."
  [movie]
  (m/decode schema/movie movie mt/string-transformer))


(defn read-datafile
  "First creates a transducer (xf), which slipts a line into columns, then applies transformation functions to each item.
   Threading: reads the tsv file, splits it into lines, and then applies the xf transducer to each item."
  [file f-line f-str]
  ; xf is a transducer function.
  (let [xf (comp (map #(s/split % #"\t"))
                 (map f-line)
                 (map f-str))]
    (->> file
         (io/resource)
         (slurp)
         (s/split-lines)
         (sequence xf))))


(defmethod ig/init-key :db/tsv [_ {:keys [path data] :as db-opts}]
  (log/infof "Reading tsv data, config is %s" (pr-str db-opts))
  (let [books (read-datafile (str path "/" (:books data)) book-line book-str)
        movies (read-datafile (str path "/" (:movies data)) movie-line movie-str)]
    (atom {:books books
           :movies movies})))


(comment

  (first (read-datafile "data/books.tsv" book-line book-str))

  (->> (user/env)
       keys)
  ;;=> (:db/tsv :web/routes :adapter/jetty)
  (->> (user/env)
       :db/tsv
       ; Deref atom
       deref
       :db
       :movies
       count)
  ;;=> 169
  (->> (user/env)
       :db/tsv
       ; Deref atom
       deref
       :db
       :movies
       first)
;;=> {:id "1",
;;    :product-group "2",
;;    :title "Juurakon Hulda",
;;    :price "82.92",
;;    :director "Valentin Vaala",
;;    :year "1937",
;;    :country "Finland",
;;    :genre "Drama"}


  (->> (user/env)
       :db/tsv
         ; Deref atom
       deref
       :db
       :movies
       first)

  (->> "data/books.tsv"
       (clojure.java.io/resource)
       (slurp)
       (clojure.string/split-lines)
       (map #(clojure.string/split % #"\t"))
       (map books-fn))

  (->> "data/movies.tsv"
       (clojure.java.io/resource)
       (slurp)
       (clojure.string/split-lines)
       (map #(clojure.string/split % #"\t"))
       (map movies-fn)))
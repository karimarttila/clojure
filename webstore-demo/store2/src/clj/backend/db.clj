(ns backend.db
  (:require [clojure.java.io :as io]
            [clojure.tools.logging :as log]
            [clojure.string :as s]
            [integrant.core :as ig]))


(def books-fn (fn [[id product-group title price author year country language]]
                (zipmap [:id :product-group :title :price :author :year :country :language]
                        [id product-group title price author year country language])))


(def movies-fn (fn [[id product-group title price director year country genre]]
                 (zipmap [:id :product-group :title :price :director :year :country :genre]
                         [id product-group title price director year country genre])))


(defn read-datafile [file f]
  (->> file
       (io/resource)
       (slurp)
       (s/split-lines)
       (map #(clojure.string/split % #"\t"))
       (map f)))


(defmethod ig/init-key :db/tsv [_ {:keys [path data] :as db-opts}]
  (log/infof "Reading tsv data, config is %s" (pr-str db-opts))
  (let [books (read-datafile (str path "/" (:books data)) books-fn)
        movies (read-datafile (str path "/" (:movies data)) movies-fn)]
    (atom {:db {:books books
                :movies movies}})))


(comment

  ;; Let's leave the rich comment here,
  ;; readers can see how I developed the functionality.

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
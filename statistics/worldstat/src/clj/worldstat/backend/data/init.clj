(ns worldstat.backend.data.init
  (:require [clojure.java.io :as io]
            [clojure.data.csv :as csv]))


(defn- create-csv-data [csv-file]
  (with-open [reader (io/reader csv-file)]
    (doall
      (csv/read-csv reader))))

(defn- convert-row [row]
  (when (seq (second row))
    (let [metadata {:country-name (nth row 0)
                    :country-code (keyword (nth row 1))
                    :series-name (nth row 2)
                    :series-code (keyword (nth row 3))}
          ; drop metadata, take only years 2002-2017
          year-points (drop 4 row)
          tuples (map (fn [tuple]
                        {:year (first tuple)
                         :value (try
                                  (Double/parseDouble (second tuple))
                                  (catch NumberFormatException _ "N/A"))})
                      (map vector (range 2002 2018) year-points))]
      (map (fn [tuple]
             (merge metadata tuple))
           tuples))))

(defn- get-na-country-codes [points]
  (reduce #(conj %1 (:country-code %2)) #{} (filter #(= "N/A" (:value %)) points)))

(defn- filter-na-countries
  "Remove those countries that have even one N/A as value."
  [points]
  (let [na-country-codes (get-na-country-codes points)]
    (remove #(na-country-codes (:country-code %)) points)))

(defn- convert-all [csv-data]
  (mapcat convert-row (rest csv-data)))

(defn- get-data-points [data-files]
  (-> (flatten (for [file data-files]
                 (-> file
                     create-csv-data
                     convert-all)))
      ; filter-na-countries
      ))

(defn- get-metadata [points]
  (reduce (fn [acc point]
            (let [country (dissoc point :year :value :series-code :series-name)
                  series (dissoc point :year :value :country-code :country-name)
                  year (dissoc point :value :series-code :series-name :country-code :country-name)]
              (-> acc
                  (update-in [:countries] conj country)
                  (update-in [:series] conj series)
                  (update-in [:years] conj (:year year)))))
          {:countries #{}
           :series #{}
           :years #{}}
          points))

(defn get-data [data-files]
  (let [data-points (get-data-points data-files)]
    (merge
      {:data data-points}
      (get-metadata data-points))))

(comment
  (sort (:years (get-metadata (take 10000 (:data (user/data))))))

  )

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
                                  (catch NumberFormatException _ :na))})
                      (map vector (range 2002 2018) year-points))]
      (map (fn [tuple]
             (merge metadata tuple))
           tuples))))

(defn- get-na-country-codes [points]
  (reduce #(conj %1 (:country-code %2)) #{} (filter #(= :na (:value %)) points)))

(defn- filter-na-countries
  "Remove those countries that have even one :na (not available) as value."
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

(defn- series-codes-to-names [series]
  (reduce (fn [acc item]
            (assoc acc (:series-code item) (:series-name item)))
          {}
          series))

(defn- country-codes-to-names [countries]
  (reduce (fn [acc item]
            (assoc acc (:country-code item) (:country-name item)))
          {}
          countries))

(defn get-data [data-files]
  (let [data-points (get-data-points data-files)
        {:keys [countries series years]} (get-metadata data-points)]
    {:data data-points
     :countries countries
     :series series
     :years years
     :country-codes (country-codes-to-names countries)
     :series-codes (series-codes-to-names series)}))

(comment
  (sort (:years (get-metadata (take 10000 (:data (user/data))))))
  (:series (user/data))
  (:years (user/data))
  (:countries (user/data))
  (:country-codes (user/data))
  (:series-codes (user/data))


  )

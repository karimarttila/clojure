(ns vega.backend.data.cars
  (:require [clojure.data.json :as json]
            [clojure.walk :as walk]
            [clj-http.client :as http-client]))

;; Cache it.
(defonce data-cars (atom nil))

(def cars-url "https://raw.githubusercontent.com/vega/vega/master/docs/data/cars.json")

(defn get-cars-data []
  (or @data-cars
      (let [reply (clj-http.client/get cars-url)
            cars (walk/keywordize-keys (json/read-str (:body reply)))
            ; Remove any car if some field is nil.
            not-nil-cars (remove #(some nil? (vals %)) cars)
            ]
        (reset! data-cars not-nil-cars))))


(comment

  @data-cars
  (count (get-cars-data))
  (spit "personal/cars.edn" (pr-str (get-cars-data)))

  (take 5 (get-cars-data))

  (require '[clj-http.client])
  (clj-http.client/get cars-url)

  (first @data-cars)
  (def not-nil? (complement nil?))
  (count (filter #(every? not-nil? (vals %)) @data-cars))
  (count (remove #(some nil? (vals %)) @data-cars))
  (filter (fn [item]
            (nil? (:Miles_per_Gallon item)))
          @data-cars)

  (sort #(compare %2 %1) (map #(:Miles_per_Gallon %) @data-cars))

  )

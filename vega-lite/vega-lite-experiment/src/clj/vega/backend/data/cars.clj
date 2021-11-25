(ns vega.backend.data.cars
  (:require [clj-http.client :as http-client]
            [clojure.data.json :as json]
            [clojure.walk :as walk]))

;; Cache it.
(defonce data-cars (atom nil))

(def cars-url "https://raw.githubusercontent.com/vega/vega/master/docs/data/cars.json")

(defn get-cars-data []
  (or @data-cars
      (let [reply (clj-http.client/get cars-url)
            cars (walk/keywordize-keys (json/read-str (:body reply)))]
        (reset! data-cars cars))))


(comment

  @data-cars
  (count (get-cars-data))

  (require '[clj-http.client])
  (clj-http.client/get cars-url)

  (filter #(not (some? (vals %))) @data-cars)

  )

(ns vega.backend.data.cars
  (:require [clj-http.client :as http-client]
            [clojure.data.json :as json]))


(def cars-url "https://raw.githubusercontent.com/vega/vega/master/docs/data/cars.json")

(defn get-cars-data []
  (let [reply (clj-http.client/get cars-url)]
    (json/read-str (:body reply))))


(comment

  (count (get-cars-data))

  (require '[clj-http.client])
  (clj-http.client/get cars-url)

  )

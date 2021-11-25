(ns vega.backend.data.seattle-weather
  (:require [clojure.data.csv :as csv]
            [clojure.data.json :as json]
            [clojure.string :as str]
            [clojure.walk :as walk]
            [clj-http.client :as http-client]
            [hashp.core]
            [clojure.java.io :as io]
            ))

;; Cache it.
(defonce data-seattle-weather (atom nil))

(def seattle-weather-url "https://raw.githubusercontent.com/vega/vega/master/docs/data/seattle-weather.csv")

(defn csv-data->maps [csv-data]
  (map zipmap
       (->> (first csv-data) ;; First row is the header
            (map keyword) ;; Drop if you want string keys instead
            repeat)
       (rest csv-data)))

(defn convert-to-double [{:keys [date precipitation temp_max temp_min wind weather]}]
  {:date date
   :precipitation (Double/parseDouble precipitation)
   :temp_max (Double/parseDouble temp_max)
   :temp_min (Double/parseDouble temp_min)
   :wind (Double/parseDouble wind)
   :weather weather})

(defn get-seattle-weather-data []
  (or @data-seattle-weather
      (let [reply (clj-http.client/get seattle-weather-url)
            items (csv/read-csv (io/reader (char-array (:body reply))))
            items (->> items
                       csv-data->maps
                       (map convert-to-double))]
        (reset! data-seattle-weather items))))


(comment

  (get-seattle-weather-data)
  (require '[clj-http.client])
  (def yksi-str (:body (clj-http.client/get seattle-weather-url)))
  (def jee (csv/read-csv (io/reader (char-array yksi-str))))
  (csv-data->maps jee)

  (Double/parseDouble "7.2")
  )

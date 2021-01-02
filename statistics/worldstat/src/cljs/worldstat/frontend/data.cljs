(ns worldstat.frontend.data
  (:require [worldstat.common.data.filter :as ws-filter]))

(defn world-schema [points year]
  {:schema "https://vega.github.io/schema/vega-lite/v4.json",
   :width 800
   :height 500
   :data {:url "data/world-110m.json"
          :format {:type "topojson", :feature "countries"}}
   :transform [{:lookup "id"
                :from {:data {:values (transduce (ws-filter/filter-by-year year) conj points)}
                       :key "country-id"
                       :fields ["value"]}}]
   :projection {:type "mercator"}
   :mark "geoshape"
   :encoding {:color {:field "value", :type "quantitative"}}}
  )

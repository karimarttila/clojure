(ns worldstat.backend.data.world
  (:require [clojure.tools.logging :as log]
            [jsonista.core :as jsonista]
            [worldstat.common.data.filter :as wf]))

;; Using the example in https://vega.github.io/vega/examples/world-map/
;; + minor tuning.

(defn enrich-world-data [env metric]
  (-> (slurp "resources/public/data/world-110m.json")
      jsonista/read-value))

#_(defn get-world-schema [env metric]
    {:schema "https://vega.github.io/schema/vega/v5.json"
     :description "A configurable map of countries of the world."
     :autosize "none"
     :width 900
     :marks [{:type "shape"
              :from {:data "graticule"}
              :encode {:update {:strokeWidth {:value 1}
                                :strokeDash {:signal "[+graticuleDash, +graticuleDash]"}
                                :stroke {:signal "invert ? '#444' : '#ddd'"}
                                :fill {:value nil}}}
              :transform [{:type "geoshape" :projection "projection"}]}
             {:type "shape"
              :from {:data "world"}
              :encode {:update {:strokeWidth {:signal "+borderWidth"}
                                :stroke {:signal "invert ? '#777' : '#bbb'"}
                                :fill {:signal "invert ? '#fff' : '#000'"}
                                :zindex {:value 0}}
                       :hover {:strokeWidth {:signal "+borderWidth + 1"}
                               :stroke {:value "firebrick"}
                               :zindex {:value 1}}}
              :transform [{:lookup "id"
                           :from {:data {:url "data/metric.tsv"}
                                  :key "country-id"
                                  :fields ["rate"]}}]
              ;:transform [{:type "geoshape" :projection "projection"}]
              }]
     :projections [{:name "projection"
                    :type {:signal "type"}
                    :scale {:signal "scale"}
                    :rotate [{:signal "rotate0"} {:signal "rotate1"} {:signal "rotate2"}]
                    :center [{:signal "center0"} {:signal "center1"}]
                    :translate [{:signal "translate0"} {:signal "translate1"}]}]
     :signals [{:name "type"
                :value "mercator"}
               {:name "scale"
                :value 150
                :bind {:input "range" :min 50 :max 2000 :step 1}}
               {:name "rotate0"
                :value 0
                :bind {:input "range" :min -180 :max 180 :step 1}}
               {:name "rotate1"
                :value 0}
               {:name "rotate2"
                :value 0}
               {:name "center0"
                :value 0}
               {:name "center1"
                :value 23
                :bind {:input "range" :min -90 :max 90 :step 1}}
               {:name "translate0" :update "width / 2"}
               {:name "translate1" :update "height / 2"}
               {:name "graticuleDash" :value 0}
               {:name "borderWidth" :value 1}
               {:name "background" :value "#ffffff"}
               {:name "invert" :value false}]
     :height 500

     :data [{:name "world"
             ; Slow for some reason.
             ;:values (enrich-world-data env metric)
             :url "data/world-110m.json"
             :format {:type "topojson" :feature "countries"}
             }
            {:name "graticule" :transform [{:type "graticule"}]}
            {:name "metric-data" :points (transduce (w-filter/filter-by-metric metric) conj (get-in env [:data :points]))}
            {:name "country-names" :transform [{:type "graticule"}]}
            ]

     })

#_ (defn get-world-schema [env metric]
  {:schema "https://vega.github.io/schema/vega-lite/v4.json",
   :width 800
   :height 500
   :data {:url "data/world-110m.json"
          :format {:type "topojson", :feature "countries"}}
   :transform [{:lookup "id"
                :from { ;:data {:url "data/metric.tsv"}
                       :data {:values (transduce (comp (wf/filter-by-metric :SP.POP.TOTL) (wf/filter-by-year 2010)) conj (get-in env [:data :points]))}
                       :key "country-id"
                       :fields ["value"]}}]
   :projection {:type "mercator"}
   :mark "geoshape"
   :encoding {:color {:field "value", :type "quantitative"}}}
  )

(defn get-metric-names [env]
  (log/debug "ENTER get-metric-names")
  {:metric-names (get-in env [:data :series-codes])})

(defn get-years [env]
  (log/debug "ENTER get-years")
  {:years (sort (get-in env [:data :years]))})

(defn get-world-data [env metric]
  (log/debug "ENTER get-world-data, metric: " metric)
  {:metric metric
   :points (transduce (comp (wf/filter-by-metric metric)) conj (get-in env [:data :points]))})

(comment
  (keys (:data (user/env)))
  (get-in (user/env) [:data :points])
  )

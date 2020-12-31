(ns worldstat.backend.data.world
  (:require [clojure.tools.logging :as log]
            [jsonista.core :as jsonista]))

;; Using the example in https://vega.github.io/vega/examples/world-map/
;; + minor tuning.

(defn enrich-world-data [metric]
  (-> (slurp "resources/public/data/world-110m.json")
      jsonista/read-value))

(defn get-world-schema [metric]
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
            :transform [{:type "geoshape" :projection "projection"}]}]
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
           ;:values (enrich-world-data metric)
           :url "data/world-110m.json"
           :format {:type "topojson" :feature "countries"}
           }
          {:name "graticule" :transform [{:type "graticule"}]}
          {:name "countries" }
          {:name "country-names" :transform [{:type "graticule"}]}
          ]
   :transform [{:lookup :id}
               :from {:data "TODO"}
               ]


   })

(defn get-world-data [metric]
  (log/debug "ENTER get-world-data, metric: " metric)
  {:metric metric
   :world-data (get-world-schema metric)})

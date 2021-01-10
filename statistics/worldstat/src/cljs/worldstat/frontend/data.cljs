(ns worldstat.frontend.data
  (:require [worldstat.common.data.filter :as ws-filter]))

;; An alternative way to make the map.
;; But missing values must be handled some way.
#_(defn world-schema [points year]
    {:schema "https://vega.github.io/schema/vega-lite/v4.json",
     :width 800
     :height 500
     :data {:url "data/world-110m.json"
            :format {:type "topojson"
                     :feature "countries"}}
     :transform [{:lookup "id"
                  :from {:data {:values (transduce (ws-filter/filter-by-year year) conj points)}
                         :key "country-id"
                         :fields ["value"]}}]
     :projection {:type "mercator"}
     :mark {:type "geoshape"}
     :encoding {:color {:field "value"
                        :type "quantitative"}}})

(defn world-schema [points year metric-name]
  {:schema "https://vega.github.io/schema/vega/v5.json"
   :autosize "none"
   :width 900
   :height 500
   :scales [{:name "color",
             :type "quantize",
             ;:domain {:data "world" :field "value"}
             :domain [min max]
             :range {:scheme "blues", :count 20}}]
   :legends [{:fill "color",
              :orient "bottom-left",
              :title metric-name
              :titleAnchor "start"
              :titleOrient "bottom"
              :format "0"}]
   :marks [{:type "shape"
            :from {:data "graticule"}
            :encode {:update {:strokeWidth {:value 1}
                              :strokeDash {:signal "[+graticuleDash, +graticuleDash]"}
                              :stroke {:signal "invert ? '#444' : '#ddd'"}
                              :fill {:value nil}}}
            :transform [{:type "geoshape" :projection "projection"}]}
           {:type "shape"
            :from {:data "world"}
            :encode {:enter {:tooltip {:signal "format(datum.value, '0.1')"}},
                     :update {:fill {:scale "color", :field "value"}},
                     :hover {:fill {:value "red"}}},
            :transform [{:type "geoshape"
                         :lookup "id"
                         :from {:data {:values (transduce (ws-filter/filter-by-year year) conj points)}
                                :key "country-id"
                                :fields ["value"]}
                         :projection "projection"}]}]
   :projections [{:name "projection"
                  :type {:signal "type"}
                  :scale {:signal "scale"}
                  :rotate [{:signal "rotate0"} {:signal "rotate1"} {:signal "rotate2"}]
                  :center [{:signal "center0"} {:signal "center1"}]
                  :translate [{:signal "translate0"} {:signal "translate1"}]}]
   :signals [{:name "type" :value "mercator"}
             {:name "scale" :value 150
              :bind {:input "range" :min 50 :max 2000 :step 1}}
             {:name "rotate0" :value -8
              :bind {:input "range" :min -180 :max 180 :step 1}}
             {:name "rotate1" :value 0}
             {:name "rotate2" :value 0}
             {:name "center0" :value 0}
             {:name "center1" :value 23}
             {:name "translate0" :update "width / 2"}
             {:name "translate1" :update "height / 2"}
             {:name "graticuleDash" :value 0}
             {:name "borderWidth" :value 1}
             {:name "background" :value "#ffffff"}
             {:name "invert" :value false}]
   :data [{:name "countries"
           :values (transduce (ws-filter/filter-by-year year) conj points)}
          {:name "world"
           :url "data/world-110m.json"
           :format {:type "topojson" :feature "countries"}
           :transform [{:type "lookup"
                        :from "countries"
                        :key "country-id"
                        :fields ["id"]
                        :values ["value" "country-name"]}]}
          {:name "graticule"
           :transform [{:type "graticule"}]}]})



(ns worldstat.frontend.data
  (:require [worldstat.common.data.filter :as ws-filter]))

;; TODO: SÄILYTÄ tämä toimiva versio, kunnes keksit miten nil valuet saa valkoisena ja antarctica pois.
(defn world-schema [points year]
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
                      :type "quantitative"}
              }
   })



;;; TESTAA NÄILLÄ


;; Based on: https://vega.github.io/vega/examples/world-map/
#_(defn world-schema [points year]
  {:schema "https://vega.github.io/schema/vega/v5.json"
   :description "A configurable map of countries of the world."
   :autosize "none"
   :width 900
   :height 500
   :marks [{:type "shape"
            :from {:data "graticule"}
            :encode {:update {:strokeWidth {:value 1}
                              :strokeDash {:signal "[+graticuleDash, +graticuleDash]"}
                              :stroke {:signal "invert ? '#444' : '#ddd'"}
                              :fill {:value nil}}}
            :transform [{:type "geoshape" :projection "projection"}]}

           {:type "shape"
            :from {:data "world"}
            :encode {:color {:field "value" :type "quantitative"}
                     :update {:strokeWidth {:signal "+borderWidth"}
                              :stroke {:signal "invert ? '#777' : '#bbb'"}
                              :fill {:signal "invert ? '#fff' : '#000'"}
                              :zindex {:value 0}}
                     :hover {:strokeWidth {:signal "+borderWidth + 1"}
                             :stroke {:value "firebrick"}
                             :zindex {:value 1}}}
            :transform [{:type "geoshape"
                         :projection "projection"
                         }]}

           #_{:type "shape"
              :from {:data "world"}
              :encode {:color {:field "value"
                               :type "quantitative"}}
              :transform [{:type "geoshape"
                           :lookup "id"
                           :from {:data {:values (transduce (ws-filter/filter-by-year year) conj points)}
                                  :key "country-id"
                                  :fields ["value"]}
                           :projection "projection"
                           }
                          ]}

           ]
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
              :value 23}
             {:name "translate0" :update "width / 2"}
             {:name "translate1" :update "height / 2"}
             {:name "graticuleDash" :value 0}
             {:name "borderWidth" :value 1}
             {:name "background" :value "#ffffff"}
             {:name "invert" :value false}]
   :data [{:name "world"
           :url "data/world-110m.json"
           :format {:type "topojson" :feature "countries"}}
          #_{:name "countries"
           :values (transduce (ws-filter/filter-by-year year) conj points)
           :transform [{:type "lookup"
                        :on "world"
                        :onKey "ASDF"
                        :from "country-source"
                        :key "country-id"
                        :fields ["value"]}]}
          {:name "graticule"
           :transform [{:type "graticule"}]}]})

;:data {:url "data/world-110m.json"
;       :format {:type "topojson"
;                :feature "countries"}}
;:transform [{:lookup "id"
;             :from {:data {:values (transduce (ws-filter/filter-by-year year) conj points)}
;                    :key "country-id"
;                    :fields ["value"]}}]
;:projection {:type "mercator"}
;:mark {:type "geoshape"}
;:encoding {:color {:field "value"
;                   :type "quantitative"}}})


#_(defn world-schema [points year]
    {:schema "https://vega.github.io/schema/vega-lite/v4.json",
     :width 800
     :height 500
     :data {:url "data/world-110m.json"
            :format {:type "topojson"
                     :feature "countries"}}
     :transform [;{:filter {:field "id" :oneOf ["258"]}}
                 {:lookup "id"
                  :from {:data {:values (transduce (ws-filter/filter-by-year year) conj points)}
                         :key "country-id"
                         :fields ["value"]}}]
     :projection {:type "mercator"}
     :mark {:type "geoshape"}
     :encoding {:color {:field "value"
                        :type "quantitative"}}})



;; As in https://vega.github.io/editor/#/url/vega/N4KABGBEAkDODGALApgWwIaQFxUQFzwAdYsB6UgN2QHN0A6agSz0QFcAjOxge1IRQyUa6SgBY6AK1jcAdpAA04KOlZ5usRgC9k2KIXQATBUsj6DBxjOq6ArIoiQA7owMtdADgAMn+7mSNqfFtvX0hYPABPABsdHEh4ZCio4wcDdDxMHABtJQhQCAKoGXRUWKhHbgAnKKNfQshWat1IfCIScipaBmY2Th5SZAs1StI0jNIK6oMAWgBGWc9USWk5OoLIADMqjDxdfML1yMIyyDVCbilZFIOHDeR0xpP4blYZPErGZFhIXIKAXzWDne6BksC2lVQuhyNzypwix2aG0YUTwyEq1xukGQAA9COisJAxqwli4AIQAXgWkD+vwgAF1fgDfvt6sVSs1pI0EgB9TwY9YUdBRVhfKG0gosmGQKJXHDTABsAGY6PLZvL5QB2ABMgIO0vSummivcdFEas8AE4Nbr6tJStyxuhPLNdAsQuLbdx7Y7PFrdFr3TD1s8DCcAIIAJX5mOer3eEWaYcq1GQb0smA9YCZQclmJlchws0Vyo1GpsRflNvWUQNcq1NjoWo1okVFvcVYcduQDvSTpdhe8Pkzna93Z9fpwAaHQYcIfDAFVo3rY29Kgm4mHWOFKkLGBmg9mYbm9fnDRaGxrZlr3BbZh2oDXdjhFRq6JbfaJ72FRz2Ms7XYOX5dr+ToTmAU5fnOzTzgAyku9QrvG0EyMwgwwRkqLfJmh43Me9SnjgGomha8rXu2w4PrW4GeHQNgWoq8ruJ+FHft6vb-gOgYzqxY7sWBEEsVBcQAJIAHLwcGLyruuUDCTIFj7jCOEHHh1aymAcyePKdCKqImqXl+j62NpRaeAxlYscBPr9mANiDtO3FWXx-qAYJ3Chs0ADCYYSbOUlIXEnkgoYik3MphSqQ4BFgEWJr1lqFpasxM6UU+YAMY2niiO4SVAT+1m6PK9l5Wxf5gW6DlBvE7knAAUgACr5UCIWuzS1eg+hyNhVaRQ+6lGqaip0RqiqGVRNgNi+XjliVvF-jZRWuSlPEgb6AFcVVQlQPOADSTXVXGrVxPOKGogYYA7ZY1AGF6PwHuKDKFMpx6QGyJyOtyLq6t+XInJylQ8ny33AqC4KQtkma9XCCJxCmFwrPtSKJAY3zZNKVzyKlkB0kBATFMkcQ1hEaKfdyRMk543Jw5cMi8ndSk9SxRwnHD5yWLsX54hcyDwHgPAFnolTc7z-OI58NSo2AWTo6sWM4yx6CS9L5OVKTKu8ty2IKJRxOq7MZPoLrGsJo9SkPYyawvW9zQfX633-QkHIvAD3ZA+Kpw7qD2xijmTPwizyDwxjLFIxLUIy9r+q7PLy0aNQ+PNOr+tJ1Tgc03T3WQ37MNQKz3Ds-tXMSDzfPqaYQvFyLwfLaHKPh6emNR9jX6K-Xhsk8n7d65rkcpynJvYebT1KDHgvC6XoI+xK7vW3ERcl6L9taGUqlhHjQrNFkziuIgmMoAE+B0vTT3fUiaWr3HCdxFkjoABQAOSTDU98AJSY33Xca9TKy8u-n+d0bfW39ZC8iPuKcKUBmbNFKADdIVRj5ZhHqEDAlQADWStmQzxKCcdWlMUHoKXNDP6iAOo6HtpEGI4c4awBIQiUe9QNhC3BmAVejpmhPyMOA76qYtqr1YIQMYK8Q7IgJiwiiDhBTChwQfPA1AdwJgohA207xuCoKESlCRQoRTsMQKhBBYUKKNzUNwFEjBCB7HEVAWu2BIAuH0QcGk90wrA09mCb2ENfbLSgbDQONDSGFwrgvMu88q5dScQcU2EBnpYPZITf+BsjZ4PQGg74wN-YcgiKgdgJjCHhGiGUaW8BGAA0ofQ9YjDbo4FYb2G2vZPr2IgViGQvDMwNAEekdR3FuD6CKZECxGioCSO0TgGiGpFFfiREkfpGjIBDJOFUEEKZ7EnyZtwExfNzFVMsWveOG84jAAADoHWkkcnA9974AGoiSoCyEclqEQjk4zAEcpy81TlgDBukW+1zbkrWso8zGRyjlv2eX8vi7zPl4G+Q8G5Lz8rgubqC4Ffxln-C-FrLZAzNjiyMHEwBCSKY93GSxGSvVbg4sTvE3B3IFEpSUesPxOcyWDK0U8Yp8BKGKMHgYlZEUYk4KpfE-BqT3beMgTiDm7s8mULRqibE0dT5MOmZiNhcRbYNO4c0mqyq9T8METqlVpLtlzMNPKYlNcREGqlCauI7AazwFQaiqJX5jGmM2WIrFl89lQEOcc+M7zzlXJhb8+5ALQWvL7BC7YXyflwtKpGxFQLIAgrjXNUCUaIQxuDam1aWow1Jpfii813EMUepmdYvFHcCXdy1sWqqRqsUVp1lW-uTqswuolVazEXrRGQEDbGv1a5HltvpQ4Xc8cu16htc1VMqJ0RcvCcPJdYBR7VRkEiawmL1joGxIwWAABNK1kBUCWAAKLytnboRUnhGRKBpDSIAA
#_(defn world-schema [points year]
    {:schema "https://vega.github.io/schema/vega-lite/v4.json",
     :width 800
     :height 500
     :data [{:name "world"
             :url "data/world-110m.json"
             :format {:type "topojson", :feature "countries"}
             :transform {; Remove antarctica
                         :type "filter"
                         :expr "datum.id!=10"}}
            #_{:name "country-source"
               :values (transduce (ws-filter/filter-by-year year) conj points)}
            #_{:name "country-data"
               :source "country-source"
               :transform [{:type "lookup"
                            :from "country-source"
                            :key "country-id"
                            :fields ["value"]}]}]
     :projections [{:name "world-projection"
                    :type "mercator"}]
     :marks [{:name "world-marks"
              :type "geoshape"
              ;:style ["geoshape"]
              :from {:data "world"}
              :encode {:update {:fill {:value "lightgray"}
                                :stroke {:value "white"}
                                :tooltip {:field "id"}}}
              :transform [{:lookup "id"
                           :from {:data {:values (transduce (ws-filter/filter-by-year year) conj points)}
                                  :key "country-id"
                                  :fields ["value"]}}]
              :projection "world-projection"}
             #_{:name "country-marks"
                :type "geoshape"
                :from {:data "country-data"}
                :encode {:update {:fill {:value "lightgray"}
                                  :stroke {:value "white"}
                                  :tooltip {:field "country-id"}}}
                :transform [{:lookup "id"
                             :from {:data {:values (transduce (ws-filter/filter-by-year year) conj points)}
                                    :key "country-id"
                                    :fields ["value"]}}]
                :projection "world-projection"}
             ]
     ;:encoding {:color {:condition {:test "(number? datum['value'])" :value {:field "value", :type "quantitative"}} :value "white"}}
     ;:encoding {:color {:condition {:test "datum['value'] === null" :value "gray"} :value "black"}}
     ;:encoding {:color {:condition {:test "isNaN(datum['value']) === true" :value "black"} :value {:field "value", :type "quantitative"}}}
     })

#_(defn world-schema [points year]
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
                           :from {:data {:values (transduce (ws-filter/filter-by-year year) conj points)}
                                  :key "country-id"
                                  :fields ["value"]}}]
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
             :format {:type "topojson" :feature "countries"}}
            {:name "graticule" :transform [{:type "graticule"}]}
            ]

     })

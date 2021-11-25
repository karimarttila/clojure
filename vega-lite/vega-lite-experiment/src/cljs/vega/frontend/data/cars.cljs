(ns vega.frontend.data.cars
  (:require
    [re-frame.core :as re-frame]
    [re-frame.db]
    [vega.frontend.util :as v-util]
    [vega.frontend.http :as v-http]
    [day8.re-frame.http-fx] ; Needed to register :http-xhrio to re-frame.
    [hashp.core :include-macros true]
    ))

(re-frame/reg-event-db
  ::ret-ok-data-cars
  (fn [db [_ res-body]]
    (v-util/clog "reg-event-db ok")
    (-> db
        ; Dissoc config not being in two places.
        (assoc-in [:data :cars :response] (update-in {:ret :ok :res-body res-body} [:res-body] dissoc :data))
        (assoc-in [:data :cars :data] (:data res-body)))))

(re-frame/reg-event-db
  ::ret-failed-data-cars
  (fn [db [_ res-body]]
    (v-util/clog "reg-event-db failed" db)
    (assoc-in db [:data :cars :response]
              {:ret :failed
               :msg (get-in res-body [:response :msg])})))

(re-frame/reg-event-fx
  ::get-data-cars
  (fn [{:keys [db]} [_]]
    (v-util/clog "get-data-cars")
    (v-http/http-get db (str "/vega/api/data/cars/") nil ::ret-ok-data-cars ::ret-failed-data-cars)))

(re-frame/reg-sub
  ::data-cars
  (fn [db]
    (-> db
        :data
        :cars
        :data)))

(defn simple-scatter [{:keys [data width height]}]
  {:mark {:type "circle" :tooltip {:content "data"}},
   :data {:values data}
   :width width,
   :height height,
   :encoding {:x {:field "Horsepower", :type "quantitative"},
              :y {:field "Miles_per_Gallon", :type "quantitative", :sort "ascending"}}})

;; From: https://vega.github.io/vega/examples/scatter-plot/ (+ tooltip added)
(defn complex-scatter1 [{:keys [data width height]}]
  {:data {:name "source"
          :values data},
   :width width
   :height height
   :scales [{:name "x",
             :type "linear",
             :round true,
             :nice true,
             :zero true,
             :domain {:data "source", :field "Horsepower"},
             :range "width"}
            {:name "y",
             :type "linear",
             :round true,
             :nice true,
             :zero true,
             :domain {:data "source", :field "Miles_per_Gallon"},
             :range "height"}
            {:name "size",
             :type "linear",
             :round true,
             :nice false,
             :zero true,
             :domain {:data "source", :field "Acceleration"},
             :range [4 361]}],
   :axes [{:scale "x", :grid true, :domain false, :orient "bottom", :tickCount 5, :title "Horsepower"}
          {:scale "y", :grid true, :domain false, :orient "left", :titlePadding 5, :title "Miles_per_Gallon"}],
   :legends [{:size "size",
              :title "Acceleration",
              :format "s",
              :symbolStrokeColor "#4682b4",
              :symbolStrokeWidth 2,
              :symbolOpacity 0.5,
              :symbolType "circle"}],
   :marks [{:name "marks",
            :type "symbol",
            :from {:data "source"},
            :encode {:enter {:tooltip {:signal  "datum.Name"}},
                     :update {:x {:scale "x", :field "Horsepower"},
                              :y {:scale "y", :field "Miles_per_Gallon"},
                              :size {:scale "size", :field "Acceleration"},
                              :shape {:value "circle"},
                              :strokeWidth {:value 2},
                              :opacity {:value 0.5},
                              :stroke {:value "#4682b4"},
                              :fill {:value "transparent"}}}}]})

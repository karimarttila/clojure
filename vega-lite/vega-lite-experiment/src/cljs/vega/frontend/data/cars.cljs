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
  {:mark {:type "circle"},
   :data {:values data} ; TODO: remove take
   :width width,
   :height height,
   :encoding {:x {:field "Horsepower", :type "quantitative"},
              :y {:field "Miles_per_Gallon", :type "quantitative", :sort "ascending"}}})


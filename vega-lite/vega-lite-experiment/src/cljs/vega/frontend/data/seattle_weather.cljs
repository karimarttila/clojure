(ns vega.frontend.data.seattle-weather
  (:require
    [re-frame.core :as re-frame]
    [re-frame.db]
    [vega.frontend.util :as v-util]
    [vega.frontend.http :as v-http]
    [day8.re-frame.http-fx] ; Needed to register :http-xhrio to re-frame.
    [hashp.core :include-macros true]
    ))

(re-frame/reg-event-db
  ::ret-ok-data-seattle-weather
  (fn [db [_ res-body]]
    (v-util/clog "reg-event-db ok")
    (-> db
        ; Dissoc config not being in two places.
        (assoc-in [:data :seattle-weather :response] (update-in {:ret :ok :res-body res-body} [:res-body] dissoc :data))
        (assoc-in [:data :seattle-weather :data] (:data res-body)))))

(re-frame/reg-event-db
  ::ret-failed-data-seattle-weather
  (fn [db [_ res-body]]
    (v-util/clog "reg-event-db failed" db)
    (assoc-in db [:data :seattle-weather :response]
              {:ret :failed
               :msg (get-in res-body [:response :msg])})))

(re-frame/reg-event-fx
  ::get-data-seattle-weather
  (fn [{:keys [db]} [_]]
    (v-util/clog "get-data-seattle-weather")
    (v-http/http-get db (str "/vega/api/data/seattle-weather/") nil ::ret-ok-data-seattle-weather ::ret-failed-data-seattle-weather)))

(re-frame/reg-sub
  ::data-seattle-weather
  (fn [db]
    (-> db
        :data
        :seattle-weather
        :data)))

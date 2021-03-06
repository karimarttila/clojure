(ns worldstat.frontend.state
  (:require [re-frame.core :as re-frame]
            [worldstat.frontend.http :as ws-http]
            [worldstat.frontend.log :as ws-log]
            [reitit.frontend.controllers :as rfc]))

(defn get-country-name [code]
  (let [countries @(re-frame/subscribe [::countries])]
    (-> (filter #(= (:country_code %) code) countries)
        first
        :country_name)))

(re-frame/reg-event-db
  ::initialize-db
  (fn [_ _]
    {:current-metric {:name "Physicians (per 1,000 people)", :code :SH.MED.PHYS.ZS}
     :current-country nil
     :current-year 2017
     :current-route nil
     :debug true}))

(re-frame/reg-sub
  ::current-route
  (fn [db]
    (:current-route db)))

(re-frame/reg-event-fx
  ::navigate
  (fn [_ [_ & route]]
    ;; See `navigate` effect in routes.cljs
    {::navigate! route}))

(re-frame/reg-event-db
  ::select-metric
  (fn [db [_ metric]]
    (assoc-in db [:current-metric] metric)))

(re-frame/reg-sub
  ::current-metric
  (fn [db]
    (:current-metric db)))

(re-frame/reg-event-db
  ::select-year
  (fn [db [_ year]]
    (assoc-in db [:current-year] year)))

(re-frame/reg-sub
  ::current-year
  (fn [db]
    (:current-year db)))

(re-frame/reg-sub
  ::current-country
  (fn [db]
    (:current-country db)))

(re-frame/reg-event-db
  ::navigated
  (fn [db [_ new-match]]
    (let [old-match (:current-route db)
          new-path (:path new-match)
          country-code (get-in new-match [:parameters :path :country-code])
          country-name (get-country-name country-code)
          controllers (rfc/apply-controllers (:controllers old-match) new-match)]
      (ws-log/clog (str "::state/navigated, new-path: " new-path))
      (ws-log/clog (str "::state/navigated, country-code: " country-code))
      (cond-> (assoc db :current-route (assoc new-match :controllers controllers))
              country-code (assoc :current-country {:code country-code :name country-name})))))

(re-frame/reg-sub
  ::debug
  (fn [db]
    (:debug db)))

(re-frame/reg-event-db
  ::ret-failed
  (fn [db [_ res-body]]
    (ws-log/clog "::ret-failed" db)
    (assoc-in db [:error :response] {:ret :failed
                                     :msg (get-in res-body [:response :msg])})))

(re-frame/reg-event-db
  ::ret-ok-world-data
  (fn [db [_ res-body]]
    (ws-log/clog "::ret-ok-world-data")
    (let [metric (keyword (:metric res-body))
          data {:points (:points res-body)
                :metric metric
                :metric-name (:metric-name res-body)
                :min (:min res-body)
                :max (:max res-body)
                :mean (:mean res-body)
                :standard-deviation (:standard-deviation res-body)}]
      (-> db
          (assoc-in [:data metric] data)))))

(re-frame/reg-sub
  ::world-data
  (fn [db params]
    (ws-log/clog "::world-data, params" params)
    (let [metric (nth params 1)]
      (get-in db [:data metric]))))

(re-frame/reg-event-fx
  ::get-world-data
  (fn [{:keys [db]} [_ metric]]
    (ws-log/clog "::get-world-data")
    (ws-http/http-get db (str "/worldstat/api/data/metric/" (name metric)) nil ::ret-ok-world-data ::ret-failed)))

(re-frame/reg-event-db
  ::ret-ok-years
  (fn [db [_ res-body]]
    (ws-log/clog "::ret-ok-years")
    (let [years (:years res-body)]
      (-> db
          (assoc-in [:data :years] years)))))

(re-frame/reg-sub
  ::years
  (fn [db _]
    (ws-log/clog "::years")
    (get-in db [:data :years])))

(re-frame/reg-event-fx
  ::load-years
  (fn [{:keys [db]} [_]]
    (ws-log/clog "::load-years")
    (ws-http/http-get db (str "/worldstat/api/data/years/") nil ::ret-ok-years ::ret-failed)))

(re-frame/reg-event-db
  ::ret-ok-metric-names
  (fn [db [_ res-body]]
    (ws-log/clog "::ret-ok-metric-names")
    (let [metric-names (:metric-names res-body)]
      (-> db
          (assoc-in [:data :metric-names] metric-names)))))

(re-frame/reg-sub
  ::metric-names
  (fn [db _]
    (ws-log/clog "::metric-names")
    (get-in db [:data :metric-names])))

(re-frame/reg-event-fx
  ::load-metric-names
  (fn [{:keys [db]} [_]]
    (ws-log/clog "::load-metric-names")
    (ws-http/http-get db (str "/worldstat/api/data/metric-names/") nil ::ret-ok-metric-names ::ret-failed)))


(re-frame/reg-event-db
  ::ret-ok-countries
  (fn [db [_ res-body]]
    (ws-log/clog "::ret-ok-countries")
    (let [countries (:countries res-body)]
      (-> db
          (assoc-in [:data :countries] countries)))))

(re-frame/reg-sub
  ::countries
  (fn [db _]
    (ws-log/clog "::countries")
    (get-in db [:data :countries])))

(re-frame/reg-event-fx
  ::load-countries
  (fn [{:keys [db]} [_]]
    (ws-log/clog "::load-countries")
    (ws-http/http-get db (str "/worldstat/api/data/countries/") nil ::ret-ok-countries ::ret-failed)))

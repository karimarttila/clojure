(ns worldstat.frontend.main
  (:require [re-frame.core :as re-frame]
            [re-frame.db]
            [reagent.dom :as r-dom]
            [day8.re-frame.http-fx] ; Needed to register :http-xhrio to re-frame.
            [reagent-dev-tools.core :as dev-tools]
            [reitit.coercion.spec :as rss]
            [reitit.frontend :as rf]
            [reitit.frontend.controllers :as rfc]
            [reitit.frontend.easy :as rfe]
            [oz.core :as oz]
            [worldstat.frontend.util :as ws-util]
            [worldstat.frontend.http :as ws-http]
            [worldstat.frontend.state :as ws-state]
            [worldstat.frontend.data :as ws-data]))


;; ******************************************************************
;; NOTE: When starting ClojureScript REPL in Cursive, give first command:
; (shadow.cljs.devtools.api/repl :app)
; to connect the REPL to the app running in the browser.
; Frontend home page:
; http://localhost:5522/worldstat/index.html
;; ******************************************************************

;;; Events ;;;

(re-frame/reg-event-db
  ::ret-failed
  (fn [db [_ res-body]]
    (ws-util/clog "::ret-failed" db)
    (assoc-in db [:error :response] {:ret :failed
                                     :msg (get-in res-body [:response :msg])})))

(re-frame/reg-event-db
  ::ret-ok-world-data
  (fn [db [_ res-body]]
    (ws-util/clog "::ret-ok-world-data")
    (let [points (:points res-body)
          metric (keyword (:metric res-body))]
      (-> db
          (assoc-in [:data metric] points)))))

(re-frame/reg-sub
  ::world-data
  (fn [db params]
    (ws-util/clog "::world-data, params" params)
    (let [metric (nth params 1)]
      (get-in db [:data metric]))))

(re-frame/reg-event-fx
  ::get-world-data
  (fn [{:keys [db]} [_ metric]]
    (ws-util/clog "::get-world-data")
    (ws-http/http-get db (str "/worldstat/api/data/metric/" (name metric)) nil ::ret-ok-world-data ::ret-failed)))

(re-frame/reg-event-db
  ::ret-ok-years
  (fn [db [_ res-body]]
    (ws-util/clog "::ret-ok-years")
    (let [years (:years res-body)]
      (-> db
          (assoc-in [:data :years] years)))))

(re-frame/reg-sub
  ::years
  (fn [db _]
    (ws-util/clog "::years")
    (get-in db [:data :years])))

(re-frame/reg-event-fx
  ::load-years
  (fn [{:keys [db]} [_]]
    (ws-util/clog "::load-years")
    (ws-http/http-get db (str "/worldstat/api/data/years/") nil ::ret-ok-years ::ret-failed)))

(re-frame/reg-event-db
  ::ret-ok-metric-names
  (fn [db [_ res-body]]
    (ws-util/clog "::ret-ok-metric-names")
    (let [metric-names (:metric-names res-body)]
      (-> db
          (assoc-in [:data :metric-names] metric-names)))))

(re-frame/reg-sub
  ::metric-names
  (fn [db _]
    (ws-util/clog "::metric-names")
    (get-in db [:data :metric-names])))

(re-frame/reg-event-fx
  ::load-metric-names
  (fn [{:keys [db]} [_]]
    (ws-util/clog "::load-metric-names")
    (ws-http/http-get db (str "/worldstat/api/data/metric-names/") nil ::ret-ok-metric-names ::ret-failed)))


(re-frame/reg-event-db
  ::initialize-db
  (fn [_ _]
    {:current-route nil
     :debug true}))

(re-frame/reg-event-fx
  ::ws-state/navigate
  (fn [_ [_ & route]]
    ;; See `navigate` effect in routes.cljs
    {::navigate! route}))

(re-frame/reg-event-db
  ::ws-state/navigated
  (fn [db [_ new-match]]
    (let [old-match (:current-route db)
          new-path (:path new-match)
          controllers (rfc/apply-controllers (:controllers old-match) new-match)]
      (ws-util/clog (str "new-path: " new-path))
      (cond-> (assoc db :current-route (assoc new-match :controllers controllers))))))

;;; Views ;;;

;; An example how to visualize data with Oz / Vega lite.

(defn get-data [& names]
  (for [n names
        i (range 2002 2018)]
    {:year i :country n :value (+ (Math/pow (* i (count n)) 0.66) (rand-int (* (count n) 18.54)))}))

(def line-plot
  {:data {:values (get-data "Finland")}
   :encoding {:x {:title "Year" :field "year" :type "quantitative"
                  :axis {:labelAngle -45
                         :tickCount 10
                         :labelExp "tostring(datum.label[0])"
                         :format ".0f"}}
              :y {:title "Nutrition" :field "value" :type "quantitative"}
              :color {:field "country" :type "nominal"}}
   :mark "line"})

(defn home-page []
  ; If we have jwt in app db we are logged-in.
  (ws-util/clog "ENTER home-page")
  ;; NOTE: You need the div here or you are going to see only the debug-panel!
  (fn []
    (let [metric :SP.POP.TOTL ; TODO
          year 2010 ; TODO
          points @(re-frame/subscribe [::world-data metric])
          metric-names @(re-frame/subscribe [::metric-names])
          years @(re-frame/subscribe [::years])
          _ (if-not points (re-frame/dispatch [::get-world-data metric]))]
      [:div.container
       [:div.rows
        [:div.row
         [:div.columns
          [:div.column.is-half
           [:div.columns
            [:div.column.is-half
             [:div.rows
              [:div.row
               ;[:p.is-size-5 "Select metric:"]
               (ws-util/dropdown metric-names)
               ]
              ]]
            [:div.column.is-half
             [:div.rows
              [:div.row
               [:p.is-size-5 "Select year:"]]
              [:div.row
               [:p "Slider"]]]]]]
          [:div.column.is-half
           [oz/vega-lite line-plot (ws-util/vega-debug)]]]]
        [:div.row
         [:div.column.is-full
          [oz/vega-lite (ws-data/world-schema points year) (ws-util/vega-debug)]]]
        [:div.row
         [:p "Read more about this app in my blog: TODO-URL"]]
        [:div.row
         (ws-util/debug-panel {:metric metric
                               :year year
                               #_#_:world-data world-data
                               })]]])))


;;; Effects ;;;

;; Triggering navigation from events.
(re-frame/reg-fx
  ::navigate!
  (fn [route]
    (apply rfe/push-state route)))

;;; Routes ;;;

(defn href
  "Return relative url for given route. Url can be used in HTML links."
  ([k]
   (href k nil nil))
  ([k params]
   (href k params nil))
  ([k params query]
   (rfe/href k params query)))


(def routes-dev
  ["/"
   [""
    {:name ::ws-state/home
     :view home-page
     :link-text "Home"
     :controllers
     [{:start (fn [& params] (ws-util/clog (str "Entering home page, params: " params)))
       :stop (fn [& params] (ws-util/clog (str "Leaving home page, params: " params)))}]}]
   ])

(def routes routes-dev)

(defn on-navigate [new-match]
  (ws-util/clog "on-navigate, new-match" new-match)
  (when new-match
    (re-frame/dispatch [::ws-state/navigated new-match])))

(def router
  (rf/router
    routes
    {:data {:coercion rss/coercion}}))

(defn init-routes! []
  (ws-util/clog "initializing routes")
  (rfe/start!
    router
    on-navigate
    {:use-fragment true}))

(defn router-component [_] ; {:keys [router] :as params}
  (ws-util/clog "ENTER router-component")
  (let [current-route @(re-frame/subscribe [::ws-state/current-route])
        path-params (:path-params current-route)
        _ (ws-util/clog "router-component, path-params" path-params)]
    [:div.container
     [ws-util/header]
     ; NOTE: when you supply the current-route to the view it can parse path-params there (from path)
     (when current-route
       [(-> current-route :data :view) current-route])]))

;;; Setup ;;;

(defn dev-setup []
  (when ws-util/debug?
    (enable-console-print!)
    (println "dev mode")))


(defn ^:dev/after-load start []
  (ws-util/clog "ENTER start")
  (re-frame/clear-subscription-cache!)
  (init-routes!)
  (r-dom/render [router-component {:router router}
                 (if (:open? @dev-tools/dev-state)
                   {:style {:padding-bottom (str (:height @dev-tools/dev-state) "px")}})
                 ]
                (.getElementById js/document "app")))


(defn ^:export init []
  (ws-util/clog "ENTER init")
  (re-frame/dispatch-sync [::initialize-db])
  ;(re-frame/dispatch-sync [::load-years])
  ;(re-frame/dispatch-sync [::load-metric-names])
  (dev-tools/start! {:state-atom re-frame.db/app-db})
  (dev-setup)
  (start))

(comment
  (reagent.dom/render [])
  )


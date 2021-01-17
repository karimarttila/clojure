(ns worldstat.frontend.main
  (:require [re-frame.core :as re-frame]
            [re-frame.db]
            [reagent.dom :as r-dom]
            [day8.re-frame.http-fx] ; Needed to register :http-xhrio to re-frame.
            [reagent-dev-tools.core :as dev-tools]
            [reitit.coercion.spec :as rss]
            [reitit.frontend :as rf]
            [reitit.frontend.easy :as rfe]
            [oz.core :as oz]
            [worldstat.frontend.log :as ws-log]
            [worldstat.frontend.util :as ws-util]
            [worldstat.frontend.state :as ws-state]
            [worldstat.frontend.data :as ws-data]))


;; ******************************************************************
;; NOTE: When starting ClojureScript REPL in Cursive, give first command:
; (shadow.cljs.devtools.api/repl :app)
; to connect the REPL to the app running in the browser.
; Frontend home page:
; http://localhost:5522/worldstat/index.html
;; ******************************************************************


;;; Views ;;;

;; An example how to visualize data with Oz / Vega lite.

(defn home-page []
  ; If we have jwt in app db we are logged-in.
  (ws-log/clog "ENTER home-page")
  ;; NOTE: You need the div here or you are going to see only the debug-panel!
  (fn []
    (let [current-route @(re-frame/subscribe [::ws-state/current-route])
          {selected-metric-code :code selected-metric-name :name} @(re-frame/subscribe [::ws-state/current-metric])
          selected-year @(re-frame/subscribe [::ws-state/current-year])
          {selected-country-code :code selected-country-name :name} @(re-frame/subscribe [::ws-state/current-country])
          {:keys [points min max mean standard-deviation]} @(re-frame/subscribe [::ws-state/world-data selected-metric-code])
          metric-names @(re-frame/subscribe [::ws-state/metric-names])
          _ (if-not points (re-frame/dispatch [::ws-state/get-world-data selected-metric-code]))
          country-stats (if selected-country-code (ws-data/get-stats points selected-country-code ))]
      [:div.container
       [:div.rows
        [:div.row
         [:div.column.is-full
          [:p.level-item.has-text-centered.is-size-1 "World Statistics"]]]
        [:div.row
         [:div.column.is-full
          [:p.level-item.has-text-centered.is-size-2 selected-metric-name]]]
        [:div.row
         [:div.column.is-full
          [:p.level-item.has-text-centered.is-size-3 (str "Min: " (ws-util/one-decimal min)
                                                          ", Max: " (ws-util/one-decimal max)
                                                          ", Mean: " (ws-util/one-decimal mean)
                                                          ", Std.Dev: " (ws-util/one-decimal standard-deviation))]]]]
       [:div.rows
        [:div.row
         [:div.columns
          [:div.column.is-2
           (ws-util/dropdown "Select metric" metric-names)]
          [:div.column.is-3
           (ws-util/slider "year-slider" selected-year 1 2002 2017 "range")]
          [:div.column.is-2
           [:p.level-item.has-text-centered.is-size-2 selected-year]]]]
        [:div.row
         [:div.columns
          [:div.column.is-9
           [oz/vega-lite (ws-data/world-schema points selected-year selected-metric-name min max) (ws-util/vega-debug)]]
          [:div.column.auto
           [:div.rows
            [:div.row
             [:p.is-size-3 selected-country-name]]
            [:div.row
             [:p.is-size-5 "Min: " (ws-util/one-decimal (:min country-stats))]
             [:p.is-size-5 "Max: " (ws-util/one-decimal (:max country-stats))]
             [:p.is-size-5 "Mean: " (ws-util/one-decimal (:mean country-stats))]
             [:p.is-size-5 "Std.dev: " (ws-util/one-decimal (:standard-deviation country-stats))]]
            [:div.row
             [oz/vega-lite (ws-data/country-year-diagram points selected-metric-name selected-country-code min max) (ws-util/vega-debug)]]]]]]
        [:div.row
         [:p "(Missing data shown with color gray)"]]
        [:div.row
         [:p "Read more about this app in my blog: TODO-URL"]]
        [:div.row
         (ws-util/debug-panel {:selected-metric-code selected-metric-code
                               :seletected-metric-name selected-metric-name
                               :selected-year selected-year
                               :selected-country-code selected-country-code
                               :selected-country-name selected-country-name
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
     [{:start (fn [& params] (ws-log/clog (str "Entering home page, params: " params)))
       :stop (fn [& params] (ws-log/clog (str "Leaving home page, params: " params)))}]}]
   ["country/:country-code"
    {:name ::ws-state/country
     :parameters {:path {:country-code string?}}
     :view home-page
     :link-text "country"
     :controllers
     [{:start (fn [& params] (js/console.log (str "Entering country, params: " params)))
       :stop (fn [& params] (js/console.log (str "Leaving country, params: " params)))}]}]
   ])

(def routes routes-dev)

(defn on-navigate [new-match]
  (ws-log/clog "on-navigate, new-match" new-match)
  (when new-match
    (re-frame/dispatch [::ws-state/navigated new-match])))

(def router
  (rf/router
    routes
    {:data {:coercion rss/coercion}}))

(defn init-routes! []
  (ws-log/clog "initializing routes")
  (rfe/start!
    router
    on-navigate
    {:use-fragment true}))

(defn router-component [_] ; {:keys [router] :as params}
  (ws-log/clog "ENTER router-component")
  (let [current-route @(re-frame/subscribe [::ws-state/current-route])
        path-params (:path-params current-route)
        ;_ (ws-log/clog "router-component, current-route" (js/JSON.stringify current-route))
        _ (ws-log/clog "router-component, path-params" path-params)]
    [:div.container
     ; NOTE: when you supply the current-route to the view it can parse path-params there (from path)
     (when current-route
       [(-> current-route :data :view) current-route])]))

;;; Setup ;;;

(defn dev-setup []
  (when ws-log/debug?
    (enable-console-print!)
    (println "dev mode")))


(defn ^:dev/after-load start []
  (ws-log/clog "ENTER start")
  (re-frame/clear-subscription-cache!)
  (init-routes!)
  (r-dom/render [router-component {:router router}
                 (if (:open? @dev-tools/dev-state)
                   {:style {:padding-bottom (str (:height @dev-tools/dev-state) "px")}})]
                (.getElementById js/document "app")))


(defn ^:export init []
  (ws-log/clog "ENTER init")
  (re-frame/dispatch-sync [::ws-state/initialize-db])
  (re-frame/dispatch-sync [::ws-state/load-years])
  (re-frame/dispatch-sync [::ws-state/load-metric-names])
  (re-frame/dispatch-sync [::ws-state/load-countries])
  (dev-tools/start! {:state-atom re-frame.db/app-db})
  (dev-setup)
  (start))

(comment
  (reagent.dom/render [])
  )


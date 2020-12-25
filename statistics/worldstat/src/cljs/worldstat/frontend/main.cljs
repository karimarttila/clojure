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
            [worldstat.frontend.state :as ws-state]
            ))


;; ******************************************************************
;; NOTE: When starting ClojureScript REPL in Cursive, give first command:
; (shadow.cljs.devtools.api/repl :app)
; to connect the REPL to the app running in the browser.
; Frontend home page:
; http://localhost:5522/worldstat/index.html
;; ******************************************************************

;;; Events ;;;

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
      (js/console.log (str "new-path: " new-path))
      (cond-> (assoc db :current-route (assoc new-match :controllers controllers))))))

;;; Views ;;;

;; An example how to visualize data with Oz / Vega lite.

(defn get-data [& names]
  (for [n names
        i (range 2002 2018)]
    {:year i :country n :value (+ (Math/pow (* i (count n)) 0.65) (rand-int (* (count n) 18.54)))}))

(def line-plot
  {:data {:values (get-data "Finland" "India")}
   :encoding {:x {:title "Year" :field "year" :type "quantitative"
                  :axis {:labelAngle -45
                         :tickCount 10
                         :labelExp "tostring(datum.label[0])"
                         :format ".0f"}}
              :y {:title "Nutrition" :field "value" :type "quantitative"}
              :color {:field "country" :type "nominal"}}
   :mark "line"})

(defn content []
  [:div
   [:p "Trying  oz..."]
   [:p ""]
   [oz/vega-lite line-plot]])


(defn home-page []
  (let []
    ; If we have jwt in app db we are logged-in.
    (ws-util/clog "ENTER home-page")
    (re-frame/dispatch [::ws-state/navigate ::ws-state/product-group])
    ;; NOTE: You need the div here or you are going to see only the debug-panel!
    [:div
     (content)
     (ws-util/debug-panel {:TODO "todo"})]))


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
     [{:start (fn [& params] (js/console.log (str "Entering home page, params: " params)))
       :stop (fn [& params] (js/console.log (str "Leaving home page, params: " params)))}]}]
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
  (js/console.log "initializing routes")
  (rfe/start!
    router
    on-navigate
    {:use-fragment true}))

(defn router-component [_] ; {:keys [router] :as params}
  (ws-util/clog "ENTER router-component")
  (let [current-route @(re-frame/subscribe [::ws-state/current-route])
        path-params (:path-params current-route)
        _ (ws-util/clog "router-component, path-params" path-params)]
    [:div.ws-main
     [ws-util/header]
     ; NOTE: when you supply the current-route to the view it can parse path-params there (from path)
     (when current-route
       [(-> current-route :data :view) current-route])]))

;;; Setup ;;;

(def debug? ^boolean goog.DEBUG)

(defn dev-setup []
  (when debug?
    (enable-console-print!)
    (println "dev mode")))


(defn ^:dev/after-load start []
  (js/console.log "ENTER start")
  (re-frame/clear-subscription-cache!)
  (init-routes!)
  (r-dom/render [router-component {:router router}
                 (if (:open? @dev-tools/dev-state)
                   {:style {:padding-bottom (str (:height @dev-tools/dev-state) "px")}})
                 ]
                (.getElementById js/document "app")))


(defn ^:export init []
  (js/console.log "ENTER init")
  (re-frame/dispatch-sync [::initialize-db])
  (dev-tools/start! {:state-atom re-frame.db/app-db})
  (dev-setup)
  (start))

(comment
  (reagent.dom/render [])
  )


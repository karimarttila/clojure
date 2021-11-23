(ns vega.frontend.main
  (:require [re-frame.core :as re-frame]
            [re-frame.db]
            [reagent.core :as r]
            [reagent.dom :as rd]
            [day8.re-frame.http-fx] ; Needed to register :http-xhrio to re-frame.
            [reagent-dev-tools.core :as dev-tools]
            [reitit.coercion.spec :as rss]
            [reitit.frontend :as rf]
            [reitit.frontend.easy :as rfe]
            [reitit.frontend.controllers :as rfc]
            [vega.frontend.util :as v-util]
            [vega.frontend.components :as v-c]
            ["react" :as react]
            ["vega-embed" :as vegaEmbed]
            ["vega" :as vega]
            ["vega-lite" :as vega-lite]
            ["vega-lite-api" :as vega-lite-api :refer [vl]]
            [hashp.core :include-macros true]
            )
  )

;; NOTE: If mystic failures, do:
;; Stop frontend watch and backend repl
;; rm -rf node_modules
;; just clean
;; just init
;; start frontend watch and backend repl
;; connect cursive to backend repl and (reset)

;; If Clojure namespaces do not show:
;; Check in Cursive => Clojure Deps => you have the right aliases checked.
;; Try: Refresh Clojure Deps Project.


(re-frame/reg-sub
  ::current-route
  (fn [db]
    (:current-route db)))

(re-frame/reg-event-db
  ::initialize-db
  (fn [_ _]
    (v-util/clog "reg-event-db - ::initialize-db")
    {:current-route nil}))

(re-frame/reg-event-db
  ::navigated
  (fn [db [_ new-match]]
    (v-util/clog "reg-event-db - ::navigated")
    (let [old-match (:current-route db)
          new-path (:path new-match)
          controllers (rfc/apply-controllers (:controllers old-match) new-match)]
      (js/console.log (str "new-path: " new-path))
      (cond-> (assoc db :current-route (assoc new-match :controllers controllers))
              (= "/" new-path) (-> (assoc :signin nil)
                                   (assoc :login nil))))))

(re-frame/reg-event-fx
  ::navigate
  (fn [_ [_ & route]]
    (v-util/clog "reg-event-fx - ::navigate")
    ;; See `navigate` effect in routes.cljs
    {::navigate! route}))

;;; Views ;;;

(def simple-data
  [{:a "A", :b 155}, {:a "B", :b 55}, {:a "C", :b 43},
   {:a "D", :b 91}, {:a "E", :b 81}, {:a "F", :b 53},
   {:a "G", :b 19}, {:a "H", :b 87}, {:a "I", :b 52},
   ])

(def simple-data2
  [{:a "A", :b 55}, {:a "B", :b 155}, {:a "C", :b 43},
   {:a "D", :b 91}, {:a "E", :b 181}, {:a "F", :b 53},
   {:a "G", :b 99}, {:a "H", :b 187}, {:a "I", :b 52},
   ])

(defn bar-experiment-raw-spec
  [data]
  {:mark {:type "bar"},
   :data {:values data}
   :encoding {:x {:field "b", :type "quantitative"},
              :y {:field "a", :type "nominal"}}})

(defn bar-experiment-vega-lite-api [data]
  (-> v-c/my-vl (.markBar)
      (.data (clj->js data))
      (.encode
        (-> v-c/my-vl (.x) (.fieldQ "b"))
        (-> v-c/my-vl (.y) (.fieldN "a")))))

(defn draw-it [graph title func-name data-name method]
  [:div.box.mr-2.mb-2 {:id "draw-it-box"}
   [:div
    [:p.title.is-5 title]
    [:ul
     [:li (str "function: " func-name)]
     [:li (str "data: " data-name)]
     [:li (str "method: " method)]]
    [:div.mt-4
     graph]]])

(defn vega-lite-api-render-it
  "This function uses vega-lite-api both to create the spec and also to render the spec to graph."
  [func data {:keys [title func-name data-name]}]
  (let [graph [v-c/vega-lite-api-render func data]]
    [draw-it graph title func-name data-name "vega-lite-api render"]))

(defn vega-lite-api-spec-and-vega-react-it
  "This function uses vega-lite-api to create the spec but uses vega-lite-wrapper to create the graph."
  [func data {:keys [title func-name data-name]}]
  (let [spec-obj (func data)
        spec (.toSpec spec-obj)
        graph [v-c/vega-lite-react-wrapper spec]]
    [draw-it graph title func-name data-name "vega-lite-react-wrapper"]))

(defn vega-react-it
  "This function uses raw vega specification (without data) and injects it with data to vega-react wrapper to create the graph."
  [raw-spec-func data {:keys [title func-name data-name]}]
  (let [graph [v-c/vega-lite-react-wrapper (raw-spec-func data)]]
    [draw-it graph title func-name data-name "vega-lite-react-wrapper"]))

(defn home-page []
  (v-util/clog "home-page")
  [:div.container {:id "home-page-container"}
   [:div.columns.is-multiline.is-mobile.m-2.p-2 {:id "home-page-columns"}
    [vega-lite-api-render-it bar-experiment-vega-lite-api simple-data
     {:title "Bar with vega-lite-api render"
      :func-name "bar-experiment-vega-lite-api"
      :data-name "simple-data"}]
    [vega-lite-api-render-it bar-experiment-vega-lite-api simple-data2
     {:title "Same Bar, different data"
      :func-name "bar-experiment-vega-lite-api"
      :data-name "simple-data2"}]
    [vega-react-it bar-experiment-raw-spec simple-data
     {:title "Bar, vega-lite-react-wrapper"
      :func-name "bar-experiment-raw-spec"
      :data-name "simple-data"}]
    [vega-lite-api-spec-and-vega-react-it bar-experiment-vega-lite-api simple-data
     {:title "Bar, vega-lite-react wrapper"
      :func-name "bar-experiment-vega-lite-api"
      :data-name "simple-data"}]]])

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
    {:name ::home
     :view home-page
     :link-text "Home"
     :controllers
     [{:start (fn [& params] (js/console.log (str "Entering home page, params: " params)))
       :stop (fn [& params] (js/console.log (str "Leaving home page, params: " params)))}]}]])

(def routes routes-dev)

(defn on-navigate [new-match]
  (v-util/clog "on-navigate, new-match" new-match)
  (when new-match
    (re-frame/dispatch [::navigated new-match])))

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
  (v-util/clog "ENTER router-component")
  (let [current-route @(re-frame/subscribe [::current-route])
        path-params (:path-params current-route)
        _ (v-util/clog "router-component, path-params" path-params)]
    [:div.container.is-max-desktop
     [:h1.title.is-centered "Vega Experimentation"]
     ; NOTE: when you supply the current-route to the view it can parse path-params there (from path)
     (when current-route
       [(-> current-route :data :view) current-route])]))

;;; Setup ;;;

; TODO: https://clojureverse.org/t/how-to-deal-with-development-code-in-clojurescript/613
; One thing is to check for goog.DEBUG, which is what the Google Closure library also uses.
; In your ClojureScript compiler options you can add :closure-defines {goog.DEBUG false}
; for the production build, and {goog.DEBUG true} for the dev build,
; and then check for it in your code, (if goog.DEBUG ...)
; TODO: Using backend configuration to get DEBUG info.
(def debug? ^boolean goog.DEBUG)

(def debug true)

(defn dev-setup []
  (js/console.log "ENTER main dev-setup")
  (when debug
    (enable-console-print!)
    (println "dev mode")))


(defn ^:dev/after-load start []
  (js/console.log "ENTER main start")
  (re-frame/clear-subscription-cache!)
  (init-routes!)
  (rd/render [router-component {:router router}
                 (if (:open? @dev-tools/dev-state)
                   {:style {:padding-bottom (str (:height @dev-tools/dev-state) "px")}})]
                (.getElementById js/document "app")))

(defn ^:export init []
  (js/console.log "ENTER main init")
  (re-frame/dispatch-sync [::initialize-db])
  (dev-tools/start! {:state-atom re-frame.db/app-db})
  (dev-setup)
  (start))

(defn ^:dev/before-load stop []
  (js/console.log "ENTER main stop"))



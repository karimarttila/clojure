(ns simplefrontend.main
  (:require
    [re-frame.core :as re-frame]
    [reagent.core :as r]
    [reagent.dom]
    [re-frame.db]
    [reitit.frontend :as rf]
    [reitit.frontend.controllers :as rfc]
    [reagent-dev-tools.core :as dev-tools]
    [reitit.frontend.easy :as rfe]
    [simplefrontend.state :as state]
    [simplefrontend.signin :as signin]
    ))

(re-frame/reg-event-db ::initialize-db
                       (fn [_ _] {:current-route nil
                                  :loading 0}))

(re-frame/reg-event-db ::navigated
                       (fn [db [_ new-match]]
                         (let [old-match (:current-route db)
                               controllers (rfc/apply-controllers (:controllers old-match) new-match)]
                           (-> db
                               (assoc :current-route (assoc new-match :controllers controllers))))))

(re-frame/reg-sub ::current-route
                  (fn [db] (:current-route db)))

(re-frame/reg-sub ::data
                  (fn [db [_]]
                    (get-in db [:data])))

(re-frame/reg-fx ::navigate!
                 (fn [route]
                   (apply rfe/push-state route)))

(re-frame/reg-event-fx :navigate
                       (fn [_ [_ & route]]
                         {::navigate! route}))

(re-frame/reg-event-fx :fx
                       (fn [_ [_ fx]] fx))


(defn home-page
  []
  [:div
   [:h1 "Web Store"]
   [:a {:href "#/signin"} "Sign-in"]
   [:div]
   [:a {:href "#/login"} "Login"]
   [:div]
   [:a {:href "#/productgroups"} "Product Groups"]])

(defn main-view [{:keys [_]}]
  (let [current-route @(re-frame/subscribe [::current-route])
        view (-> current-route :data :view)]
    (if view
      [home-page]
      )))

(re-frame/reg-event-fx :http
                       (fn [_ [_ request]]
                         (js/console.log "reg-event-fx :http")))

(defn dispatch [re-frame-event]
  (comp
    (re-frame/dispatch re-frame-event)
    ))

(def fe-controller
  {:start (fn []
            (dispatch
              [:http {:method :get
                      :uri "/api/ping"
                      :on-success [::state/todo]}]))})

(def router
  (rf/router
    ["/" {:controllers [fe-controller]}

     ["" {:name :main-view
          :view main-view}]
     ]))

;#_ ["sign-in" {:name :sign-in
;                 :view signin/signin-page}
;      ]

(defn init-routes! []
  (js/console.log "initializing routes")
  (rfe/start!
    router
    (fn [match] (when match (re-frame/dispatch [::navigated match])))
    {:use-fragment true}))


(def debug? ^boolean goog.DEBUG)

(defn dev-setup []
  (when debug?
    (enable-console-print!)
    (println "dev mode")))

(defn ^:dev/after-load start []
  (js/console.log "start")
  (re-frame/clear-subscription-cache!)
  (init-routes!)
  (reagent.dom/render
    [main-view {:router router}
     (if (:open? @dev-tools/dev-state)
       {:style {:padding-bottom (str (:height @dev-tools/dev-state) "px")}})]
    (.getElementById js/document "app")))

(defn ^:export init []
  (re-frame/dispatch-sync [::initialize-db])
  (dev-tools/start! {:state-atom re-frame.db/app-db})
  (dev-setup)
  (js/console.log "init")
  (start))

(defn ^:dev/before-load stop []
  (js/console.log "stop"))


(ns simplefrontend.main
  (:require [re-frame.core :as re-frame]
            [reagent.core :as reagent]
            [reagent-dev-tools.core :as dev-tools]
            [reitit.core :as r]
            [reitit.coercion.spec :as rss]
            [reitit.frontend :as rf]
            [reitit.frontend.controllers :as rfc]
            [reitit.frontend.easy :as rfe]))

;; ******************************************************************
;; NOTE: When starting ClojureScript REPL in Cursive, give first command:
; (shadow.cljs.devtools.api/repl :app)
; to connect the REPL to the app running in the browser.
;; ******************************************************************



;;; Events ;;;

(def myatom (reagent/atom {:foo "FOO"}))
(def click-count (reagent/atom 0))

(re-frame/reg-event-db
  ::initialize-db
  (fn [_ _]
    {:current-route nil}))

(re-frame/reg-event-fx
  ::navigate
  (fn [db [_ & route]]
    ;; See `navigate` effect in routes.cljs
    {::navigate! route}))

(re-frame/reg-event-db
  ::navigated
  (fn [db [_ new-match]]
    (let [old-match (:current-route db)
          controllers (rfc/apply-controllers (:controllers old-match) new-match)]
      (assoc db :current-route (assoc new-match :controllers controllers)))))

;;; Subscriptions ;;;

(re-frame/reg-sub
  ::current-route
  (fn [db]
    (:current-route db)))

;;; Views ;;;

(defn header []
  [:div
   [:h1 "Web Store"]
   ]
  )




(defn home-page []
  [:div

   [:p "Wellcome to the Web Store! Here you can browse books and movies."]
   [:p "But you have to sign-in or login first!"]
   [:p "H UUSI"]

   [:button
    ;; Dispatch navigate event that triggers a (side)effect.
    {:on-click #(re-frame/dispatch [::navigate ::signin])}
    "Go to sign-in"]])

(defn signin-page []
  [:div
   [:h1 "This Sign-in page"]
   [:p "S UUSI"]

   [:button
    ;; Dispatch navigate event that triggers a (side)effect.
    {:on-click #(re-frame/dispatch [::navigate ::home])}
    "Go to home"]])

(defn current-view [current-route]
  (let [name (-> current-route :data :name)]
    (cond
      (= name ::home) [home-page]
      (= name ::signin) [signin-page])))

(defn sub-page2 []
  [:div
   [:h1 "This is sub-page 2"]])

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
     [{;; Do whatever initialization needed for home page
       ;; I.e (re-frame/dispatch [::events/load-something-with-ajax])
       :start (fn [& params] (js/console.log "Entering home page"))
       ;; Teardown can be done here.
       :stop (fn [& params] (js/console.log "Leaving home page"))}]}]
   ["signin"
    {:name ::signin
     :view signin-page
     :link-text "Sign in"
     :controllers
     [{:start (fn [& params] (js/console.log "Entering signin"))
       :stop (fn [& params] (js/console.log "Leaving signin"))}]}]
   ["sub-page2"
    {:name ::sub-page2
     :view sub-page2
     :link-text "Sub-page 2"
     :controllers
     [{:start (fn [& params] (js/console.log "Entering sub-page 2"))
       :stop (fn [& params] (js/console.log "Leaving sub-page 2"))}]}]])

(def routes routes-dev)

(defn on-navigate [new-match]
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

(defn nav [{:keys [router current-route]}]
  [:ul
   (for [route-name (r/route-names router)
         :let [route (r/match-by-name router route-name)
               text (-> route :data :link-text)]]
     [:li {:key route-name}
      (when (= route-name (-> current-route :data :name))
        "> ")
      ;; Create a normal links that user can click
      [:a {:href (href route-name)} text]])])

(defn router-component [{:keys [router]}]
  (let [current-route @(re-frame/subscribe [::current-route])]
    [:div
     [nav {:router router :current-route current-route}]
     (current-view current-route)
     #_(when current-route
         [(-> current-route :data :view)])]))

;;; Setup ;;;

(def debug? ^boolean goog.DEBUG)

(defn dev-setup []
  (when debug?
    (enable-console-print!)
    (println "dev mode")))


(defn ^:dev/after-load start []
  (js/console.log "start")
  (reagent.dom/render [router-component {:router router}
                       (if (:open? @dev-tools/dev-state)
                         {:style {:padding-bottom (str (:height @dev-tools/dev-state) "px")}})
                       ]
                      (.getElementById js/document "app"))
  )

;; optional
(defn ^:dev/before-load stop []
  (js/console.log "stop"))

(defn mount-root []
  (js/console.log "mount-root")
  (re-frame/clear-subscription-cache!)
  (init-routes!) ;; Reset routes on figwheel reload
  ;; ***************************************************
  ;; NOTE: You need to render to see the page!
  (reagent.dom/render [router-component {:router router}
                       (if (:open? @dev-tools/dev-state)
                         {:style {:padding-bottom (str (:height @dev-tools/dev-state) "px")}})
                       ]
                      (.getElementById js/document "app"))
  )

(defn ^:export init []
  (re-frame/dispatch-sync [::initialize-db])
  (dev-tools/start! {:state-atom re-frame.db/app-db})
  (dev-setup)
  (js/console.log "init")
  (mount-root))

(comment
  (reagent.dom/render [])
  )
(ns simplefrontend.main
  (:require [re-frame.core :as re-frame]
            [reagent-dev-tools.core :as dev-tools]
            [reitit.coercion.spec :as rss]
            [reitit.frontend :as rf]
            [reitit.frontend.controllers :as rfc]
            [reitit.frontend.easy :as rfe]
            [simplefrontend.signin :as sf-signin]
            [simplefrontend.subscriptions :as sf-subs]
            [simplefrontend.login :as sf-login]))

;; ******************************************************************
;; NOTE: When starting ClojureScript REPL in Cursive, give first command:
; (shadow.cljs.devtools.api/repl :app)
; to connect the REPL to the app running in the browser.
;; ******************************************************************



;;; Events ;;;

(re-frame/reg-event-db
  ::initialize-db
  (fn [_ _]
    {:current-route nil
     :logged-in false
     :debug false}))

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


;;; Views ;;;

(defn header []
  [:div {:class "sf-header"} "Web Store"
   (let [logged-in @(re-frame/subscribe [::sf-subs/logged-in])]
     (js/console.log "logged-in: " logged-in)
     (if-not logged-in
       [:div
        [:button
         {:class "sf-header-signin-button"
          :on-click #(re-frame/dispatch [::navigate ::sf-subs/signin])}
         "Sign-In"]
        [:button
         {:on-click #(re-frame/dispatch [::navigate ::sf-subs/login])}
         "Login"]]))
   [:div ]])

(defn home-page []
  [:div
   [:h3 "Welcome!"]
   [:p "Here you can browse books and movies."]
   [:p "But you have to sign-in or login first!"]
   ])

(defn current-view [current-route]
  (let [name (-> current-route :data :name)]
    (case name
      ::home [home-page]
      ::sf-subs/signin [sf-signin/signin-page]
      ::sf-subs/login [sf-login/login-page]
      (do
        (js/console.log (str "current-view: no matching clause, giving home-page, name: " name))
        [home-page]))))

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
     ;; NOTE: :view entities not actually used in this exercise since couldn't make live reload work with reitit,
     ;; see current-view dispatcher above.
     :view home-page
     :link-text "Home"
     :controllers
     [{;; Do whatever initialization needed for home page
       ;; I.e (re-frame/dispatch [::events/load-something-with-ajax])
       :start (fn [& params] (js/console.log "Entering home page"))
       ;; Teardown can be done here.
       :stop (fn [& params] (js/console.log "Leaving home page"))}]}]
   ["signin"
    {:name ::sf-subs/signin
     :view sf-signin/signin-page
     :link-text "Sign-In"
     :controllers
     [{:start (fn [& params] (js/console.log "Entering signin"))
       :stop (fn [& params] (js/console.log "Leaving signin"))}]}]
   ["login"
    {:name ::sf-subs/login
     :view sf-login/login-page
     :link-text "Login"
     :controllers
     [{:start (fn [& params] (js/console.log "Entering login"))
       :stop (fn [& params] (js/console.log "Leaving login"))}]}]
   ])

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

(defn router-component [{:keys [router]}]
  (js/console.log "router-component")
  (let [current-route @(re-frame/subscribe [::sf-subs/current-route])]
    [:div {:class "sf-main"}
     [header]
     ; NOTE: Live-reload is not working when the view is inside the Reitit tree, therefore using simple
     ; Function based dispatch.
     (current-view current-route)
     #_(when current-route
         [(-> current-route :data :view)])]))

;;; Setup ;;;

(def debug? ^boolean goog.DEBUG)

(defn dev-setup []
  (when debug?
    (enable-console-print!)
    (println "dev mode")))


(defn render-app []
  (reagent.dom/render [router-component {:router router}
                       (if (:open? @dev-tools/dev-state)
                         {:style {:padding-bottom (str (:height @dev-tools/dev-state) "px")}})
                       ]
                      (.getElementById js/document "app")))

(defn mount-root []
  (js/console.log "mount-root")
  (re-frame/clear-subscription-cache!)
  (init-routes!) ;; Reset routes on figwheel reload
  ;; ***************************************************
  (render-app))

(defn ^:export init []
  (re-frame/dispatch-sync [::initialize-db])
  (dev-tools/start! {:state-atom re-frame.db/app-db})
  (dev-setup)
  (js/console.log "init")
  (mount-root))

; We don't need any hooks, just call it as top level form => re-renders when namespace is reloaded.
(init)

(comment
  (reagent.dom/render [])
  )
(ns simplefrontend.main
  (:require [re-frame.core :as re-frame]
            [day8.re-frame.http-fx] ; Needed to register :http-xhrio to re-frame.
            [reagent-dev-tools.core :as dev-tools]
            [reitit.coercion.spec :as rss]
            [reitit.frontend :as rf]
            [reitit.frontend.controllers :as rfc]
            [reitit.frontend.easy :as rfe]
            [simplefrontend.signin :as sf-signin]
            [simplefrontend.state :as sf-state]
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
     :jwt nil
     :debug true
     :login nil
     :signin nil}))

(re-frame/reg-event-fx
  ::navigate
  (fn [db [_ & route]]
    ;; See `navigate` effect in routes.cljs
    {::navigate! route}))

(re-frame/reg-event-db
  ::navigated
  (fn [db [_ new-match]]
    (let [old-match (:current-route db)
          new-path (:path new-match)
          controllers (rfc/apply-controllers (:controllers old-match) new-match)]
      (js/console.log (str "new-path: " new-path))
      (cond-> (assoc db :current-route (assoc new-match :controllers controllers))
              (if (= "/") new-path) (-> (assoc :signin nil)
                                        (assoc :login nil))))))

(re-frame/reg-event-db
  ::logout
  (fn [db [_]]
    (assoc db :jwt nil)))

;;; Views ;;;

(defn header []
  [:div.sf-header "Web Store"
   (let [jwt @(re-frame/subscribe [::sf-state/jwt])
         current-route @(re-frame/subscribe [::sf-state/current-route])]
     (js/console.log "jwt: " jwt)
     [:div
      (if (and (= (:path current-route) "/") (not jwt))
        [:button.sf-header-button
         {:on-click #(re-frame/dispatch [::navigate ::sf-state/signin])}
         "Sign-In"])
      (if (and (= (:path current-route) "/") (not jwt))
        [:button.sf-header-button
         {:on-click #(re-frame/dispatch [::navigate ::sf-state/login])}
         "Login"])
      (if (and (= (:path current-route) "/") jwt)
        [:button.sf-header-button
         {:on-click #(re-frame/dispatch [::logout])}
         "Logout"])])
   [:div] ; Extra div so that we able to see the Sign-in and Login buttons with the 10x tool panel.
   ])

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
      ::sf-state/signin [sf-signin/signin-page]
      ::sf-state/login [sf-login/login-page]
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
     [{:start (fn [& params] (js/console.log "Entering home page"))
       :stop (fn [& params] (js/console.log "Leaving home page"))}]}]
   ["signin"
    {:name ::sf-state/signin
     :view sf-signin/signin-page
     :link-text "Sign-In"
     :controllers
     [{:start (fn [& params] (js/console.log "Entering signin"))
       :stop (fn [& params] (js/console.log "Leaving signin"))}]}]
   ["login"
    {:name ::sf-state/login
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
  (let [current-route @(re-frame/subscribe [::sf-state/current-route])]
    [:div.sf-main
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
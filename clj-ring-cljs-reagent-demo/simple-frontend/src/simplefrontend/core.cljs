(ns simplefrontend.core
  (:require-macros [secretary.core :refer [defroute]])
  (:import goog.History)
  (:require
    [secretary.core :as secretary]
    [goog.events :as events]
    [goog.history.EventType :as EventType]
    [reagent.core :as r]
    [simplefrontend.login :as sf-login]
    [simplefrontend.signin :as sf-signin]
    [simplefrontend.productgroups :as sf-productgroups]))


;; -------------------------
;; Application state.
(def app-state (r/atom {}))



;; -------------------------
;; Application wide properties.
(def backend-host-config {:host "localhost" :port 3045})


(defn set-page
  "Sets current page"
  [page]
  (swap! app-state assoc :page page))

;; -------------------------
;; Views.

(defn hook-browser-navigation! []
  (doto (History.)
    (events/listen
      EventType/NAVIGATE
      (fn [event]
        (secretary/dispatch! (.-token event))))
    (.setEnabled true)))


(defn app-routes []
  (secretary/set-config! :prefix "#")

  (defroute "/" []
            (set-page :home))
  (defroute "/signin" []
            (set-page :signin))
  (defroute "/login" []
            (set-page :login))
  (defroute "/productgroups" []
            (set-page :productgroups))
  (hook-browser-navigation!))


(defn home
  []
  [:div [:h1 "Web Store"]
   [:a {:href "#/signin"} "Sign-in"]
   [:div]
   [:a {:href "#/login"} "Login"]
   [:div]
   [:a {:href "#/productgroups"} "Product Groups"]
   ])

(defn signin
  []
  (sf-signin/reset-page)
  (sf-signin/signin-page))

(defn login
  []
  (sf-login/reset-page)
  (sf-login/login-page))

(defn productgroups
  []
  (sf-productgroups/productgroups-page))



(defmulti current-page #(@app-state :page))
(defmethod current-page :home []
  [home])
(defmethod current-page :signin []
  [signin])
(defmethod current-page :login []
  [login])
(defmethod current-page :productgroups []
  [productgroups])
(defmethod current-page :default []
  [:div])



;; -------------------------
;; Initialize application.


(defn mount-root []
  (app-routes)
  (r/render [current-page] (.getElementById js/document "app")))

(defn init! []
  (mount-root))

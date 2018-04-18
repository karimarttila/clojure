(ns simplefrontend.core
  (:require-macros [secretary.core :refer [defroute]])
  (:import goog.History)
  (:require
    [secretary.core :as secretary]
    [goog.events :as events]
    [goog.history.EventType :as EventType]
    [reagent.core :as r]
    [simplefrontend.session :as sf-session]
    [simplefrontend.login :as sf-login]
    [simplefrontend.signin :as sf-signin]
    [simplefrontend.productgroups :as sf-productgroups]
    [simplefrontend.products :as sf-products]))



;; -------------------------
;; Application wide properties.
(def backend-host-config {:host "localhost" :port 3045})


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
            (sf-session/set-current-page! :home))
  (defroute "/signin" []
            (sf-session/set-current-page! :signin))
  (defroute "/login" []
            (sf-session/set-current-page! :login))
  (defroute "/productgroups" []
            (sf-session/set-current-page! :productgroups))
  (defroute "/products/:pg-id" [pg-id]
            (sf-session/set-current-page! :products)
            (sf-session/set-page-params! :products {:pg-id pg-id}))
  (hook-browser-navigation!))


(defn home
  []
  [:div [:h1 "Web Store"]
   [:a {:href "#/signin"} "Sign-in"]
   [:div]
   [:a {:href "#/login"} "Login"]
   [:div]
   [:a {:href "#/productgroups"} "Product Groups"]])


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
  (sf-productgroups/reset-page)
  (sf-productgroups/productgroups-page (sf-session/get-encoded-token)))

(defn products
  []
  (sf-products/reset-page)
  (sf-products/products-page (sf-session/get-encoded-token)
                             ((sf-session/get-page-params :products) :pg-id)))


; (defmulti current-page #(@sf-session/app-state :page))
(defmulti current-page #(sf-session/get-current-page))
(defmethod current-page :home []
  [home])
(defmethod current-page :signin []
  [signin])
(defmethod current-page :login []
  [login])
(defmethod current-page :productgroups []
  [productgroups])
(defmethod current-page :products []
  [products])
(defmethod current-page :default []
  [:div])



;; -------------------------
;; Initialize application.


(defn mount-root []
  (app-routes)
  (r/render [current-page] (.getElementById js/document "app")))

(defn init! []
  (mount-root))

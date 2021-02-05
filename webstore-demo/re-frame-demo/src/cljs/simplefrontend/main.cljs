(ns simplefrontend.main
  (:require [re-frame.core :as re-frame]
            [re-frame.db]
            [reagent.dom :as r-dom]
            [day8.re-frame.http-fx] ; Needed to register :http-xhrio to re-frame.
            [reagent-dev-tools.core :as dev-tools]
            [reitit.coercion.spec :as rss]
            [reitit.frontend :as rf]
            [reitit.frontend.controllers :as rfc]
            [reitit.frontend.easy :as rfe]
            [simplefrontend.util :as sf-util]
            [simplefrontend.signin :as sf-signin]
            [simplefrontend.state :as sf-state]
            [simplefrontend.login :as sf-login]
            [simplefrontend.product-group :as sf-product-group]
            [simplefrontend.products :as sf-products]
            [simplefrontend.product :as sf-product]))

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
  ::sf-state/navigate
  (fn [_ [_ & route]]
    ;; See `navigate` effect in routes.cljs
    {::navigate! route}))

(re-frame/reg-event-db
  ::sf-state/navigated
  (fn [db [_ new-match]]
    (let [old-match (:current-route db)
          new-path (:path new-match)
          controllers (rfc/apply-controllers (:controllers old-match) new-match)]
      (js/console.log (str "new-path: " new-path))
      (cond-> (assoc db :current-route (assoc new-match :controllers controllers))
              (= "/" new-path) (-> (assoc :signin nil)
                                   (assoc :login nil))))))

(re-frame/reg-event-fx
  ::sf-state/logout
  (fn [cofx [_]]
    {:db (assoc (:db cofx) :jwt nil)
     :fx [[:dispatch [::sf-state/navigate ::sf-state/home]]]}))

;;; Views ;;;

(defn welcome []
  [:div
   [:h3 "Welcome!"]
   [:p "Here you can browse books and movies."]
   [:p "But you have to sign-in or login first!"]])

(defn home-page []
  (let [jwt @(re-frame/subscribe [::sf-state/jwt])]
    ; If we have jwt in app db we are logged-in.
    (sf-util/clog "ENTER home-page")
    (if jwt
      (re-frame/dispatch [::sf-state/navigate ::sf-state/product-group])
      ;; NOTE: You need the div here or you are going to see only the debug-panel!
      [:div
       (welcome)
       (sf-util/debug-panel {:jwt jwt})])))


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
    {:name ::sf-state/home
     :view home-page
     :link-text "Home"
     :controllers
     [{:start (fn [& params] (js/console.log (str "Entering home page, params: " params)))
       :stop (fn [& params] (js/console.log (str "Leaving home page, params: " params)))}]}]
   ["signin"
    {:name ::sf-state/signin
     :view sf-signin/signin-page
     :link-text "Sign-In"
     :controllers
     [{:start (fn [& params] (js/console.log (str "Entering signin, params: " params)))
       :stop (fn [& params] (js/console.log (str "Leaving signin, params: " params)))}]}]
   ["login"
    {:name ::sf-state/login
     :view sf-login/login-page
     :link-text "Login"
     :controllers [{:start (fn [& params] (js/console.log (str "Entering login, params: " params)))
                    :stop (fn [& params] (js/console.log (str "Leaving login, params: " params)))}]}]
   ["product-group"
    {:name ::sf-state/product-group
     :view sf-product-group/product-group-page
     :link-text "Product group"
     :controllers [{:start (fn [& params] (js/console.log (str "Entering product-group, params: " params)))
                    :stop (fn [& params] (js/console.log (str "Leaving product-group, params: " params)))}]}]
   ["products/:pgid"
    {:name ::sf-state/products
     :parameters {:path {:pgid int?}}
     :view sf-products/products-page
     :link-text "Products"
     :controllers [{:start (fn [& params] (js/console.log (str "Entering products, params: " params)))
                    :stop (fn [& params] (js/console.log (str "Leaving products, params: " params)))}]}]
   ["product/:pgid/:pid"
    {:name ::sf-state/product
     :parameters {:path {:pgid int?
                         :pid int?}}
     :view sf-product/product-page
     :link-text "Product"
     :controllers [{:start (fn [& params] (js/console.log (str "Entering product, params: " params)))
                    :stop (fn [& params] (js/console.log (str "Leaving product, params: "params)))}]}]])

(def routes routes-dev)

(defn on-navigate [new-match]
  (sf-util/clog "on-navigate, new-match" new-match)
  (when new-match
    (re-frame/dispatch [::sf-state/navigated new-match])))

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
  (sf-util/clog "ENTER router-component")
  (let [current-route @(re-frame/subscribe [::sf-state/current-route])
        path-params (:path-params current-route)
        _ (sf-util/clog "router-component, path-params" path-params)]
    [:div.sf-main
     [sf-util/header]
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

  ;(require '[hashp.core :include-macros true])
  ;(let [a #p (range 5)] a)

  )

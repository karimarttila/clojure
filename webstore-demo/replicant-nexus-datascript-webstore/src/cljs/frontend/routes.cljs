(ns frontend.routes
  (:require [reitit.frontend :as rf]
            [reitit.frontend.easy :as rfe]
            [nexus.registry :as nxr]
            [frontend.util :as f-util]))


;; ************************************************************************
;; NOTE: If you change the routes, you have to hard refresh the app in browser !!!
;; ************************************************************************


(def routes [["/" {:name :route/home}]
             ["/products/:pg" {:name :route/products
                               :path [:pg string?]}]
             ["/product/:pg/:id" {:name :route/product
                                  :path [:pg string?
                                         :id string?]}]
             ["/new/:pg" {:name :route/new
                          :path [:pg string?]}]])

(defonce routes-initialized? (atom false))

(defn- get-route-actions [{:keys [data path-params] :as all}]
  (when goog.DEBUG (f-util/clog "routes.get-route-actions, all: " all))
  (when goog.DEBUG (f-util/clog "routes.get-route-actions, data: " data))
  (when goog.DEBUG (f-util/clog "routes.get-route-actions, path-params: " path-params))
  (case (:name data)
    :route/home [[:route/home]]
    :route/products (let [pg (keyword (:pg path-params))]
                      [[:route/products {:pg pg}]])
    :route/product (let [id (int (:id path-params))
                         pg (keyword (:pg path-params))]
                     [[:route/product {:id id :pg pg}]])
    :route/new (let [pg (keyword (:pg path-params))]
                 [[:route/new {:pg pg}]])))

(defn start! [routes system]
  (when goog.DEBUG (f-util/clog "routes.start! called, routes-initialized?: " @routes-initialized?))
  (when-not @routes-initialized?
    (when goog.DEBUG (f-util/clog "routes.start! - initializing routes"))
    (rfe/start! (rf/router routes)
              ;; This function is called when routing happens.
              ;; ************************************************************************
              ;; NOTE: If you change this function, you have to hard refresh the app in browser !!!
              ;; ************************************************************************ 
                (fn do-routing [m]
                  (when goog.DEBUG (f-util/clog "routes.do-routing, m: " m))
                  (let [actions (get-route-actions m)]
                    (when goog.DEBUG (f-util/clog "routes.do-routing, system " system))
                    (when goog.DEBUG (f-util/clog "routes.do-routing, actions: " actions))
                    (nxr/dispatch system nil actions)))
                {:use-fragment true})
    (reset! routes-initialized? true)
    (when goog.DEBUG (f-util/clog "routes.start! - routes initialized"))))

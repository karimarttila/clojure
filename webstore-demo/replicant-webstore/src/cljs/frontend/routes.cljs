(ns frontend.routes
  #_{:clj-kondo/ignore [:unused-namespace]}
  (:require [reitit.frontend :as rf]
            [reitit.frontend.easy :as rfe]
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


#_{:clj-kondo/ignore [:unused-binding]}
(defn- get-route-actions [{:keys [data path-params] :as all}]
;;   (when goog.DEBUG (f-util/clog "get-route-actions, all: " all))
;;   (when goog.DEBUG (f-util/clog "get-route-actions, data: " data))
;;   (when goog.DEBUG (f-util/clog "get-route-actions, path-params: " path-params))
  ;; We see app.cljs => event-handler.
  (case (:name data)
    :route/home [[:route/home]]
    :route/products (let [pg (keyword (:pg path-params))]
                      [[:route/products {:pg pg}]])
    :route/product (let [id (int (:id path-params))
                         pg (keyword (:pg path-params))]
                     [[:route/product {:id id :pg pg}]])
    :route/new (let [pg (keyword (:pg path-params))]
                 [[:route/new {:pg pg}]])))


(defn start! [routes dispatch!]
  ;; (when goog.DEBUG (f-util/clog "routes.start!"))
  (rfe/start! (rf/router routes)
              (fn do-routing [m]
                ;; (when goog.DEBUG (f-util/clog "routes.do-routing, m: " m))
                (dispatch! nil (get-route-actions m)))
              {:use-fragment true}))





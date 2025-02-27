(ns frontend.routes
  (:require [reitit.frontend :as rf]
            [reitit.frontend.easy :as rfe]
            [frontend.util :as f-util]))


(def routes [["/" {:name :route/home}]
             ["/products/:id" {:name :route/products
                               :path [:id string?]}]])


(defn- get-route-actions [{:keys [data path-params] :as all}]
  (f-util/clog "get-route-actions, all: " all)
  (f-util/clog "get-route-actions, data: " data)
  (f-util/clog "get-route-actions, path-params: " path-params)
  ;; We see app.cljs => event-handler.
  (case (:name data)
    :route/home [[:route/home]]
    :route/products (let [id (keyword (:id path-params))]
                      [[:route/products {:id id}]])))


(defn start! [routes dispatch!]
  (f-util/clog "routes.start!")
  (rfe/start! (rf/router routes)
              (fn do-routing [m]
                (f-util/clog "routes.do-routing, m: " m)
                (dispatch! nil (get-route-actions m)))
              {:use-fragment true}))





(ns frontend.routes
  #_{:clj-kondo/ignore [:unused-namespace]}
  (:require [reitit.frontend :as rf]
            [reitit.frontend.easy :as rfe]
            [frontend.util :as f-util]))


(def routes [["/" {:name :route/home}]
             ["/products/:pg" {:name :route/products
                               :path [:pg string?]}]
             ["/books/:id" {:name :route/books
                            :path [:id string?]}]
             ["/movies/:id" {:name :route/movies
                             :path [:id string?]}]])


#_{:clj-kondo/ignore [:unused-binding]}
(defn- get-route-actions [{:keys [data path-params] :as all}]
  ;(f-util/clog "get-route-actions, all: " all)
  ;(f-util/clog "get-route-actions, data: " data)
  ;(f-util/clog "get-route-actions, path-params: " path-params)
  ;; We see app.cljs => event-handler.
  (case (:name data)
    :route/home [[:route/home]]
    :route/products (let [pg (keyword (:pg path-params))]
                      [[:route/products {:pg pg}]])
    :route/books (let [id (int (:id path-params))]
                   [[:route/books {:id id :pg :books}]])
    :route/movies (let [id (int (:id path-params))]
                    [[:route/movies {:id id :pg :movies}]])))


(defn start! [routes dispatch!]
  ;(f-util/clog "routes.start!")
  (rfe/start! (rf/router routes)
              (fn do-routing [m]
                ;(f-util/clog "routes.do-routing, m: " m)
                (dispatch! nil (get-route-actions m)))
              {:use-fragment true}))





(ns worldstat.frontend.http
  (:require [worldstat.frontend.log :as ws-log]
            [ajax.core :as ajax :refer []])) ; NOTE: Empty refer for clj-kondo

;; See: https://github.com/day8/re-frame-http-fx
(defn http [method db uri data on-success on-failure]
  (ws-log/clog "http, uri" uri)
  (let [xhrio (cond-> {:debug true
                       :method method
                       :uri uri
                       :format (ajax/json-request-format)
                       :response-format (ajax/json-response-format {:keywords? true})
                       :on-success [on-success]
                       :on-failure [on-failure]}
                      data (assoc :params data))]
    {:http-xhrio xhrio
     :db db}))

(def http-post (partial http :post))
(def http-get (partial http :get))


(ns simplefrontend.http
  (:require [re-frame.core :as re-frame]
            [ajax.core :as ajax]))


(defn auth-header [db]
  (let [jwt (get-in db [:jwt])]
    (if jwt
      [:Authorization (str "Token " jwt)]
      nil)))

;; See: https://github.com/day8/re-frame-http-fx
(defn http [method db uri data on-success on-failure]
  {:http-xhrio {:method method
                :uri uri
                :params data
                :headers (auth-header db)
                :format (ajax/json-request-format)
                :response-format (ajax/json-response-format {:keywords? true})
                :on-success [on-success]
                :on-failure [on-failure]}
   :db db})

(def http-post (partial http :post))
(def http-get (partial http :get))


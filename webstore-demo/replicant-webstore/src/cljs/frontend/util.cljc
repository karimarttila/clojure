(ns frontend.util
  (:require [frontend.config :as f-config]))

(defn get-product-group-by-id [id product-groups]
  (some #(when (= (:id %) id) %) product-groups))


(defn clog
  ([msg] (clog msg nil))
  ([msg data]
   (if data
     (prn msg data)
     (prn msg))))


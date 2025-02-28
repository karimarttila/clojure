(ns frontend.util)

(defn get-product-group-by-id [id product-groups]
  (some #(when (= (:id %) id) %) product-groups))


; Keep this file as cljc.
; If you need logging in cljc files, do it temporarily
; and comment out when you don't need it anymore.
; In cljs files use: (when *debug* (f-util/clog "...
(defn clog
  ([msg] (clog msg nil))
  ([msg data]
   (if data
     (prn msg data)
     (prn msg))))


(ns scratch1)


;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;

(+ 1 (* 2 4) (* 2 5))
;;=> 19


(keyword :books)
(keyword :books)
;;=> :books


;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;
;; Experimenting the transducer stuff in db.clj.}

(def xf1 (comp (filter odd?) (take 5)))
(sequence xf1 (range 1 10))
;;=> (1 3 5 7 9)

(def xf2 (comp (map inc)
               (map inc)))
(sequence xf2 (range 1 5))
;;=> (3 4 5 6)

(def xf3 (comp (map #(do (println (str "a: " %)) (inc %)))
               (map #(do (println (str "b: " %)) (inc %)))))
(sequence xf3 (range 1 5))
;;=> a: 2
;;   b: 3
;;   a: 3
;;   b: 4
;;   a: 4
;;   b: 5
;;   (3 4 5 6)
;; => So, xf3 does not first iterate first map, and then second map,
;;    But we create a transducer, which processes item by item in one "map".





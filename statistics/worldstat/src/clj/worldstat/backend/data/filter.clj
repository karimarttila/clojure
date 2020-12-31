(ns worldstat.backend.data.filter)

(defn filter-by
  "A transducer for filtering by code/value."
  [code value]
  (filter #(= (code %) value)))

(defn remove-by
  "A transducer for removing entities by code/value"
  [code value]
  (remove #(= (code %) value)))

(defn remove-na-values [points]
  (transduce (remove-by :value :na) conj points))

(comment
  (set! *print-length* 2000)
  (count (:data (user/data)))
  (count (remove-na-values (:data (user/data))))
  (count (transduce (filter-by :value :na) conj (:data (user/data))))
  (transduce (filter-by :country-code :FIN) conj (:data (user/data)))
  (def xf-fin-y2002 (comp (filter-by :country-code :FIN) (filter-by :year 2002)))
  (transduce xf-fin-y2002 conj (:data (user/data)))

  )

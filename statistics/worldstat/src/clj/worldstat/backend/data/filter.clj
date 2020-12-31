(ns worldstat.backend.data.filter)

(defn filter-by
  "Returns a transducer for filtering by code/value."
  [code value]
  (filter #(= (code %) value)))

(defn remove-by
  "Returns a transducer for removing entities by code/value."
  [code value]
  (remove #(= (code %) value)))

(def remove-na-values
  (remove-by :value :na))

(defn filter-by-metric
  "Returns a transducer that filters by a metric."
  [metric]
  (filter-by :series-code metric))

(comment
  (set! *print-length* 2000)
  (count (:data (user/data)))
  (count (transduce remove-na-values conj (:data (user/data))))
  (count (transduce (filter-by :value :na) conj (:data (user/data))))
  (transduce (filter-by :country-code :FIN) conj (:data (user/data)))
  (def xf-fin-y2002 (comp (filter-by :country-code :FIN) (filter-by :year 2002)))
  (transduce xf-fin-y2002 conj (:data (user/data)))
  (transduce (filter-by-metric :SP.POP.TOTL) conj (:data (user/data)))

  )

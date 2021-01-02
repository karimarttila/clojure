(ns worldstat.common.data.filter)

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

(defn filter-by-year
  "Returns a transducer that filters by a year."
  [year]
  (filter-by :year year))

(defn get-data-table
  "Returns a data table regarding a metric for each year for all countries."
  [metric points]
  (conj (map (fn [{:keys [country-id value]}]
                 [country-id value])
             (transduce (comp (filter-by-metric metric) (filter-by-year 2010)) conj points))
          ["country-id" "2010"]))

(comment
  (set! *print-length* 2000)
  (count (:data (user/data)))
  (count (transduce remove-na-values conj (:data (user/data))))
  (count (transduce (filter-by :value :na) conj (:data (user/data))))
  (transduce (filter-by :country-code :FIN) conj (:data (user/data)))
  (def xf-fin-y2002 (comp (filter-by :country-code :FIN) (filter-by :year 2002)))
  (transduce xf-fin-y2002 conj (:data (user/data)))
  (transduce (filter-by-metric :SP.POP.TOTL) conj (:data (user/data)))
  (get-data-table :SP.POP.TOTL (:points (user/data)))
  (transduce (comp (filter-by-metric :SP.POP.TOTL) (filter-by-year 2010)) conj (:points (user/data)))

  )

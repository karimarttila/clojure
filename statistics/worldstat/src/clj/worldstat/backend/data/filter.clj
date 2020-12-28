(ns worldstat.backend.data.filter)

(defn filter-by
  ([code value points]
   (filter #(= (code %) value) points))
  ([code1 value1 code2 value2 points]
   (filter #(and (= (code1 %) value1) (= (code2 %) value2)) points))
  ([code1 value1 code2 value2 code3 value3 points]
   (filter #(and (= (code1 %) value1) (= (code2 %) value2) (= (code3 %) value3)) points)))

(defn remove-by
  ([code value points]
   (remove #(= (code %) value) points))
  ([code1 value1 code2 value2 points]
   (remove #(and (= (code1 %) value1) (= (code2 %) value2)) points))
  ([code1 value1 code2 value2 code3 value3 points]
   (remove #(and (= (code1 %) value1) (= (code2 %) value2) (= (code3 %) value3)) points)))

(defn remove-na-values [points]
  (remove-by :value :na points))

(comment
  (count (filter-by :country-id nil (:data (user/data))))
  (set! *print-length* 200)
  (sort-by :country-name (:countries (user/data)))

  )

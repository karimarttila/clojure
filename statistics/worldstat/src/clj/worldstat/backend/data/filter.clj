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
  (remove-by :value "N/A" points))

(comment
  (:series (user/data))

  (count (filter-by :series-code :CC.EST (:data (user/data))))

  (:SH.TBS.INCD (:series-codes (user/data)))
  (->> (:data (user/data))
       (filter-by :series-code :SH.TBS.INCD)
       remove-na-values
       (sort-by :value)
       (reverse)
       (take 100)
       (map :country-name)
       (into #{})
       )



  )

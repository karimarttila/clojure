(ns simpleserver.test-utils.test-data)

;; ******************************************************
;; Domain

(defn product-groups []
  {"1" "Test-Books",
   "2" "Test-Movies"})

(defn raw-products [pg-id]
  (cond
    (= pg-id "1") [["21" "1" "Test Kalevala" "3.95" "Lönnrot" "1835" "Finland" "Finnish"]
                   ["22" "1" "Test Seitsemän veljestä" "7.22" "Kivi" "1870" "Finland" "Finnish"]]
    (= pg-id "2") [["1" "2" "Test Seven Samurai" "84.97" "Kurosawa" "1954" "Japan" "Drama"]
                   ["2" "2" "Test The Seventh Seal" "83.08" "Bergman" "1957" "Sweden" "Fantasy"]
                   ["3" "2" "Test Komisario Palmun erehdys" "38.78" "Kassila" "1960" "Finland" "Crime"]
                   ["4" "2" "Test Once Upon a Time in the West" "14.4" "Leone" "1968" "Italy-USA" "Western"]]
    :else (throw (UnsupportedOperationException. (str "Unknown pg-id: " pg-id)))))

;; ******************************************************
;; User

(defn users []
  {"1" {:userid "1"
        :email "test-kari.karttinen@foo.com"
        :first-name "Kari"
        :last-name "Karttinen"
        :hashed-password "1340477763"}
   "2" {:userid "2"
        :email "test-timo.tillikainen@foo.com"
        :first-name "Timo"
        :last-name "Tillikainen"
        :hashed-password "-36072128"}})


(comment
  (product-groups)
  (doseq [pg (product-groups)]
    (clojure.pprint/pprint pg))
  )
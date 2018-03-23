(ns csgen.util.random)


(def random-generator (java.util.Random.))


(defn generate-gaussian
  "Generates gaussian number with mean and deviation"
  [mean, deviation]
  (+ mean (* deviation (.nextGaussian random-generator))))


(defn generate-gaussian-integer-floor-zero
  "Generates gaussian integer number with mean and deviation, but floors to zero (no negative values)"
  [mean, deviation]
  (let [g (generate-gaussian mean deviation)]
    (if (neg? g)
      0
      (int g))))


(defn generate-gaussian-integer-with-floors
  "Generates gaussian integer number with mean and deviation, but floors to given min and max."
  [mean, deviation, min, max]
  (let [g (generate-gaussian mean deviation)
        ret (if (< g min)
              min
              (if (> g max)
                max
                g))]
    (int ret)))


(defn generate-equal-integer
  "Generate a random integer between start (inclusive) and end (exclusive)
  with a equal probability for each number"
  ([start end]
   (+ start (clojure.core/rand-int (- end start)))))


(defn generate-boolean-for-probability
  "Generates boolean regarding probability n (0-1)"
  [n]
  (let [r (clojure.core/rand)]
    (if (< r n)
      true
      false)))

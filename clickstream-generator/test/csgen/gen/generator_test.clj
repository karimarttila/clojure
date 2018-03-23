(ns csgen.gen.generator-test
  (:require [clojure.test :refer :all]
            [clojure.tools.logging :as log]
            [csgen.util.prop :as cg-prop]
            [csgen.gen.generator :as cg-gen]))


(defn csgen-test-fixture
  "The test fixture. Just resetting the configuration."
  [f]
  (do
    (log/trace "ENTERED csgen-test-fixture")
    ;; Reset configuration at the beginning of the testing.
    (cg-prop/reset-config!)
    (f)))


(use-fixtures :each csgen-test-fixture)


(defn -create-product-groups
  "Creates n product groups for testing purposes"
  [n]
  (loop [groups []
         left n]
    (if (<= left 0)
      groups
      (let [product-group (cg-gen/-draw-product-group)]
        (recur (cons product-group groups) (dec left))))))


(defn -calculate-delta
  "Calculates percentage delta of two numbers"
  [n1 n2]
  (let [divident (Math/abs (- n1 n2))
        divisor (/ (+ n1 n2) 2)
        result (* 100 (/ divident divisor))]
    (double result)))


(deftest product-group-probability-test
  (log/trace "ENTERED product-group-probability-test")
  (testing "Testing product group probability"
    (let [product-groups (-create-product-groups 100000)
          pg-1-p (cg-prop/get-double-value (str "probability-browsing-products-in-group-" 1))
          pg-2-p (cg-prop/get-double-value (str "probability-browsing-products-in-group-" 2))
          groups-1 (filter (fn [group]
                             (= (:id group) 1)) product-groups)
          count-all-groups (count product-groups)
          count-groups-1 (count groups-1)
          ratio-1 (double (/ (count groups-1) (count product-groups)))
          delta (-calculate-delta ratio-1 pg-1-p)
          dummy (log/trace (str "Delta: " delta))]
      ; If delta is less than 2% we are happy.
      (is (< delta 2)))))

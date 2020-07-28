(ns simpleserver.service.domain.domain-test
  (:require [clojure.test :refer [deftest use-fixtures is testing]]
            [clojure.tools.logging :as log]
            [simpleserver.test-config :as ss-tc]
            [simpleserver.test-utils.test-service :as ss-test-service]
            [simpleserver.service.domain.domain-service :as ss-domain-s]))


(defn init-fixture []
  (ss-test-service/init-domain (ss-tc/test-env)))

(defn domain-test-fixture
  [f]
  (log/debug "ENTER domain-test-fixture")
  (ss-tc/test-system-fixture-runner init-fixture f)
  (log/debug "EXIT domain-test-fixture"))

(use-fixtures :each domain-test-fixture)

(deftest get-product-groups-test
  (log/debug "ENTER get-product-groups-test")
  (testing "Testing product groups"
    (let [product-groups (ss-domain-s/get-product-groups (ss-tc/test-env))
          product-groups-len (count product-groups)
          right-map {"1" "Test-Books", "2" "Test-Movies"}]
      (is (= product-groups-len 2))
      (is (= product-groups right-map)))))

(deftest get-products-test
  (log/debug "ENTER get-products-test")
  (testing "Testing products"
    (let [products (ss-domain-s/get-products (ss-tc/test-env) 2)
          products-len (count products)
          product (into [] (first (filter (fn [item] (= (first item) "4")) products)))
          right-product ["4" "2" "Test Once Upon a Time in the West" "14.4"]
          no-products (ss-domain-s/get-products (ss-tc/test-env) 3)]
      (is (= products-len 4))
      (is (= product right-product))
      (is (= (count no-products) 0))
      )))

(deftest get-product-test
  (log/debug "ENTER get-product-test")
  (testing "Testing product"
    (let [product (ss-domain-s/get-product (ss-tc/test-env) 2 4)
          product-len (count product)
          right-product ["4" "2" "Test Once Upon a Time in the West" "14.4" "Leone" "1968" "Italy-USA" "Western"]
          no-product (ss-domain-s/get-product (ss-tc/test-env) 2 10000)]
      (is (= product-len 8))
      ;; What a coincidence! The chosen movie is the best western of all times!
      (is (= product right-product))
      (is (= no-product nil)))))

; Rich comment.
#_(comment
  (ss-tc/go)
  (ss-domain-s/get-product (ss-tc/test-env) 2 4)
  (ss-test-service/init-domain (ss-tc/test-env))
  (ss-tc/test-env)
  )
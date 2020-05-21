(ns simpleserver.service.domain.domain-test
  (:require [clojure.test :refer [deftest use-fixtures is testing]]
            [clojure.tools.logging :as log]
            [simpleserver.test-config :as ss-tc]
            [simpleserver.service.service :as ss-service]
            [simpleserver.service.domain.domain-interface :as ss-domain-i]
            [simpleserver.test-config :as ss-test-config]
            ))


(defn init-fixture [] )                                     ; Do nothing.

(defn domain-test-fixture
  [f]
  (log/debug "ENTER domain-test-fixture")
  (ss-tc/test-system-fixture-runner init-fixture f)
  (log/debug "EXIT domain-test-fixture"))

(use-fixtures :each domain-test-fixture)


(deftest get-product-groups-test
  (log/debug "ENTER get-product-groups-test")
  (testing "Testing product groups"
    (let [product-groups (ss-domain-i/get-product-groups (ss-service/get-service (ss-tc/test-service) :domain) (ss-tc/test-env))
          product-groups-len (count product-groups)
          right-map {"1" "Books", "2" "Movies"}]
      (is (= product-groups-len 2))
      (is (= product-groups right-map)))))

(deftest get-products-test
  (log/debug "ENTER get-products-test")
  (testing "Testing products"
    (let [products (ss-domain-i/get-products (ss-service/get-service (ss-tc/test-service) :domain) (ss-tc/test-env) 2)
          products-len (count products)
          product (into [] (first (filter (fn [item] (= (first item) "49")) products)))
          right-product ["49" "2" "Once Upon a Time in the West" "14.4"]
          no-products (ss-domain-i/get-products (ss-service/get-service (ss-tc/test-service) :domain) (ss-tc/test-env) 3)]
      (is (= products-len 169))
      (is (= product right-product))
      (is (= (count no-products) 0))
      )))

(deftest get-product-test
  (log/debug "ENTER get-product-test")
  (testing "Testing product"
    (let [product (ss-domain-i/get-product (ss-service/get-service (ss-tc/test-service) :domain) (ss-tc/test-env) 2 49)
          product-len (count product)
          right-product ["49" "2" "Once Upon a Time in the West" "14.4" "Leone, Sergio" "1968" "Italy-USA" "Western"]
          no-product (ss-domain-i/get-product (ss-service/get-service (ss-tc/test-service) :domain) (ss-tc/test-env) 2 10000)]
      (is (= product-len 8))
      ;; What a coincidence! The chosen movie is the best western of all times!
      (is (= product right-product))
      (is (= no-product nil)))))

(comment
  (def my-domain ss-domain-config/domain)
  my-domain
  (def product-groups (ss-domain-i/get-product-groups (ss-service/get-service (ss-tc/test-service) :domain) (ss-tc/test-env)  ))
  product-groups
  (def product-groups-len (count product-groups))
  product-groups-len
  )
(ns simpleserver.domain.domain-test
  (:require [clojure.test :refer [deftest use-fixtures is testing]]
            [clojure.tools.logging :as log]
            [simpleserver.domain.domain-config :as ss-domain-config]
            [simpleserver.domain.domain-interface :as ss-domain-i]
            ))

(defn domain-test-fixture
  "NOTE: We do nothing here since (unlike the user) the domain is read-only
  (i.e. no need to reset data in the database for tests)"
  [f]
  (log/debug "ENTER domain-test-fixture")
  (f)
  (log/debug "EXIT domain-test-fixture"))

; Register test fixtures.
(use-fixtures :each domain-test-fixture)

(deftest get-product-groups-test
  (log/debug "ENTER get-product-groups-test")
  (testing "Testing product groups"
    (let [my-domain ss-domain-config/domain
          product-groups (ss-domain-i/get-product-groups my-domain)
          product-groups-len (count product-groups)
          right-map {"1" "Books", "2" "Movies"}]
      (is (= product-groups-len 2))
      (is (= product-groups right-map)))))

(deftest get-products-test
  (log/debug "ENTER get-products-test")
  (testing "Testing products"
    (let [my-domain ss-domain-config/domain
          products (ss-domain-i/get-products my-domain 2)
          products-len (count products)
          product (into [] (first (filter (fn [item] (= (first item) "49")) products)))
          right-product ["49" "2" "Once Upon a Time in the West" "14.4"]
          no-products (ss-domain-i/get-products my-domain 3)]
      (is (= products-len 169))
      (is (= product right-product))
      (is (= (count no-products) 0))
      )))

(deftest get-product-test
  (log/debug "ENTER get-product-test")
  (testing "Testing product"
    (let [my-domain ss-domain-config/domain
          product (ss-domain-i/get-product my-domain 2 49)
          product-len (count product)
          right-product ["49" "2" "Once Upon a Time in the West" "14.4" "Leone, Sergio" "1968" "Italy-USA" "Western"]
          no-product (ss-domain-i/get-product my-domain 2 10000)]
      (is (= product-len 8))
      ;; What a coincidence! The chosen movie is the best western of all times!
      (is (= product right-product))
      (is (= no-product nil)))))

(comment
  (def my-domain ss-domain-config/domain)
  my-domain
  (def product-groups (ss-domain-i/get-product-groups my-domain))
  product-groups
  (def product-groups-len (count product-groups))
  product-groups-len
  )
(ns simpleserver.domaindb.domain-test
  (:require [clojure.test :refer :all]
            [clojure.tools.logging :as log]
            [environ.core :refer [env]]
            [simpleserver.domaindb.domain-factory :as ss-domain-factory]
            [simpleserver.domaindb.domain-service-interface :as ss-domain-svc]
            ))

; NOTE: If running against DynamoDB:
; 1. In local DynamoDB: start Docker container.
; 2. Both (local and aws): import Domain table.
; NOTE: Maybe later add test fixture to import domain data?

(def domain-svc (ss-domain-factory/create-domain))

(defn domaindb-test-fixture
  "NOTE: We do nothing here since unlike usersdb the domaindb is read-only
  (i.e. no need to reset data in the database for tests)"
  [f]
  (do
    (log/debug "ENTERED userdb-test-fixture")
    (f)))

(use-fixtures :each domaindb-test-fixture)


(deftest get-product-groups-test
  (log/debug "ENTER get-product-groups-test")
  (testing "Testing product groups"
    (let [product-groups (ss-domain-svc/get-product-groups domain-svc)
          product-groups-len (count product-groups)
          right-map {"1" "Books", "2" "Movies"}]
      (is (= product-groups-len 2))
      (is (= product-groups right-map)))))

(deftest get-products-test
  (log/debug "ENTER get-products-test")
  (testing "Testing products"
    (let [products (ss-domain-svc/get-products domain-svc 2)
          products-len (count products)
          product (into [] (first (filter (fn [item] (= (first item) "49")) products)))
          right-product ["49" "2" "Once Upon a Time in the West" "14.4"]
          no-products (ss-domain-svc/get-products domain-svc 3)]
      (is (= products-len 169))
      (is (= product right-product))
      (is (= (count no-products) 0))
      )))

(deftest get-product-test
  (log/debug "ENTER get-product-test")
  (testing "Testing product"
    (let [product (ss-domain-svc/get-product domain-svc 2 49)
          product-len (count product)
          right-product ["49" "2" "Once Upon a Time in the West" "14.4" "Leone, Sergio" "1968" "Italy-USA" "Western"]
          no-product (ss-domain-svc/get-product domain-svc 2 10000)
          ]
      (is (= product-len 8))
      ;; What a coincidence! The chosen movie is the best western of all times!
      (is (= product right-product))
      (is (= no-product nil)))))




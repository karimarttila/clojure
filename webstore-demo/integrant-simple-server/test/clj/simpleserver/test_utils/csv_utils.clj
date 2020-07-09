(ns simpleserver.test-utils.csv-utils
  (:require [simpleserver.test-utils.test-data :as test-data]
            [clojure.tools.logging :as log]))

;; ******************************************************
;; Domain

;; Before tests we just inject the test data to the "csv database" (atom in Integrant test system).
(defn init-domain-test-data [env]
  (let [db (get-in env [:service :domain :db])]
    (swap! db update-in [:domain :product-groups] (constantly (test-data/product-groups)))
    (swap! db update-in [:domain "pg-1-raw-products"] (constantly (test-data/raw-products "1")))
    (swap! db update-in [:domain "pg-2-raw-products"] (constantly (test-data/raw-products "2")))))

;; ******************************************************
;; Session

(defn reset-sessions! [env]
  (log/debug "ENTER reset-csv-sessions!")
  (let [db (get-in env [:service :domain :db])]
    (if (= (:profile env) :test)
      (swap! db update-in [:session] (constantly #{}))
      (throw (java.lang.UnsupportedOperationException. "You can reset sessions only in test environment!")))))

(defn get-sessions [env]
  (log/debug "ENTER get-csv-sessions")
  (let [db (get-in env [:service :domain :db])]
    (:session @db)))

;; ******************************************************
;; User

(defn get-users [env]
  (log/debug (str "ENTER -get-users"))
  (let [db (get-in env [:service :domain :db])]
    (:user @db)))

(defn reset-users! [env]
  (log/debug (str "ENTER -reset-users!"))
  (let [db (get-in env [:service :user :db])]
    (if (= (:profile env) :test)
      (swap! db update-in [:user] (constantly (test-data/users)))
      (throw (java.lang.UnsupportedOperationException. "You can reset sessions only in test environment!")))))
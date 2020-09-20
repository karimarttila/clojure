(ns simpleserver.test-utils.csv-utils
  (:require [simpleserver.test-utils.test-data :as test-data]
            [simpleserver.test-utils.test-service :as test-service]
            [clojure.tools.logging :as log]))

;; ******************************************************
;; Domain

;; Before tests we just inject the test data to the "csv database" (atom in Integrant test system).
(defmethod test-service/init-domain :csv [env]
  (log/debug "ENTER init-domain")
  (let [db (get-in env [:service :domain :db])]
    (swap! db update-in [:domain :product-groups] (constantly (test-data/product-groups)))
    (doseq [pg-id (keys (test-data/product-groups))]
      (let [mykey (str "pg-" pg-id "-raw-products")]
        (swap! db update-in [:domain mykey] (constantly (test-data/raw-products pg-id)))))))

;; ******************************************************
;; Session

(defmethod test-service/get-sessions :csv [env]
  (log/debug "ENTER get-sessions")
  (let [db (get-in env [:service :domain :db])]
    (:session @db)))

(defmethod test-service/reset-sessions! :csv [env]
  (log/debug "ENTER reset-sessions!")
  (let [db (get-in env [:service :domain :db])]
    (if (= (:profile env) :test)
      (swap! db update-in [:session] (constantly #{}))
      (throw (java.lang.UnsupportedOperationException. "You can reset sessions only in test environment!")))))

;; ******************************************************
;; User

(defmethod test-service/get-users :csv [env]
  (log/debug (str "ENTER -get-users"))
  (let [db (get-in env [:service :domain :db])]
    (:user @db)))

(defmethod test-service/reset-users! :csv [env]
  (log/debug (str "ENTER -reset-users!"))
  (let [db (get-in env [:service :user :db])]
    (if (= (:profile env) :test)
      (swap! db update-in [:user] (constantly (test-data/users)))
      (throw (java.lang.UnsupportedOperationException. "You can reset sessions only in test environment!")))))

(ns simpleserver.test-utils.test-service
  "Test data manipulations. Just using conds here instead of protocols."
  (:require [simpleserver.test-utils.csv-utils :as test-csv]
            [simpleserver.test-utils.dynamodb-utils :as test-ddb]
            [clojure.tools.logging :as log]))

;; ******************************************************
;; Domain

(defn init-domain [env]
  (log/debug "ENTER init-domain-test-data")
  (let [active-db (:active-db env)]
    (cond
      (= active-db :csv) (test-csv/init-domain env)
      (= active-db :ddb) (test-ddb/init-domain env)
      :else (throw (UnsupportedOperationException. (str "Unknown data store: " active-db))))))

;; ******************************************************
;; Session

(defn reset-sessions! [env]
  (log/debug "ENTER reset-sessions!")
  (let [active-db (:active-db env)]
    (cond
      (= active-db :csv) (test-csv/reset-sessions! env)
      (= active-db :ddb) (test-ddb/reset-sessions! env)
      :else (throw (UnsupportedOperationException. (str "Unknown data store: " active-db))))))

(defn get-sessions [env]
  (log/debug "ENTER get-sessions")
  (let [active-db (:active-db env)]
    (cond
      (= active-db :csv) (test-csv/get-sessions env)
      (= active-db :ddb) (test-ddb/get-sessions env)
      :else (throw (UnsupportedOperationException. (str "Unknown data store: " active-db))))))

;; ******************************************************
;; User

(defn get-users [env]
  (log/debug "ENTER get-users")
  (let [active-db (:active-db env)]
    (cond
      (= active-db :csv) (test-csv/get-users env)
      (= active-db :ddb) (test-ddb/get-users env)
      :else (throw (UnsupportedOperationException. (str "Unknown data store: " active-db))))))

(defn reset-users! [env]
  (log/debug "ENTER reset-users!")
  (let [active-db (:active-db env)]
    (cond
      (= active-db :csv) (test-csv/reset-users! env)
      (= active-db :ddb) (test-ddb/reset-users! env)
      :else (throw (UnsupportedOperationException. (str "Unknown data store: " active-db))))))


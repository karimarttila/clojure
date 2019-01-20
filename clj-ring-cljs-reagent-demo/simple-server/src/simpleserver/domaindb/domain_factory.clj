(ns simpleserver.domaindb.domain-factory
  (:require
    [environ.core :as environ]
    [simpleserver.domaindb.domain-single-node :as ss-domain-single-node]
    [simpleserver.domaindb.domain-dynamodb :as ss-domain-dynamodb]
    [simpleserver.domaindb.domain-table-storage :as ss-domain-table-storage]
    [clojure.tools.logging :as log]))


(defmulti -m-create-domain (fn [ssenv] ssenv))


(defmethod -m-create-domain "single-node"
  [env]
  (log/debug "ENTERED -m-create-domain - single-node")
  (ss-domain-single-node/->Env-single-node env))


;; Some form of AWS DynamoDB profile.
(defmethod -m-create-domain "dynamodb"
  [env]
  (log/debug "ENTERED -m-create-domain - dynamodb")
  (ss-domain-dynamodb/->Env-dynamodb env))


;; Some form of Azure Table storage profile.
(defmethod -m-create-domain "table"
  [env]
  (log/debug "ENTERED -m-create-domain - table")
  (ss-domain-table-storage/->Env-table-storage env))


(defmethod -m-create-domain :default
  [env]
  (log/debug "ENTERED -m-create-domain - default")
  (throw (IllegalArgumentException.
           (str "Unknown environment: " env))))


(defn create-domain
  []
  (let [ssenv (environ/env :ss-env)
        _ (log/debug (str "ENTERED create-domain - " ssenv))
        ssenv (if (.contains ssenv "dynamodb" )
                "dynamodb"
                ssenv)
        ssenv (if (.contains ssenv "table" )
                "table"
                ssenv)]
    (-m-create-domain ssenv)))

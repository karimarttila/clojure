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


(defmethod -m-create-domain "local-dynamodb"
  [env]
  (log/debug "ENTERED -m-create-domain - local-dynamodb")
  (ss-domain-dynamodb/->Env-dynamodb env))


(defmethod -m-create-domain "aws-dynamodb"
  [env]
  (log/debug "ENTERED -m-create-domain - aws-dynamodb")
  (ss-domain-dynamodb/->Env-dynamodb env))


(defmethod -m-create-domain "local-table"
  [env]
  (log/debug "ENTERED -m-create-domain - local-table")
  (ss-domain-table-storage/->Env-table-storage env))


(defmethod -m-create-domain :default
  [env]
  (log/debug "ENTERED -m-create-domain - default")
  (throw (IllegalArgumentException.
           (str "Unknown environment: " env))))


(defn create-domain
  []
  (log/debug "ENTERED create-domain")
  (let [ssenv (environ/env :ss-env)]
    (-m-create-domain ssenv)))

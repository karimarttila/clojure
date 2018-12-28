(ns simpleserver.sessiondb.session-factory
  (:require
    [clojure.tools.logging :as log]
    [environ.core :as environ]
    [simpleserver.sessiondb.session-single-node :as ss-session-single-node]
    [simpleserver.sessiondb.session-dynamodb :as ss-session-dynamodb]
    [simpleserver.sessiondb.session-table-storage :as ss-session-table-storage]))


(defmulti -m-create-session (fn [ssenv] ssenv))


(defmethod -m-create-session "single-node"
  [env]
  (log/debug "ENTERED -m-create-session - single-node")
  (ss-session-single-node/->Env-single-node env))


(defmethod -m-create-session "local-dynamodb"
  [env]
  (log/debug "ENTERED -m-create-session - local-dynamodb")
  (ss-session-dynamodb/->Env-dynamodb env))


(defmethod -m-create-session "aws-dynamodb"
  [env]
  (log/debug "ENTERED -m-create-session - aws-dynamodb")
  (ss-session-dynamodb/->Env-dynamodb env))


(defmethod -m-create-session "local-table"
  [env]
  (log/debug "ENTERED -m-create-session - local-table")
  (ss-session-table-storage/->Env-table-storage env))


(defmethod -m-create-session :default
  [env]
  (log/debug "ENTERED -m-create-session - default")
  (throw (IllegalArgumentException.
           (str "Unknown environment: " env))))


(defn create-session
  []
  (log/debug "ENTERED create-session")
  (let [ssenv (environ/env :ss-env)]
    (-m-create-session ssenv)))
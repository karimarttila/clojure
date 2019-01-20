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


;; Some form of AWS DynamoDB profile.
(defmethod -m-create-session "dynamodb"
  [env]
  (log/debug "ENTERED -m-create-session - dynamodb")
  (ss-session-dynamodb/->Env-dynamodb env))


;; Some form of Azure Table storage profile.
(defmethod -m-create-session "table"
  [env]
  (log/debug "ENTERED -m-create-session - table")
  (ss-session-table-storage/->Env-table-storage env))


(defmethod -m-create-session :default
  [env]
  (log/debug "ENTERED -m-create-session - default")
  (throw (IllegalArgumentException.
           (str "Unknown environment: " env))))


(defn create-session
  []
  (let [ssenv (environ/env :ss-env)
        _ (log/debug (str "ENTERED create-session - " ssenv))
        ssenv (if (.contains ssenv "dynamodb" )
                "dynamodb"
                ssenv)
        ssenv (if (.contains ssenv "table" )
                "table"
                ssenv)]
    (-m-create-session ssenv)))
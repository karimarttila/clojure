(ns simpleserver.userdb.users-factory
  (:require
    [clojure.tools.logging :as log]
    [environ.core :as environ]
    [simpleserver.userdb.users-single-node :as ss-user-single-node]
    [simpleserver.userdb.users-dynamodb :as ss-user-dynamodb]
    [simpleserver.userdb.users-table-storage :as ss-user-table-storage]))


(defmulti -m-create-users (fn [ssenv] ssenv))


(defmethod -m-create-users "single-node"
  [env]
  (log/debug "ENTERED -m-create-users - single-mode")
  (ss-user-single-node/->Env-single-node env))


;; Some form of AWS DynamoDB profile.
(defmethod -m-create-users "dynamodb"
  [env]
  (log/debug "ENTERED -m-create-users - dynamodb")
  (ss-user-dynamodb/->Env-dynamodb env))


;; Some form of Azure Table storage profile.
(defmethod -m-create-users "table"
  [env]
  (log/debug "ENTERED -m-create-users - table")
  (ss-user-table-storage/->Env-table-storage env))


(defmethod -m-create-users :default
  [env]
  (log/debug "ENTERED -m-create-users - default")
  (throw (IllegalArgumentException.
           (str "Unknown environment: " env))))


(defn create-users
  []
  (let [ssenv (environ/env :ss-env)
        - (log/debug (str "ENTERED create-users - " ssenv))
        ssenv (if (.contains ssenv "dynamodb" )
                "dynamodb"
                ssenv)
        ssenv (if (.contains ssenv "table" )
                "table"
                ssenv)]
    (-m-create-users ssenv)))

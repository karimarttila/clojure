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


(defmethod -m-create-users "local-dynamodb"
  [env]
  (log/debug "ENTERED -m-create-users - local-dynamodb")
  (ss-user-dynamodb/->Env-dynamodb env))


(defmethod -m-create-users "aws-dynamodb"
  [env]
  (log/debug "ENTERED -m-create-users - aws-dynamodb")
  (ss-user-dynamodb/->Env-dynamodb env))

(defmethod -m-create-users "aws-dynamodb-assumed-role"
  [env]
  (log/debug "ENTERED -m-create-users - aws-dynamodb-assumed-role")
  (ss-user-dynamodb/->Env-dynamodb env))

(defmethod -m-create-users "aws-dynamodb-eks"
  [env]
  (log/debug "ENTERED -m-create-users - aws-dynamodb-eks")
  (ss-user-dynamodb/->Env-dynamodb env))


(defmethod -m-create-users "local-table"
  [env]
  (log/debug "ENTERED -m-create-users - local-table")
  (ss-user-table-storage/->Env-table-storage env))


(defmethod -m-create-users "azure-table-storage"
  [env]
  (log/debug "ENTERED -m-create-users - azure-table-storage")
  (ss-user-table-storage/->Env-table-storage env))


(defmethod -m-create-users :default
  [env]
  (log/debug "ENTERED -m-create-users - default")
  (throw (IllegalArgumentException.
           (str "Unknown environment: " env))))


(defn create-users
  []
  (log/debug "ENTERED create-users")
  (let [ssenv (environ/env :ss-env)]
    (-m-create-users ssenv)))

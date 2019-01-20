(ns simpleserver.testutils.users-util
  (:require [clojure.tools.logging :as log]
            [environ.core :as environ]
            [simpleserver.userdb.users-single-node :as my-user-single-node]
            [simpleserver.testutils.reset-dynamodb-users-table :as my-reset-dynamodb-users]
            [simpleserver.testutils.reset-azure-table-storage-users-table :as my-reset-azure-users]))


(defmulti -m-initialize-userdb (fn [env] env))

(defmethod -m-initialize-userdb "single-node"
  [env]
  (log/debug "ENTERED -m-initialize-userdb - single-node")
  ; In single-node env we just swap the userdb :-)
  (my-user-single-node/-swap-userdb!))

(defmethod -m-initialize-userdb "local-dynamodb"
  [env]
  (log/debug "ENTERED -m-initialize-userdb - local-dynamodb")
  (my-reset-dynamodb-users/reset-local-dynamodb-userdb))

(defmethod -m-initialize-userdb "aws-dynamodb"
  [env]
  (log/debug "ENTERED -m-initialize-userdb - aws-dynamodb")
  (let [my-env (environ/env :my-env)]
    ; Sanity check: allow resetting DynamoDB only in dev env (not in prod env).
    (if (= my-env "dev")
      (my-reset-dynamodb-users/reset-local-dynamodb-userdb))))

(defmethod -m-initialize-userdb "aws-dynamodb-eks"
  [env]
  (log/debug "ENTERED -m-initialize-userdb - aws-dynamodb-eks")
  (let [my-env (environ/env :my-env)]
    ; Sanity check: allow resetting DynamoDB only in dev env (not in prod env).
    (if (= my-env "dev")
      (my-reset-dynamodb-users/reset-local-dynamodb-userdb))))

(defmethod -m-initialize-userdb "azure-table-storage"
  [env]
  (log/debug "ENTERED -m-initialize-userdb - azure-table-storage")
  (let [my-env (environ/env :my-env)]
    ; Sanity check: allow resetting DynamoDB only in dev env (not in prod env).
    (if (= my-env "dev")
      (my-reset-azure-users/reset-azure-table-storage-users-table))))


(defmethod -m-initialize-userdb :default
  [env]
  (log/debug "ENTERED -m-initialize-userdb - default")
  (throw (IllegalArgumentException.
           (str "Unknown environment: " env))))

(defn initialize-userdb
  []
  (log/debug "ENTERED initialize-userdb")
  (-m-initialize-userdb (environ/env :ss-env)))

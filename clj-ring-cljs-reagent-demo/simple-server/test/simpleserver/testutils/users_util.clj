(ns simpleserver.testutils.users-util
  (:require [clojure.tools.logging :as log]
            [environ.core :as environ]
            [simpleserver.userdb.users-single-node :as my-user-single-node]
            [simpleserver.testutils.reset-dynamodb-users-table :as my-reset-dynamodb-users]))


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
  (throw (IllegalArgumentException.
           (str "Not yet implemented for aws-dynamodb environment"))))

(defmethod -m-initialize-userdb :default
  [env]
  (log/debug "ENTERED -m-initialize-userdb - default")
  (throw (IllegalArgumentException.
           (str "Unknown environment: " env))))

(defn initialize-userdb
  []
  (log/debug "ENTERED initialize-userdb")
  (-m-initialize-userdb (environ/env :ss-env)))

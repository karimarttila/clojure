(ns simpleserver.testutils.session-util
  (:require [clojure.tools.logging :as log]
            [environ.core :as environ]
            [simpleserver.sessiondb.session-single-node :as my-session-single-node]
            [simpleserver.testutils.reset-dynamodb-sessions :as my-session-aws-reset-sessions]
            [simpleserver.testutils.reset-azure-table-storage-sessions :as my-session-azure-reset-sessions]))



(defmulti -m-initialize-sessions (fn [env] env))

(defmethod -m-initialize-sessions "single-node"
  [env]
  (log/debug "ENTERED -m-initialize-sessions - single-node")
  ; In single-node env we just swap the session :-)
  (my-session-single-node/reset-mysessions))

(defmethod -m-initialize-sessions "local-dynamodb"
  [env]
  (log/debug "ENTERED -m-initialize-sessions - local-dynamodb")
  (my-session-aws-reset-sessions/reset-dynamodb-sessions))

(defmethod -m-initialize-sessions "aws-dynamodb"
  [env]
  (log/debug "ENTERED -m-initialize-sessions - aws-dynamodb")
  (let [my-env (environ/env :my-env)]
    ; Sanity check: allow resetting DynamoDB only in dev env (not in prod env).
    (if (= my-env "dev")
      (my-session-aws-reset-sessions/reset-dynamodb-sessions))))

(defmethod -m-initialize-sessions "aws-dynamodb-eks"
  [env]
  (log/debug "ENTERED -m-initialize-sessions - aws-dynamodb-eks")
  (let [my-env (environ/env :my-env)]
    ; Sanity check: allow resetting DynamoDB only in dev env (not in prod env).
    (if (= my-env "dev")
      (my-session-aws-reset-sessions/reset-dynamodb-sessions))))

(defmethod -m-initialize-sessions "azure-table-storage"
  [env]
  (log/debug "ENTERED -m-initialize-sessions - azure-table-storage")
  (let [my-env (environ/env :my-env)]
    ; Sanity check: allow resetting Azure only in dev env (not in prod env).
    (if (= my-env "dev")
      (my-session-azure-reset-sessions/reset-azure-table-storage-sessions))))

(defmethod -m-initialize-sessions :default
  [env]
  (log/debug "ENTERED -m-initialize-sessions - default")
  (throw (IllegalArgumentException.
           (str "Unknown environment: " env))))

(defn initialize-sessions
  []
  (log/debug "ENTERED initialize-session")
  (-m-initialize-sessions (environ/env :ss-env)))

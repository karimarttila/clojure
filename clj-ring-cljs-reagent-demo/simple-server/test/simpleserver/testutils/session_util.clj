(ns simpleserver.testutils.session-util
  (:require [clojure.tools.logging :as log]
            [environ.core :as environ]
            [simpleserver.sessiondb.session-single-node :as my-session-single-node]
            [simpleserver.testutils.reset-dynamodb-sessions :as my-session-reset-sessions]))



(defmulti -m-initialize-sessions (fn [env] env))

(defmethod -m-initialize-sessions "single-node"
  [env]
  (log/debug "ENTERED -m-initialize-sessions - single-node")
  ; In single-node env we just swap the session :-)
  (my-session-single-node/reset-mysessions))

(defmethod -m-initialize-sessions "local-dynamodb"
  [env]
  (log/debug "ENTERED -m-initialize-sessions - local-dynamodb")
  (my-session-reset-sessions/reset-local-dynamodb-sessions))

(defmethod -m-initialize-sessions "aws-dynamodb"
  [env]
  (log/debug "ENTERED -m-initialize-sessions - aws-dynamodb")
  (throw (IllegalArgumentException.
           (str "Not yet implemented for aws-dynamodb environment"))))

(defmethod -m-initialize-sessions :default
  [env]
  (log/debug "ENTERED -m-initialize-sessions - default")
  (throw (IllegalArgumentException.
           (str "Unknown environment: " env))))

(defn initialize-sessions
  []
  (log/debug "ENTERED initialize-session")
  (-m-initialize-sessions (environ/env :ss-env)))

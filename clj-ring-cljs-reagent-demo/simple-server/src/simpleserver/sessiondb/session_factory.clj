(ns simpleserver.sessiondb.session-factory
  (:require
    [clojure.tools.logging :as log]
    [environ.core :refer [env]]
    [simpleserver.sessiondb.session-single-node :as ss-session-single-node]
    [simpleserver.sessiondb.session-local-dynamodb :as ss-session-local-dynamodb]))


(defmulti -m-create-session (fn [ssenv] ssenv))

(defmethod -m-create-session "single-node"
  [env]
  (log/debug "ENTERED -m-create-session - single-node")
  (ss-session-single-node/->Env-single-node env))

(defmethod -m-create-session "local-dynamodb"
  [env]
  (log/debug "ENTERED -m-create-session - local-dynamodb")
  (ss-session-local-dynamodb/->Env-local-dynamodb env))

(defmethod -m-create-session "aws-dynamodb"
  [env]
  (log/debug "ENTERED -m-create-session - aws-dynamodb")
  (throw (IllegalArgumentException.
           (str "Not yet implemented for aws-dynamodb environment"))))

(defmethod -m-create-session :default
  [env]
  (log/debug "ENTERED -m-create-session - default")
  (throw (IllegalArgumentException.
           (str "Unknown environment: " env))))


(defn create-session
  []
  (log/debug "ENTERED create-session")
  (let [ssenv (env :ss-env)]
    (-m-create-session ssenv)))
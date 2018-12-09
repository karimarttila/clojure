(ns simpleserver.sessiondb.session-factory
  (:require
    [clojure.tools.logging :as log]
    [environ.core :refer [env]]
    [simpleserver.sessiondb.session-single-node :as ss-session-single-node]
    [simpleserver.sessiondb.session-local-dynamodb :as ss-session-local-dynamodb]))


(defmulti -m-create-session (fn [ssenv] ssenv))

(defmethod -m-create-session "single-node"
  [env]
  (ss-session-single-node/->Env-single-node env))

(defmethod -m-create-session "local-dynamodb"
  [env]
  (ss-session-local-dynamodb/->Env-local-dynamodb env))

(defmethod -m-create-session "aws-dynamodb"
  [env]
  (throw (IllegalArgumentException.
           (str "Not yet implemented for aws environment"))))

(defmethod -m-create-session :default
  [env]
  (throw (IllegalArgumentException.
           (str "Unknown environment: " env))))


(defn create-session
  []
  (let [ssenv (env :ss-env)]
    (-m-create-session ssenv)))
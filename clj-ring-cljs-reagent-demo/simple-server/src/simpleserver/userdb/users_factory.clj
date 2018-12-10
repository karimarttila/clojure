(ns simpleserver.userdb.users-factory
  (:require
    [clojure.tools.logging :as log]
    [environ.core :refer [env]]
    [simpleserver.userdb.users-single-node :as ss-user-single-node]
    [simpleserver.userdb.users-local-dynamodb :as ss-user-local-dynamodb]))

(defmulti -m-create-users (fn [ssenv] ssenv))

(defmethod -m-create-users "single-node"
  [env]
  (log/debug "ENTERED -m-create-users - single-mode")
  (ss-user-single-node/->Env-single-node env))

(defmethod -m-create-users "local-dynamodb"
  [env]
  (log/debug "ENTERED -m-create-users - local-dynamodb")
  (ss-user-local-dynamodb/->Env-local-dynamodb env))

(defmethod -m-create-users "aws-dynamodb"
  [env]
  (log/debug "ENTERED -m-create-users - aws-dynamodb")
  (throw (IllegalArgumentException.
           (str "Not yet implemented for aws-dynamodb environment"))))

(defmethod -m-create-users :default
  [env]
  (log/debug "ENTERED -m-create-users - default")
  (throw (IllegalArgumentException.
           (str "Unknown environment: " env))))


(defn create-users
  []
  (log/debug "ENTERED create-users")
  (let [ssenv (env :ss-env)]
    (-m-create-users ssenv)))

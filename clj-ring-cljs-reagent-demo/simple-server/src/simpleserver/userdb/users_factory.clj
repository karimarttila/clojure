(ns simpleserver.userdb.users-factory
  (:require
    [clojure.tools.logging :as log]
    [environ.core :refer [env]]
    [simpleserver.userdb.users-single-node :as ss-user-single-node]
    [simpleserver.userdb.users-local-dynamodb :as ss-user-local-dynamodb]))

(defmulti -m-create-users (fn [env] env))

(defmethod -m-create-users "single-node"
  [env]
  (ss-user-single-node/->Env-single-node env))

(defmethod -m-create-users "local-dynamodb"
  [env]
  (ss-user-local-dynamodb/->Env-local-dynamodb env))

(defmethod -m-create-users "aws"
  [env]
  (throw (IllegalArgumentException.
           (str "Not yet implemented for aws environment"))))

(defmethod -m-create-users :default
  [env]
  (throw (IllegalArgumentException.
           (str "Unknown environment: " env))))


(defn create-users
  []
  (let [myenv (env :ss-env)]
    (-m-create-users myenv)))

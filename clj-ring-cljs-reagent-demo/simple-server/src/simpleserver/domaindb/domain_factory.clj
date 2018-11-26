(ns simpleserver.domaindb.domain-factory
  (:require
    [environ.core :refer [env]]
    [simpleserver.domaindb.domain-single-node :as ss-domain-single-node]))

(defmulti -m-create-domain (fn [env] env))

(defmethod -m-create-domain "single-node"
  [env]
  (ss-domain-single-node/->Env-single-node env))

(defmethod -m-create-domain "local-dynamodb"
  [env]
  (throw (IllegalArgumentException.
           (str "Not yet implemented for local-dynamodb environment"))))

(defmethod -m-create-domain "aws"
  [env]
  (throw (IllegalArgumentException.
           (str "Not yet implemented for aws environment"))))

(defmethod -m-create-domain :default
  [env]
  (throw (IllegalArgumentException.
           (str "Unknown environment: " env))))


(defn create-domain
  []
  (let [myenv (env :ss-env)]
    (-m-create-domain myenv)))

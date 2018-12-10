(ns simpleserver.domaindb.domain-factory
  (:require
    [environ.core :refer [env]]
    [simpleserver.domaindb.domain-single-node :as ss-domain-single-node]
    [simpleserver.domaindb.domain-local-dynamodb :as ss-domain-local-dynamodb]
    [clojure.tools.logging :as log]))

(defmulti -m-create-domain (fn [ssenv] ssenv))

(defmethod -m-create-domain "single-node"
  [env]
  (log/debug "ENTERED -m-create-domain - single-node")
  (ss-domain-single-node/->Env-single-node env))

(defmethod -m-create-domain "local-dynamodb"
  [env]
  (log/debug "ENTERED -m-create-domain - local-dynamodb")
  (ss-domain-local-dynamodb/->Env-local-dynamodb env))

(defmethod -m-create-domain "aws-dynamodb"
  [env]
  (log/debug "ENTERED -m-create-domain - aws-dynamodb")
  (throw (IllegalArgumentException.
           (str "Not yet implemented for aws-dynamodb environment"))))

(defmethod -m-create-domain :default
  [env]
  (log/debug "ENTERED -m-create-domain - default")
  (throw (IllegalArgumentException.
           (str "Unknown environment: " env))))


(defn create-domain
  []
  (log/debug "ENTERED create-domain")
  (let [ssenv (env :ss-env)]
    (-m-create-domain ssenv)))

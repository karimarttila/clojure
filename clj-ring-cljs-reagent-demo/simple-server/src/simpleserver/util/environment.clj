(ns simpleserver.util.environment
  (:require
    [clojure.tools.logging :as log]
    [environ.core :refer [env]]
    ))

;; We define the environments as records so that we can use them
;; e.g. in simpleserver.userdb namespace for extending the type with protocol.

(defrecord Env-single-node [env])

(defrecord Env-local-dynamodb [env])

(defrecord Env-aws [env])

(defmulti -m-create-my-env (fn [env] env))

(defmethod -m-create-my-env "single-node"
  [env]
  (->Env-single-node env)
  )

(defmethod -m-create-my-env "local-dynamodb"
  [env]
  (throw (IllegalArgumentException.
           (str "Not yet implemented for local-dynamodb environment"))))

(defmethod -m-create-my-env "aws"
  [env]
  (throw (IllegalArgumentException.
           (str "Not yet implemented for aws environment"))))

(defmethod -m-create-my-env :default
  [env]
  (throw (IllegalArgumentException.
           (str "Unknown environment: " env))))


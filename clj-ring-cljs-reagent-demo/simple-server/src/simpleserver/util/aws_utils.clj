(ns simpleserver.util.aws-utils
  (:require [environ.core :as environ]
            [clojure.tools.logging :as log]))


(defmulti -m-get-dynamodb-config (fn [ssenv] ssenv))

(defmethod -m-get-dynamodb-config "single-node"
  [env]
  (log/debug "ENTERED -m-get-dynamodb-config - single-node")
  (throw (IllegalArgumentException.
           (str "Not supported in single-node environment"))))


;; Using local DynamoDB.
(defmethod -m-get-dynamodb-config "local-dynamodb"
  [env]
  (log/debug "ENTERED -m-get-dynamodb-config - local-dynamodb")
  {:access-key (environ/env :access-key)
   :secret-key (environ/env :secret-key)
   :endpoint   (environ/env :endpoint)})


;; For testing the instance profile role policy locally.
;; NOTE: You have to assume the role policy first, see instructions
;; in README.md.
(defmethod -m-get-dynamodb-config "aws-dynamodb-assumed-role"
  [env]
  (log/debug "ENTERED -m-get-dynamodb-config - aws-dynamodb-assumed-role")
  {:access-key (environ/env :aws-access-key-id)
   :secret-key (environ/env :aws-secret-access-key)
   :session-token (environ/env :aws-session-token)
   :endpoint   (environ/env :endpoint)})


;; Running the application locally but accessing real AWS DynamoDB
;; with your own AWS credentials (see profile which gives the :aws-profile).
(defmethod -m-get-dynamodb-config "aws-dynamodb"
  [env]
  (log/debug "ENTERED -m-get-dynamodb-config - aws-dynamodb")
  {:profile (environ/env :aws-profile)}
  )

;; In AWS EKS env we give just the endpoint.
;; The application is supposed to use the EKS worker node EC2
;; instance profile (see terraform configuration).
(defmethod -m-get-dynamodb-config "aws-dynamodb-eks"
  [env]
  (log/debug "ENTERED -m-get-dynamodb-config - aws-dynamodb-eks")
  {:endpoint   (environ/env :endpoint)}
  )

(defmethod -m-get-dynamodb-config :default
  [env]
  (log/debug "ENTERED -m-get-dynamodb-config - default")
  (throw (IllegalArgumentException.
           (str "Unknown environment: " env))))


(defn get-dynamodb-config
  []
  (log/debug "ENTERED get-dynamodb-config")
  (let [ssenv (environ/env :ss-env)]
    (-m-get-dynamodb-config ssenv)))



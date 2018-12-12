(ns simpleserver.util.aws-utils
  (:require [environ.core :as environ]
            [clojure.tools.logging :as log]))


(defmulti -m-get-dynamodb-config (fn [ssenv] ssenv))

(defmethod -m-get-dynamodb-config "single-node"
  [env]
  (log/debug "ENTERED -m-get-dynamodb-config - single-node")
  (throw (IllegalArgumentException.
           (str "Not supported in single-node environment"))))

(defmethod -m-get-dynamodb-config "local-dynamodb"
  [env]
  (log/debug "ENTERED -m-get-dynamodb-config - local-dynamodb")
  {:access-key (environ/env :access-key)
   :secret-key (environ/env :secret-key)
   :endpoint   (environ/env :endpoint)})

(defmethod -m-get-dynamodb-config "aws-dynamodb"
  [env]
  (log/debug "ENTERED -m-get-dynamodb-config - aws-dynamodb")
  {:profile (environ/env :aws-profile)}
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



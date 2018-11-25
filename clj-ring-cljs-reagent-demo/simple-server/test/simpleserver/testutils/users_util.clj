(ns simpleserver.testutils.users-util
  (:require [clojure.test :refer :all]
            [clojure.tools.logging :as log]
            [environ.core :refer [env]]
            [simpleserver.userdb.users :as my-user-db]
            [simpleserver.userdb.users-single-node :as my-user-single-node]))


(defmulti -m-initialize-userdb (fn [env] env))

(defmethod -m-initialize-userdb "single-node"
  [env]
  (log/debug "ENTERED -m-initialize-userdb - single-node")
  (my-user-single-node/-swap-userdb!))

(defmethod -m-initialize-userdb "local-dynamodb"
  [env]
  (log/debug "ENTERED -m-initialize-userdb - local-dynamodb")
  (throw (IllegalArgumentException.
           (str "Not yet implemented for local-dynamodb environment"))))

(defmethod -m-initialize-userdb "aws"
  [env]
  (log/debug "ENTERED -m-initialize-userdb - aws")
  (throw (IllegalArgumentException.
           (str "Not yet implemented for aws environment"))))

(defmethod -m-initialize-userdb :default
  [env]
  (log/debug "ENTERED -m-initialize-userdb - default")
  (throw (IllegalArgumentException.
           (str "Unknown environment: " env))))

(defn initialize-userdb
  []
  (log/debug "ENTERED initialize-userdb")
  (-m-initialize-userdb (env :ss-env)))

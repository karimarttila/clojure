(ns simpleserver.sessiondb.session-dynamodb
  (:require
    [clojure.tools.logging :as log]
    [clj-time.core :as c-time]
    [ring.middleware.cors :refer [wrap-cors]]
    [buddy.sign.jwt :as buddy-jwt]
    [amazonica.aws.dynamodbv2 :as dynamodb]
    [simpleserver.util.prop :as ss-prop]
    [simpleserver.sessiondb.session-service-interface :as ss-session-service-interface]
    [simpleserver.util.aws-utils :as ss-aws-utils]
    [environ.core :as environ]
    [simpleserver.sessiondb.session-common :as ss-session-common])
  (:import (com.amazonaws.services.dynamodbv2.model AmazonDynamoDBException)))

(defn get-token
  [token]
  (let [my-env (environ/env :my-env)
        my-table-prefix (environ/env :ss-table-prefix)
        my-table (str my-table-prefix "-" my-env "-session")
        ret (dynamodb/query (ss-aws-utils/get-dynamodb-config)
                            :table-name my-table
                            :select "ALL_ATTRIBUTES"
                            :key-conditions {:token {:attribute-value-list [token]
                                                     :comparison-operator  "EQ"}})
        items (ret :items)
        found-token (first items)]
    found-token))


(defn remove-token
  [token]
  (let [my-env (environ/env :my-env)
        my-table-prefix (environ/env :ss-table-prefix)
        my-table (str my-table-prefix "-" my-env "-session")]
    (dynamodb/delete-item (ss-aws-utils/get-dynamodb-config) :table-name my-table :key {:token {:s token}})))


(defrecord Env-dynamodb [env]
  ss-session-service-interface/SessionServiceInterface

  (create-json-web-token
    [env email]
    (log/debug (str "ENTER create-json-web-token, email: " email))
    (let [my-env (environ/env :my-env)
          my-table-prefix (environ/env :ss-table-prefix)
          my-table (str my-table-prefix "-" my-env "-session")
          json-web-token (ss-session-common/create-json-web-token email)
          ret (try
                (dynamodb/put-item (ss-aws-utils/get-dynamodb-config)
                                   :table-name my-table
                                   :item {
                                          :token json-web-token
                                          })
                (catch AmazonDynamoDBException e {:email email,
                                                  :ret   :failed
                                                  :msg   (str "Exception occured: " (.toString e))}))]
      json-web-token))


  (validate-token
    [env token]
    (log/debug (str "ENTER validate-token, token: " token))
    (ss-session-common/validate-token token get-token remove-token))


  (get-sessions
    [env]
    (log/debug (str "ENTER get-sessions"))
    (let [my-env (environ/env :my-env)
          my-table-prefix (environ/env :ss-table-prefix)
          ret (dynamodb/scan (ss-aws-utils/get-dynamodb-config)
                             :table-name (str my-table-prefix "-" my-env "-session"))
          items (ret :items)]
      (reduce (fn [sessions session]
                (conj sessions (session :token)))
              #{}
              items)))
  )


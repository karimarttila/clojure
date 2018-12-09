(ns simpleserver.sessiondb.session-local-dynamodb
  (:require
    [clojure.tools.logging :as log]
    [clj-time.core :as c-time]
    [ring.middleware.cors :refer [wrap-cors]]
    [buddy.sign.jwt :as buddy-jwt]
    [environ.core :refer [env]]
    [amazonica.aws.dynamodbv2 :as dynamodb]
    [simpleserver.util.prop :as ss-prop]
    [simpleserver.sessiondb.session-service-interface :as ss-session-service-interface]
    [simpleserver.sessiondb.session-utils :as ss-session-utils]
    [simpleserver.util.aws-utils :as ss-aws-utils]
    [environ.core :as environ])
  (:import (com.amazonaws.services.dynamodbv2.model AmazonDynamoDBException)))

(defn get-token
  [token]
  (let [my-env (environ/env :my-env)
        my-table (str "sseks-" my-env "-session")
        ret (dynamodb/query ss-aws-utils/local-dynamodb-config
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
        my-table (str "sseks-" my-env "-session")]
    (dynamodb/delete-item ss-aws-utils/local-dynamodb-config :table-name my-table :key {:token {:s token}})))


(defrecord Env-local-dynamodb [env]
  ss-session-service-interface/SessionServiceInterface

  (create-json-web-token
    [env email]
    (log/debug (str "ENTER create-json-web-token, email: " email))
    (let [my-env (environ/env :my-env)
          my-table (str "sseks-" my-env "-session")
          json-web-token (ss-session-utils/create-json-web-token email)
          ret (try
                (dynamodb/put-item ss-aws-utils/local-dynamodb-config
                                   :table-name my-table
                                   :item {
                                          :token json-web-token
                                          })
                (catch AmazonDynamoDBException e {:email email,
                                                  :ret   :failed
                                                  :msg   (str "Exception occured: " (.toString e))}))]
      json-web-token)
    )


  (validate-token
    [env token]
    (log/debug (str "ENTER validate-token, token: " token))
    (let [found-token (get-token token)]
      ;; Part #1 of validation.
      (if (nil? found-token)
        (do
          (log/warn (str "Token not found in my sessions - unknown token: " token))
          nil)
        ;; Part #2 of validation.
        (try
          (buddy-jwt/unsign token ss-session-utils/my-hex-secret)
          (catch Exception e
            (if (.contains (.getMessage e) "Token is expired")
              (do
                (log/debug (str "Token is expired, removing it from my sessions and returning nil: " token))
                ; Token just expired, remove expired token and return nil.
                (remove-token token)
                nil)
              ; Some other issue, throw it.
              (do
                (log/error (str "Some unknown exception when handling expired token, exception: " (.getMessage e)) ", token: " token)
                (throw e)))))
        ))

    )

  (get-sessions
    [env]
    (log/debug (str "ENTER get-sessions"))
    (let [ret (dynamodb/scan ss-aws-utils/local-dynamodb-config
                             :table-name "sseks-dev-session")
          items (ret :items)]
      (reduce (fn [sessions session]
                (conj sessions (session :token)))
              #{}
              items)))
  )


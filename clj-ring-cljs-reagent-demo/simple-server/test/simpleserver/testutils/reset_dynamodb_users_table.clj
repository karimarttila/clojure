(ns simpleserver.testutils.reset-dynamodb-users-table
  (:require [clojure.tools.logging :as log]
            [environ.core :as environ]
            [amazonica.aws.dynamodbv2 :as dynamodb]
            [simpleserver.userdb.initial-users :as ss-users-initial-users]
            [simpleserver.userdb.users-factory :as ss-users-factory]
            [simpleserver.userdb.users-service-interface :as ss-users-svc]
            [simpleserver.util.aws-utils :as ss-aws-utils]
            ))

(def users-svc (ss-users-factory/create-users))


(defn delete-user
  [email]
  (let [my-env (environ/env :my-env)
        my-table-prefix (environ/env :ss-table-prefix)
        my-table (str my-table-prefix "-" my-env "-users")]
    (dynamodb/delete-item (ss-aws-utils/get-dynamodb-config) :table-name my-table :key {:email {:s email}})))


(defn -create-delete-requests
  []
  (let [current-users (ss-users-svc/get-users users-svc)
        emails (map (fn [user]
                      (user :email)
                      ) (vals current-users))
        delete-requests (map (fn [email]
                               {:delete-request {:key {:email email}}})
                             emails)]
    delete-requests))

(defn -create-put-requests
  []
  (let [initial-users (ss-users-initial-users/get-initial-users)
        users (map (fn [user]
                     {:userid    (user :userid)
                      :email     (user :email)
                      :firstname (user :first-name)
                      :lastname  (user :last-name)
                      :hpwd      (user :hashed-password)})
                   (vals initial-users))
        put-requests (map (fn [usermap]
                            {:put-request {:item usermap}})
                          users)]
    put-requests))

(defn reset-local-dynamodb-userdb
  []
  (log/debug "ENTER reset-local-dynamodb-userdb")
  (let [my-env (environ/env :my-env)
        my-table-prefix (environ/env :ss-table-prefix)
        my-table (str my-table-prefix "-" my-env "-users")]
    (dynamodb/batch-write-item (ss-aws-utils/get-dynamodb-config)
                               :request-items {my-table (into [] (-create-delete-requests))})
    (dynamodb/batch-write-item (ss-aws-utils/get-dynamodb-config)
                               :request-items {my-table (into [] (-create-put-requests))})))



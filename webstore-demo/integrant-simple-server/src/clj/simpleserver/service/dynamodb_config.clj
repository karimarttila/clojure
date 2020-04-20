(ns simpleserver.service.dynamodb-config
  (:require [cognitect.aws.client.api :as aws]
            [cognitect.aws.credentials :as credentials]))


(defn get-dynamodb-config
  "Gets the dynamodb configuration for given db (:local-ddb or :aws-ddb)"
  [config]
  (let [db (:active-db config)
        my-env (name (get-in config [:runtime-env]))
        my-prefix (get-in config [:db db :ss-table-prefix])
        table-prefix (str my-prefix "-" my-env "-")
        ddb-tables (into {}
                         (map #(vector % (str table-prefix (name %)))
                              [:product-group :product :users :session]))
        my-endpoint (get-in config [:db db :config :endpoint])
        my-profile (get-in config [:db db :config :aws-profile])
        my-credentials (cognitect.aws.credentials/profile-credentials-provider my-profile)
        my-ddb (if (nil? my-credentials)
                 (cognitect.aws.client.api/client {:api                  :dynamodb
                                                   :credentials-provider my-credentials})
                 (cognitect.aws.client.api/client {:api                  :dynamodb
                                                   :credentials-provider my-credentials
                                                   :endpoint-override    my-endpoint}))]
    {:ddb my-ddb :tables ddb-tables}))

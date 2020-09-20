(ns simpleserver.service.dynamodb-config
  (:require [cognitect.aws.client.api :as aws]
            [cognitect.aws.credentials :as credentials]))


(defn get-dynamodb-config
  "Gets the dynamodb configuration for given db (:local-ddb or :aws-ddb)"
  [ss-table-prefix ss-env endpoint aws-profile]
  (let [table-prefix (str ss-table-prefix "-" ss-env "-")
        ddb-tables (into {}
                         (map #(vector % (str table-prefix (name %)))
                              [:product-group :product :users :session]))
        my-credentials (cognitect.aws.credentials/profile-credentials-provider aws-profile)
        my-client (if (nil? my-credentials)
                 (cognitect.aws.client.api/client {:api                  :dynamodb
                                                   :credentials-provider my-credentials})
                 (cognitect.aws.client.api/client {:api                  :dynamodb
                                                   :credentials-provider my-credentials
                                                   :endpoint-override    endpoint}))]
    {:client my-client :tables ddb-tables}))

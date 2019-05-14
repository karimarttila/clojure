(ns simpleserver.domain.domain-dynamodb
  (:require [simpleserver.domain.domain-interface :as ss-domain-i]
            [clojure.tools.logging :as log]
            [simpleserver.util.config :as ss-config]
            [cognitect.aws.client.api :as aws]
            [cognitect.aws.credentials :as credentials]))

; NOTE: When testing in IntelliJ IDEA / Cursive: add AWS_PROFILE and AWS_DEFAULT_REGION in the
; Run Configuration / Environment.

(comment
  (do (require '[clojure.core.async :as a] '[clojure.java.io :as io] '[clojure.data.json :as json] '[cognitect.aws.client.api :as aws] '[cognitect.aws.client.api.async :as aws.async]) (def ddb (aws/client {:api :dynamodb})) (aws/invoke ddb {:op :ListTables})))

(defn get-dynamodb-config
  "Gets the dynamodb configuration"
  []
  (let [my-env (get-in ss-config/config-state [:my-env])
        my-table-prefix (get-in ss-config/config-state [:aws :ss-table-prefix])
        my-table (str my-table-prefix "-" my-env "-product-group")
        my-endpoint (get-in simpleserver.util.config/config-state [:aws :endpoint])
        my-profile (get-in simpleserver.util.config/config-state [:aws :aws-profile])
        my-credentials (credentials/profile-credentials-provider my-profile)
        my-ddb (if (nil? my-credentials)
                 (aws/client {:api                  :dynamodb
                              :credentials-provider my-credentials})
                 (aws/client {:api                  :dynamodb
                              :credentials-provider my-credentials
                              :endpoint-override    my-endpoint}))]
    {:my-ddb my-ddb :my-table my-table}))

(defrecord AwsDynamoDbR []
  ss-domain-i/DomainInterface

  (get-product-groups
    [this]
    (log/debug "ENTER get-product-groups")
    (let [my-ddb-config (get-dynamodb-config)
          {my-ddb   :my-ddb
           my-table :my-table} my-ddb-config
          raw-map (aws/invoke my-ddb {:op      :Scan
                                      :request {:TableName my-table}})]
      (reduce
        (fn
          [mymap item]
          (assoc mymap
            (-> item :pgid :S) (-> item :pgname :S)))
        {}
        (:Items raw-map))))

  (get-products
    [this pg-id]
    (log/debug (str "ENTER get-products, pg-id: " pg-id))

    ; TODO: From previous implementation
    (comment
      (let [my-env (environ/env :my-env)
            my-table-prefix (environ/env :ss-table-prefix)
            my-table (str my-table-prefix "-" my-env "-product")
            ret (dynamodb/query (ss-aws-utils/get-dynamodb-config)
                                :table-name my-table
                                :select "ALL_PROJECTED_ATTRIBUTES"
                                :index-name "PGIndex"
                                :key-conditions {:pgid {:attribute-value-list [(str pg-id)]
                                                        :comparison-operator  "EQ"}})
            items (ret :items)
            result-list (seq (map
                               (fn
                                 [item]
                                 (seq [(item :pid) (item :pgid) (item :title) (item :price)]))
                               items))]
        (if (nil? result-list)
          '()
          result-list))))


  (get-product
    [this pg-id p-id]
    (log/debug (str "ENTER get-product, pg-id: " pg-id ", p-id: " p-id))

    ; TODO: From previous implementation
    (comment
      (let [my-env (environ/env :my-env)
            my-table-prefix (environ/env :ss-table-prefix)
            my-table (str my-table-prefix "-" my-env "-product")
            ret (dynamodb/query (ss-aws-utils/get-dynamodb-config)
                                :table-name my-table
                                :select "ALL_ATTRIBUTES"
                                :key-conditions {:pgid {:attribute-value-list [(str pg-id)]
                                                        :comparison-operator  "EQ"}
                                                 :pid  {:attribute-value-list [(str p-id)]
                                                        :comparison-operator  "EQ"}})
            items (ret :items)
            product (first items)]

        (if (nil? product)
          nil
          [(product :pid) (product :pgid) (product :title) (product :price) (product :a_or_d) (product :year) (product :country) (product :g_or_l)])))))

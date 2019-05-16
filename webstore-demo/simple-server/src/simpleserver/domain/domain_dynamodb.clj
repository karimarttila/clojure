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
  [table-name]
  (let [my-env (get-in ss-config/config-state [:my-env])
        my-table-prefix (get-in ss-config/config-state [:aws :ss-table-prefix])
        my-table (str my-table-prefix "-" my-env "-" table-name)
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
    (let [my-ddb-config (get-dynamodb-config "product-group")
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

  ; TODO: Previous implementation returned seq of seqs.
  ; This implementation returns seq of vecs.
  ; => Check in testing that this is not an issue!
  (get-products
    [this pg-id]
    (log/debug (str "ENTER get-products, pg-id: " pg-id))
    (let [my-ddb-config (get-dynamodb-config "product")
          {my-ddb   :my-ddb
           my-table :my-table} my-ddb-config
          raw-products (aws/invoke my-ddb {:op      :Query
                                           :request {:TableName                 my-table
                                                     :IndexName                 "PGIndex"
                                                     :KeyConditionExpression    "pgid = :pgid"
                                                     :ExpressionAttributeValues {":pgid" {:S (str pg-id)}}
                                                     }})]
      (seq (->> (:Items raw-products)
                (map (juxt (comp :S :pid) (comp :S :pgid) (comp :S :title) (comp :S :price)))
                (into [])))))


  (get-product
    [this pg-id p-id]
    (log/debug (str "ENTER get-product, pg-id: " pg-id ", p-id: " p-id))
    (let [my-ddb-config (get-dynamodb-config "product")
          {my-ddb   :my-ddb
           my-table :my-table} my-ddb-config
          raw-product (aws/invoke my-ddb {:op      :Query
                                          :request {:TableName     "ss-dev-product"
                                                    :KeyConditions {"pgid" {:AttributeValueList {:S (str pg-id)}
                                                                            :ComparisonOperator "EQ"}
                                                                    "pid"  {:AttributeValueList {:S (str p-id)}
                                                                            :ComparisonOperator "EQ"}}
                                                    }})]
      raw-product))

  )

(ns simpleserver.domain.domain-dynamodb
  (:require [simpleserver.domain.domain-interface :as ss-domain-i]
            [clojure.tools.logging :as log]
            [simpleserver.util.config :as ss-config]
            [cognitect.aws.client.api :as aws]))

; NOTE: When testing in IntelliJ IDEA / Cursive: add AWS_PROFILE and AWS_DEFAULT_REGION in the
; Run Configuration / Environment.


(defrecord AwsDynamoDbR []
  ss-domain-i/DomainInterface

  (get-product-groups
    [this]
    (log/debug "ENTER get-product-groups")
    (let [{:keys [my-ddb my-table]} (ss-config/get-dynamodb-config "product-group")
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
    (let [{:keys [my-ddb my-table]} (ss-config/get-dynamodb-config "product")
          raw-products (aws/invoke my-ddb {:op      :Query
                                           :request {:TableName                 my-table
                                                     :IndexName                 "PGIndex"
                                                     :KeyConditionExpression    "pgid = :pgid"
                                                     :ExpressionAttributeValues {":pgid" {:S (str pg-id)}}
                                                     }})]
      ;; See myscratch.clj in which I get the raw data from AWS query.
      ;; First get :Items, then map: i.e. for each entity in the Items list:
      ;; juxt: create a function juxtaposition of individual comp functions which just get first get the
      ;; field value (e.g. :pid) and then the :S value which is the string value of the field.
      ;; So, we just create a sequence of vectors in which we have the field values we need,
      ;; And finally dump the sequence to a vector.
      (seq (->> (:Items raw-products)
                (map (juxt (comp :S :pid) (comp :S :pgid) (comp :S :title) (comp :S :price)))
                (into [])))))


  (get-product
    [this pg-id p-id]
    (log/debug (str "ENTER get-product, pg-id: " pg-id ", p-id: " p-id))
    (let [{:keys [my-ddb my-table]} (ss-config/get-dynamodb-config "product")
          raw-product (aws/invoke my-ddb {:op      :Query
                                          :request {:TableName     my-table
                                                    :KeyConditions {"pgid" {:AttributeValueList {:S (str pg-id)}
                                                                            :ComparisonOperator "EQ"}
                                                                    "pid"  {:AttributeValueList {:S (str p-id)}
                                                                            :ComparisonOperator "EQ"}}
                                                    }})]
      (if (= (:Count raw-product) 0)
        (do
          (log/debug (str "MYDEBUG in if: Count is zero"))
          nil)
        (->>
          (:Items raw-product)
          (first)
          ((juxt (comp :S :pid) (comp :S :pgid) (comp :S :title) (comp :S :price) (comp :S :a_or_d) (comp :S :year) (comp :S :country) (comp :S :g_or_l)) (first (:Items raw-product)))
          )))))




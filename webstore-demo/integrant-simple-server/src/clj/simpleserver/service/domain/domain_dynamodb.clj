(ns simpleserver.service.domain.domain-dynamodb
  (:require [simpleserver.service.domain.domain-interface :as ss-domain-i]
            [clojure.tools.logging :as log]
            [cognitect.aws.client.api :as aws]))

; NOTE: When testing in IntelliJ IDEA / Cursive: add AWS_PROFILE and AWS_DEFAULT_REGION in the
; Run Configuration / Environment.


(defrecord AwsDynamoDbR [db]
  ss-domain-i/DomainInterface

  (get-product-groups
    [_ _]
    (log/debug "ENTER get-product-groups")
    (let [raw-map (aws/invoke (:client db) {:op :Scan
                                      :request {:TableName (get-in db [:tables :product-group])}})]
      (if (:__type raw-map)
        (throw (ex-info "Failed to get product-groups" raw-map))
        (reduce
          (fn
            [mymap item]
            (assoc mymap
              (-> item :pgid :S) (-> item :pgname :S)))
          {}
          (:Items raw-map)))))

  (get-products
    [_ _ pg-id]
    (log/debug (str "ENTER get-products, pg-id: " pg-id))
    (let [raw-products (aws/invoke (:client db) {:op :Query
                                           :request {:TableName (get-in db [:tables :product])
                                                     :IndexName "PGIndex"
                                                     :KeyConditionExpression "pgid = :pgid"
                                                     :ExpressionAttributeValues {":pgid" {:S (str pg-id)}}}})]
      ;; See myscratch.clj in which I get the raw data from AWS query.
      ;; First get :Items, then map: i.e. for each entity in the Items list:
      ;; juxt: create a function juxtaposition of individual comp functions which just get first get the
      ;; field value (e.g. :pid) and then the :S value which is the string value of the field.
      ;; So, we just create a sequence of vectors in which we have the field values we need,
      ;; And finally dump the sequence to a vector.
      (if (:__type raw-products)
        (throw (ex-info "Failed to get products" raw-products))
        (seq (->> (:Items raw-products)
                  (map (juxt (comp :S :pid) (comp :S :pgid) (comp :S :title) (comp :S :price)))
                  (into []))))))

  (get-product
    [_ _ pg-id p-id]
    (log/debug (str "ENTER get-product, pg-id: " pg-id ", p-id: " p-id))
    (let [raw-product (aws/invoke (:client db) {:op :Query
                                          :request {:TableName (get-in db [:tables :product])
                                                    :KeyConditions {"pgid" {:AttributeValueList {:S (str pg-id)}
                                                                            :ComparisonOperator "EQ"}
                                                                    "pid" {:AttributeValueList {:S (str p-id)}
                                                                           :ComparisonOperator "EQ"}}}})]
      (if (:__type raw-product)
        (throw (ex-info "Failed to get product" raw-product))
        (if (= (:Count raw-product) 0)
          nil
          (->>
            (:Items raw-product)
            (first)
            ((juxt (comp :S :pid) (comp :S :pgid) (comp :S :title) (comp :S :price) (comp :S :a_or_d) (comp :S :year) (comp :S :country) (comp :S :g_or_l)) (first (:Items raw-product)))))))))

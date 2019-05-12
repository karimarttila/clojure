(ns simpleserver.domain.domain-dynamodb
  (:require [simpleserver.domain.domain-interface :as ss-domain-i]
            [clojure.tools.logging :as log]
            [simpleserver.util.config :as ss-config]
            [cognitect.aws.client.api :as aws]))

; NOTE: When testing in IntelliJ IDEA / Cursive: add AWS_PROFILE and AWS_DEFAULT_REGION in the
; Run Configuration / Environment.

(comment
  (do (require '[clojure.core.async :as a] '[clojure.java.io :as io] '[clojure.data.json :as json] '[cognitect.aws.client.api :as aws] '[cognitect.aws.client.api.async :as aws.async]) (def ddb (aws/client {:api :dynamodb})) (aws/invoke ddb {:op :ListTables}))


  (defrecord AwsDynamoDbR [ssenv]
    ss-domain-i/DomainInterface

    (get-product-groups
      [config]
      (log/debug "ENTER get-product-groups")
      (let [my-env (get-in ss-config/config-state [:my-env])
            my-table-prefix (get-in ss-config/config-state [:aws :ss-table-prefix])
            my-table (str my-table-prefix "-" my-env "-product-group")

            ret (dynamodb/scan (ss-aws-utils/get-dynamodb-config) :table-name my-table)
            items (ret :items)]
        (reduce
          (fn
            [mymap item]
            (conj mymap {(item :pgid) (item :pgname)}))
          {}
          items)))

    (get-products
      [config pg-id]
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
      [config pg-id p-id]
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
            [(product :pid) (product :pgid) (product :title) (product :price) (product :a_or_d) (product :year) (product :country) (product :g_or_l)]))))))

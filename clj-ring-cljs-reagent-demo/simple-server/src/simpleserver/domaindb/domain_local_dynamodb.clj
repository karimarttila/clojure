(ns simpleserver.domaindb.domain-local-dynamodb
  (:require
    [clojure.java.io :as io]
    [clojure.string :as str]
    [clojure.tools.logging :as log]
    [amazonica.aws.dynamodbv2 :as dynamodb]
    [simpleserver.domaindb.domain-service-interface :as ss-domain-service-interface]))


(defrecord Env-local-dynamodb [env]
  ss-domain-service-interface/DomainServiceInterface

  (get-product-groups
    [env]
    (log/debug "ENTER get-product-groups")

    )

  (get-products
    [env pg-id]
    (log/debug (str "ENTER get-products, pg-id: " pg-id))
    )


  (get-product
    [env pg-id p-id]
    (log/debug (str "ENTER get-product, pg-id: " pg-id ", p-id: " p-id))
    ))

(ns simpleserver.domaindb.domain-local-dynamodb
  (:require
    [clojure.java.io :as io]
    [clojure.string :as str]
    [clojure.tools.logging :as log]
    [amazonica.aws.dynamodbv2 :as dynamodb]
    [environ.core :refer [env]]
    [simpleserver.domaindb.domain-service-interface :as ss-domain-service-interface]))

;; Test connection in REPL: (amazonica.aws.dynamodbv2/list-tables local-dynamodb-config)
;=> {:table-names ["sseks-dev-product" "sseks-dev-product-group" "sseks-dev-session" "sseks-dev-users"]}


(def local-dynamodb-config {:access-key (env :access-key)
                            :secret-key (env :secret-key)
                            :endpoint   (env :endpoint)})

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

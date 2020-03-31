(ns simpleserver.domain.domain-config
  (:require [clojure.tools.logging :as log]
            [simpleserver.util.config :as ss-config]
            [simpleserver.domain.domain-single-node :as ss-single-node]
            [simpleserver.domain.domain-dynamodb :as ss-dynamodb]
            ))

(defn -get-domain-env
  "Gets domain environment (either single-node or aws based on config.edn)."
  [db-env]
  ; We could use some fancy multimethod dispatch or even create a fancy macro
  ; which creates the domain entity based on some record name we get from the configuration.
  ; But let's make a simple cond and not make things look too complex
  ; based on some open configuration idea what we don't actually need here.
  (log/debug "ENTER -get-domain-env")
  (cond
    (= db-env "single-node") (simpleserver.domain.domain-single-node/->SingleNodeR)
    (= db-env "aws") (simpleserver.domain.domain-dynamodb/->AwsDynamoDbR)
    :else (throw (UnsupportedOperationException. (str "Unknown environment: " db-env)))
    )
  )

(def domain (-get-domain-env (ss-config/config :db-env)))

(ns simpleserver.domain.domain-config
  (:require [clojure.tools.logging :as log]
            [mount.core :refer [defstate, start, stop]]
            [simpleserver.util.config :as ss-config]
            [simpleserver.domain.domain-single-node :as ss-single-node]
            [simpleserver.domain.domain-dynamodb :as ss-dynamodb]
            ))

; Keep the domain entities pre-created here, we are later just sending the reference.
(def single-node-domain (simpleserver.domain.domain-single-node/->SingleNodeR))
(def aws-domain (simpleserver.domain.domain-dynamodb/->AwsDynamoDbR))

(defn -get-domain
  "Gets domain (either single-node or aws based on config.edn"
  [ss-env]
  ; We could use some fancy multimethod dispatch or even create a fancy macro
  ; which creates the domain entity based on some record name we get from the configuration.
  ; But let's make a simple cond and not make things look too complex
  ; based on some open configuration idea what we don't actually need here.
  (cond
    (= ss-env "single-node") single-node-domain
    (= ss-env "aws") aws-domain
    :else(throw (UnsupportedOperationException. (str "Unknown environment: " ss-env)))
    )
  )

; To query state in repl:
; simpleserver.domain/domain-state
; See helper methods to start/stop server in mydev namespace.
(defstate domain-state
          "Domain state."
          :start (-get-domain (get-in ss-config/config-state [:ss-env]))
          )



(ns simpleserver.domain.domain-config
  (:require [clojure.tools.logging :as log]
            [mount.core :refer [defstate, start, stop]]
            [simpleserver.util.config :as ss-config]
            [simpleserver.domain.domain-single-node :as ss-single-node]
            [simpleserver.domain.domain-dynamodb :as ss-dynamodb]
            ))

; Keep the domain entities pre-created here, we are later just sending the reference.
(def single-node-domain-env (simpleserver.domain.domain-single-node/->SingleNodeR))
(def aws-domain-env (simpleserver.domain.domain-dynamodb/->AwsDynamoDbR))

(defn -get-domain-env
  "Gets domain environment (either single-node or aws based on config.edn)."
  [ss-env]
  ; We could use some fancy multimethod dispatch or even create a fancy macro
  ; which creates the domain entity based on some record name we get from the configuration.
  ; But let's make a simple cond and not make things look too complex
  ; based on some open configuration idea what we don't actually need here.
  (log/debug "ENTER -get-domain-env")
  (cond
    (= ss-env "single-node") single-node-domain-env
    (= ss-env "aws") aws-domain-env
    :else (throw (UnsupportedOperationException. (str "Unknown environment: " ss-env)))
    )
  )

; To query state in repl:
; simpleserver.domain.domain-config/domain-state
(defstate domain-state
          "Domain state."
          :start (let [new-domain-env (-get-domain-env (get-in ss-config/config-state [:ss-env]))]
                   (log/debug (str "New domain-env: " new-domain-env))
                   new-domain-env)
          :stop :stopped)



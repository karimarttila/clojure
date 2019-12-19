(ns simpleserver.session.session-config
  (:require [clojure.tools.logging :as log]
            [mount.core :refer [defstate, start, stop]]
            [simpleserver.util.config :as ss-config]
            [simpleserver.session.session-single-node :as ss-single-node]
            [simpleserver.session.session-dynamodb :as ss-dynamodb]
            [simpleserver.session.session-interface :as ss-session-i]
            ))


; Keep the domain entities pre-created here, we are later just sending the reference.
(def single-node-session-env (simpleserver.session.session-single-node/->SingleNodeR))
(def aws-session-env (simpleserver.session.session-dynamodb/->AwsDynamoDbR))

(defn -get-session-env
  "Gets session environment (either single-node or aws based on config.edn)."
  [ss-env]
  ; See comment in domain-config which applies also here.
  (log/debug "ENTER -get-session-env")
  (cond
    (= ss-env "single-node") single-node-session-env
    (= ss-env "aws") aws-session-env
    :else (throw (UnsupportedOperationException. (str "Unknown environment: " ss-env)))
    )
  )

; To query state in repl:
; simpleserver.session.session-config/session-state
(defstate session-state
          "Session state. Also resets sessions in that session environment."
          :start (let [new-session-env (-get-session-env (get-in ss-config/config-state [:ss-env]))]
                   (log/debug (str "New session-env: " new-session-env))
                   (ss-session-i/-reset-sessions! new-session-env)
                   new-session-env)
          :stop :stopped)



(ns simpleserver.session.session-config
  (:require [clojure.tools.logging :as log]
            [simpleserver.util.config :as ss-config]
            [simpleserver.session.session-single-node :as ss-single-node]
            [simpleserver.session.session-dynamodb :as ss-dynamodb]))

(defn -get-session-env
  "Gets session environment (either single-node or aws based on config.edn)."
  [db-env]
  ; See comment in domain-config which applies also here.
  (log/debug "ENTER -get-session-env")
  (cond
    (= db-env "single-node") (ss-single-node/->SingleNodeR)
    (= db-env "aws") (ss-dynamodb/->AwsDynamoDbR)
    :else (throw (UnsupportedOperationException. (str "Unknown environment: " db-env)))
    )
  )

(def session (-get-session-env (ss-config/config :db-env)))

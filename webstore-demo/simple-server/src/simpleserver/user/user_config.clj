(ns simpleserver.user.user-config
  (:require [clojure.tools.logging :as log]
            [simpleserver.util.config :as ss-config]
            [simpleserver.user.user-single-node :as ss-single-node]
            [simpleserver.user.user-dynamodb :as ss-dynamodb]))

(defn -get-user-env
  "Gets user environment (either single-node or aws based on config.edn)."
  [db-env]
  ; See comment in domain-config which applies also here.
  (log/debug "ENTER -get-user-env")
  (cond
    (= db-env "single-node") (simpleserver.user.user-single-node/->SingleNodeR)
    (= db-env "aws") (simpleserver.user.user-dynamodb/->AwsDynamoDbR)
    :else (throw (UnsupportedOperationException. (str "Unknown environment: " db-env)))
    )
  )

(def user (-get-user-env (ss-config/config :db-env)))

;; ****************************************************************
;; Rich comment.
(comment
  user
  )
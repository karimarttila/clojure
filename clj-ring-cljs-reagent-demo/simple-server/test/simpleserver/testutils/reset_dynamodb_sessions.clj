(ns simpleserver.testutils.reset-dynamodb-sessions
  (:require [clojure.tools.logging :as log]
            [environ.core :as environ]
            [amazonica.aws.dynamodbv2 :as dynamodb]
            [simpleserver.sessiondb.session-factory :as ss-session-factory]))

(def session-svc (ss-session-factory/create-session))

(def local-dynamodb-config {:access-key (environ/env :access-key)
                            :secret-key (environ/env :secret-key)
                            :endpoint   (environ/env :endpoint)})


(defn reset-local-dynamodb-sessions
  []
  (log/debug "ENTER reset-local-dynamodb-sessions")
  (let [my-env (environ/env :my-env)
        my-table (str "sseks-" my-env "-session")]
    ))



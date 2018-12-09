(ns simpleserver.testutils.reset-dynamodb-sessions
  (:require [clojure.tools.logging :as log]
            [environ.core :as environ]
            [amazonica.aws.dynamodbv2 :as dynamodb]
            [simpleserver.sessiondb.session-factory :as ss-session-factory]))

(def session-svc (ss-session-factory/create-session))

(defn reset-local-dynamodb-sessions
  []
  (log/debug "ENTER reset-local-dynamodb-sessions")
  (let [my-env (environ/env :my-env)
        my-table (str "sseks-" my-env "-session")]

    ;; TODO: CONTINUE HERE: SCAN ALL SESSIONS, THEN DELETE THEM
    ;; SEE HOW YOU DID IT IN RESET USERS TABLE!

    ))



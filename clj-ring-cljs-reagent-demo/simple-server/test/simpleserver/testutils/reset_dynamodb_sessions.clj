(ns simpleserver.testutils.reset-dynamodb-sessions
  (:require [clojure.tools.logging :as log]
            [environ.core :as environ]
            [amazonica.aws.dynamodbv2 :as dynamodb]
            [simpleserver.sessiondb.session-factory :as ss-session-factory]
            [simpleserver.sessiondb.session-service-interface :as ss-session-interface]
            [simpleserver.util.aws-utils :as ss-aws-utils]))

(def session-svc (ss-session-factory/create-session))


(defn -create-delete-requests
  []
  (let [current-sessions (ss-session-interface/get-sessions (ss-session-factory/create-session))
        delete-requests (map (fn [session]
                               {:delete-request {:key {:token session}}})
                             current-sessions)]
    delete-requests))

(defn reset-dynamodb-sessions
  []
  (log/debug "ENTER reset-dynamodb-sessions")
  (let [my-env (environ/env :my-env)
        my-table-prefix (environ/env :ss-table-prefix)
        my-table (str my-table-prefix "-" my-env "-session")
        delete-requests (-create-delete-requests)]
    ; Calling with empty request list causes exception.
    (if (not (empty? delete-requests))
      (dynamodb/batch-write-item (ss-aws-utils/get-dynamodb-config)
                                 :request-items {my-table (into [] delete-requests)}))))



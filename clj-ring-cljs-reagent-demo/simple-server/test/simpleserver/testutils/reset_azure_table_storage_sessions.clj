(ns simpleserver.testutils.reset-azure-table-storage-sessions
  (:require [clojure.tools.logging :as log]
            [environ.core :as environ]
            [simpleserver.sessiondb.session-factory :as ss-session-factory]
            [simpleserver.sessiondb.session-service-interface :as ss-session-interface]
            [simpleserver.sessiondb.session-table-storage :as ss-session-table-storage]
            ))

(def session-svc (ss-session-factory/create-session))


(defn reset-azure-table-storage-sessions
  []
  (log/debug "ENTER reset-azure-table-storage-sessions")
  (let [current-sessions (ss-session-interface/get-sessions session-svc)]
    ; Calling function directly since it is not part of the actual session interface.
    ; In real production code we should check the result values, of course.
    ; Note: we have to embed the map call with dorun since the function remove-token
    ; is just run for the side effect.
    (dorun (map ss-session-table-storage/remove-token current-sessions)))
  )



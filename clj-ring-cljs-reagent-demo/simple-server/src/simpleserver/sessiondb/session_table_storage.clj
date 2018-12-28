(ns simpleserver.sessiondb.session-table-storage)

(ns simpleserver.sessiondb.session-table-storage
  (:require
    [clojure.tools.logging :as log]
    [clj-time.core :as c-time]
    [buddy.sign.jwt :as buddy-jwt]
    [simpleserver.util.prop :as ss-prop]
    [simpleserver.sessiondb.session-service-interface :as ss-session-service-interface]
    [simpleserver.sessiondb.session-utils :as ss-session-utils]))


(defrecord Env-table-storage [env]
  ss-session-service-interface/SessionServiceInterface

  (create-json-web-token
    [env email]
    (log/debug (str "ENTER create-json-web-token, email: " email))
    (log/debug (str "NOT IMPLEMENTED YET"))
    )


  (validate-token
    [env token]
    (log/debug (str "ENTER validate-token, token: " token))
    (log/debug (str "NOT IMPLEMENTED YET"))
    )


  (get-sessions
    [env]
    (log/debug (str "ENTER get-sessions"))
    (log/debug (str "NOT IMPLEMENTED YET"))
    )
  )


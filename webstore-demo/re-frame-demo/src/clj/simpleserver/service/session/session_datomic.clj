(ns simpleserver.service.session.session-datomic
  (:require [clojure.tools.logging :as log]
            [simpleserver.service.session.session-interface :as ss-session-i]
            [simpleserver.service.session.session-common :as ss-session-common]))

(defn get-token
  [token conn]
  )

(defn remove-token!
  [token conn]
  )

(defrecord DatomicR [conn]
  ss-session-i/SessionInterface

  (create-json-web-token
    [_ env email]
    (log/debug (str "ENTER create-json-web-token, email: " email))
    )

  (validate-token
    [_ _ token]
    (log/debug (str "ENTER validate-token, token: " token))
    ))


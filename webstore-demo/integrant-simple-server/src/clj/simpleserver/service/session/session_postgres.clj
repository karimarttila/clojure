(ns simpleserver.service.session.session-postgres
  (:require [simpleserver.service.session.session-interface :as ss-session-i]
            [simpleserver.service.session.session-common :as ss-session-common]
            [clojure.tools.logging :as log]))

(defn get-token
  [token db]
  )

(defn remove-token!
  [token db]
  )

(defrecord PostgresR [db]
  ss-session-i/SessionInterface

  (create-json-web-token
    [_ env email]
    (log/debug (str "ENTER create-json-web-token, email: " email))
    )

  (validate-token
    [_ _ token]
    (log/debug (str "ENTER validate-token, token: " token))
    (ss-session-common/validate-token token db get-token remove-token!)
    )

  )




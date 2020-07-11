(ns simpleserver.service.session.session-csv
  (:require
    [clojure.tools.logging :as log]
    [simpleserver.service.session.session-interface :as ss-session-i]
    [simpleserver.service.session.session-common :as ss-session-common]))

(defn get-token
  [token db]
  (if (contains? (:session @db) token)
    token
    nil))

(defn remove-token!
  [token db]
  (if (contains? (:session @db) token)
    (swap! db update-in [:session] disj token)
    (log/warn (str "Expired token not found when removing it from db: " token))))

(defrecord CsvR [db]
  ss-session-i/SessionInterface

  (create-json-web-token
    [_ env email]
    (log/debug (str "ENTER create-json-web-token, email: " email))
    (let [json-web-token (ss-session-common/create-json-web-token env email)
          _ (swap! db update-in [:session] conj json-web-token)]
      json-web-token))

  (validate-token
    [_ _ token]
    (log/debug (str "ENTER validate-token, token: " token))
    (ss-session-common/validate-token token db get-token remove-token!))
  )

#_(comment
  (user/system)
  (user/env)
  (ss-session-common/create-json-web-token (user/env) "testing@com")
  )
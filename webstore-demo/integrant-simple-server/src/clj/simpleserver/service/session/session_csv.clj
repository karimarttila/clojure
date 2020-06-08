(ns simpleserver.service.session.session-csv
  (:require
    [clojure.tools.logging :as log]
    [simpleserver.service.session.session-interface :as ss-session-i]
    [simpleserver.service.session.session-common :as ss-session-common]
    [simpleserver.util.config :as ss-config]
    ))

(def my-sessions
  "Atom to store the sessions. NOTE: Not a map but a set."
  (atom #{}))

(defn get-token
  [token _]
  (if (contains? @my-sessions token)
    token
    nil))

(defn remove-token
  [token _]
  (if (contains? @my-sessions token)
    (swap! my-sessions disj token)
    (log/warn (str "Expired token not found when removing it from my sessions: " token))))

(defrecord CsvR []
  ss-session-i/SessionInterface

  (create-json-web-token
    [this env email]
    (log/debug (str "ENTER create-json-web-token, email: " email))
    (let [json-web-token (ss-session-common/create-json-web-token env email)
          _ (swap! my-sessions conj json-web-token)]
      json-web-token))

  (validate-token
    [this env token]
    (log/debug (str "ENTER validate-token, token: " token))
    (ss-session-common/validate-token token nil get-token remove-token))

  (-get-sessions
    [this env]
    (log/debug (str "ENTER -get-sessions"))
    @my-sessions)

  (-reset-sessions!
    [this env]
    (log/debug (str "ENTER -reset-sessions!"))
    (if (= (get-in env [:config :runtime-env]) :dev)
      (reset! my-sessions #{})
      (throw (java.lang.UnsupportedOperationException. "You can reset sessions only in development environment!"))))
  )

(comment
  (user/system)

  )
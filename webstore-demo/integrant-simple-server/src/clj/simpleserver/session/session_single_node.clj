(ns simpleserver.session.session-single-node
  (:require
    [clojure.tools.logging :as log]
    [simpleserver.util.config :as ss-config]
    [simpleserver.session.session-interface]
    [simpleserver.session.session-common]))

(def my-sessions
  "Atom to store the sessions. NOTE: Not a map but a set."
  (atom #{}))

(defn get-token
  [token]
  (if (contains? @my-sessions token)
    token
    nil))

(defn remove-token
  [token]
  (if (contains? @my-sessions token)
    (swap! my-sessions disj token)
    (log/warn (str "Expired token not found when removing it from my sessions: " token))))

(defrecord SingleNodeR []
  simpleserver.session.session-interface/SessionInterface

  (create-json-web-token
    [this email]
    (log/debug (str "ENTER create-json-web-token, email: " email))
    (let [json-web-token (simpleserver.session.session-common/create-json-web-token email)
          _ (swap! my-sessions conj json-web-token)]
      json-web-token))

  (validate-token
    [this token]
    (log/debug (str "ENTER validate-token, token: " token))
    (simpleserver.session.session-common/validate-token token get-token remove-token))

  (-get-sessions
    [this]
    (log/debug (str "ENTER -get-sessions"))
    @my-sessions)

  (-reset-sessions!
    [this]
    (log/debug (str "ENTER -reset-sessions!"))
    (if (= (ss-config/config :runtime-env) "dev")
      (reset! my-sessions #{})
      (throw (java.lang.UnsupportedOperationException. "You can reset sessions only in development environment!"))))
  )

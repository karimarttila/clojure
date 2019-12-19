(ns simpleserver.session.session-single-node
  (:require
    [clojure.tools.logging :as log]
    [clj-time.core :as c-time]
    [buddy.sign.jwt :as buddy-jwt]
    [simpleserver.session.session-interface :as ss-session-i]
    [simpleserver.session.session-common :as ss-session-common]))


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
  ss-session-i/SessionInterface

  (create-json-web-token
    [this email]
    (log/debug (str "ENTER create-json-web-token, email: " email))
    (let [json-web-token (ss-session-common/create-json-web-token email)
          _ (swap! my-sessions conj json-web-token)]
      json-web-token))

  (validate-token
    [this token]
    (log/debug (str "ENTER validate-token, token: " token))
    (ss-session-common/validate-token token get-token remove-token))

  (-get-sessions
    [this]
    (log/debug (str "ENTER -get-sessions"))
    @my-sessions)

  (-reset-sessions!
    [this]
    (log/debug (str "ENTER -reset-sessions!"))
    (log/debug (str "my-sessions before reset: " @my-sessions))
    (reset! my-sessions #{})
    (log/debug (str "my-sessions after reset: " @my-sessions)))
  )



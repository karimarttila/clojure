(ns simpleserver.sessiondb.session-single-node
  (:require
    [clojure.tools.logging :as log]
    [clj-time.core :as c-time]
    [buddy.sign.jwt :as buddy-jwt]
    [simpleserver.util.prop :as ss-prop]
    [simpleserver.sessiondb.session-service-interface :as ss-session-service-interface]
    [simpleserver.sessiondb.session-common :as ss-session-common]))


(def my-sessions
  "Atom to store the sessions. NOTE: Not a map but a set."
  (atom #{}))


(defn reset-mysessions
  "A helper method for tests."
  []
  (log/debug (str "my-sessions before reset: " @my-sessions))
  (reset! my-sessions #{})
  (log/debug (str "my-sessions after reset: " @my-sessions)))


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


(defrecord Env-single-node [env]
  ss-session-service-interface/SessionServiceInterface

  (create-json-web-token
    [env email]
    (log/debug (str "ENTER create-json-web-token, email: " email))
    (let [json-web-token (ss-session-common/create-json-web-token email)
          dummy (swap! my-sessions conj json-web-token)]
      json-web-token))


  (validate-token
    [env token]
    (log/debug (str "ENTER validate-token, token: " token))
    (ss-session-common/validate-token token get-token remove-token)
    )


  (get-sessions
    [env]
    (log/debug (str "ENTER get-sessions"))
    @my-sessions)
  )


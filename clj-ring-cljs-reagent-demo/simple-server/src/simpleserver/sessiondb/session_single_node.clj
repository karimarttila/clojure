(ns simpleserver.sessiondb.session-single-node
  (:require
    [clojure.tools.logging :as log]
    [clj-time.core :as c-time]
    [buddy.sign.jwt :as buddy-jwt]
    [simpleserver.util.prop :as ss-prop]
    [simpleserver.sessiondb.session-service-interface :as ss-session-service-interface]
    [simpleserver.sessiondb.session-utils :as ss-session-utils]))


(def my-sessions
  "Atom to store the sessions. NOTE: Not a map but a set."
  (atom #{}))


(defn reset-mysessions
  "A helper method for tests."
  []
  (log/debug (str "my-sessions before reset: " @my-sessions))
  (reset! my-sessions #{})
  (log/debug (str "my-sessions after reset: " @my-sessions)))


(defrecord Env-single-node [env]
  ss-session-service-interface/SessionServiceInterface

  (create-json-web-token
    [env email]
    (log/debug (str "ENTER create-json-web-token, email: " email))
    (let [json-web-token (ss-session-utils/create-json-web-token email)
          dummy (swap! my-sessions conj json-web-token)]
      json-web-token))


  (validate-token
    [env token]
    (log/debug (str "ENTER validate-token, token: " token))
    (if (not (contains? @my-sessions token))
      ;; Part #1 of validation.
      (do
        (log/warn (str "Token not found in my sessions - unknown token: " token))
        nil)
      ;; Part #2 of validation.
      (try
        (buddy-jwt/unsign token ss-session-utils/my-hex-secret)
        (catch Exception e
          (if (.contains (.getMessage e) "Token is expired")
            (do
              (log/debug (str "Token is expired, removing it from my sessions and returning nil: " token))
              ; Token just expired, remove expired token and return nil.
              (if (contains? @my-sessions token)
                (swap! my-sessions disj token)
                (log/warn (str "Expired token not found when removing it from my sessions: " token)))
              nil)
            ; Some other issue, throw it.
            (do
              (log/error (str "Some unknown exception when handling expired token, exception: " (.getMessage e)) ", token: " token)
              (throw e)))))))

  (get-sessions
    [env]
    (log/debug (str "ENTER get-sessions"))
    @my-sessions)
  )


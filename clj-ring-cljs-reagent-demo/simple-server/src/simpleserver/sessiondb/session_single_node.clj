(ns simpleserver.sessiondb.session-single-node
  (:require
    [clojure.tools.logging :as log]
    [clj-time.core :as c-time]
    [ring.middleware.cors :refer [wrap-cors]]
    [buddy.sign.jwt :as buddy-jwt]
    [environ.core :refer [env]]
    [simpleserver.util.prop :as ss-prop]
    [simpleserver.sessiondb.session-service-interface :as ss-session-service-interface]))


;; The rational we have it here is that we can change the value in
;; remote REPL for debugging purposes, i.e. test token invalidation
;; dynamically.
(def my-expiration-time
  "Atom to store the JSON Web Token expiration as seconds.
   The rational we have it here is that we can change the value in
   remote REPL for debugging purposes, i.e. test token invalidation
   dynamically."
  (atom
    (ss-prop/get-int-value "json-web-token-expiration-as-seconds")))


(def my-sessions
  "Atom to store the sessions. NOTE: Not a map but a set."
  (atom #{}))


(defn reset-mysessions
  "A helper method for tests."
  []
  (log/debug (str "my-sessions before reset: " @my-sessions))
  (reset! my-sessions #{})
  (log/debug (str "my-sessions after reset: " @my-sessions)))


(def my-hex-secret
  "Creates dynamically a hex secret when the server boots."
  ((fn []
     (let [my-chars (->> (range (int \a) (inc (int \z))) (map char))
           my-ints (->> (range (int \0) (inc (int \9))) (map char))
           my-set (lazy-cat my-chars my-ints)
           hexify (fn [s]
                    (apply str
                           (map #(format "%02x" (int %)) s)))]

       (hexify (repeatedly 24 #(rand-nth my-set)))))))


(defrecord Env-single-node [env]
  ss-session-service-interface/SessionServiceInterface

  (create-json-web-token
    [env email]
    (log/debug (str "ENTER create-json-web-token, email: " email))
    (let [my-secret my-hex-secret
          exp-time (c-time/plus (c-time/now) (c-time/seconds @my-expiration-time))
          my-claim {:email email :exp exp-time}
          json-web-token (buddy-jwt/sign my-claim my-secret)
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
        (buddy-jwt/unsign token my-hex-secret)
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


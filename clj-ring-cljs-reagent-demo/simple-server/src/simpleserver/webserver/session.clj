(ns simpleserver.webserver.session
  (:require
    [clojure.tools.logging :as log]
    [clj-time.core :as c-time]
    [ring.middleware.cors :refer [wrap-cors]]
    [buddy.sign.jwt :as buddy-jwt]
    [environ.core :refer [env]]
    [simpleserver.util.prop :as ss-prop]))


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


(defn validate-token
  "Validates the token. Returns email if session ok, nil otherwise.
  Token validation has two parts:
  1. Check that we actually created the token in the first place (should find it in my-sessions set.
  2. Validate the token with buddy (can unsign it, token is not expired)."
  [token]
  (log/trace (str "ENTER validate-token, token: " token))
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
            (log/trace (str "Token is expired, removing it from my sessions and returning nil: " token))
            ; Token just expired, remove expired token and return nil.
            (if (contains? @my-sessions token)
              (swap! my-sessions disj token)
              (log/warn (str "Expired token not found when removing it from my sessions: " token)))
            nil)
          ; Some other issue, throw it.
          (do
            (log/error (str "Some unknown exception when handling expired token, exception: " (.getMessage e)) ", token: " token)
            (throw e)))))))


(defn create-json-web-token
  "Creates the JSON web token and adds it to sessions atom."
  [email]
  (log/trace (str "ENTER create-json-web-token, email: " email))
  (let [my-secret my-hex-secret
        exp-time (c-time/plus (c-time/now) (c-time/seconds @my-expiration-time))
        my-claim {:email email :exp exp-time}
        json-web-token (buddy-jwt/sign my-claim my-secret)
        dummy (swap! my-sessions conj json-web-token)]
    json-web-token))


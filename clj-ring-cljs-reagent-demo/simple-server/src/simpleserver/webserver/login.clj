(ns simpleserver.webserver.login
  (:require
    [clojure.tools.logging :as log]
    [clj-time.core :as c-time]
    [ring.middleware.cors :refer [wrap-cors]]
    [buddy.sign.jwt :as buddy-jwt]
    [environ.core :refer [env]]
    [simpleserver.util.prop :as ss-prop]
    ))


;; Atom to store the JSON Web Token expiration as seconds.
;; The rational we have it here is that we can change the value in
;; remote REPL for debugging purposes, i.e. test token invalidation
;; dynamically.
(def my-expiration-time
  (atom
    (ss-prop/get-int-value "json-web-token-expiration-as-seconds")))

;; Atom to store the sessions.
(def my-sessions (atom {}))


;; Creates dynamically a hex secret when the server boots.
(def my-hex-secret
  ((fn []
     (let [my-chars (->> (range (int \a) (inc (int \z))) (map char))
           my-ints (->> (range (int \0) (inc (int \9))) (map char))
           my-set (lazy-cat my-chars my-ints)
           hexify (fn [s]
                    (apply str
                           (map #(format "%02x" (int %)) s)))
           ]
       (hexify (repeatedly 24 #(rand-nth my-set)))))))


(defn validate-token
  "Validates the token. Returns email if session ok, nil otherwise."
  [token]
  (try
    (buddy-jwt/unsign token my-hex-secret)
    (catch Exception e
      (if (.contains (.getMessage e) "Token is expired")
        ; Token just expired, return nil.
        nil
        ; Some other issue, throw it.
        (throw e)))))

(defn create-json-web-token
  "Creates the JSON web token and adds it to sessions atom"
  [email]
  (let [my-secret my-hex-secret
        exp-time (c-time/plus (c-time/now) (c-time/seconds @my-expiration-time))
        my-claim {:email email :exp exp-time}
        json-web-token (buddy-jwt/sign my-claim my-secret)
        dummy (swap! my-sessions assoc email json-web-token)
        ]
    json-web-token))


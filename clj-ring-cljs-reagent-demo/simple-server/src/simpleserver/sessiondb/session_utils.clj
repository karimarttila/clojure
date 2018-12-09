(ns simpleserver.sessiondb.session-utils
  (:require [simpleserver.util.prop :as ss-prop]
            [clojure.tools.logging :as log]
            [clj-time.core :as c-time]
            [buddy.sign.jwt :as buddy-jwt]))


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

(defn create-json-web-token
  [email]
  (log/debug (str "ENTER create-json-web-token, email: " email))
  (let [my-secret my-hex-secret
        exp-time (c-time/plus (c-time/now) (c-time/seconds @simpleserver.sessiondb.session-utils/my-expiration-time))
        my-claim {:email email :exp exp-time}
        json-web-token (buddy-jwt/sign my-claim my-secret)]
    json-web-token))

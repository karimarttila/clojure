(ns simpleserver.sessiondb.session-local-dynamodb
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


(defrecord Env-local-dynamodb [env]
  ss-session-service-interface/SessionServiceInterface

  (create-json-web-token
    [env email]
    (log/debug (str "ENTER create-json-web-token, email: " email))
    )


  (validate-token
    [env token]
    (log/debug (str "ENTER validate-token, token: " token))
    )

  (get-sessions
    [env]
    (log/debug (str "ENTER get-sessions"))
    )

  )


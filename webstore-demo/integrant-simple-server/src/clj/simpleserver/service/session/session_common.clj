(ns simpleserver.service.session.session-common
  (:require [clojure.tools.logging :as log]
            [buddy.sign.jwt :as buddy-jwt]
            [clj-time.core :as c-time]))

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
  [env email]
  (log/debug (str "ENTER create-json-web-token, email: " email))
  (let [my-secret my-hex-secret
        exp-time (c-time/plus (c-time/now) (c-time/seconds (get-in env [:options :jwt :exp])))
        my-claim {:email email :exp exp-time}
        json-web-token (buddy-jwt/sign my-claim my-secret)]
    json-web-token))

(defn validate-token
  [token options fn-get-token fn-remove-token]
  (log/debug (str "ENTER validate-token, token: " token))
  (let [found-token (fn-get-token token options)]
    ;; Part #1 of validation.
    (if (nil? found-token)
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
              (fn-remove-token token options)
              nil)
            ; Some other issue, throw it.
            (do
              (log/error (str "Some unknown exception when handling expired token, exception: " (.getMessage e)) ", token: " token)
              nil)))))))

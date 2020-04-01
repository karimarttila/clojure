(ns simpleserver.user.user-common
  (:require [simpleserver.util.config :as ss-config]
            [clojure.data.csv :as csv]
            [clojure.java.io :as io]))

;; NOTE: We don't use incremental user ids since it is a bit anti-pattern in DynamoDB (since email is the hash key). So, we create uuid for userid.
;; I guess the same applies to Azure Table Storage as well so using uuid here as RowKey.
(defn uuid
  []
  (.toString (java.util.UUID/randomUUID)))

(defn get-initial-users
  []
  (let [data-dir (get-in ss-config/config [:single-node-data :data-dir])
        raw-users (try
                    (with-open [reader (io/reader (str data-dir "/initial-users.csv"))]
                      (doall
                        (csv/read-csv reader :separator \tab)))
                    (catch java.io.FileNotFoundException _ []))]
    (reduce (fn [users user]
              (assoc users (first user)
                           {:userid          (nth user 0)
                            :email           (nth user 1)
                            :first-name      (nth user 2)
                            :last-name       (nth user 3)
                            :hashed-password (nth user 4)})) {} raw-users)))
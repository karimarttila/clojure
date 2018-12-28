(ns simpleserver.userdb.initial-users
  (:require
    [clojure.data.csv :as csv]
    [clojure.java.io :as io]
    [clojure.tools.logging :as log]))


(defn -get-initial-users
  []
  (let [raw-users (try
                    (with-open [reader (io/reader (str "resources/initial-users.csv"))]
                      (doall
                        (csv/read-csv reader :separator \tab)))
                    (catch java.io.FileNotFoundException e []))]
    (reduce (fn [users user]
              (assoc users (first user)
                           {:userid          (nth user 0)
                            :email           (nth user 1)
                            :first-name      (nth user 2)
                            :last-name       (nth user 3)
                            :hashed-password (nth user 4)})) {} raw-users)))


(def initial-users-map
  (-get-initial-users))

(defn get-initial-users
  []
  initial-users-map)
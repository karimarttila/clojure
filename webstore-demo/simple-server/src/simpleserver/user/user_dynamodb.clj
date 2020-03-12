(ns simpleserver.user.user-dynamodb
  (:require [simpleserver.user.user-interface :as ss-user-i]
            [clojure.tools.logging :as log]
    ;       [cognitect.aws.client.api :as aws] ; TODO: Commented out until implementation start for clj-kondo not to complain.
    ;       [cognitect.aws.credentials :as credentials]

            [simpleserver.util.config :as ss-config]
            [cognitect.aws.client.api :as aws]))

(defn -get-converted-users
  [raw-users]
  (map (fn [item]
         item
         (let [user-id (get-in item [:userid :S])
               email (get-in item [:email :S])
               first-name (get-in item [:firstname :S])
               last-name (get-in item [:lastname :S])
               hashed-password (get-in item [:hpwd :S])]
           {:userid          user-id
            :email           email
            :first-name      first-name
            :last-name       last-name
            :hashed-password hashed-password}))
       (:Items raw-users)))

(defrecord AwsDynamoDbR []
  ss-user-i/UserInterface

  (email-already-exists?
    [this email]
    (log/debug (str "ENTER email-already-exists?, email: " email))
    (throw (java.lang.UnsupportedOperationException. "Not implemented yet")))

  (add-new-user
    [this email first-name last-name password]
    (log/debug (str "ENTER add-new-user"))
    (throw (java.lang.UnsupportedOperationException. "Not implemented yet")))

  (credentials-ok?
    [this email password]
    (log/debug (str "ENTER credentials-ok?"))
    (throw (java.lang.UnsupportedOperationException. "Not implemented yet")))

  (-get-users
    [this]
    (log/debug (str "ENTER -get-users"))
    (let [{my-ddb   :my-ddb
           my-table :my-table} (ss-config/get-dynamodb-config "users")
          raw-users (aws/invoke my-ddb {:op      :Scan
                                        :request {:TableName my-table}})
          converted-users (-get-converted-users raw-users)]
      (reduce (fn [users user]
                (assoc users (:userid user) user))
              {}
              converted-users)))

  (-reset-users!
    [this]
    (log/debug (str "ENTER -reset-users!"))
    (throw (java.lang.UnsupportedOperationException. "Not implemented yet")))
  )

(comment
  (require '[mydev])
  (mydev/refresh)
  (simpleserver.user.user-interface/-get-users
    simpleserver.user.user-config/user)
  )
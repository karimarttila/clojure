(ns simpleserver.user.user-dynamodb
  (:require [simpleserver.user.user-interface :as ss-user-i]
            [clojure.tools.logging :as log]
            [cognitect.aws.client.api :as aws]
            [simpleserver.util.config :as ss-config]
            [simpleserver.user.user-common :as ss-user-common]))

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

(defn -add-new-user-without-hashing-password
  [this email first-name last-name password]
  (log/debug (str "ENTER add-new-user"))
  (let [already-exists (ss-user-i/email-already-exists? this email)]
    (if already-exists
      (do
        (log/debug (str "Failure: email already exists: " email))
        {:email email, :ret :failed :msg "Email already exists"})
      (let [{my-ddb   :my-ddb
             my-table :my-table} (ss-config/get-dynamodb-config "users")
            new-id (ss-user-common/uuid)
            request {
                     :TableName my-table
                     :Item      {"userid"    {:S new-id}
                                 "email"     {:S email}
                                 "firstname" {:S first-name}
                                 "lastname"  {:S last-name}
                                 "hpwd"      {:S password}}
                     }
            _ (aws/invoke my-ddb {:op      :PutItem
                                  :request request})]
        {:email email, :ret :ok}))))

(defrecord AwsDynamoDbR []
  ss-user-i/UserInterface

  (email-already-exists?
    [this email]
    (log/debug (str "ENTER email-already-exists?, email: " email))
    (let [{my-ddb   :my-ddb
           my-table :my-table} (ss-config/get-dynamodb-config "users")
          raw-user (aws/invoke my-ddb {:op      :Query
                                       :request {:TableName                 my-table
                                                 :KeyConditionExpression    "email = :email"
                                                 :ExpressionAttributeValues {":email" {:S email}}}})
          ret-email (get-in (first (:Items raw-user)) [:email :S])]
      (= ret-email email)))

  (add-new-user
    [this email first-name last-name password]
    (log/debug (str "ENTER add-new-user"))
    (let [already-exists (ss-user-i/email-already-exists? this email)]
      (if already-exists
        (do
          (log/debug (str "Failure: email already exists: " email))
          {:email email, :ret :failed :msg "Email already exists"})
        (let [{my-ddb   :my-ddb
               my-table :my-table} (ss-config/get-dynamodb-config "users")
              new-id (ss-user-common/uuid)
              request {
                       :TableName my-table
                       :Item      {"userid"    {:S new-id}
                                   "email"     {:S email}
                                   "firstname" {:S first-name}
                                   "lastname"  {:S last-name}
                                   "hpwd"      {:S (str (hash password))}}
                       }
              _ (aws/invoke my-ddb {:op      :PutItem
                                    :request request})]
          {:email email, :ret :ok}))))

  (credentials-ok?
    [this email password]
    (log/debug (str "ENTER credentials-ok?"))
    (let [{my-ddb   :my-ddb
           my-table :my-table} (ss-config/get-dynamodb-config "users")
          request {:TableName                 my-table
                   :KeyConditionExpression    "email = :email"
                   :ExpressionAttributeValues {":email" {:S email}}}
          raw-user (aws/invoke my-ddb {:op      :Query
                                       :request request})
          ret-password (get-in (first (:Items raw-user)) [:hpwd :S])]
      (= ret-password (str (hash password)))))

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
    (if (= (ss-config/config :runtime-env) "dev")
      (let [{my-ddb   :my-ddb
             my-table :my-table} (ss-config/get-dynamodb-config "users")
            users-to-delete (ss-user-i/-get-users this)
            emails-to-delete (map (fn [item]
                                    (:email (second item)))
                                  users-to-delete)
            initial-users (ss-user-common/get-initial-users)]
        (dorun (map (fn [email]
                      (aws/invoke my-ddb {:op      :DeleteItem
                                          :request {
                                                    :TableName my-table
                                                    :Key       {"email" {:S email}}}}))
                    emails-to-delete))
        (dorun (map (fn [user]
                      (let [user-map (second user)]
                        (-add-new-user-without-hashing-password
                          this
                          (:email user-map)
                          (:first-name user-map)
                          (:last-name user-map)
                          (:hashed-password user-map))))
                    initial-users))

        )
      (throw (java.lang.UnsupportedOperationException. "You can reset sessions only in development environment!"))))

  )

(comment
  ;; NOTE: Remember to refresh everything if you make changes, since protocol and config needs to be loaded before this class.
  (do
    (require '[mydev])
    (mydev/refresh)
    )

  (require '[mydev])
  (mydev/refresh)
  (simpleserver.user.user-interface/-get-users
    simpleserver.user.user-config/user)
  (simpleserver.user.user-interface/email-already-exists?
    simpleserver.user.user-config/user "kari.karttinen@foo.com")
  (simpleserver.user.user-interface/add-new-user
    simpleserver.user.user-config/user "olavi.virta2@foo.com" "Ola" "Virta" "passw0rd")
  (simpleserver.user.user-interface/email-already-exists?
    simpleserver.user.user-config/user "olavi.virta@foo.com")
  (simpleserver.user.user-interface/credentials-ok?
    simpleserver.user.user-config/user "olavi.virta2@foo.com" "passw0rd")
  (simpleserver.user.user-interface/-reset-users!
    simpleserver.user.user-config/user)
  )
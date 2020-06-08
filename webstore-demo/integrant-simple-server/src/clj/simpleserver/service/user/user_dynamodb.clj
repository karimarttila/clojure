(ns simpleserver.service.user.user-dynamodb
  (:require [clojure.tools.logging :as log]
            [cognitect.aws.client.api :as aws]
            [simpleserver.service.dynamodb-config :as ss-ddb-config]
            [simpleserver.service.user.user-interface :as ss-user-i]
            [simpleserver.service.user.user-common :as ss-user-common]
            [simpleserver.util.config :as ss-config]))

(defn -get-converted-users
  [raw-users]
  (map (fn [item]
         item
         (let [user-id (get-in item [:userid :S])
               email (get-in item [:email :S])
               first-name (get-in item [:firstname :S])
               last-name (get-in item [:lastname :S])
               hashed-password (get-in item [:hpwd :S])]
           {:userid user-id
            :email email
            :first-name first-name
            :last-name last-name
            :hashed-password hashed-password}))
       (:Items raw-users)))

(defn -add-new-user-without-hashing-password
  [this env my-ddb my-table email first-name last-name password]
  (log/debug (str "ENTER add-new-user"))
  (let [already-exists (ss-user-i/email-already-exists? this env email)]
    (if already-exists
      (do
        (log/debug (str "Failure: email already exists: " email))
        {:email email, :ret :failed :msg "Email already exists"})
      (let [new-id (ss-user-common/uuid)
            request {
                     :TableName my-table
                     :Item {"userid" {:S new-id}
                            "email" {:S email}
                            "firstname" {:S first-name}
                            "lastname" {:S last-name}
                            "hpwd" {:S password}}
                     }
            _ (aws/invoke my-ddb {:op :PutItem
                                  :request request})]
        {:email email, :ret :ok}))))

(defrecord AwsDynamoDbR [my-ddb my-table]
  ss-user-i/UserInterface

  (email-already-exists?
    [_ env email]
    (log/debug (str "ENTER email-already-exists?, email: " email))
    (let [raw-user (aws/invoke my-ddb {:op :Query
                                       :request {:TableName my-table
                                                 :KeyConditionExpression "email = :email"
                                                 :ExpressionAttributeValues {":email" {:S email}}}})
          ret-email (get-in (first (:Items raw-user)) [:email :S])]
      (= ret-email email)))

  (add-new-user
    [this env email first-name last-name password]
    (log/debug (str "ENTER add-new-user"))
    (let [already-exists (ss-user-i/email-already-exists? this env email)]
      (if already-exists
        (do
          (log/debug (str "Failure: email already exists: " email))
          {:email email, :ret :failed :msg "Email already exists"})
        (let [new-id (ss-user-common/uuid)
              request {
                       :TableName my-table
                       :Item {"userid" {:S new-id}
                              "email" {:S email}
                              "firstname" {:S first-name}
                              "lastname" {:S last-name}
                              "hpwd" {:S (str (hash password))}}
                       }
              _ (aws/invoke my-ddb {:op :PutItem
                                    :request request})]
          {:email email, :ret :ok}))))

  (credentials-ok?
    [_ env email password]
    (log/debug (str "ENTER credentials-ok?"))
    (let [request {:TableName my-table
                   :KeyConditionExpression "email = :email"
                   :ExpressionAttributeValues {":email" {:S email}}}
          raw-user (aws/invoke my-ddb {:op :Query
                                       :request request})
          ret-password (get-in (first (:Items raw-user)) [:hpwd :S])]
      (= ret-password (str (hash password)))))

  (-get-users
    [_ env]
    (log/debug (str "ENTER -get-users"))
    (let [raw-users (aws/invoke my-ddb {:op :Scan
                                        :request {:TableName my-table}})
          converted-users (-get-converted-users raw-users)]
      (reduce (fn [users user]
                (assoc users (:userid user) user))
              {}
              converted-users)))

  (-reset-users!
    [this env]
    (log/debug (str "ENTER -reset-users!"))
    (if (= (get-in env [:config :runtime-env]) :dev)
      (let [users-to-delete (ss-user-i/-get-users this env)
            emails-to-delete (map (fn [item]
                                    (:email (second item)))
                                  users-to-delete)
            initial-users (ss-user-common/get-initial-users)]
        (dorun (map (fn [email]
                      (aws/invoke my-ddb {:op :DeleteItem
                                          :request {
                                                    :TableName my-table
                                                    :Key {"email" {:S email}}}}))
                    emails-to-delete))
        (dorun (map (fn [user]
                      (let [user-map (second user)]
                        (-add-new-user-without-hashing-password
                          this
                          env
                          my-ddb
                          my-table
                          (:email user-map)
                          (:first-name user-map)
                          (:last-name user-map)
                          (:hashed-password user-map))))
                    initial-users))

        )
      (throw (UnsupportedOperationException. "You can reset sessions only in development environment!"))))

  )


(comment

  (do
    (simpleserver.test-config/go)
    (simpleserver.service.user.user-interface/-reset-users!
    (:user (simpleserver.test-config/test-service))
    (simpleserver.test-config/test-env))
    )

  (simpleserver.test-config/go)
  simpleserver.test-config/test-system
  (simpleserver.test-config/halt)

  (simpleserver.service.user.user-interface/-reset-users!
    (:user (simpleserver.test-config/test-service))
    (simpleserver.test-config/test-env))
  (simpleserver.service.user.user-interface/-get-users
    (:user (simpleserver.test-config/test-service))
    (simpleserver.test-config/test-env))
  (simpleserver.service.user.user-interface/email-already-exists?
    (:user (simpleserver.test-config/test-service))
    (simpleserver.test-config/test-env)
    "kari.karttinen@foo.com")
  (simpleserver.service.user.user-interface/add-new-user
    (:user (simpleserver.test-config/test-service))
    (simpleserver.test-config/test-env)
    "olavi.virta@foo.com" "Ola" "Virta" "passw0rd")
    (simpleserver.service.user.user-interface/email-already-exists?
    (:user (simpleserver.test-config/test-service))
    (simpleserver.test-config/test-env)
    "olavi.virta@foo.com")
  (simpleserver.user.user-interface/credentials-ok?
    simpleserver.user.user-config/user "olavi.virta2@foo.com" "passw0rd")
  (get-in (simpleserver.test-config/test-env) [:config :runtime-env])

  )

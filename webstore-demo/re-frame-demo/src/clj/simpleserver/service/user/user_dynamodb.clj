(ns simpleserver.service.user.user-dynamodb
  (:require [clojure.tools.logging :as log]
            [cognitect.aws.client.api :as aws]
            [simpleserver.service.user.user-interface :as ss-user-i]
            [simpleserver.service.user.user-common :as ss-user-common]))

(defrecord AwsDynamoDbR [db]
  ss-user-i/UserInterface

  (email-already-exists?
    [_ _ email]
    (log/debug (str "ENTER email-already-exists?, email: " email))
    (let [raw-user (aws/invoke (:client db) {:op :Query
                                             :request {:TableName (get-in db [:tables :users])
                                                       :KeyConditionExpression "email = :email"
                                                       :ExpressionAttributeValues {":email" {:S email}}}})
          ret-email (if (:__type raw-user)
                      (throw (ex-info "Failed to fetch user for checking email" raw-user))
                      (get-in (first (:Items raw-user)) [:email :S]))]
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
                       :TableName (get-in db [:tables :users])
                       :Item {"userid" {:S new-id}
                              "email" {:S email}
                              "firstname" {:S first-name}
                              "lastname" {:S last-name}
                              "hpwd" {:S (str (hash password))}}
                       }
              ret (aws/invoke (:client db) {:op :PutItem
                                            :request request})]
          (if (:__type ret)
            (throw (ex-info "Failed to add new user" ret))
            {:email email, :ret :ok})))))

  (credentials-ok?
    [_ _ email password]
    (log/debug (str "ENTER credentials-ok?"))
    (let [request {:TableName (get-in db [:tables :users])
                   :KeyConditionExpression "email = :email"
                   :ExpressionAttributeValues {":email" {:S email}}}
          raw-user (aws/invoke (:client db) {:op :Query
                                             :request request})
          ret-password (if (:__type raw-user)
                         (throw (ex-info "Failed to get raw user" raw-user))
                         (get-in (first (:Items raw-user)) [:hpwd :S]))]
      (= ret-password (str (hash password))))))

; Rich comment.
#_(comment
    )

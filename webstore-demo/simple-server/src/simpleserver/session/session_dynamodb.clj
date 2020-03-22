(ns simpleserver.session.session-dynamodb
  (:require [simpleserver.session.session-interface :as ss-session-i]
            [simpleserver.session.session-common :as ss-session-common]
            [clojure.tools.logging :as log]
            [cognitect.aws.client.api :as aws]
            [simpleserver.util.config :as ss-config]))

(defn get-all-sessions-from-dynamodb
  []
  (let [{my-ddb   :my-ddb
           my-table :my-table} (ss-config/get-dynamodb-config "session")
          items (aws/invoke my-ddb {:op      :Scan
                                    :request {
                                              :TableName my-table}})]
      (reduce (fn [sessions session]
                (conj sessions (get-in session [:token :S])))
              #{}
              (items :Items))))

(defn get-token
  [token]
  (let [{my-ddb   :my-ddb
         my-table :my-table} (ss-config/get-dynamodb-config "session")
        result (aws/invoke my-ddb {:op      :GetItem
                                   :request {:TableName my-table
                                             :Key       {"token" {:S token}}}})]
    (get-in result [:Item :token :S])))

(defn remove-token
  [token]
  (let [{my-ddb   :my-ddb
         my-table :my-table} (ss-config/get-dynamodb-config "session")
        result (aws/invoke my-ddb {:op      :DeleteItem
                                   :request {
                                             :TableName my-table
                                             :Key       {"token" {:S token}}}})]
    result))

(defrecord AwsDynamoDbR []
  ss-session-i/SessionInterface

  (create-json-web-token
    [this email]
    (log/debug (str "ENTER create-json-web-token, email: " email))
    (let [json-web-token (ss-session-common/create-json-web-token email)
          {my-ddb   :my-ddb
           my-table :my-table} (ss-config/get-dynamodb-config "session")
          _ (aws/invoke my-ddb {:op      :PutItem
                                     :request {
                                               :TableName my-table
                                               :Item      {"token" {:S json-web-token}}}})]
      ; https://docs.aws.amazon.com/cli/latest/reference/dynamodb/put-item.html
      ; The ReturnValues parameter is used by several DynamoDB operations; however, PutItem does not recognize any values other than NONE or ALL_OLD .
      json-web-token))

  (validate-token
    [this token]
    (log/debug (str "ENTER validate-token, token: " token))
    (ss-session-common/validate-token token get-token remove-token)
    )

  (-get-sessions
    [this]
    (log/debug (str "ENTER -get-sessions"))
    (get-all-sessions-from-dynamodb))

  (-reset-sessions!
    [this]
    (log/debug (str "ENTER -reset-sessions!"))
    (let [sessions (get-all-sessions-from-dynamodb)
          ]
      (dorun (map remove-token sessions)))))

(comment
  ; Refresh interface after changes in implementation.
  (mydev/refresh)

  (get-all-sessions-from-dynamodb)

  (def my-token (let [my-aws-session simpleserver.session.session-config/session
                      result (ss-session-i/create-json-web-token my-aws-session "kari.karttinen@foo.com")]
                  result)
    )
  my-token
  (def validate-result (let [my-aws-session simpleserver.session.session-config/session
                             result (ss-session-i/validate-token my-aws-session my-token)]
                         result)
    )

  (def sessions (let [my-aws-session simpleserver.session.session-config/session
                             result (ss-session-i/-get-sessions my-aws-session)]
                         result)
    )
  sessions
  (def reset-result (let [my-aws-session simpleserver.session.session-config/session
                             result (ss-session-i/-reset-sessions! my-aws-session)]
                         result)
    )
  (get-all-sessions-from-dynamodb)
  )


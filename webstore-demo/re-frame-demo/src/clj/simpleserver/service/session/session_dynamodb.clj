(ns simpleserver.service.session.session-dynamodb
  (:require [simpleserver.service.session.session-interface :as ss-session-i]
            [simpleserver.service.session.session-common :as ss-session-common]
            [clojure.tools.logging :as log]
            [cognitect.aws.client.api :as aws]))

(defn get-all-sessions-from-dynamodb
  [my-ddb my-table]
  (let [items (aws/invoke my-ddb {:op :Scan
                                  :request {:TableName my-table}})]
    (reduce (fn [sessions session]
              (conj sessions (get-in session [:token :S])))
            #{}
            (items :Items))))

(defn get-token
  [token db]
  (let [result (aws/invoke (:client db) {:op :GetItem
                                         :request {:TableName (get-in db [:tables :session])
                                                   :Key {"token" {:S token}}}})]
    (if (:__type result)
      (throw (ex-info "Failed to get token" result))
      (get-in result [:Item :token :S]))))

(defn remove-token!
  [token db]
  (let [result (aws/invoke (:client db) {:op :DeleteItem
                                         :request {:TableName (get-in db [:tables :session])
                                                   :Key {"token" {:S token}}}})]
    (if (:__type result)
      (throw (ex-info "Failed to remove token" result))
      result)))

(defrecord AwsDynamoDbR [db]
  ss-session-i/SessionInterface

  (create-json-web-token
    [_ env email]
    (log/debug (str "ENTER create-json-web-token, email: " email))
    (let [json-web-token (ss-session-common/create-json-web-token env email)
          ret (aws/invoke (:client db) {:op :PutItem
                                        :request {:TableName (get-in db [:tables :session])
                                                  :Item {"token" {:S json-web-token}}}})]
      ; https://docs.aws.amazon.com/cli/latest/reference/dynamodb/put-item.html
      ; The ReturnValues parameter is used by several DynamoDB operations; however, PutItem does not recognize any values other than NONE or ALL_OLD .
      (if (empty? ret)
        json-web-token
        (throw (ex-info "Failed to put session" ret)))))

  (validate-token
    [_ _ token]
    (log/debug (str "ENTER validate-token, token: " token))
    (ss-session-common/validate-token token db get-token remove-token!)))

#_(comment
    (-get-sessions
      [_ _]
      (log/debug (str "ENTER -get-sessions"))
      (get-all-sessions-from-dynamodb my-ddb my-table))

    (-reset-sessions!
      [_ _]
      (log/debug (str "ENTER -reset-sessions!"))
      (let [sessions (get-all-sessions-from-dynamodb my-ddb my-table)]
        (dorun (map (partial remove-token {:my-ddb my-ddb :my-table my-table}) sessions)))))

;; Commented for clj-kondo
#_(comment
    ; Refresh interface after changes in implementation.
    (mydev/refresh)

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


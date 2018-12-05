(ns simpleserver.userdb.users-local-dynamodb
  (:require
    [clojure.tools.logging :as log]
    [amazonica.aws.dynamodbv2 :as dynamodb]
    [environ.core :as environ]
    [simpleserver.userdb.users-service-interface :as ss-users-service-interface]))

(def local-dynamodb-config {:access-key (env :access-key)
                            :secret-key (env :secret-key)
                            :endpoint   (env :endpoint)})

;; NOTE: We don't use incremental user ids since it is a bit anti-pattern in DynamoDB (since email is the hash key). So, we create uuid for userid.
(defn uuid
  []
  (.toString (java.util.UUID/randomUUID)))

;; NOTE: We are skipping the pagination here since this is an exercise and
;; we know that the query results will always be less than 1MB.
;; See: https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/Query.html#Query.Pagination
;; In real life we should anticipate and test pagination.

(defrecord Env-local-dynamodb [ssenv]
  ss-users-service-interface/UsersServiceInterface

  (email-already-exists?
    [ssenv email]
    (log/debug (str "ENTER email-already-exists?, email: " email))
    (let [my-env (environ/env :my-env)
          my-table (str "sseks-" my-env "-users")
          ret (dynamodb/query local-dynamodb-config
                              :table-name my-table
                              :select "COUNT"
                              :key-conditions {:email {:attribute-value-list [email]
                                                       :comparison-operator "EQ"}})
          count (ret :count)]
      (if (= count 0)
        false
        true)))

  (add-new-user
    [ssenv email first-name last-name password]
    (log/debug (str "ENTER add-new-user, email: " email))
    )

  (credentials-ok?
    [ssenv email password]
    (log/debug (str "ENTER credentials-ok?, email: " email))
    )

  (get-users
    [ssenv]
    (log/debug (str "ENTER get-users"))
    )
  )




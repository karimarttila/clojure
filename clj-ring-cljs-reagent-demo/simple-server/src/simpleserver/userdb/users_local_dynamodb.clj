(ns simpleserver.userdb.users-local-dynamodb
  (:require
    [clojure.tools.logging :as log]
    [environ.core :refer [env]]
    [simpleserver.userdb.users-service-interface :as ss-users-service-interface]))

(def local-dynamodb-config {:access-key (env :access-key)
                            :secret-key (env :secret-key)
                            :endpoint   (env :endpoint)})

(defn uuid
  []
  (.toString (java.util.UUID/randomUUID)))

;; NOTE: We are skipping the pagination here since this is an exercise and
;; we know that the query results will always be less than 1MB.
;; See: https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/Query.html#Query.Pagination
;; In real life we should anticipate and test pagination.

(defrecord Env-local-dynamodb [env]
  ss-users-service-interface/UsersServiceInterface

  (email-already-exists?
    [env email]
    (log/debug (str "ENTER email-already-exists?, email: " email))
    ;(let [ret (dynamodb/query local-dynamodb-config :table-name "sseks-dev-users" :select "ALL_ATTRIBUTES" :key-conditions
    ;                          {:pgid {:attribute-value-list [(str pg-id)] :comparison-operator "EQ"}})
    ;      items (ret :items)
    ;      result-list (seq (map (fn [item] (seq [(item :pid) (item :pgid) (item :title) (item :price)])) items))]
    ;  (if (nil? result-list)
    ;    '()
    ;    result-list))
    )

  (add-new-user [env email first-name last-name password]
    (log/debug (str "ENTER add-new-user, email: " email))
    )

  (credentials-ok?
    [env email password]
    (log/debug (str "ENTER credentials-ok?, email: " email))
    )

  (get-users
    [env]
    (log/debug (str "ENTER get-users"))
    )
  )




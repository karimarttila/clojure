(ns simpleserver.userdb.users-common)

;; NOTE: We don't use incremental user ids since it is a bit anti-pattern in DynamoDB (since email is the hash key). So, we create uuid for userid.
;; I guess the same applies to Azure Table Storage as well so using uuid here as RowKey.
(defn uuid
  []
  (.toString (java.util.UUID/randomUUID)))

(ns simpleserver.user.user-dynamodb
  (:require [simpleserver.user.user-interface :as ss-user-i]
            [clojure.tools.logging :as log]
            [simpleserver.util.config :as ss-config]
            [cognitect.aws.client.api :as aws]
            [cognitect.aws.credentials :as credentials]))

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
    (throw (java.lang.UnsupportedOperationException. "Not implemented yet")))

  (-reset-users!
    [this]
    (log/debug (str "ENTER -reset-users!"))
    (throw (java.lang.UnsupportedOperationException. "Not implemented yet")))
  )

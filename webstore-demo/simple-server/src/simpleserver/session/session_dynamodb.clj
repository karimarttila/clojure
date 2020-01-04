(ns simpleserver.session.session-dynamodb
  (:require [simpleserver.session.session-interface :as ss-session-i]
            [clojure.tools.logging :as log]
    ;       [simpleserver.util.config :as ss-config] ; TODO: Commented out until implementation starts for clj-kondo not to complain.
    ;       [cognitect.aws.client.api :as aws]
    ;       [cognitect.aws.credentials :as credentials]
            ))


(defrecord AwsDynamoDbR []
  ss-session-i/SessionInterface

  (create-json-web-token
    [this email]
    (log/debug (str "ENTER create-json-web-token, email: " email))
    (throw (java.lang.UnsupportedOperationException. "Not implemented yet"))
    )

  (validate-token
    [this token]
    (log/debug (str "ENTER validate-token, token: " token))
    (throw (java.lang.UnsupportedOperationException. "Not implemented yet"))
    )

  (-get-sessions
    [this]
    (log/debug (str "ENTER -get-sessions"))
    (throw (java.lang.UnsupportedOperationException. "Not implemented yet")))

  (-reset-sessions!
    [this]
    (log/debug (str "ENTER -reset-sessions!"))
    (throw (java.lang.UnsupportedOperationException. "Not implemented yet")))
  )

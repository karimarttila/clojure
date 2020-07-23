(ns simpleserver.service.user.user-postgres
  (:require [clojure.tools.logging :as log]
            [cognitect.aws.client.api :as aws]
            [simpleserver.service.user.user-interface :as ss-user-i]
            [simpleserver.service.user.user-common :as ss-user-common]))

(defrecord PostgresR [db]
  ss-user-i/UserInterface

  (email-already-exists?
    [_ _ email]
    (log/debug (str "ENTER email-already-exists?, email: " email))
    )

  (add-new-user
    [this env email first-name last-name password]
    (log/debug (str "ENTER add-new-user"))
    )

  (credentials-ok?
    [_ _ email password]
    (log/debug (str "ENTER credentials-ok?"))
    ))

; Rich comment.
#_(comment
    )

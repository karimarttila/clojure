(ns simpleserver.service.user.user-datomic
  (:require [clojure.tools.logging :as log]
            [simpleserver.service.user.user-interface :as ss-user-i]
            [simpleserver.service.user.user-common :as ss-user-common]
            [datomic.api :as d]))

(defrecord DatomicR [conn]
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


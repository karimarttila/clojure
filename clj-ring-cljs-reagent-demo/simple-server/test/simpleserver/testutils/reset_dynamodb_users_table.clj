(ns simpleserver.testutils.reset-dynamodb-users-table
  (:require [clojure.tools.logging :as log]
            [environ.core :as environ]
            [simpleserver.userdb.users-factory :as ss-users-factory]
            ))

(def users-svc (ss-users-factory/create-users))

(def local-dynamodb-config {:access-key (environ/env :access-key)
                            :secret-key (environ/env :secret-key)
                            :endpoint   (environ/env :endpoint)})







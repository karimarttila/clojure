(ns simpleserver.util.aws-utils
  (:require [environ.core :as environ]))

(def local-dynamodb-config {:access-key (environ/env :access-key)
                            :secret-key (environ/env :secret-key)
                            :endpoint   (environ/env :endpoint)})
(ns simpleserver.util.config
  (:require [clojure.tools.logging :as log]
            [cprop.core :refer [load-config]]
            [mount.core :refer [defstate, start, stop]]
            ))


(defn create-config
  "Creates configuration."
  []
  (log/debug "ENTER create-config")
  (load-config))


; To query state in repl:
; simpleserver.util.config/ss-config
(defstate config-state
          "Simple server application configuration.
          Reads configuration either from dev or prod env in config.edn
          (see resources/config).
          Environment variables override config.edn file values."
          :start (create-config))


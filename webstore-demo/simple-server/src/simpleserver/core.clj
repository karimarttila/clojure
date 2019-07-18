(ns simpleserver.core
  (:require
    [clojure.tools.logging :as log]
    [clojure.java.io :as io]
    [simpleserver.util.config :as ss-config]
    [simpleserver.domain.domain-config :as ss-domain]
    [simpleserver.webserver.server :as ss-ws]
    [mount.core :as mount]))

; NOTE: For Mount to be able to start/stop configurations you need to require them
; in this namespace - see Mount documentation.


(defn -main
  "Using main to start app using mount."
  [& args]
  (log/debug "ENTER -main")
  (mount/start))


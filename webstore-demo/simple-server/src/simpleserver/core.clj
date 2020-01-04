(ns simpleserver.core
  (:require
    [clojure.tools.logging :as log]
    [simpleserver.util.config :as ss-config]
    [simpleserver.webserver.server :as ss-ws]))

; NOTE: For Mount to be able to start/stop configurations you need to require them
; in this namespace - see Mount documentation.


(defn -main
  "Using main to start app."
  [& args]
  (log/debug "ENTER -main")
  (if (= (count args) 1)
    (if (= (first args) "run-server")
      (do
        (prn "Starting server with configuration: " ss-config/config)
        (ss-ws/start-web-server (get-in ss-config/config [:server :port])))
      nil)
    nil))


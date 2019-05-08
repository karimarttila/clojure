(ns simpleserver.core
  (:require
    [clojure.tools.logging :as log]
    [clojure.java.io :as io]
    [simpleserver.util.config :as ss-config]
    [simpleserver.webserver.server :as ss-ws]
    [mount.core :as mount]))


(defn -main
  "Using main to start app using mount."
  [& args]
  (log/debug "ENTER -main")
  (mount/start))


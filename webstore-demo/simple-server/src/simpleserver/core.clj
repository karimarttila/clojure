(ns simpleserver.core
  (:require
    [clojure.tools.logging :as log]
    [clojure.java.io :as io]
    [simpleserver.webserver.server :as ss-ws]))


(defn -main
  "Main not used since a Ring application."
  [& args]
  (throw (ex-info (str "Use ring to start the server, example: "
                       "SIMPLESERVER_CONFIG_FILE=resources/simpleserver.properties lein with-profile +log-dev ring server-headless") {})))


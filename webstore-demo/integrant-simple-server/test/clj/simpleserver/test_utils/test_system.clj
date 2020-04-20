(ns simpleserver.test-utils.test-system
  (:require
    [clojure.tools.logging :as log]
    [integrant.core :as ig]
    [simpleserver.util.config :as ss-config]
    [simpleserver.webserver.server :as ss-webserver]))


(defn test-system-config []
  (let [config (ss-config/create-config)]
    {
     ::config     config
     ::web-server {:port (get-in config [:test-server :port])
                         :join? false}}))

(defmethod ig/init-key ::config [_ config] config)

(defmethod ig/init-key ::web-server [_ {:keys [port join?]}]
  (ss-webserver/start-web-server port join?))

(defmethod ig/halt-key! ::web-server [_ server]
  (ss-webserver/stop-web-server server))


(comment
  *ns*
  (test-system-config)
  )

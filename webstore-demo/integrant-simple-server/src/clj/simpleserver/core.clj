(ns simpleserver.core
  (:require
    [clojure.tools.logging :as log]
    [integrant.core :as ig]
    [simpleserver.util.config :as ss-config]
    [simpleserver.webserver.server :as ss-webserver]
    ))

(defn system-config []
  (let [config (ss-config/create-config)]
    {
     ::config     config
     ::web-server {:port  (get-in config [:server :port])
                   :join? false}}))

(defmethod ig/init-key ::config [_ config] config)

(defmethod ig/init-key ::web-server [_ {:keys [port join?]}]
  (ss-webserver/start-web-server port join?))

(defmethod ig/halt-key! ::web-server [_ server]
  (ss-webserver/stop-web-server server))

(defn -main []
  (log/info "System starting...")
  (log/info "Config: " (clojure.pprint/pprint (system-config)))
  (ig/init (system-config)))

;; Rich comment.
(comment
  *ns*
  (system-config)


  )


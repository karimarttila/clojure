(ns simpleserver.core
  (:require
    [clojure.tools.logging :as log]
    [clojure.pprint]
    [ring.adapter.jetty :as jetty]
    [nrepl.server :as nrepl]
    [integrant.core :as ig]
    [simpleserver.util.config :as ss-config]
    [simpleserver.service.service :as ss-service]
    [simpleserver.webserver.server :as ss-webserver]))

(defn env-value [key default]
  (some-> (or (System/getenv (name key)) default)))

;; Let's keep active db flag in an atom so that we can easily change it during development.
;; :csv, :local-ddb, :aws-ddb, :postgres
;(def ss-db "csv")
(def ss-db "local-ddb")
(defonce active-db (atom (keyword (env-value "SS_DB" ss-db))))

(defn get-active-db
  []
  @active-db)

(defn reset-active-db!
  "Utility method to dynamically change active db in REPL."
  [new-db]
  (reset! active-db new-db))

(defn system-config
  []
  (let [config (ss-config/create-config)]
    {
     ::active-db @active-db
     ::config {:active-db (ig/ref ::active-db)}
     ::service {:config (ig/ref ::config)}
     ::env {:config (ig/ref ::config)
            :service (ig/ref ::service)}
     ::web-server {:port (get-in config [:web-server :server-port])
                   :join? false
                   :env (ig/ref ::env)}
     ::nrepl {:bind (get-in config [:nrepl :bind])
              :port (get-in config [:nrepl :port])}}))

(defmethod ig/init-key ::active-db [_ active-db]
  (log/debug "ENTER ig/init-key ::active-db")
  active-db)

(defmethod ig/init-key ::config [_ {:keys [active-db]}]
  (log/debug "ENTER ig/init-key ::config")
  (let [config (ss-config/create-config)]
    (conj config {:active-db active-db})))

(defmethod ig/init-key ::service [_ {:keys [config]}]
  (log/debug "ENTER ig/init-key ::service")
  (ss-service/get-service-config config))

; Pass environment to routes => and to functions that need either service or config.
; This way the system is fully stateless and you can configure production server
; and test server and both can have different services (e.g. csv and ddb services).

(defmethod ig/init-key ::env [_ {:keys [config service]}]
  (log/debug "ENTER ig/init-key ::env")
  {:config config :service service})

(defmethod ig/init-key ::web-server [_ {:keys [port join? env]}]
  (log/debug "ENTER ig/init-key ::web-server")
  (-> (ss-webserver/handler (ss-webserver/routes env))
      (jetty/run-jetty {:port port :join? join?})))

(defmethod ig/halt-key! ::web-server [_ server]
  (log/debug "ENTER ig/halt-key! ::web-server")
  (.stop server))

(defmethod ig/init-key ::nrepl [_ {:keys [bind port]}]
  (if (and bind port)
    (nrepl/start-server :bind bind :port port)
    nil))

(defmethod ig/halt-key! ::nrepl [_ this]
  (if this
    (nrepl/stop-server this)
    nil))

(defmethod ig/suspend-key! ::nrepl [_ this]
  this)

(defmethod ig/resume-key ::nrepl [_ _ _ old-impl]
  old-impl)

(defn -main []
  (log/info "System starting...")
  (log/info "Config: " (clojure.pprint/pprint (system-config)))
  (ig/init (system-config)))

;; Rich comment.
#_(comment
  (ss-webserver/routes (user/env))
  *ns*
  (simpleserver.core/system-config)
  active-db
  @active-db
  (simpleserver.core/reset-active-db! :local-ddb)
  (simpleserver.core/reset-active-db! :csv)
  #_(user/system)
  )




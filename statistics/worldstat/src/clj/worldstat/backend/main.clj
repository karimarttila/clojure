(ns worldstat.backend.main
  (:require
    [clojure.tools.logging :as log]
    [clojure.edn :as cedn]
    [ring.adapter.jetty :as jetty]
    [clojure.java.io :as io]
    [clojure.tools.reader.edn :as edn]
    [integrant.core :as ig]
    [integrant.repl :as ig-repl]
    [aero.core :as aero]
    [nrepl.server :as nrepl]
    [potpuri.core :as p]
    [hashp.core]
    [worldstat.backend.routes.http :as http]
    [worldstat.backend.routes.routes :as routes]
    [worldstat.backend.data.init :as init])
  (:import (org.eclipse.jetty.server Server)))


(defn ->long [x]
  (if (int? x) x (Long/parseLong x)))



(defn env [key default]
  (some-> (or (System/getenv (name key)) default)))

(defmethod aero/reader 'ig/ref [_ _ value] (ig/ref value))

(defmethod ig/init-key :backend/env [_ env] env)

(defmethod ig/init-key :backend/jetty [_ {:keys [port join? env]}]
  (-> (http/handler {:routes (routes/create env)})
      (jetty/run-jetty {:port port :join? join?})))

(defmethod ig/halt-key! :backend/jetty [_ ^Server server]
  (.stop server))


(defmethod ig/init-key :backend/data [_ {:keys [data-files topojson-file]}]
  (init/get-data data-files topojson-file))

(defmethod ig/resume-key :backend/data [_ {:keys [always-reset data-files topojson-file]} _ old-impl]
  (if always-reset
    (init/get-data data-files topojson-file)
    old-impl))

(defmethod ig/init-key :backend/nrepl [_ {:keys [bind port]}]
  (if (and bind port)
    (nrepl/start-server :bind bind :port port)
    nil))

(defmethod ig/halt-key! :backend/nrepl [_ this]
  (if this
    (nrepl/stop-server this)))

(defmethod ig/suspend-key! :backend/nrepl [_ this]
  this)

(defmethod ig/resume-key :backend/nrepl [_ _ _ old-impl]
  old-impl)

(defn read-config [profile]
  (let [local-config (let [file (io/file "config-local.edn")]
                       (if (.exists file) (edn/read-string (slurp file))))]
    (cond-> (aero/read-config (io/resource "config.edn") {:profile profile})
            local-config (p/deep-merge local-config))))

(defn system-config []
  (let [profile (or (some-> (System/getenv "PROFILE") keyword) :dev)
        _ (log/info "Using profile " profile)
        config (read-config profile)]
    config))

(defn -main []
  (log/info "System starting...")
  (log/info "Config: " (clojure.pprint/pprint (system-config)))
  (ig-repl/set-prep! system-config)
  (ig-repl/go)
  )

(comment
  (require '[hashp.core])
  )

(ns vega.backend.main
  (:require
    [clojure.tools.logging :as log]
    [ring.adapter.jetty :as jetty]
    [clojure.java.io :as io]
    [clojure.tools.reader.edn :as edn]
    [integrant.core :as ig]
    [integrant.repl :as ig-repl]
    [aero.core :as aero]
    [potpuri.core :as p]
    [vega.backend.routes :as v-routes]
    [nrepl.server :as nrepl]
    )
  (:import (org.eclipse.jetty.server Server))
  )


(defn env [key default]
  (some-> (or (System/getenv (name key)) default)))

(defmethod aero/reader 'ig/ref [_ _ value] (ig/ref value))

(defmethod ig/init-key :backend/profile [_ profile]
  profile)

(defmethod ig/init-key :backend/env [_ env] env)


(defmethod ig/init-key :backend/jetty [_ {:keys [port join? env]}]
  (-> (v-routes/handler (v-routes/routes env))
      (jetty/run-jetty {:port port :join? join?}))
  )

(defmethod ig/halt-key! :backend/jetty [_ ^Server server]
  (.stop server))


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
  ; Do not log password.
  (let [config (update-in (system-config) [:backend/postgres] dissoc :password)]
    (log/info "Config: " (clojure.pprint/pprint config))
    (ig-repl/set-prep! system-config)
    (ig-repl/go))
  )

(comment

  (require '[clj-http.client])
  (clj-http.client/get "http://localhost:7501/vega/api/version")
  (user/env)

  ;(require '[hashp.core])
  (-main)

  )

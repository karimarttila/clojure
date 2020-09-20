(ns simpleserver.core
  (:require
    [clojure.tools.logging :as log]
    [clojure.pprint]
    [ring.adapter.jetty :as jetty]
    [nrepl.server :as nrepl]
    [integrant.repl :as ig-repl]
    [integrant.core :as ig]
    [aero.core :as aero]
    [hikari-cp.core :as hikari-cp]
    [simpleserver.service.service :as ss-service]
    [simpleserver.webserver.server :as ss-webserver]
    [simpleserver.service.dynamodb-config :as ddb-config]
    [simpleserver.service.domain.domain-csv-db-loader :as csv-db-loader]
    [clojure.java.io :as io]
    [clojure.tools.reader.edn :as edn]
    [potpuri.core :as p]))

(defn env-value [key default]
  (some-> (or (System/getenv (name key)) default)))

(defmethod aero/reader 'ig/ref [_ _ value] (ig/ref value))

(defmethod ig/init-key :backend/profile [_ profile]
  profile)

(defmethod ig/init-key :backend/active-db [_ active-db]
  (log/debug (str "ENTER ig/init-key :backend/active-db:") active-db)
  (keyword active-db))

(defmethod ig/init-key :backend/csv [_ {:keys [profile active-db data-dir]}]
  (log/debug "ENTER ig/init-key :backend/csv")
  ; We simulate this data store using atom.
  ; We initialize the "db" from :data-dir.
  (if (= active-db :csv)
    (let [csv-data
          {:data-dir data-dir
           :db (atom {:domain {}
                      :session #{}
                      :user {}})}]
      ; Let's keep the test database empty.
      (if (not= profile :test)
        (csv-db-loader/load-csv-db csv-data))
      (:db csv-data))))

(defmethod ig/init-key :backend/ddb [_ {:keys [active-db ss-table-prefix ss-env endpoint aws-profile]}]
  (log/debug "ENTER ig/init-key :backend/ddb")
  (if (= active-db :ddb)
    (ddb-config/get-dynamodb-config ss-table-prefix ss-env endpoint aws-profile)))

(defmethod ig/init-key :backend/postgres [_ opts]
  (log/debug "ENTER ig/init-key :backend/postgres")
  (if (= (:active-db opts) :postgres)
    {:datasource (hikari-cp/make-datasource (dissoc opts :active-db)) :active-db (:active-db opts)}))

(defmethod ig/halt-key! :backend/postgres [_ this]
  (log/debug "ENTER ig/halt-key! :backend/postgres")
  (if (= (:active-db this) :postgres)
    (hikari-cp/close-datasource (:datasource this))))

(defmethod ig/init-key :backend/service [_ {:keys [active-db csv ddb postgres]}]
  (log/debug "ENTER ig/init-key :backend/service")
  (ss-service/get-service-config active-db csv ddb postgres))

(defmethod ig/init-key :backend/env [_ env]
  env)

(defmethod ig/init-key :backend/jetty [_ {:keys [port join? env]}]
  (log/debug "ENTER ig/init-key :backend/jetty")
  (-> (ss-webserver/handler (ss-webserver/routes env))
      (jetty/run-jetty {:port port :join? join?})))

(defmethod ig/halt-key! :backend/jetty [_ server]
  (log/debug "ENTER ig/halt-key! :backend/jetty")
  (.stop server))

(defmethod ig/init-key :backend/options [_ options]
  (log/debug "ENTER ig/init-key :backend/options")
  options)

(defmethod ig/init-key :backend/nrepl [_ {:keys [bind port]}]
  (log/debug "ENTER ig/init-key :backend/nrepl")
  (if (and bind port)
    (nrepl/start-server :bind bind :port port)
    nil))

(defmethod ig/halt-key! :backend/nrepl [_ this]
  (log/debug "ENTER ig/halt-key! :backend/nrepl")
  (if this
    (nrepl/stop-server this)))

(defmethod ig/suspend-key! :backend/nrepl [_ this]
  (log/debug "ENTER ig/suspend-key! :backend/nrepl")
  this)

(defmethod ig/resume-key :backend/nrepl [_ _ _ old-impl]
  (log/debug "ENTER ig/resume-key :backend/nrepl")
  old-impl)

; Profile is if you want to test in real AWS env:
; you can add to the container script PROFILE=prod
(defn read-config [profile]
  (let [local-config (let [file (io/file "config-local.edn")]
                       (if (.exists file) (edn/read-string (slurp file))))]
    (cond-> (aero/read-config (io/resource "config.edn") {:profile profile})
            local-config (p/deep-merge local-config))))

(defn system-config [myprofile]
  (let [profile (or myprofile (some-> (System/getenv "PROFILE") keyword) :dev)
        _ (log/info "Using profile " profile)
        config (read-config profile)]
    config))

(defn system-config-start []
  (system-config nil))

(defn -main []
  (log/info "System starting...")
  (log/info "Config: " (system-config-start))
  (ig-repl/set-prep! (system-config-start))
  (ig-repl/go))


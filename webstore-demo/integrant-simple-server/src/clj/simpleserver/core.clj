(ns simpleserver.core
  (:require
    [clojure.tools.logging :as log]
    [clojure.pprint]
    [integrant.core :as ig]
    [simpleserver.util.config :as ss-config]
    [simpleserver.service.service :as ss-service]
    [simpleserver.webserver.server :as ss-webserver]))


;; TODO: Kari: Laita Integrantin sisälle domain-kerrosten service-oliot, jotka nyt kutsutaan erikseen.
;; TODO: Sitten integrantin server-alustuksessa tallenna server-olion atomiin samalla kyn käynnistät serverin...
;; TODO: Server käy katsomassa atomista domain-service-olion, jota käyttää kutsuissa...

(defn env [key default]
  (some-> (or (System/getenv (name key)) default)))

;; Let's keep active db flag in an atom so that we can easily change it during development.
;; :csv, :local-ddb, :aws-ddb, :postgres
(defonce active-db (atom (keyword (env "SS_DB" "local-ddb"))))

(defn get-active-db
  []
  @active-db)

;TODO: tee järjestys active-db, config yms. injektoi active-db osaksi util.config/config-atomia!
;TODO: jatkossa active-db löytyy configin sisältä!

(defn reset-active-db!
  "Utility method to dynamically change active db in REPL."
  [new-db]
  (reset! active-db new-db))

(defn system-config []
  (let [config (ss-config/create-config)]
    {

     ::active-db  @active-db
     ::config     {:active-db (ig/ref ::active-db)}
     ::service    {:config    (ig/ref ::config)}
     ::web-server {:service (ig/ref ::service)
                   :port    (get-in config [:web-server :server-port])
                   :join?   false}}))

(defmethod ig/init-key ::active-db [_ active-db]
  (log/debug "ENTER ig/init-key ::active-db")
  active-db)

(defmethod ig/init-key ::config [_ {:keys [active-db]}]
  (log/debug "ENTER ig/init-key ::config")
  (let [config (ss-config/create-config)
        new-config (conj config {:active-db active-db})]
    (ss-config/reset-config! new-config)))

(defmethod ig/init-key ::service [_ {:keys [config]}]
  (log/debug "ENTER ig/init-key ::service")
  (ss-service/get-service config))

(defmethod ig/init-key ::web-server [_ {:keys [service port join?]}]
  (log/debug "ENTER ig/init-key ::web-server")
  (ss-webserver/start-web-server port join? service))

(defmethod ig/halt-key! ::web-server [_ server]
  (log/debug "ENTER ig/halt-key! ::web-server")
  (ss-webserver/stop-web-server server))

(defn -main []
  (log/info "System starting...")
  (log/info "Config: " (clojure.pprint/pprint (system-config)))
  (ig/init (system-config)))

;; Rich comment.
(comment
  *ns*
  (simpleserver.core/system-config)
  active-db
  @active-db
  (simpleserver.core/reset-active-db! :local-ddb)
  (simpleserver.core/reset-active-db! :csv)
  #_(user/system)
  )


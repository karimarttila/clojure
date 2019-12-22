(ns mydev
  (:require
    [clojure.tools.logging :as log]
    [clojure.tools.namespace.repl :as ns-repl]
    [mount.core :as mount]
    ;[ring.adapter.jetty :refer [run-jetty]]
    [simpleserver.util.config :as ss-config]
    [simpleserver.domain.domain-config :as ss-domain]
    [simpleserver.webserver.server :as ss-ws]
    [clj-http.client :as http-client]
    ))

; NOTE: For Mount to be able to start/stop configurations you need to require them
; in this namespace - see Mound documentation.

(defn start
  "Starts application states."
  []
  (log/debug "ENTER start")
  (mount/start))


(defn stop
  "Stops application states."
  []
  (log/debug "ENTER stop")
  (mount/stop)
  )


(defn refresh
  "Refreshes REPL, does not start server."
  []
  (log/debug "ENTER refresh")
  (stop)
  (ns-repl/refresh))


(defn refresh-all []
  "Refreshes all, does not start server."
  (log/debug "ENTER refresh-all")
  (stop)
  (ns-repl/refresh-all))


(defn reset []
  "Resets application states."
  (log/debug "ENTER reset")
  (stop)
  (ns-repl/refresh :after 'mydev/start))


(defn set-development-db!
  "Switches development db dynamically"
  [db]
  (reset! ss-config/development-db db)
  (reset))

; Example: (mydev/curl-get "info")
(defn curl-get
  "A helper function to query the APIs in REPL (you don't have to jump to IDEA terminal and back to REPL)"
  [path]
  (log/debug "ENTER curl-get")
  (let [my-port (get-in ss-config/config-state [:server :port])]
    (select-keys
      (http-client/get (str "http://localhost:" my-port "/" path) {:as :json})
      [:status :body])))
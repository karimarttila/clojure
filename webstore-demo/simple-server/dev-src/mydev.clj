(ns mydev
  (:require
    [clojure.tools.logging :as log]
    [clojure.tools.namespace.repl :as ns-repl]
    [clj-http.client :as http-client]
    [simpleserver.util.config :as ss-config]
    [simpleserver.webserver.server :as ss-ws]
    ))

; NOTE: For Mount to be able to start/stop configurations you need to require them
; in this namespace - see Mound documentation.

(defn start
  "Starts application states."
  []
  (log/debug "ENTER start")
  (ss-ws/start-web-server (get-in ss-config/config [:server :port]))
  (log/debug "EXIT start"))

(defn stop
  "Stops application states."
  []
  (log/debug "ENTER stop")
  (ss-ws/stop-web-server)
  (log/debug "EXIT stop"))

(defn refresh
  "Refreshes REPL, does not start server."
  []
  (log/debug "ENTER refresh")
  (stop)
  (ns-repl/refresh)
  (log/debug "EXIT refresh"))

; Breaks REPL.
;(defn refresh-all []
;  "Refreshes all, does not start server."
;  (log/debug "ENTER refresh-all")
;  (stop)
;  (ns-repl/refresh-all)
;  (log/debug "EXIT refresh-all"))

(defn reset []
  "Resets application states."
  (log/debug "ENTER reset")
  (stop)
  (ns-repl/refresh :after 'user/start)
  (log/debug "EXIT reset"))

(comment
  (reset)
  (refresh-all)

  )

; Example: (mydev/do-get "info")
(defn do-get
  "A helper function to query the APIs in REPL (you don't have to jump to IDEA terminal and back to REPL)"
  [path query-params]
  (log/debug "ENTER do-get")
  (let [my-port (get-in ss-config/config [:server :port])]
    (select-keys
      (http-client/get (str "http://localhost:" my-port "/" path) {:query-params query-params :as :json :throw-exceptions false :coerce :always})
      [:status :body])))

(defn do-post
    "A helper function to query the APIs in REPL (you don't have to jump to IDEA terminal and back to REPL)"
    [path body]
    (log/debug "ENTER do-post")
    (let [my-port (get-in ss-config/config [:server :port])]
      (select-keys
        (http-client/post (str "http://localhost:" my-port "/" path) {:form-params body :content-type :json :throw-exceptions false :coerce :always})
        [:status :body])))
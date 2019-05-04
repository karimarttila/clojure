(ns mydev
  (:require
    [clojure.tools.logging :as log]
    [clojure.tools.namespace.repl :refer [refresh]]
    [mount.core :refer [defstate]]
    [ring.adapter.jetty :refer [run-jetty]]
    [simpleserver.webserver.server :refer [web-server]]
    ))


;; A one-liner to refresh everything:
;; (do (require '[mydev]) (mydev/my-refresh))
(defn my-refresh
  []
  (refresh))

(defonce dev-server
         (do
           (log/debug "ENTER defonce dev-server")
           (run-jetty web-server {:port 6060 :join? false})))

(defn start-dev-server
  []
  (log/debug "ENTER start-dev-server")
  (.start dev-server))

(defn stop-dev-server
  []
  (log/debug "ENTER stop-dev-server")
  (.stop dev-server))

;; In development start the server using Mount to store state.
;; In REPL: (require '[mount.core :as mount])
;; (mount/start)
;; (mount/stop)
(defstate dev-server-state
          :start (start-dev-server)
          :stop (stop-dev-server))

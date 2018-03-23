(ns csgen.webserver.server
  (:require
    [clojure.data.json :as json]
    [clojure.java.io :as io]
    [clojure.tools.logging :as log]
    [clj-time.core :as time]
    [clj-time.format :as timeformat]
    [csgen.util.random :as cg-random]
    [csgen.util.prop :as cg-prop]
    [csgen.stream.streamer :as cg-stream]
    [compojure.core :as co-core]
    [compojure.handler :as co-handler]
    [compojure.route :as co-route]
    [clojure.core.async :as async]
    [environ.core :refer [env]]
    ))


;; Global configuration. States:
;; :running => Running and creating clicks.
;; :stopped => Running but not creating clicks.
;; Test in command line using curl:
;; curl http://localhost:3000/status
;; curl http://localhost:3000/start
;; curl http://localhost:3000/stop
(def server-state (atom :stopped))

(def clicktime (atom 1))

(def pollingtime (atom 2))


(defn -read-configuration
  "Reads configuration for web server."
  []
  (log/trace "ENTER -read-configuration")
  (let [initial-clicktime (cg-prop/get-int-value "clicks-per-second")
        initial-pollingtime (cg-prop/get-int-value "poll-server-status-change")]
    (do
      (reset! clicktime initial-clicktime)
      (reset! pollingtime initial-pollingtime))
    :read))


(defn set-server-state!
  "Use to set new server state."
  [new-state]
  (reset! server-state new-state))


(defn initialize-web-server
  "Initializes the web server. See :ring in project.clj."
  []
  (log/trace "ENTER initialize-web-server")
  (log/trace "***** ***** CLICKSTREAM GENERATOR WEB SERVER STARTING... ***** ***** ")
  (-read-configuration))


(defn -get-info
  []
  (log/trace "ENTER -get-info")
  (let [response {:info "index.html => Info in HTML format"}]
    (json/write-str response)))


(defn -check-token
  [token]
  (let [ok-hash (cg-prop/get-str-value "token-as-hash")
        hashed-token (str (int (hash token)))]
    (= hashed-token ok-hash)))


(defn -token-error
  []
  (json/write-str {:error "Wrong token"}))


(defn -get-status
  [token]
  (log/trace (str "ENTER -get-status (" @server-state ")"))
  (if (-check-token token)
    (let [state @server-state
          response {:state state}]
      (json/write-str response))
    (-token-error)))


(defn -stop-click-generator
  "Clickstream generator stop function."
  [token]
  (log/trace "ENTER -stop-click-generator")
  (if (-check-token token)
    (let [current-state @server-state
          response (if (= current-state :stopped)
                     {:error "Server already stopped"}
                     (let [dummy (log/info "Stopping clickstream generation")
                           new-state (set-server-state! :stopped)
                           inner-response {:state new-state}]
                       inner-response))]
      (json/write-str response))
    (-token-error)))


(defn -generate-clicks
  []
  (log/trace "ENTER -generate-clicks")
  (async/go (while (= @server-state :running)
              (log/trace (str "Calling streamer with n = " (* @clicktime @pollingtime)))
              (cg-stream/stream-clicks (* @clicktime @pollingtime))
              (log/trace (str "Sleeping " (* @pollingtime 1000) " milliseconds..."))
              (Thread/sleep (* @pollingtime 1000)))))


(defn -start-click-generator
  "Clickstream generator start function."
  [token]
  (log/trace "ENTER -start-click-generator")
  (if (-check-token token)
    (let [current-state @server-state
          response (if (= current-state :running)
                     {:error "Server already running"}
                     (let [dummy (log/info "Starting clickstream generation")
                           future-response (-generate-clicks)
                           new-state (set-server-state! :running)
                           inner-response {:state new-state}]
                       inner-response))]
      (json/write-str response))
    (-token-error)))


(co-core/defroutes app-routes
                   (co-core/GET "/info" [] (-get-info))
                   (co-core/GET "/status" [token] (-get-status token))
                   (co-core/GET "/start" [token] (-start-click-generator token))
                   (co-core/GET "/stop" [token] (-stop-click-generator token))
                   (co-route/resources "/")
                   (co-route/not-found "Not Found. Use /info to get information how to use the commands."))


;; NOTE: Start web-server in development mode like:
;; CS_CONFIG_FILE=resources/csgen.properties lein with-profile +log-dev ring server-headless
(def web-server
  (co-handler/api app-routes))

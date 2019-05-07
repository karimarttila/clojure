(ns simpleserver.webserver.server
  (:require [clojure.tools.logging :as log]
            [clojure.data.json :as json]
            [ring.middleware.cors :refer [wrap-cors]]
            [ring.middleware.json :as ri-json]
            [ring.util.response :as ri-resp]
            [compojure.core :as co-core]
            [compojure.route :as co-route]
            [mount.core :refer [defstate, start, stop]]
            [ring.adapter.jetty :refer [run-jetty]]
            ))


(defn -read-configuration
  "Reads configuration for web server. Not used at the moment."
  []
  (log/debug "ENTER -read-configuration"))


(defn -get-info
  "Gets the info page."
  []
  (log/debug "ENTER -get-info")
  (let [response {:info "index.html => Info in HTML format"}]
    (json/write-str response)))

(co-core/defroutes app-routes
                   "Compojure routes."
                   (co-core/GET "/info" [] (-get-info))
                   (co-route/resources "/")
                   (co-route/not-found "Not Found. Use /info to get information how to use the commands."))


(defn -cors-handler
  "Adds cors handling to response."
  [routes]
  ; TODO: Why cannot we see this log entry?
  (log/debug "ENTER -cors-handler")
  (wrap-cors routes :access-control-allow-origin [#".*"]
             :access-control-allow-headers ["Content-Type" "Authorization"]
             :access-control-allow-methods [:get :put :post :delete :options]))


;; NOTE: Start web-server in development mode like:
;; TODO: How to start server without lein?
;; CS_CONFIG_FILE=resources/simpleserver.properties lein with-profile +log-dev ring server-headless
(def web-server
  "Web server startup function.
  See source code how to experiment with REPL."
  (->
    app-routes
    ;; NOTE: Not working with wrap-cors, why?
    ;(ri-defaults/wrap-defaults ri-defaults/api-defaults)
    (ri-json/wrap-json-body {:keywords? true})
    ;(ri-json/wrap-json-params)
    (-cors-handler)
    (ri-json/wrap-json-response)))



(defn start-web-server
  "Starts the web server using mount."
  [port]
  (run-jetty web-server {:port port :join? false}))


; To query state in repl:
; simpleserver.webserver.server/web-server-app
; See helper methods to start/stop server in mydev namespace.
(defstate web-server-app
          "Web server application state."
          :start (start-web-server 6060)                    ; TODO: Add port to configuration.
          :stop (.stop web-server-app))


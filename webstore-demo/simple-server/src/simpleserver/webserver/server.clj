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
            [simpleserver.util.config :as ss-config]
            [simpleserver.domain.domain-config :as ss-domain-config]
            [simpleserver.domain.domain-interface :as ss-domain-i]
            ))

;; As in headers check with curl that the http status is properly set.
(defn -set-http-status
  "Sets the http status either to 200 (ret=ok) or 400 (otherwise)."
  [ring-response ret]
  (if (= ret :ok)
    ring-response
    (ri-resp/status ring-response 400)))


(defn -get-info
  "Gets the info page."
  []
  (log/debug "ENTER -get-info")
  (let [response {:info "index.html => Info in HTML format"}]
    (json/write-str response)))




;; Use curl and simple server log to see how token is parsed.
;; Or use this trick: You got a JSON web token from -login. Supply JSON web token to:
;; (simpleserver.webserver.server/-create-testing-basic-authentication-from-json-webtoken "<token" )
;; I.e. (simpleserver.webserver.server/-valid-token? (simpleserver.webserver.server_test/-create-testing-basic-authentication-from-json-webtoken "<token>"))
(defn -valid-token?
  "Parses the token from the http authorization header and asks session ns to validate the token.
  See source code how to experiment with REPL."
  [req]
  (log/debug "ENTER -valid-token?")
  (comment
    (let [basic ((:headers req) "authorization")
          dummy (log/debug (str "basic: " basic))
          basic-str (and basic
                         (last (re-find #"^Basic (.*)$" basic)))
          raw-token (and basic-str
                         (apply str (map char (base64/decode (.getBytes basic-str)))))
          dummy (log/debug (str "raw-token: " raw-token))
          ; Finally strip the password part if testing with curl
          token (and raw-token
                     (string/replace raw-token #":NOT" ""))]
      ;; Session namespace does the actual validation logic.
      (if (not token)
        nil
        (ss-session-svc/validate-token session-svc token))))
  ; TODO: Temporary, remove later
  true
  )


;; In REPL e.g.;
;; (simpleserver.webserver.server/-product-groups (simpleserver.webserver.server/-create-testing-basic-authentication-from-json-webtoken "<token>"))
(defn -product-groups
  "Gets product groups.
  See source code how to experiment with REPL."
  [req]
  (log/debug "ENTER -product-groups")
  (log/debug (str "req: " req))
  (let [token-ok? (-valid-token? req)
        response-value (if (not token-ok?)
                         {:ret :failed, :msg "Given token is not valid"}
                         {:ret :ok, :product-groups (ss-domain-i/get-product-groups ss-domain-config/domain-state)})]
    (-set-http-status (ri-resp/response response-value) (:ret response-value))))

(co-core/defroutes app-routes
                   "Compojure routes."
                   (co-core/GET "/info" [] (-get-info))
                   (co-core/GET "/product-groups" req (-product-groups req))
                   (co-route/resources "/" )
                   (co-route/not-found "Not Found. Use /info to get information how to use the commands."))


(defn -cors-handler
  "Adds cors handling to response."
  [routes]
  ; TODO: Why cannot we see this log entry?
  (log/debug "ENTER -cors-handler")
  (wrap-cors routes :access-control-allow-origin [#".*"]
             :access-control-allow-headers ["Content-Type" "Authorization"]
             :access-control-allow-methods [:get :put :post :delete :options]))


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
  (log/debug "ENTER start-web-server")
  (run-jetty web-server {:port port :join? false}))


; To query state in repl:
; simpleserver.webserver.server/web-server-state
; See helper methods to start/stop server in mydev namespace.
(defstate web-server-state
          "Web server application state."
          :start (start-web-server (get-in ss-config/config-state [:server :port]))
          :stop (.stop web-server-state))


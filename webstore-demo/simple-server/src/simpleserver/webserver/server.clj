(ns simpleserver.webserver.server
  (:require [clojure.tools.logging :as log]
            [clojure.data.json :as json]
            [ring.middleware.cors :refer [wrap-cors]]
            [ring.middleware.json :as ri-json]
            [ring.middleware.params :as ri-params]
            [ring.util.response :as ri-resp]
            [ring.adapter.jetty :refer [run-jetty]]
            [reitit.ring.middleware.muuntaja :as re-muuntaja]
            [reitit.ring :as re-ring]
            [reitit.ring.coercion :as re-coercion]
            [muuntaja.core :as mu-core]
            [mount.core :refer [defstate, start, stop]]
            [simpleserver.util.config :as ss-config]
            [simpleserver.domain.domain-config :as ss-domain-config]
            [simpleserver.domain.domain-interface :as ss-domain-i]
            ))



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


;; As in headers check with curl that the http status is properly set.
(defn -set-http-status
  "Sets the http status either to 200 (ret=ok) or 400 (otherwise)."
  [ring-response ret]
  (if (= ret :ok)
    ring-response
    (ri-resp/status ring-response 400)))


;; NOTE: Not yet tested with reitit.
(defn -cors-handler
  "Adds cors handling to response."
  [routes]
  ; TODO: Why cannot we see this log entry?
  (log/debug "ENTER -cors-handler")
  (wrap-cors routes :access-control-allow-origin [#".*"]
             :access-control-allow-headers ["Content-Type" "Authorization"]
             :access-control-allow-methods [:get :put :post :delete :options]))

(defn -info
  "Gets the info."
  []
  (log/debug "ENTER -info")
  {:status 200 :body {:info "index.html => Info in HTML format"}})


;; In REPL e.g.;
;; (simpleserver.webserver.server/-product-groups (simpleserver.webserver.server/-create-testing-basic-authentication-from-json-webtoken "<token>"))
(defn -product-groups
  "Gets product groups.
  See source code how to experiment with REPL."
  []
  (log/debug "ENTER -product-groups")
  (let [token-ok? true                                      ; TODO (-valid-token? req)
        response-value (if (not token-ok?)
                         {:ret :failed, :msg "Given token is not valid"}
                         {:ret :ok, :product-groups (ss-domain-i/get-product-groups ss-domain-config/domain-state)})]
    (-set-http-status (ri-resp/response response-value) (:ret response-value))))


(def routes
  [
   ["/info" {:get (fn [{}] (-info))}]
   ["/product-groups" {:get (fn [{}] (-product-groups))}]])

(def web-server
  "Web server startup function.
  See source code how to experiment with REPL."
  (re-ring/ring-handler
    (re-ring/router [routes]
                    {:data {:muuntaja   mu-core/instance
                            :middleware [ri-params/wrap-params
                                         re-muuntaja/format-middleware
                                         re-coercion/coerce-exceptions-middleware
                                         re-coercion/coerce-request-middleware
                                         re-coercion/coerce-response-middleware]}})
    (re-ring/routes
      (re-ring/create-resource-handler {:path "/"})
      (re-ring/create-default-handler))))


(defn start-web-server
  "Starts the web server using mount."
  [port]
  (log/debug "ENTER start-web-server")
  (run-jetty web-server {:port port :join? false}))


; To query state in repl:
; simpleserver.webserver.server/web-server-state
; See helper methods to start/stop server in mydev namespace.
(defstate ^{:on-reload :stop} web-server-state
          "Web server application state."
          :start (start-web-server (get-in ss-config/config-state [:server :port]))
          :stop (.stop web-server-state)
          )


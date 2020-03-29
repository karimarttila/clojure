(ns simpleserver.webserver.server
  (:require [clojure.tools.logging :as log]
            [clojure.string :as string]
            [clojure.data.codec.base64 :as base64]
            [ring.middleware.cors :refer [wrap-cors]]
            [ring.middleware.params :as ri-params]
            [ring.util.response :as ri-resp]
            [ring.adapter.jetty :refer [run-jetty]]
            [reitit.ring.middleware.muuntaja :as re-mu]
            [reitit.ring :as re-ring]
            [reitit.ring.coercion :as re-co]
            [reitit.coercion.spec :as re-co-spec]
            [muuntaja.core :as mu-core]
            ))


(defn -info
  "Gets the info."
  []
  (log/debug "ENTER -info")
  {:status 200 :body {:info "index.html => Info in HTML format"}})


(def routes
  [["/info" {:get (fn [{}] (-info))}]
   ["/print-req-get/:jee" {:get (fn [req] (prn (str "req: ") req))}] ; An example how to print the ring request
   ["/print-req-post" {:post (fn [req] (prn (str "req: ") req))}] ; An example how to print the ring request
   ])

;; NOTE: If you want to check what middlware does you can uncomment rows 67-69 in:
;; https://github.com/metosin/reitit/blob/master/examples/ring-swagger/src/example/server.clj#L67-L69

(def web-server
  "Web server startup function.
  See source code how to experiment with REPL."
  (re-ring/ring-handler
    (re-ring/router [routes]
                    {:data {:muuntaja   mu-core/instance
                            :coercion   re-co-spec/coercion
                            :middleware [ri-params/wrap-params
                                         re-mu/format-middleware
                                         re-co/coerce-exceptions-middleware
                                         re-co/coerce-request-middleware
                                         re-co/coerce-response-middleware]}})
    (re-ring/routes
      (re-ring/create-resource-handler {:path "/"})
      (re-ring/create-default-handler))))

(defn start-web-server
  "Starts the web server."
  [port join?]
  (log/debug "ENTER start-web-server")
  (run-jetty web-server {:port port :join? join?}))

(defn stop-web-server
  "Stops the web server."
  [server]
  (log/debug "ENTER stop-web-server")
  (.stop server))


(comment
  (def my-server (start-web-server 6062 false))
  my-server
  (stop-web-server my-server)
  )


(ns backend.main
  (:require [aero.core :as aero]
            [backend.routes]
            [clojure.java.io :as io]
            [clojure.tools.logging :as log]
            [cognitect.transit]
            [integrant.core :as ig]
            [reitit.ring.middleware.exception]
            [ring.adapter.jetty :as jetty]))

(defmethod aero.core/reader 'ig/ref
  [_opts _tag value]
  (ig/ref value))

(defn system-config []
  (aero/read-config (io/resource "config.edn")))

(defmethod ig/init-key :adapter/jetty [_ {:keys [port routes] :as jetty-opts}]
  (log/infof "Starting Jetty server on http://localhost:%s" port)
  (jetty/run-jetty routes (-> jetty-opts (dissoc :handler) (assoc :join? false))))

(defmethod ig/halt-key! :adapter/jetty [_ server]
  (log/info "Stopping Jetty")
  (.stop server))

(defn run-system [config]
  (try
    (let [initialized-system (ig/init config)]
      (.addShutdownHook (Runtime/getRuntime) (Thread. (fn []
                                                        (log/infof "Shutting down")
                                                        (ig/halt! initialized-system))))
      (log/infof "System started")
      initialized-system)
    (catch Throwable t
      (log/error t "Failed to start system"))))

(defn -main []
  (run-system (system-config)))


(comment 
  (+ 1 1)
  
  )
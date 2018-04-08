(defproject simple-server "1.0"
  :description "Simple Server."
  :dependencies
  [
   [org.clojure/clojure "1.9.0"]
   [org.clojure/data.json "0.2.6"]
   [org.clojure/core.async "0.4.474"]

   [org.clojure/tools.logging "0.4.0"]
   [commons-logging "1.2"]
   [com.fasterxml.jackson.core/jackson-databind "2.9.4"]
   [com.fasterxml.jackson.dataformat/jackson-dataformat-cbor "2.9.4"]

   [ch.qos.logback/logback-classic "1.1.3"]
   [environ "1.1.0"]
   [clj-time "0.14.0"]
   [net.mikera/core.matrix "0.61.0"]
   [compojure "1.6.0"]
   [ring/ring-defaults "0.3.1"]
   [ring/ring-json "0.4.0"]
   ;; TODO: testing REPL with Ring
   [ring/ring-core "1.6.3"]
   [ring/ring-jetty-adapter "1.6.3"]
   ;; TODO-END here.
   [ring-cors "0.1.12"]
   ]

  :plugins
  [
   [lein-environ "1.1.0"]
   [lein-pprint "1.1.2"]
   [lein-ring "0.12.3"]]


  :ring {:handler simpleserver.webserver.server/web-server
         :init simpleserver.webserver.server/initialize-web-server
         :nrepl {:start? true
                 :port 55444}
         }

  :main ^:skip-aot simpleserver.core
  :target-path "target/%s"
  :profiles {:uberjar {:aot :all}}

  :test2junit-run-ant true
  :test2junit-output-dir "test2junit")


;; SHORT DEVELOPMENT INSTRUCTIONS

;; Use tool to load the whole bk namespace:
;; https://github.com/clojure/tools.namespace
;; For repl development (always choose in IDEA Run Configuration).
;; Add this to your ~/.lein/profiles.clj:
;; :dependencies [[org.clojure/tools.namespace "0.2.11"]]
;; Then you are able to use:
;; (do (require '[clojure.tools.namespace.repl :refer [refresh]]) (refresh))
;;
;; Run unit tests with lein:
;; lein with-profile +log-dev test
;; lein with-profile +log-dev test2junit
;; Running application with lein:
;; lein with-profile +log-dev run simpleserver.properties
;;
;; Build uberjar:
;; lein with-profile +log-dev uberjar
;;
;; Run uberjar:
;; java -jar target/uberjar/simpleserver-0.1.0-SNAPSHOT-standalone.jar simpleserver.properties
;;
;; Run server:
;; SIMPLESERVER_CONFIG_FILE=resources/simpleserver.properties lein with-profile +log-dev ring server-headless
;; NOTE: This runs server with hot deployment - you can change functions and changes will be in use immediately.
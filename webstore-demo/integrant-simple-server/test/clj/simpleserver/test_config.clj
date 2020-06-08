(ns simpleserver.test-config
  (:require
    [clojure.tools.logging :as log]
    [clojure.pprint]
    [integrant.core :as ig]
    [clj-http.client :as http-client]
    [simpleserver.util.config :as ss-config]
    [simpleserver.core :as core])
  (:import (java.net ServerSocket)))


(defonce test-system (atom nil))

(defn random-port []
  (with-open [s (ServerSocket. 0)]
    (.getLocalPort s)))

(defn test-config []
  (let [test-port (random-port)
        ; Overriding the port with random port, see TODO below.
        _ (log/debug (str "test-config, using web-server test port: " test-port))]
    (-> (core/system-config)
        (assoc-in [::core/web-server :port] test-port))))

;; TODO: For some reason Integrant does not always run halt-key for webserver, really weird.
;; And you lose the reference to the web server and web server keeps the port binded => you have to restart REPL.
(defn test-config-orig []
  (let [test-port (get-in (ss-config/create-config) [:web-server :test-server-port])]
    (-> (core/system-config)
        ; Overriding the port with test-port.
        (assoc-in [::core/web-server :port] test-port))))

(defn halt []
  (swap! test-system #(if % (ig/halt! %))))

(defn go []
  (halt)
  (reset! test-system (ig/init (test-config))))

(defn test-system-fixture-runner [init, testfunc]
  (try
    (go)
    (init)
    (testfunc)
    (finally
      (halt))))

(defn test-env [] (::core/env @test-system))
(defn test-service [] (:service (test-env)))

(defn -call-api [verb path headers body]
  (let [my-port (-> @test-system ::core/web-server .getConnectors first .getPort)
        my-fn (cond
                (= verb :get) http-client/get
                (= verb :post) http-client/post)]
    (try
      (select-keys
        (my-fn (str "http://localhost:" my-port "/" path)
               {:as :json
                :form-params body
                :headers headers
                :content-type :json
                :throw-exceptions false
                :coerce :always}
               ) [:status :body]))))



(comment
  (-call-api :get "info" nil nil)
  (simpleserver.test-config/go)
  simpleserver.test-config/test-system
  (simpleserver.test-config/test-service)
  (simpleserver.test-config/halt)
  (->> (:out (clojure.java.shell/sh "netstat" "-an")) (clojure.string/split-lines) (filter #(re-find #".*:::61.*LISTEN.*" %)))
  )
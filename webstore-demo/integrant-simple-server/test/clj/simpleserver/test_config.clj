(ns simpleserver.test-config
  (:require
    [clojure.tools.logging :as log]
    [clojure.pprint]
    [integrant.core :as ig]
    [simpleserver.util.config :as ss-config]
    [simpleserver.core :as core]))


(defonce test-system (atom nil))

(defn halt []
  (swap! test-system #(if % (ig/halt! %))))

(defn test-config []
  (let [test-port (get-in (ss-config/create-config) [:web-server :test-server-port])]
    (-> (core/system-config)
        ; Overriding the port with test-port.
        (assoc-in [::core/web-server :port] test-port))))

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

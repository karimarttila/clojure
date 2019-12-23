(ns simpleserver.webserver.server-test
  (:require [clojure.test :refer :all]
            [clojure.tools.logging :as log]
            [clj-http.client :as http-client]
            [simpleserver.util.config :as ss-config]
            [simpleserver.webserver.server :as ss-ws]
            ))


(defn webserver-test-fixture
  [f]
  (do
    (log/debug "ENTER webserver-test-fixture")
    (ss-ws/start-web-server (get-in ss-config/config [:server :port]))
    (f)
    (ss-ws/stop-web-server)
    (log/debug "EXIT webserver-test-fixture")))

; Register test fixtures.
(use-fixtures :each webserver-test-fixture)

(defn call-api [path]
  (let [my-port (get-in ss-config/config [:server :port])]
    (select-keys
      (http-client/get (str "http://localhost:" my-port "/" path) {:as :json})
      [:status :body])))

(deftest info-test
  (log/debug "ENTER info-test")
  (testing "/info"
    (let [ret (call-api "info")]
      (is (= (ret :status) 200))
      (is (= (ret :body) {:info "index.html => Info in HTML format"})))))

(ns simpleserver.util.config
  (:require
    [aero.core :as aero]
    [clojure.tools.logging :as log]
    [clojure.java.io]))                                     ;; clj-kondo requires this?

(defn create-config
  []
  (aero/read-config (clojure.java.io/resource "config.edn")))

(defonce config (atom nil))

(defn reset-config!
  "Integrant resets the configuration"
  [new-config]
  (log/debug "reset-config!")
  (reset! config new-config))

(defn get-config
  []
  @config)

;; Commented out for clj-kondo
;; Testing locally.
#_(comment
    (def config (create-config))
    (def table-name "session")
    (def my-env :dev)
    (def my-table-prefix "ss"))


(comment
  (create-config)
  #_(get-dynamodb-config "session")
  )

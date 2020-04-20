(ns simpleserver.util.config
  (:require
    [maailma.core :as m]
    [aero.core :as a]
    [cognitect.aws.credentials :as credentials]
    [cognitect.aws.client.api :as aws]
    [clojure.tools.logging :as log]))




(defn create-config
  []
  (a/read-config (clojure.java.io/resource "config.edn")))

(defonce config (atom nil))

(defn reset-config!
  "Integrant resets the configuration"
  [new-config]
  (log/debug "reset-config!")
  (reset! config new-config))

(defn get-config
  []
  @config)

;; Testing locally.
(comment
  (def config (create-config))
  (def table-name "session")
  (def my-env :dev)
  (def my-table-prefix "ss"))


(comment
  (create-config)
  #_(get-dynamodb-config "session")
  )

(ns simpleserver.util.config
  (:require [clojure.tools.logging :as log]
            [cprop.core :refer [load-config]]
            [mount.core :refer [defstate, start, stop]]
            ))

; Just for development purposes.
; You can set the values:
; - :read-config (default)
; - :local-dynamodb
; - :real-aws
; - :single-node
; to switch to a certain database during development

(def development-db (atom :read-config))

(defn -load-single-node
  "Creates the single-node configuration on the fly for repl for testing single-node as db."
  []
  {:my-env "dev",
   :ss-env "single-node",
   :server {:port 6161},
   :domain {:data-dir "resources/data"}})

(defn -load-local-dynamodb
  "Creates the local dynamodb configuration on the fly for repl for testing local Docker DynamoDB as db."
  []
  {:my-env "dev",
   :ss-env "aws",
   :server {:port 6161},
   :domain {:data-dir "resources/data"},
   :aws    {:ss-table-prefix "ss",
            :aws-profile     "local-dynamodb",
            :endpoint        {:protocol :http, :hostname "localhost", :port 8000}}})

(defn -load-real-aws
  "Creates the real aws configuration on the fly for repl for testing real AWS DynamoDB as db."
  []
  {:my-env "dev",
   :ss-env "aws",
   :server {:port 6161},
   :domain {:data-dir "resources/data"},
   :aws    {:ss-table-prefix "ss", :aws-profile "pc-demo"}})



(defn create-config
  "Creates configuration."
  []
  (log/debug "ENTER create-config")
  (let [new-config (let [my-db @development-db]
                     (cond
                       (= my-db :read-config) (load-config)
                       (= my-db :single-node) (-load-single-node)
                       (= my-db :local-dynamodb) (-load-local-dynamodb)
                       (= my-db :real-aws) (-load-real-aws)
                       :else (throw (UnsupportedOperationException. (str "Unknown option: " my-db)))
                       ))]
    (log/debug (str "New config: " new-config))
    new-config))


; To query state in repl:
; simpleserver.util.config/ss-config
(defstate config-state
          "Simple server application configuration.
          Reads configuration either from dev or prod env in config.edn
          (see resources/config).
          Environment variables override config.edn file values."
          :start (create-config))


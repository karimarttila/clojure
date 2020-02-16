(ns simpleserver.util.config
  (:require
    [maailma.core :as m]
    [cognitect.aws.credentials :as credentials]
    [cognitect.aws.client.api :as aws]))

(defn -create-config
  []
  ;; Provides merging order: profile overridden by SS_CONFIG_FILE overridden by SS_PORT env var.
  (let [config (m/build-config
                 (m/resource "config.edn")
                 (m/file (System/getenv "SS_CONFIG_FILE"))
                 (m/env-var "SS_PORT" [:server :port]))]
    (if (nil? config)
      (throw (ex-info "There is no config.edn configuration! Maybe you didn't use the right profile or didn't supply the config.edn file using SS_CONFIG_FILE environment variable?"
                      {:cause #{:error :config.edn-not-found}}))
      (let [port (get-in config [:server :port])]
        ;; If it is string, convert to int and return new config, else return the original config.
        (if (string? port)
          (try
            (let [port-as-int (Integer/parseInt port)]
              (assoc-in config [:server :port] port-as-int))
            (catch Exception _
              (throw (ex-info (str "The port is not a string: " port)
                              {:cause #{:error :port-is-not-string}}))))
          config)))))

(def config (-create-config))

(defn get-dynamodb-config
  "Gets the dynamodb configuration"
  [table-name]
  (let [my-env (get-in config [:runtime-env])
        my-table-prefix (get-in config [:aws :ss-table-prefix])
        my-table (str my-table-prefix "-" my-env "-" table-name)
        my-endpoint (get-in config [:aws :endpoint])
        my-profile (get-in config [:aws :aws-profile])
        my-credentials (credentials/profile-credentials-provider my-profile)
        my-ddb (if (nil? my-credentials)
                 (aws/client {:api                  :dynamodb
                              :credentials-provider my-credentials})
                 (aws/client {:api                  :dynamodb
                              :credentials-provider my-credentials
                              :endpoint-override    my-endpoint}))]
    {:my-ddb my-ddb :my-table my-table}))

(comment
  config
  (get-dynamodb-config "session")
  )
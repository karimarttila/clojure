(ns simpleserver.util.config
  (:require
    [maailma.core :as m]
    ))

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
            (catch Exception e
              (throw (ex-info (str "The port is not a string: " port)
                              {:cause #{:error :port-is-not-string}}))))
          config)))))

(def config (-create-config))

(comment
  config
  )
(ns simpleserver.util.prop
  (:require [clojure.string :as str]
            [clojure.java.io :as io]
            [clojure.tools.logging :as log]
            [environ.core :as environ]
            [clojure.pprint :as pp]))


(def config
  "Global configuration as atom (which is read from property file)."
  (atom nil))


(defn reset-config!
  "Use to reset configuration (e.g. if you change properties and
  call create-test in REPL)."
  []
  (reset! simpleserver.util.prop/config nil))


(def property-filename
  "Property file, must be initialized."
  (atom nil))


(defn -check-file
  "Checks if `file` exists."
  [file]
  (.isFile (io/file file)))


(defn set-property-file
  "Initializes property file with `filename`."
  [filename]
  (reset! property-filename filename))


(defn -load-property-filename
  "Loads the property file name from environmental variable `SIMPLESERVER_CONFIG_FILE`."
  []
  (log/debug (str "ENTER -load-property-filename"))
  (log/trace (str "Current directory: " (-> (java.io.File. ".") .getAbsolutePath)))
  (let [from-env (environ/env :simpleserver-config-file)
        configfile-name (if (nil? from-env)
                          "resources/simpleserver.properties"
                          from-env)]
    (if (-check-file configfile-name)
      (do (log/info (str "Using poperty file: " configfile-name))
          (set-property-file configfile-name))
      (do (log/info (str "Property file: " configfile-name " not found, exiting."))
          (throw (ex-info (str "Property file: " configfile-name " not found") {}))))))


(defn -load-props
  "Loads properties from property file and returns a map of properties."
  {:doc/format :markdown}
  [filename]
  (let [io (java.io.FileInputStream. filename)
        prop (java.util.Properties.)]
    (.load prop io)
    (into {} prop)))


(defn -load-configuration
  "Loads the configuration (property file) to [[config]] atom."
  []
  (if (nil? @property-filename)
    (-load-property-filename))
  (reset! config (-load-props @property-filename)))


(defn get-int-value
  "Gets int value of `key`."
  [key]
  (if (nil? @config)
    (-load-configuration))
  (Integer/parseInt (get @config key)))


(defn get-double-value
  "Gets double value of `key`."
  [key]
  (if (nil? @config)
    (-load-configuration))
  (Double/parseDouble (get @config key)))


(defn get-str-value
  "Gets string value of `key`."
  [key]
  (if (nil? @config)
    (-load-configuration))
  (get @config key))


(defn get-vec-value
  "Gets vector (list) value of `key`."
  [key]
  (if (nil? @config)
    (-load-configuration))
  (str/split (get @config key) #","))

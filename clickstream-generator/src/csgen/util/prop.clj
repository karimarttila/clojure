(ns csgen.util.prop
  (:require [clojure.string :as str]
            [clojure.java.io :as io]
            [clojure.tools.logging :as log]
            [environ.core :refer [env]]
            [clojure.pprint :as pp]))


;; Global configuration.
(def config (atom nil))


(defn reset-config!
  "Use to reset configuration (e.g. if you change properties and
  call create-test in REPL)."
  []
  (reset! csgen.util.prop/config nil))


;; Property file, must be initialized.
(def property-filename (atom nil))


(defn -check-file
  [file]
  (.isFile (io/file file)))


(defn set-property-file
  [filename]
  (reset! property-filename filename))


(defn -load-property-filename
  []
  (let [configfile-name (env :cs-config-file)]
    (if (nil? configfile-name)
      (do (log/info (str "Property file: " configfile-name " not found, exiting."))
          (throw (ex-info (str "Property file: " configfile-name " not found") {})))
      (if (-check-file configfile-name)
        (do (log/info (str "Using poperty file: " configfile-name))
            (set-property-file configfile-name))
        (do (log/info (str "Property file: " configfile-name " not found, exiting."))
            (throw (ex-info (str "Property file: " configfile-name " not found") {})))))    ))


(defn -load-props
  [filename]
  (let [io (java.io.FileInputStream. filename)
        prop (java.util.Properties.)]
    (.load prop io)
    (into {} prop)))


(defn -load-configuration
  []
  (if (nil? @property-filename)
    (-load-property-filename))
  (reset! config (-load-props @property-filename)))


(defn get-int-value
  [key]
  (if (nil? @config)
    (-load-configuration))
  (Integer/parseInt (get @config key)))


(defn get-double-value
  [key]
  (if (nil? @config)
    (-load-configuration))
  (Double/parseDouble (get @config key)))


(defn get-str-value
  [key]
  (if (nil? @config)
    (-load-configuration))
  (get @config key))


(defn get-vec-value
  [key]
  (if (nil? @config)
    (-load-configuration))
  (str/split (get @config key) #","))

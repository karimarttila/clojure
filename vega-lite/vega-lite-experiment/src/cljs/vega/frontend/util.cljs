(ns vega.frontend.util
  (:require [re-frame.core :as re-frame]
            [cljs.pprint]
            [reagent.core :as r]
    ;[hashp.core :include-macros true]
            ))

(defn clog
  "Javascript console logger helper."
  ([msg] (clog msg nil))
  ([msg data]
   (let [buf (if data
               (str msg ": " data)
               msg)]
     (js/console.log buf))))

(def debug true)

(defn vega-debug
  "In development show the actions menu and log with debug level.
  In production logging is :none, and show only export in actions menu."
  []
  (if debug
    {:log-level :debug
     :actions {:export true, :source true, :compiled false, :editor true}}
    {:log-level :info
     :actions false}))

;; Application wide properties.
(def backend-host-config {:host "localhost" :port 7501})


(defn get-base-url
  []
  (let [host (:host backend-host-config)
        port (:port backend-host-config)
        url (str "http://" host ":" port)]
    url))

(defn debug-panel
  "Debug panel - you can use this panel in any view to show some page specific debug data."
  [data]
  (if debug
    [:div.e-debug-panel
     [:hr.e-debug-panel.hr]
     [:h3.e-debug-panel.header "DEBUG-PANEL"]
     [:pre.e-debug-panel.body (with-out-str (cljs.pprint/pprint data))]]))



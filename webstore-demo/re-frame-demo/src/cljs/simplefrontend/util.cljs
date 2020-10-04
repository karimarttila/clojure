(ns simplefrontend.util
  (:require [re-frame.core :as re-frame]
            [clojure.pprint]
            [simplefrontend.state :as sf-state]))

;; Application wide properties.
(def backend-host-config {:host "localhost" :port 6161})

(defn get-base-url
  []
  (let [host (:host backend-host-config)
        port (:port backend-host-config)
        url (str "http://" host ":" port)]
    url))

(defn debug-panel [data]
  (let [debug @(re-frame/subscribe [::sf-state/debug])]
    (js/console.log (str "ENTER debug-panel, debug: " debug))
    (if debug
      [:div.sf-debug-panel
       [:hr.sf-debug-panel.hr]
       [:h3.sf-debug-panel.header "DEBUG-PANEL"]
       [:pre.sf-debug-panel.body (with-out-str (clojure.pprint/pprint data))]])))

(ns simplefrontend.util
  (:require [re-frame.core :as re-frame]
            [clojure.pprint]
            [simplefrontend.subscriptions :as sf-subs]))

(defn debug-panel [data]
  (let [debug @(re-frame/subscribe [::sf-subs/debug])]
    (js/console.log (str "ENTER debug-panel, debug: " debug))
    (if debug
      [:div {:class "sf-debug-panel"}
       [:hr]
       [:h3 "DEBUG-PANEL"]
       [:pre (with-out-str (clojure.pprint/pprint data))]])))
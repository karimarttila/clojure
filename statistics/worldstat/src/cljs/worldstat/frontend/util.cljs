(ns worldstat.frontend.util
  (:require [re-frame.core :as re-frame]
            [cljs.pprint]
            [worldstat.frontend.state :as ws-state]))

;; Application wide properties.
(def backend-host-config {:host "localhost" :port 6161})

(defn valid?
  "Simple validator. Checks in [k v] v is a string and not empty."
  [[_ v]]
  (and (string? v) (seq v)))

(defn save!
  "Fetches an event value and swaps the value of given atom a's key k to this value."
  [a k]
  #(swap! a assoc k (-> % .-target .-value)))

(defn input
  "Input field component for e.g. First name, Last name, Email address and Password."
  [label k type state]
  [:div
   [:label.ws-label label]
   [:input.ws-input {
                     :id (name k)
                     :name (name k)
                     :type type
                     :value (k @state)
                     :on-change (save! state k)}]])

(defn get-base-url
  []
  (let [host (:host backend-host-config)
        port (:port backend-host-config)
        url (str "http://" host ":" port)]
    url))


(defn header []
  [:div.ws-header "World Statistics"
   (let [current-route @(re-frame/subscribe [::ws-state/current-route])])])

(defn debug-panel
  "Debug panel - you can use this panel in any view to show some page specific debug data."
  [data]
  (let [debug @(re-frame/subscribe [::ws-state/debug])]
    #_(js/console.log (str "ENTER debug-panel, debug: " debug))
    (if debug
      [:div.ws-debug-panel
       [:hr.ws-debug-panel.hr]
       [:h3.ws-debug-panel.header "DEBUG-PANEL"]
       [:pre.ws-debug-panel.body (with-out-str (cljs.pprint/pprint data))]])))

(defn clog
  "Javascript console logger helper."
  ([msg] (clog msg nil))
  ([msg data]
   (let [buf (if data
               (str msg ": " data)
               msg)]
     (js/console.log buf))))

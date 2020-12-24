(ns simplefrontend.util
  (:require [re-frame.core :as re-frame]
            [cljs.pprint]
    ;[clojure.pprint]
            [simplefrontend.state :as sf-state]))

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
   [:label.sf-label label]
   [:input.sf-input {
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
  [:div.sf-header "Web Store"
   (let [jwt @(re-frame/subscribe [::sf-state/jwt])
         current-route @(re-frame/subscribe [::sf-state/current-route])]
     #_(js/console.log "jwt: " jwt)
     [:div
      (if (and (= (:path current-route) "/") (not jwt))
        [:button.sf-header-button
         {:on-click #(re-frame/dispatch [::sf-state/navigate ::sf-state/signin])}
         "Sign-In"])
      (if (and (= (:path current-route) "/") (not jwt))
        [:button.sf-header-button
         {:on-click #(re-frame/dispatch [::sf-state/navigate ::sf-state/login])}
         "Login"])
      (if jwt
        [:button.sf-header-button
         {:on-click #(re-frame/dispatch [::sf-state/logout])}
         "Logout"])])
   [:div] ; Extra div so that we able to see the Sign-in and Login buttons with the 10x tool panel.
   ])

(defn debug-panel
  "Debug panel - you can use this panel in any view to show some page specific debug data."
  [data]
  (let [debug @(re-frame/subscribe [::sf-state/debug])]
    #_(js/console.log (str "ENTER debug-panel, debug: " debug))
    (if debug
      [:div.sf-debug-panel
       [:hr.sf-debug-panel.hr]
       [:h3.sf-debug-panel.header "DEBUG-PANEL"]
       [:pre.sf-debug-panel.body (with-out-str (cljs.pprint/pprint data))]])))

(defn clog
  "Javascript console logger helper."
  ([msg] (clog msg nil))
  ([msg data]
   (let [buf (if data
               (str msg ": " data)
               msg)]
     (js/console.log buf))))

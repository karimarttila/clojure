(ns worldstat.frontend.util
  (:require [re-frame.core :as re-frame]
            [cljs.pprint]
            [worldstat.frontend.state :as ws-state]))


(def debug? ^boolean goog.DEBUG)

(defn vega-debug
  "In development show the actions menu and log with debug level.
  In production logging is :none, and show only export in actions menu."
  []
  (if debug?
    {:log-level :debug}
    {:log-level :none
     :actions {:export true, :source false, :compiled false, :editor false}}))

;; Application wide properties.
(def backend-host-config {:host "localhost" :port 5522})

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
   [:input.ws-input {:id (name k)
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
  [:div.column.is-full
   [:div.level
    [:p.level-item.has-text-centered.is-size-1
     "World Statistics"]]
   (let [current-route @(re-frame/subscribe [::ws-state/current-route])])])

(defn debug-panel
  "Debug panel - you can use this panel in any view to show some page specific debug data."
  [data]
  (let [debug @(re-frame/subscribe [::ws-state/debug])]
    #_(js/console.log (str "ENTER debug-panel, debug: " debug))
    (if debug
      [:div.column.is-full
       [:hr]
       [:p.level-item.has-text-centered.is-size-3 "DEBUG PANEL"]
       [:pre.body (with-out-str (cljs.pprint/pprint data))]])))

(defn dropdown [values]
  [:div.dropdown.is-hoverable
   [:div.dropdown-trigger
    [:button.button {:aria-haspopup true :aria-controls :dropdown-menu}
     [:span "Select metric"]
     [:span.icon.is-small
      [:i.fas.fa-angle-down {:aria-hidden true}]
      ]
     ]
    ]
   [:div.dropdown-menu {:id :dropdown-menu :role :menu}
    [:div.dropdown-content
     [:a.dropdown-item {:href "#1"} "1"]
     [:a.dropdown-item {:href "#2"} "2"]
     ]
    ]
   ]
  )

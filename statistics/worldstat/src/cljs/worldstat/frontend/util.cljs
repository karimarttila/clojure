(ns worldstat.frontend.util
  (:require [re-frame.core :as re-frame]
            [cljs.pprint]
            [reagent.core :as r]
            [worldstat.frontend.log :as ws-log]
            [worldstat.frontend.state :as ws-state]))


(defn vega-debug
  "In development show the actions menu and log with debug level.
  In production logging is :none, and show only export in actions menu."
  []
  (if ws-log/debug?
    {:log-level :debug}
    {:log-level :info
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

(defn toggle-is-activate [id]
  (let [myClass (.-classList (.getElementById js/document (name id)))]
    (-> myClass (.toggle "is-active"))))

(defn dropdown [prompt values]
  [:div.dropdown {:id :dropdown-parent}
   [:div.dropdown-trigger
    [:button.button {:aria-haspopup true :aria-controls :dropdown-menu
                     :on-click (fn [event]
                                 (.preventDefault event)
                                 (toggle-is-activate :dropdown-parent))}
     [:span prompt]
     [:span.icon.is-small
      [:i.fas.fa-angle-down {:aria-hidden true}]]]]
   [:div.dropdown-menu {:id :dropdown-menu :role :menu}
    [:div.dropdown-content
     (sort-by (fn [item]
                (:name (second item)))
              (map (fn [[m-code m-name]]
                     [:a.dropdown-item {:name m-name
                                        :key m-code
                                        :on-click (fn [event]
                                                    (.preventDefault event)
                                                    (toggle-is-activate :dropdown-parent)
                                                    (re-frame/dispatch [::ws-state/select-metric {:code m-code :name m-name}]))}
                      m-name])
                   values))]]])

(defn slider [id initial step min max type]
  (let [slider-value (r/atom initial)]
    [:div.slider-content
     [:input.slider.is-fullwidth {:id id :step step :min min :max max :value @slider-value :type type
                                  :on-change (fn [event]
                                               (.preventDefault event)
                                               (let [new-value (.-value (.getElementById js/document id))]
                                                 (reset! slider-value new-value)
                                                 (re-frame/dispatch [::ws-state/select-year (js/parseInt new-value)])))}]]))

(defn one-decimal [f]
   (/ (.round js/Math (* 10 f)) 10))

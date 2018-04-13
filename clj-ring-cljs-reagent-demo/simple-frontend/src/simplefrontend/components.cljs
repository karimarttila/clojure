(ns simplefrontend.components
  (:require
    [reagent.core :as r]
    [ajax.core :as a-core]
    ))


(defn input
  "Input field component for First name, Last name, Email address and Password."
  [label name type my-atom]
  (fn []
    [:div
     [:label label]
     [:input {:id        name
              :name      name
              :type      type
              :value     @my-atom
              :on-change #(reset! my-atom (-> % .-target .-value))
              }]]))

(defn msg-field
  "Message field component for success/error feedback."
  [label name type color err-msg]
  (fn []
    [:div
     [:label label]
     [:textarea
      {:id        name
       :name      name
       :type      type
       :rows      3
       :style     {:background-color color}
       :cols      50
       :value     err-msg
       :read-only true
       }]]))

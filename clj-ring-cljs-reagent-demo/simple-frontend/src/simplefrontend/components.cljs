(ns simplefrontend.components
  (:require
    [reagent.core :as r]
    [simplefrontend.reagent-wrapper :as sf-rw]
    [ajax.core :as a-core]))



(defn input
  "Input field component for e.g. First name, Last name, Email address and Password."
  [label name type my-atom]
  (fn []
    [:div
     [sf-rw/row {:class "show-grid"}
      [sf-rw/col {:xs 3 :md 2}
       [:label label]]
      [sf-rw/col {:xs 3 :md 2}
       [:input {:id        name
                :name      name
                :type      type
                :value     @my-atom
                :on-change #(reset! my-atom (-> % .-target .-value))}]]
      ]]))


(defn msg-field
  "Message field component for success/error feedback."
  [label name type color err-msg]
  (fn []
    [:div
     [sf-rw/row {:class "show-grid"}
      [sf-rw/col {:xs 3 :md 2}
       [:label label]]
      [sf-rw/col {:xs 3 :md 2}
       [:textarea
        {:id        name
         :name      name
         :type      type
         :rows      2
         :style     {:background-color color}
         :cols      50
         :value     err-msg
         :read-only true}]]]]))


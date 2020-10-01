(ns simplefrontend.signin
  (:require
    [re-frame.core :as re-frame]
    [reagent.core :as r]
    [simplefrontend.util :as sf-util]
    ))

(defn save! [a k]
  #(swap! a assoc k (-> % .-target .-value)))

(defn input
  "Input field component for e.g. First name, Last name, Email address and Password."
  [label k-name type state]
  [:div
   [:label {:class "sf-label"} label]
   [:input {:class "sf-input input"
            :id (name k-name)
            :name (name k-name)
            :type type
            :value @state
            :on-change (save! state k-name)}]
   ])

(defn signin-page
  "Sign-in view."
  []
  (let [first-name-atom (r/atom nil)
        last-name-atom (r/atom nil)
        email-atom (r/atom nil)
        password-atom (r/atom nil)]
    (fn []
      [:div
       [:h3 "Sign-in"]
       [:div
        [:form
         (input "First name: " "first-name" "text" first-name-atom)
         (input "Last name: " "last-name" "text" last-name-atom)
         (input "Email: " "email" "text" email-atom)
         (input "Password: " "password" "text" password-atom)]
        [:div {:class "backbutton"}
         [:button
          ;; Dispatch navigate event that triggers a (side)effect.
          {:class "sf-go-to-home-button"
           :on-click #(re-frame/dispatch [:simplefrontend.main/navigate :simplefrontend.main/home])}
          "Go to home"]]
        (sf-util/debug-panel "jee!")]])))

(comment
  @re-frame.db/app-db
  (swap! re-frame.db/app-db assoc :debug (not (:debug @re-frame.db/app-db)))


  )
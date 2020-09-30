(ns simplefrontend.signin
  (:require
    [re-frame.core :as re-frame]
    [reagent.core :as r]
    ))

(defn input
  "Input field component for e.g. First name, Last name, Email address and Password."
  [label name type my-atom]
  [:div {:class "signininput"}
   [:label label]
   [:input {:id name
            :name name
            :type type
            :value @my-atom
            :on-change #(reset! my-atom (-> % .-target .-value))}]
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
       [:div {:class "signinbody"}
        [:form
         (input "First name: " "first-name" "text" first-name-atom)
         (input "Last name: " "last-name" "text" last-name-atom)
         (input "Email: " "email" "text" email-atom)
         (input "Password: " "password" "text" password-atom)]
        [:div
         [:p]]
        [:div {:class "backbutton"}
         [:button
          ;; Dispatch navigate event that triggers a (side)effect.
          {:on-click #(re-frame/dispatch [:simplefrontend.main/navigate :simplefrontend.main/home])}
          "Go to home"]]]])))

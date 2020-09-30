(ns simplefrontend.login
  (:require
    [re-frame.core :as re-frame]
    [reagent.core :as r]
    ))


(defn login-page []
  [:div
   [:h3 "Login-in"]
   [:button
    ;; Dispatch navigate event that triggers a (side)effect.
    {:on-click #(re-frame/dispatch [:simplefrontend.main/navigate :simplefrontend.main/home])}
    "Go to home"]])

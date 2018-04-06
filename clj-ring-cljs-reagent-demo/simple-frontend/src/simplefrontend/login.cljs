(ns simplefrontend.login
  (:require
    [reagent.core :as r]))


(defn login-page []
  [:div [:h1 "Login"]
   [:a {:href "#/"} "Back to Web Store Home Page"]])

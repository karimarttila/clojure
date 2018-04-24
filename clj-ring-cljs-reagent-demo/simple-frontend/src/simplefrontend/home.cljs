(ns simplefrontend.home
  (:require
    [reagent.core :as r]
    ))


(defn home-page
  []
  [:div
   [:h1 "Web Store"]
   [:a {:href "#/signin"} "Sign-in"]
   [:div]
   [:a {:href "#/login"} "Login"]
   [:div]
   [:a {:href "#/productgroups"} "Product Groups"]])
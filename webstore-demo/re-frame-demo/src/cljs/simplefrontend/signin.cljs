(ns simplefrontend.signin
  (:require
    [reagent.core :as r]
    ))


(defn signin-page
  "The actual page function called by simplefrontend.core."
  []
  (.log js/console (str "ENTER signin-page"))
  (let [first-name-atom (r/atom nil)
        last-name-atom (r/atom nil)
        email-address-atom (r/atom nil)
        password-atom (r/atom nil)]

    (fn []
      [:div
       [:h1 "Sign-in"]

       [:div [:a {:href "#/"} "Back to Web Store Home Page"]]])))



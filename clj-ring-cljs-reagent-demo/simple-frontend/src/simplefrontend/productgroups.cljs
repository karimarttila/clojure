(ns simplefrontend.productgroups
  (:require
    [reagent.core :as r]
    ))


(defn productgroups-page
  "The actual page function called by simplefrontend.core."
  []
  (.log js/console (str "ENTER productgroups-page"))
  (let [
        ]
    (fn []
      [:div
       [:h1 "Product Groups"]
       [:div [:a {:href "#/"} "Back to Web Store Home Page"]]])))




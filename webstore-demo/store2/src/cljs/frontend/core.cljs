(ns frontend.core
  (:require [uix.core :as uix :refer [defui $]]
            [uix.dom]))


(defui app []
  ($ :h1 "Hello, UIx!!"))

(defonce root
  ; NOTE: This id needs to be the same as in routes.clj => index => [:div#store2app
  (uix.dom/create-root (js/document.getElementById "store2app")))

(defn render []
  (uix.dom/render-root ($ app) root))

(defn ^:export init []
  (render))


(comment
  
  )
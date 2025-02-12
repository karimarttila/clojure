(ns frontend.core
  (:require [uix.core :as uix :refer [defui $]]
            [uix.dom]))


(defui app []
  ($ :h1 "Hello, UIx!"))

(defonce root
  ; NOTE: This is the same as in routes.clj => index => [:div#app
  (uix.dom/create-root (js/document.getElementById "app")))

(defn render []
  (uix.dom/render-root ($ app) root))

(defn ^:export init []
  (render))


(comment
  (+ 1 1)
  )
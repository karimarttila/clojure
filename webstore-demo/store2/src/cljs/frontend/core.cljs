(ns frontend.core
  (:require [uix.core :as uix :refer [defui $]]
            [uix.dom]))


(defui app []
  ($ :div.flex.justify-center.h-screen
     ($ :div.flex.flex-col.items-center
        ($ :h1.mt-4.text-4xl.text-blue-800 "Web Store 2")
        ($ :div.flex.flex-col.mt-4
           ($ :span.text-3xl.text-blue-800 "Browse products:")
           ($ :div.flex.flex-col.items-center.mt-4
              ($ :a.mt-2.text-2xl.text-blue-700 {:href "#"} "Books")
              ($ :a.mt-2.text-2xl.text-blue-700 {:href "#"} "Movies"))))))

#_(defui app []
  ($ :div.flex.justify-center.h-screen 
     ($ :h1.text-blue-700.mt-4 "Web Store 2")
     
     ($ :a.text-blue-500.mt-2 {:href "#"} "Books")
     
     ($ :a.text-blue-500.mt-2 {:href "#"} "Movies")
     
     ))

(defonce root
  ; NOTE: This id needs to be the same as in routes.clj => index => [:div#store2app
  (uix.dom/create-root (js/document.getElementById "store2app")))

(defn render []
  (uix.dom/render-root ($ app) root))

(defn ^:export init []
  (render))


(comment
  
  )
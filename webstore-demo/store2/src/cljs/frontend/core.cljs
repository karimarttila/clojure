(ns frontend.core
  (:require [uix.core :as uix :refer [defui $]]
            [uix.dom]
            [ajax.core :refer [GET POST]]
            [cljs.core :refer [js->clj]]
            ))


(defn handle-books-click []
  ; OK: GET "/api/products/books"  ; => On Consolessa root/arr/0/arr/0 alla...
  (GET "/api/products/books/2005"
    {:handler (fn [response]
                (let [data (js->clj response :keywordize-keys true)]
                  (js/console.log "Response data:" response)))
     :error-handler (fn [error]
                      (js/console.error "Error fetching books:" error))}))


#_(defn handle-books-click []
  (GET "/api/products/books"
    {:handler (fn [response]
                (js/console.log "Books data:" response))
     :error-handler (fn [error]
                      (js/console.error "Error fetching books:" error))}))

(defui app []
  ($ :div.flex.justify-center.h-screen
     ($ :div.flex.flex-col.items-center
        ($ :h1.mt-4.text-4xl.text-blue-800 "Web Store 2")
        ($ :div.flex.flex-col.mt-4
           ($ :span.text-3xl.text-blue-800 "Browse products:")
           ($ :div.flex.flex-col.items-center.mt-4
              ($ :a.mt-2.text-2xl.text-blue-700 {:href "#" :onClick handle-books-click} "Books")
              ($ :a.mt-2.text-2xl.text-blue-700 {:href "#"} "Movies"))))))



(defonce root
  ; NOTE: This id needs to be the same as in routes.clj => index => [:div#store2app
  (uix.dom/create-root (js/document.getElementById "store2app")))

(defn render []
  (uix.dom/render-root ($ app) root))

(defn ^:export init []
  (render))


(comment
  
  (shadow.cljs.devtools.server/start!)
  (+ 1 1)
  (js/console.log "TESTING...")

  )
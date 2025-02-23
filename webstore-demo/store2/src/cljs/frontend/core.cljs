(ns frontend.core
  (:require [uix.core :as uix :refer [$ defui defhook]]
            [uix.dom]
            [ajax.core :refer [GET POST]]
            [cljs.core :refer [js->clj]]
            [reitit.core :as r]
            [reitit.coercion.spec :as rss]
            [reitit.frontend :as rf]
            [reitit.frontend.easy :as rfe]
            [reitit.coercion.malli :as rsm]
            [fipp.edn :as fedn]
            ))



(def router-context (uix/create-context))


(defui home []
  ($ :h1 "Home page"))

(defui about []
  ($ :h1 "about page"))

(def routes
  [["/" {:view home}]
   ["/about" {:view about}]])


(defui with-router
  "Creates router instance for given routes
  and shares it via React context"
  [{:keys [routes children]}]
  (let [router (uix/use-memo #(rf/router routes {:data {:coercion rss/coercion}}) [routes])
        [route set-route] (uix/use-state #(r/match-by-name router home {:view home}))]
    (uix/use-effect
     #(rfe/start! router set-route {:use-fragment false})
     [router])
    ($ (.-Provider router-context) {:value (:data route)}
       children)))

(defhook use-route
  "Returns current route's data"
  []
  (uix/use-context router-context))


(defui app []
  (let [{:keys [view]} (use-route)
        ret (use-route)
        _ (js/console.log "DEBUG: ret:" ret)]
      ($ view)))


(defui root []
  ($ with-router {:routes routes}
     ($ app)))

(defonce dom-root
  ; NOTE: This id needs to be the same as in routes.clj => index => [:div#store2app
    (uix.dom/create-root (js/document.getElementById "store2app")))

(defn render []
    (uix.dom/render-root ($ root)
                         dom-root))


(defn ^:export init []
    (render))





;; OLD.....

#_(defn handle-books-click []
  ; OK: GET "/api/products/books"  ; => On Consolessa root/arr/0/arr/0 alla...
  (GET "/api/products/books/2005"
    {:handler (fn [response]
                (let [data (js->clj response :keywordize-keys true)]
                  (js/console.log "Response data:" response)))
     :error-handler (fn [error]
                      (js/console.error "Error fetching books:" error))}))

#_(def page-context 
  (uix.core/create-context []))


#_(defui button [{:keys [on-click children]}]
  ($ :button.btn {:on-click on-click}
     children))


#_(defui home-page []
  ($ :div.flex.justify-center.h-screen
     ($ :div.flex.flex-col.items-center
        ($ :h1.mt-4.text-4xl.text-blue-800 "WELLCOME PAGE")
        ($ :div.flex.flex-col.mt-4))))

#_(defui about-page []
  ($ :div.flex.justify-center.h-screen
     ($ :div.flex.flex-col.items-center
        ($ :h1.mt-4.text-4xl.text-blue-800 "ABOUT PAGE")
        ($ :div.flex.flex-col.mt-4))))


#_(defui app []
  (let [[page set-page!] (uix/use-state :home-page)] 
    
    ($ :div.flex.justify-center.h-screen
       
       ($ :div.flex.flex-col.items-center
          ($ :h1.mt-4.text-4xl.text-blue-800 "Web Store 2")
          ($ :div.flex.flex-col.mt-4
             ($ :span.text-3xl.text-blue-800 "Browse products:")
           ;(let [[page set-page!]] (uix/use-context page-context))
             ($ :div.flex.flex-col.items-center.mt-4
              ;($ :a.mt-2.text-2xl.text-blue-700 {:href "#" :onClick handle-books-click} "Books")
                ($ :a.mt-2.text-2xl.text-blue-700 {:href "#"} "Books")
                ($ :a.mt-2.text-2xl.text-blue-700 {:href "#"} "Movies")
                (let [[state set-state!] (uix.core/use-state 0)]
                  ($ :<>
                     ($ button {:on-click #(set-state! dec)} "-")
                     ($ :span state)
                     ($ button {:on-click #(set-state! inc)} "+")))
                ($ :> (.-Provider page-context) {:value [page set-page!]})
                ))))))



#_(def routes
  [["/"
    {:name ::home-page
     :view home-page}]

   ["/about"
    {:name ::about
     :view about-page}]

   ])



#_(defonce root
  ; NOTE: This id needs to be the same as in routes.clj => index => [:div#store2app
  (uix.dom/create-root (js/document.getElementById "store2app")))

#_(defn render []
  (uix.dom/render-root ($ app) root))



#_(defn ^:export init [] 
  (render))



(comment
  
  (shadow.cljs.devtools.server/start!)
  (+ 1 1)
  (js/console.log "TESTING...")

  )
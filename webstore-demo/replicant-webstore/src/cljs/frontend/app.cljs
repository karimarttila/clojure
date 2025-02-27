(ns frontend.app
  (:require [clojure.string :as string]
            [clojure.walk :as walk]
            [replicant.dom :as r]
            [gadget.inspector :as inspector]
            [frontend.util :as f-util]
            [frontend.http :as f-http]
            [frontend.routes :as f-routes]))


(defonce ^:private !state (atom {:db/product-groups [{:id :books
                                                      :query {:id :books
                                                              :api "/products/books"}
                                                      :name "Books"}
                                                     {:id :movies
                                                      :query {:id :movies
                                                              :api "/products/movies"}
                                                      :name "Movies"}]}))

;; Provides an easy way to programmatically dispatch.
(defonce ^:private !dispatcher (atom {}))

(defn- get-dispatcher [] (:dispatcher @!dispatcher))

(defn get-product-group-by-id [id]
  (some #(when (= (:id %) id) %) (:db/product-groups @!state)))

(defn products-page? [page product]
  (and (= (:page page) :products) (= (:pg page) (:id product))))


(defn- product-button [product]
  (let [page (:page/navigated @!state)
        button-tag (if (products-page? page product)
                     :button.rounded-lg.border-2.border-gray-500.bg-blue-100.p-4.m-2.hover:bg-gray-200.cursor-pointer
                     :button.rounded-lg.border-2.border-gray-300.p-4.m-2.hover:bg-gray-200.cursor-pointer)]
    [:a {:href (str "#/products/" (name (:id product)))}
     [button-tag
      [:p.text-center.text-xl.font-semibold
       (:name product)]]]))


(defn books-table [books]
  [:table.table-auto.w-full
   [:thead
    [:tr
     (for [header ["ID" "Title" "Author" "Year" "Country" "Language" "Price"]]
       [:th.px-4.py-2 header])]]
   [:tbody
    (for [{:keys [id title author year country language price]} books]
      ^{:key id}
      [:tr
       (for [value [id title author year country language price]]
         [:td.border.px-4.py-2 value])])]])


(defn movies-table [movies]
  [:table.table-auto.w-full
   [:thead
    [:tr
     (for [header ["ID" "Title" "Director" "Year" "Country" "Genre" "Price"]]
       [:th.px-4.py-2 header])]]
   [:tbody
    (for [{:keys [id title director year country genre price]} movies]
      ^{:key id}
      [:tr
       (for [value [id title director year country genre price]]
         [:td.border.px-4.py-2 value])])]])


(defn- product-groups-buttons []
  (let [product-groups (:db/product-groups @!state)
        _ (f-util/clog "Product-groups: " product-groups)]
    [:div
     [:div.flex.flex-wrap.justify-center
      (for [product product-groups]
        ^{:key (:id product)} (product-button product))]]))


(defn- header-view [_]
  [:div.flex ;.h-screen
   [:div.flex-grow.p-4
    ;[:div.flex.flex-col.items-center.min-h-screen.mt-1]
    [:h1.text-3xl.font-bold.text-center.mt-5 "WEB STORE with REPLICANT"]
    [:h2.text-xl.font-bold.text-center.mt-10 "Choose product group:"]
    [:div.mt-10
     (product-groups-buttons)]]])


(defn- page-content [state]
  (let [page (:page/navigated state)]
    (if (= (:page page) :products)
      (let [table (case (:pg page)
                    :books (books-table (get-in state [:db/data :books]))
                    :movies (movies-table (get-in state [:db/data :movies]))
                    [:div])]
        table))))


(defn- view [state]
  (f-util/clog "view, state: " state)
  [:div.flex.h-screen
   [:div.flex-grow.p-4
    [:div.flex.flex-col.items-center.min-h-screen.mt-10
     (header-view state)
     (page-content state)]]])


(defn navigated-products-page [{:keys [id]}]
  (f-util/clog "navigated-products-page, data: " id)
  (let [pg (get-product-group-by-id id)
        dispatcher (get-dispatcher)]
    (dispatcher nil [[:backend/fetch {:query (:query pg)}]
                     [:db/assoc :page/navigated {:page :products
                                                 :pg id}]])))


(defn navigated-home-page []
  (f-util/clog "navigated-home-page")
  (let [dispatcher (get-dispatcher)]
    (dispatcher nil [[:db/assoc :page/navigated {:page :home}]])))


(defn- enrich-action-from-event [{:replicant/keys [js-event node]} actions]
  (walk/postwalk
   (fn [x]
     (cond
       (keyword? x)
       (case x
         :event/target.value (-> js-event .-target .-value)
         :dom/node node
         x)
       :else x))
   actions))


(defn- enrich-action-from-state [state action]
  (walk/postwalk
   (fn [x]
     (cond
       (and (vector? x)
            (= :db/get (first x))) (get state (second x))
       :else x))
   action))


(defn- render! [state]
  (r/render
   (js/document.getElementById "app")
   (view state)))


(r/set-dispatch!
 (fn [event-data handler-data]
   (when (= :replicant.trigger/dom-event
            (:replicant/trigger event-data))
     (println "Event triggered!")
     (println "Event:" (:replicant/dom-event event-data))
     (println "Node:" (:replicant/node event-data))
     (println "Handler data:" handler-data))))


(defn- event-handler [{:replicant/keys [^js js-event] :as replicant-data} actions]
  (f-util/clog "** event-handler **:")
  (f-util/clog "replicant-data:" replicant-data)
  (f-util/clog "actions:" actions)
  (doseq [action actions]
    (f-util/clog "**** event ****:")
    (f-util/clog "action:" action)
    (f-util/clog "event:" (:replicant/dom-event replicant-data))
    (f-util/clog "node:" (:replicant/node replicant-data))
    #_(prn "Triggered action" action)
    (let [enriched-action (->> action
                               (enrich-action-from-event replicant-data)
                               (enrich-action-from-state @!state))
          [action-name & args] enriched-action]
      (f-util/clog "Enriched action:" enriched-action)
      #_(prn "Enriched action" enriched-action)
      (case action-name
        :dom/prevent-default (.preventDefault js-event)
        :db/assoc (apply swap! !state assoc args)
        :db/dissoc (apply swap! !state dissoc args)
        :dom/set-input-text (set! (.-value (first args)) (second args))
        :dom/focus-element (.focus (first args))
        :backend/fetch (f-http/fetch !state (second enriched-action))
        :route/home (navigated-home-page)
        :route/products (navigated-products-page (second enriched-action))
        #_#_:routes/navigate (f-routes/navigate !state (second enriched-action))
        (f-util/clog "Unknown action" action)
        #_(prn "Unknown action" action))))
  (render! @!state))



(defn ^{:dev/after-load true :export true} start! []
  (render! @!state))


(defn ^:export init! []
  (inspector/inspect "App state" !state)
  (r/set-dispatch! event-handler)
  (swap! !dispatcher assoc :dispatcher event-handler)
  (f-routes/start! f-routes/routes event-handler)
  (start!))


(comment


  (+ 1 1)

  (require '[portal.web :as p])
  (def p (p/open))
  (add-tap #'p/submit)
  (tap> :hello))
(ns frontend.app
  (:require [clojure.string :as string]
            [clojure.walk :as walk]
            [replicant.dom :as r]
            [gadget.inspector :as inspector]
            [frontend.util :as f-util]
            [frontend.http :as f-http]))


(defonce ^:private !state (atom {:db/product-groups [{:id :books
                                                      :query {:id :books
                                                              :api "/products/books"}
                                                      :name "Books"}
                                                     {:id :movies
                                                      :query {:id :movies
                                                              :api "/products/movies"}
                                                      :name "Movies"}]}))


(defn- product-box [product]
  [:button.rounded-lg.border-2.border-gray-300.p-4.m-2.hover:bg-gray-200.cursor-pointer
   {:on {:click [[:backend/fetch {:query (:query product)}][:db/assoc :ui/selected-product-group (:id product)]]}}
   #_{:on {:click [[:product-group-selected (:id product)]]}}
   [:p.text-center.text-xl.font-semibold
    (:name product)]])


(defn- product-groups-view []
  (let [product-groups (:db/product-groups @!state)
        _ (f-util/clog "Product-groups: " product-groups)]
    #_[:p "DEBUG"]
    [:div
     [:div.flex.flex-wrap.justify-center
      (for [product product-groups]
        ^{:key (:id product)} (product-box product))]]))


(defn- header-view [{:something/keys [_]}]
  [:div.flex.h-screen
   [:div.flex-grow.p-4
    [:div.flex.flex-col.items-center.min-h-screen.mt-10
     [:h1.text-3xl.font-bold.text-center.mt-5 "WEB STORE with REPLICANT"]
     [:h2.text-xl.font-bold.text-center.mt-10 "Choose product group:"]
     [:div.mt-10
      (product-groups-view)]]]])


(defn- main-view [state]
  (header-view state))


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
   (main-view state)))


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
        (f-util/clog "Unknown action" action)
        #_(prn "Unknown action" action))))
  (render! @!state))


(defn ^{:dev/after-load true :export true} start! []
  (render! @!state))


(defn ^:export init! []
  (inspector/inspect "App state" !state)
  (r/set-dispatch! event-handler)
  (start!))


(comment

  (+ 1 1)

  (require '[portal.web :as p])
  (def p (p/open))
  (add-tap #'p/submit)
  (tap> :hello))
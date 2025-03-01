(ns frontend.app
  (:require [clojure.walk :as walk]
            [replicant.dom :as r]
            [gadget.inspector :as inspector]
            [frontend.util :as f-util]
            [frontend.http :as f-http]
            [frontend.views :as f-views]
            [frontend.routes :as f-routes]))



(defonce ^:private !state (atom {; Let's make product-groups fixed in this demo.
                                 :db/product-groups
                                 [{:id :books
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


(defn navigated-products-page [{:keys [id]} product-groups]
  (when goog.DEBUG (f-util/clog "navigated-products-page, data: " id))
  (let [pg (f-util/get-product-group-by-id id product-groups)
        dispatcher (get-dispatcher)]
    (dispatcher nil [[:backend/fetch {:query (:query pg)}]
                     [:db/assoc :page/navigated {:page :products
                                                 :pg id}]])))


(defn navigated-home-page []
  (when goog.DEBUG (f-util/clog "navigated-home-page"))
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
   (f-views/view state)))


(r/set-dispatch!
 (fn [event-data handler-data]
   (when (= :replicant.trigger/dom-event
            (:replicant/trigger event-data))
     (when goog.DEBUG 
       (f-util/clog "** set-dispatch! **")
       (f-util/clog "dom-event:" (:replicant/dom-event event-data))
       (f-util/clog "node:" (:replicant/node event-data))
       (f-util/clog "handler-data:" handler-data)))))


(defn- event-handler [{:replicant/keys [^js js-event] :as replicant-data} actions]
  (when goog.DEBUG
    (f-util/clog "** event-handler **")
    (f-util/clog "replicant-data:" replicant-data)
    (f-util/clog "actions:" actions))
  (doseq [action actions]
    (when goog.DEBUG
      (f-util/clog "**** event ****:")
      (f-util/clog "action:" action)
      (f-util/clog "event:" (:replicant/dom-event replicant-data))
      (f-util/clog "node:" (:replicant/node replicant-data)))
    (let [enriched-action (->> action
                               (enrich-action-from-event replicant-data)
                               (enrich-action-from-state @!state))
          [action-name & args] enriched-action]
      (when goog.DEBUG (f-util/clog "Enriched action:" enriched-action))
      (case action-name
        :dom/prevent-default (.preventDefault js-event)
        :db/assoc (apply swap! !state assoc args)
        :db/assoc-in (apply swap! !state assoc-in args)
        :db/dissoc (apply swap! !state dissoc args)
        :dom/set-input-text (set! (.-value (first args)) (second args))
        :dom/focus-element (.focus (first args))
        :backend/fetch (f-http/fetch (get-dispatcher) (second enriched-action))
        :route/home (navigated-home-page)
        :route/products (navigated-products-page (second enriched-action) (:db/product-groups @!state))
        (when goog.DEBUG (f-util/clog "Unknown action" action)))))
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
  (js/console.log "I am connected to the browser!")
  ;(js/alert "I am connected to the browser!")

  ;; Example how to tap to the data using djblue Portal: 
  (require '[portal.web :as p])
  ; NOTE: This asks a popup window, you have to accept it in the browser!!! 
  (p/open)
  ; Now you should have a new pop-up browser window...
  (add-tap #'p/submit)
  (tap> :hello)
  (tap> (get-in @!state [:db/data :books]))
  ;; You should now see a vector of book maps in the portal window.
  )

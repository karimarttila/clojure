(ns frontend.replicantutil
  (:require [clojure.walk :as walk]
            [replicant.dom :as r]))

;; The same state as we use in the application side (in app.cljs)
;; But this is the Portfolio version for the Replicant.
(defonce ^:private !state (atom {; Let's make product-groups fixed in this demo.
                                 :db/pg-config
                                 [{:id :books
                                   :pg-id 1
                                   :query {:id :books
                                           :api "/products/books"}
                                   :post {:id :books
                                          :api "/products/books"}
                                   :name "Books"}
                                  {:id :movies
                                   :pg-id 2
                                   :query {:id :movies
                                           :api "/products/movies"}
                                   :post {:id :movies
                                          :api "/products/movies"}
                                   :name "Movies"}]}))

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


(r/set-dispatch!
 (fn [event-data _handler-data]
   (when (= :replicant.trigger/dom-event
            (:replicant/trigger event-data))
     (when goog.DEBUG
       (prn "** set-dispatch! **")))))



#_{:clj-kondo/ignore [:unused-private-var]}
(defn- event-handler [{:replicant/keys [^js js-event] :as replicant-data} actions]
  (doseq [action actions]
    (let [enriched-action (->> action
                               (enrich-action-from-event replicant-data)
                               (enrich-action-from-state @!state))
          [action-name & args] enriched-action]
      #_(when goog.DEBUG (f-util/clog "Enriched action:" enriched-action))
      (case action-name
        :dom/prevent-default (.preventDefault js-event)
        :db/assoc (apply swap! !state assoc args)
        :db/assoc-in (apply swap! !state assoc-in args)
        :db/dissoc (apply swap! !state dissoc args)
        :dom/set-input-text (set! (.-value (first args)) (second args))
        :dom/focus-element (.focus (first args)))))
  #_(render! @!state))

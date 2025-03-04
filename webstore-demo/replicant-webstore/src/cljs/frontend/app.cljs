(ns frontend.app
  (:require [clojure.walk :as walk]
            [replicant.dom :as r]
            [gadget.inspector :as inspector]
            [frontend.util :as f-util]
            [frontend.http :as f-http]
            [frontend.views :as f-views]
            [frontend.routes :as f-routes]
            [common.schema :as f-schema]
            [malli.core :as m]
            [malli.error :as me]))



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


;; Provides an easy way to programmatically dispatch.
(defonce ^:private !dispatcher (atom {}))

(defn- get-dispatcher [] (:dispatcher @!dispatcher))


(defn navigated-products-page [{:keys [pg state]}]
  (when goog.DEBUG (f-util/clog "navigated-products-page, data: " pg))
  (let [pg-c (f-util/get-pg-config-by-id pg (:db/pg-config state))
        products (get-in state [:db/data pg])
        dispatcher (get-dispatcher)]
    (if products
      (dispatcher nil [[:db/assoc :page/navigated {:page :products
                                                   :pg pg}]])
      (dispatcher nil [[:backend/fetch {:query (:query pg-c)
                                        :pg pg}]
                       [:db/assoc :page/navigated {:page :products
                                                   :pg pg}]]))))


(defn navigated-product-page [{:keys [id pg state]}]
  (when goog.DEBUG (f-util/clog "navigated-product-page, id: " id))
  (let [pg-c (f-util/get-pg-config-by-id pg (:db/pg-config state))
        products (get-in state [:db/data pg])
        dispatcher (get-dispatcher)]
    (if products
      (dispatcher nil [[:db/assoc :page/navigated {:page :product
                                                   :pg pg
                                                   :id id}]])
      (dispatcher nil [[:backend/fetch {:query (:query pg-c)
                                        :pg pg}]
                       [:db/assoc :page/navigated {:page :product
                                                   :pg pg
                                                   :id id}]]))))
(defn- safe-parse-float [s]
  (try
    (let [parsed (js/parseFloat s)]
      (if (js/isNaN parsed) s parsed))
    (catch js/Error _ s)))

(defn- safe-parse-int [s]
  (try
    (let [parsed (js/parseInt s)]
      (if (js/isNaN parsed) s parsed))
    (catch js/Error _ s)))


(defn- convert-fields [product]
  (-> product
      (cond-> (contains? product :price) (update :price #(if (string? %) (safe-parse-float %) %)))
      (cond-> (contains? product :year) (update :year #(if (string? %) (safe-parse-int %) %)))))


(comment

  (safe-parse-int "aa")
  ;;=> "aa" 
  (convert-fields {:product-group 1,
                   :title "Crime and Punishment",
                   :author "Fyodor Dostoevsky", :year 1866,
                   :country "Russia", :language "Russian"
                   :price "aa"}))



(defn get-product-from-store [state pg-id]
  (let [product (:db/new-product state)]
    (-> product
        (assoc :product-group pg-id)
        convert-fields)))

(comment
  (js/console.log "**************************************"))


(defn action-new-product [{:keys [pg state]}]
  (when goog.DEBUG (f-util/clog "action-new-product, pg: " pg))
  (let [pg-c (f-util/get-pg-config-by-id pg (:db/pg-config state))
        pg-id (:pg-id pg-c) ; This is the number that backend uses for product group.
        product (get-product-from-store state pg-id)
        dispatcher (get-dispatcher)]
    (dispatcher nil [[:backend/post {:post (:post pg-c)
                                     ; We need this to fetch new set of products.
                                     :query (:query pg-c)
                                     :product product
                                     :pg pg}]])))


(defn action-validate-new-product [{:keys [pg state]}]
  (when goog.DEBUG (f-util/clog "action-validate-new-product *********************************************, pg: " pg))
  (let [pg-c (f-util/get-pg-config-by-id pg (:db/pg-config state))
        pg-id (:pg-id pg-c) ; This is the number that backend uses for product group.
        product (get-product-from-store state pg-id)
        _ (when goog.DEBUG (f-util/clog "product: *********************************************, product: " product))
        dispatcher (get-dispatcher)]
    (let [validation-ok
          (case pg
            :books (m/validate f-schema/book-without-id product)
            :movies (m/validate f-schema/movie-without-id product))]
      (if validation-ok
        (dispatcher nil [[:action/new {:pg pg}]])
        (let [error (case pg
                      :books (me/humanize (m/explain f-schema/book-without-id product))
                      :movies (me/humanize (m/explain f-schema/movie-without-id product)))]
          (dispatcher nil [[:db/assoc :db/product-validation-error {:error error
                                                                    :pg pg}]]))))))


(defn navigated-new-product-page [{:keys [pg _state]}]
  (when goog.DEBUG (f-util/clog "navigated-new-product-page, pg: " pg))
  (let [dispatcher (get-dispatcher)]
    (dispatcher nil [[:db/assoc :page/navigated {:page :new
                                                 :pg pg}]])))


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
      #_(when goog.DEBUG (f-util/clog "Enriched action:" enriched-action))
      (case action-name
        :dom/prevent-default (.preventDefault js-event)
        :db/assoc (apply swap! !state assoc args)
        :db/assoc-in (apply swap! !state assoc-in args)
        :db/dissoc (apply swap! !state dissoc args)
        :dom/set-input-text (set! (.-value (first args)) (second args))
        :dom/focus-element (.focus (first args))
        :backend/fetch (f-http/fetch (get-dispatcher) (second enriched-action))
        :backend/post (f-http/post (get-dispatcher) (second enriched-action))
        :route/home (navigated-home-page)
        :route/products (navigated-products-page (assoc (second enriched-action) :state @!state))
        :route/product (navigated-product-page (assoc (second enriched-action) :state @!state))
        :route/new (navigated-new-product-page (assoc (second enriched-action) :state @!state))
        :action/new (action-new-product (assoc (second enriched-action) :state @!state))
        :action/validate (action-validate-new-product (assoc (second enriched-action) :state @!state))
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

  (def my-book {:product-group 1, :title "Moby Dick", :price 45.35, :author "Herman Melville", :year 1851, :country "United States", :language "English"})
  (def my-book {:XXX 1, :title "Moby Dick", :price 45.35, :author "Herman Melville", :year 1851, :country "United States", :language "English"})

  (m/validate f-schema/book-without-id my-book)
  (def my-error
    (let [validation-result (m/validate f-schema/book-without-id my-book)]
      (if validation-result
        {:ok "ok"}
        (me/humanize (m/explain f-schema/book-without-id my-book)))))
  ;;=> "Validation failed: {:product-group [\"missing required key\"]}"

  my-error
  ;;=> {:product-group ["missing required key"]}
  )

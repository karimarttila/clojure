(ns frontend.app
  (:require [clojure.walk :as walk]
            [replicant.dom :as r]
            [nexus.registry :as nxr]
            [dataspex.core :as dataspex]
            [datascript.core :as ds]
            [frontend.util :as f-util]
            [frontend.http :as f-http]
            [frontend.views :as f-views]
            [frontend.routes :as f-routes]
            [common.schema :as f-schema]
            [malli.core :as m]
            [malli.error :as me]
            [malli.transform]
            ))


(def db-schema
  {;; --- Identities ---
   :pg/id      {:db/unique :db.unique/identity}
   :product/id {:db/unique :db.unique/identity}
   ;; --- Relationships ---
   :product/pg {:db/valueType :db.type/ref}
   ;; --- App structure ---
   :app/pg-config {:db/cardinality :db.cardinality/many
                   :db/valueType :db.type/ref}
   :app/page {:db/valueType :db.type/ref}})


(defonce ^:private !conn (ds/create-conn db-schema))

(defonce ^:private !el (js/document.getElementById "app"))


;; Initial transact.
(ds/transact! !conn
              [;; Product groups
               {:db/id -1
                :pg/id :books
                :pg/pg-id 1
                :pg/query-id :books
                :pg/query-api "/products/books"
                :pg/post-id :books
                :pg/post-api "/products/books"
                :pg/name "Books"}
               {:db/id -2
                :pg/id :movies
                :pg/pg-id 2
                :pg/query-id :movies
                :pg/query-api "/products/movies"
                :pg/post-id :movies
                :pg/post-api "/products/movies"
                :pg/name "Movies"}
               ;; Page entity with initial attribute
               {:db/id -11
                :page/navigated {:page :home}}
               ;; Data entity with initial attribute (empty map for now)
               {:db/id -12
                :data/initialized true}
               ;; New product entity
               {:db/id -13
                :db/ident :db/new-product}
               ;; Product validation error entity
               {:db/id -14
                :db/ident :db/product-validation-error}
               ;; Product created entity
               {:db/id -15
                :db/ident :db/product-created}
               ;; Table sort state entity
               {:db/id -16
                :db/ident :db/table-sort
                :sort/field :product/id
                :sort/direction :asc}
               ;; Create app entity with references
               {:db/id -10
                :db/ident :app
                :app/pg-config [-1 -2]
                :app/page -11}])


;; See scratch_frontend.cljs for examples on how to query Datascript store.


;; :db/transact, :db/add, etc. generic functions taken from https://github.com/cjohansen/replicant-state-datascript

;; This tells Nexus: "To get the state, take the system map, get :conn from it, and call ds/db on it."
(nxr/register-system->state! (comp ds/db :conn))

;; See: https://github.com/cjohansen/nexus?tab=readme-ov-file#example-logging
(def logger
  {:id :logger

   :before-effect
   (fn [{:keys [effect] :as ctx}] 
     (f-util/clog "Before effect: " (pr-str effect))
     ctx)

   :after-effect
   (fn [{:keys [effect errors] :as ctx}]
     (if (seq errors)
       (f-util/clog "After effect, errors: " (str (pr-str effect) ":" (pr-str errors)))
       (f-util/clog "After effect: " (pr-str effect)))
     ctx)

   :before-action
   (fn [{:keys [action] :as ctx}]
     (f-util/clog "Before action: " (pr-str action))
     ctx)

   :after-action
   (fn [{:keys [action errors] :as ctx}]
     (if (seq errors)
       (f-util/clog "After action, errors: " (str (pr-str action) ":" (pr-str errors)))
       (f-util/clog "After action: " (pr-str action)))
     ctx)})

(nxr/register-interceptor! logger)

(nxr/register-effect! :db/transact
                      ^:nexus/batch
                      (fn [_ {:keys [conn]} txes]
                        (ds/transact! conn (apply concat (map first txes)))))

(nxr/register-action! :db/add
                      (fn [_ eid attr value]
                        [[:db/transact [[:db/add eid attr value]]]]))

(nxr/register-action! :db/retract
                      (fn [_ eid attr & [value]]
                        [[:db/transact [(cond-> [:db/retract eid attr]
                                          value (conj value))]]]))

(nxr/register-action! :db/assoc-in
                      (fn [state path value]
                        (let [[ident attr] path
                              entity (ds/pull state '[*] ident)
                              new-entity (assoc entity attr value)]
                          [[:db/transact [new-entity]]])))


(nxr/register-action! :frontend.views/update-field
                      (fn [_ path value] 
                        (let [[_ attr] path
                              ;; Define numeric fields
                              numeric-fields #{:price :year}
                              ;; Convert to number if it's a numeric field and value is not empty
                              coerced-value (if (and (numeric-fields attr) 
                                                     (not (empty? value))
                                                     (not (js/isNaN (js/parseFloat value))))
                                              (js/parseFloat value)
                                              value)] 
                          [[:db/assoc-in path coerced-value]])))


(defn- get-product-from-new-product [state pg-id]
  (let [new-product (ds/pull state '[*] [:db/ident :db/new-product])] 
    (-> new-product
        (select-keys [:title :price :author :year :country :language :director :genre])
        (assoc :product-group pg-id)
        ;; Remove nil values
        (->> (remove (comp nil? val))
             (into {})))))


(nxr/register-action! :action/validate
                      (fn [state params]
                        (let [pg (:pg params)
                              pg-config (ds/pull state '[*] [:pg/id pg])
                              pg-id (:pg/pg-id pg-config)
                              product-raw (get-product-from-new-product state pg-id)
                              ;; Coerce string values to proper types before validation
                              product (case pg
                                        :books (m/decode f-schema/book-without-id product-raw (malli.transform/string-transformer))
                                        :movies (m/decode f-schema/movie-without-id product-raw (malli.transform/string-transformer)))
                              validation-ok (case pg
                                              :books (m/validate f-schema/book-without-id product)
                                              :movies (m/validate f-schema/movie-without-id product))]
                          (if validation-ok
                            [[:db/retract [:db/ident :db/product-validation-error] :error]
                             ;; Pass the coerced product instead of fetching it again
                             [:action/new {:pg pg :product product}]]
                            (let [error (case pg
                                          :books (me/humanize (m/explain f-schema/book-without-id product))
                                          :movies (me/humanize (m/explain f-schema/movie-without-id product)))] 
                              [[:db/add [:db/ident :db/product-validation-error] :error error]])))))

(nxr/register-action! :action/new
                      (fn [state params] 
                        (let [pg (:pg params)
                              ;; Use the product directly from params (already coerced)
                              product (:product params)
                              pg-config (ds/pull state '[*] [:pg/id pg])
                              post-api (:pg/post-api pg-config)] 
                          [[:backend/post {:product product :pg pg :post {:api post-api}}]])))

(nxr/register-action! :action/clear-new-product
                      (fn [_state _params]                        
                        ;; Clear old validation errors, and old new product cache.
                        [[:db/retract [:db/ident :db/product-validation-error] :error]
                         [:db/retract [:db/ident :db/new-product] :title]
                         [:db/retract [:db/ident :db/new-product] :author]
                         [:db/retract [:db/ident :db/new-product] :year]
                         [:db/retract [:db/ident :db/new-product] :country]
                         [:db/retract [:db/ident :db/new-product] :language]
                         [:db/retract [:db/ident :db/new-product] :price]
                         [:db/retract [:db/ident :db/new-product] :director]
                         [:db/retract [:db/ident :db/new-product] :genre]]))

(nxr/register-action! :action/sort-table
                      (fn [state params] 
                        (let [field (:field params)
                              current-sort (ds/pull state '[*] [:db/ident :db/table-sort])
                              current-field (:sort/field current-sort)
                              current-direction (:sort/direction current-sort)
                              ;; Toggle direction if clicking same field, otherwise default to :asc
                              new-direction (if (= field current-field)
                                              (if (= current-direction :asc) :desc :asc)
                                              :asc)] 
                          [[:db/transact [[:db/add [:db/ident :db/table-sort] :sort/field field]
                                          [:db/add [:db/ident :db/table-sort] :sort/direction new-direction]]]])))


;; ********** ROUTING **********

(nxr/register-action! :route/home
                      (fn [state]
                        (let [page-id (:db/id (:app/page (ds/pull state '[{:app/page [:db/id]}] :app)))]
                          [[:action/clear-new-product]
                           [:db/transact [[:db/add page-id :page/navigated {:page :home}]]]])))


(nxr/register-action! :add/products
                      (fn [_state params]
                        (let [pg (:pg params)
                              products-data (:products params)
                              ;; Transform products to DataScript entities
                              products (map (fn [product]
                                              (-> product
                                                  ;; Convert :id to :product/id as string
                                                  (assoc :product/id (:id product))
                                                  ;; Add reference to product group
                                                  (assoc :product/pg [:pg/id pg])
                                                  ;; Remove the old :id and :product-group keys
                                                  (dissoc :id :product-group)))
                                            products-data)] 
                          [[:db/transact products]])))


(nxr/register-action! :route/products
                      (fn [state params]
                        (let [pg (:pg params)
                              page-id (:db/id (:app/page (ds/pull state '[{:app/page [:db/id]}] :app)))
                              ;; Check if we have any products for this pg
                              has-products? (seq (ds/q '[:find [?e ...]
                                                         :in $ ?pg
                                                         :where
                                                         [?e :product/pg ?pg-ref]
                                                         [?pg-ref :pg/id ?pg]]
                                                       state pg))] 
                          (if has-products?
                            ;; Products already exist, just navigate
                            [[:action/clear-new-product]
                             [:db/transact [[:db/add page-id :page/navigated {:page :products, :pg pg}]]]]
                            ;; No products yet, fetch them first then navigate
                            (let [pg-config (ds/pull state '[*] [:pg/id pg])
                                  query-api (:pg/query-api pg-config)]
                              [[:action/clear-new-product]
                               [:backend/fetch {:api query-api :pg pg}]
                               [:db/transact [[:db/add page-id :page/navigated {:page :products, :pg pg}]]]])))))


(nxr/register-action! :route/product
                      (fn [state params]
                        (let [pg (:pg params)
                              id (:id params)
                              page-id (:db/id (:app/page (ds/pull state '[{:app/page [:db/id]}] :app)))
                              ;; Check if we have any products for this pg
                              has-products? (seq (ds/q '[:find [?e ...]
                                                         :in $ ?pg
                                                         :where
                                                         [?e :product/pg ?pg-ref]
                                                         [?pg-ref :pg/id ?pg]]
                                                       state pg))] 
                          (if has-products?
                            ;; Products already exist, just navigate to the specific product
                            [[:action/clear-new-product]
                             [:db/transact [[:db/add page-id :page/navigated {:page :product, :pg pg, :id id}]]]]
                            ;; No products yet, fetch them first then navigate to the product
                            (let [pg-config (ds/pull state '[*] [:pg/id pg])
                                  query-api (:pg/query-api pg-config)] 
                              [[:action/clear-new-product]
                               [:backend/fetch {:api query-api :pg pg}]
                               [:db/transact [[:db/add page-id :page/navigated {:page :product, :pg pg, :id id}]]]])))))


(nxr/register-action! :route/new
                      (fn [state params]
                        (let [pg (:pg params)
                              page-id (:db/id (:app/page (ds/pull state '[{:app/page [:db/id]}] :app)))]
                          ;; Navigate to new product page.
                          [[:db/transact [[:db/add page-id :page/navigated {:page :new, :pg pg}]]]])))


;; ********** HTTP EFFECTS **********

;; NOTE: Fetch and post needs to be effects, since they make http get and post which are a side-effects.
(nxr/register-effect! :backend/fetch
                      (fn [_ system params] 
                        (f-http/fetch system params)))


(nxr/register-effect! :backend/post
                      (fn [_ system params] 
                        (f-http/post system params)))

(defn ^:export init! []
  ;; Store timestamp to see if page reloaded
  (when-not js/window.appInitTime
    (set! js/window.appInitTime (js/Date.)))
  (when goog.DEBUG (f-util/clog "init! called at:" (js/Date.)))
  (when goog.DEBUG (f-util/clog "init! FIRST init was at:" js/window.appInitTime))
  (when goog.DEBUG (f-util/clog "init! routes-initialized? before check:" @f-routes/routes-initialized?))

  (let [system {:conn !conn, :routes f-routes/routes}]
    ;; Add watch to trigger render when ever the state changes as in the replicant-state-datascript example.
    (add-watch
     !conn ::render
     (fn [_ _ _ _]
       (let [db (ds/db !conn)
             app (ds/pull db '[* {:app/pg-config [*]} {:app/page [*]} :app/started-at] :app)
             current-pg (get-in app [:app/page :page/navigated :pg])
             products (when current-pg
                        (ds/q '[:find [(pull ?e [*]) ...]
                                :in $ ?pg
                                :where
                                [?e :product/pg ?pg-ref]
                                [?pg-ref :pg/id ?pg]]
                              db current-pg))
             ;; Pull additional state for forms
             new-product (ds/pull db '[*] [:db/ident :db/new-product])
             product-created (ds/pull db '[*] [:db/ident :db/product-created])
             validation-error (ds/pull db '[*] [:db/ident :db/product-validation-error])
             table-sort (ds/pull db '[*] [:db/ident :db/table-sort])
             view-state {:pg-config (:app/pg-config app)
                         :page (get-in app [:app/page :page/navigated])
                         :started-at (:app/started-at app)
                         :products products
                         :new-product new-product
                         :validation-error validation-error
                         :product-created product-created
                         :table-sort table-sort}]
         #_ (when goog.DEBUG (f-util/clog "view-state:" view-state))
         (r/render !el (f-views/view view-state)))))

    ;; Add dataspex, see: https://chromewebstore.google.com/detail/dataspex/blgomkhaagnapapellmdfelmohbalneo
    (dataspex/inspect "App state" !conn)
    ;; Tell replicant to use the Nexus dispatch mechanism with proper event data extraction.
    (r/set-dispatch!
     (fn [event actions]
       #_(when goog.DEBUG (f-util/clog "=== REPLICANT DISPATCH START ==="))
       #_(when goog.DEBUG (f-util/clog "dispatch, event:" event))
       #_(when goog.DEBUG (f-util/clog "dispatch, actions:" actions))
       ;; Build dispatch-data with resolved event values
       (let [js-event (:replicant/js-event event)
             event-value (when js-event (.. js-event -target -value))
             ;; Resolve :event/target.value in actions before passing to Nexus
             resolved-actions (when event-value
                                (walk/postwalk
                                 (fn [x]
                                   (if (= x :event/target.value)
                                     event-value
                                     x))
                                 actions))
             final-actions (or resolved-actions actions)]
         #_(when goog.DEBUG (f-util/clog "dispatch, event-value:" event-value))
         #_(when goog.DEBUG (f-util/clog "dispatch, resolved-actions:" final-actions))
         (nxr/dispatch system nil final-actions)
         #_(when goog.DEBUG (f-util/clog "=== REPLICANT DISPATCH END ===")))))
    ;; Initialize routes.
    (f-routes/start! f-routes/routes system)
    ; Trigger initial render as in the replicant-state-datascript example.
    (ds/transact! !conn [[:db/add :app :app/started-at (js/Date.)]])))

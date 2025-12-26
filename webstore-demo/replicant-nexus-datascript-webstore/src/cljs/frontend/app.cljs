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
               ;; Create app entity with references
               {:db/id -10
                :db/ident :app
                :app/pg-config [-1 -2]
                :app/page -11}])


;; See scratch_frontend.cljs for examples on how to query Datascript store.


;; :db/transact, :db/add, etc. generic functions taken from https://github.com/cjohansen/replicant-state-datascript

;; This tells Nexus: "To get the state, take the system map, get :conn from it, and call ds/db on it."
(nxr/register-system->state! (comp ds/db :conn))

(nxr/register-effect! :db/transact
                      ^:nexus/batch
                      (fn [_ {:keys [conn]} txes]
                        (let [_ (when goog.DEBUG (f-util/clog "register-action! :db/transact, conn" conn))
                              _ (when goog.DEBUG (f-util/clog "register-action! :db/transact, txes" txes))]
                          (ds/transact! conn (apply concat (map first txes))))))

(nxr/register-action! :db/add
                      (fn [_ eid attr value]
                        (let [_ (when goog.DEBUG (f-util/clog "register-action! :db/add" {:eid eid, :attr attr, :value value}))]
                          [[:db/transact [[:db/add eid attr value]]]])))

(nxr/register-action! :db/retract
                      (fn [_ eid attr & [value]]
                        (let [_ (when goog.DEBUG (f-util/clog "register-action! :db/retract" {:eid eid, :attr attr, :value value}))]
                          [[:db/transact [(cond-> [:db/retract eid attr]
                                            value (conj value))]]])))

(nxr/register-action! :route/home
                      (fn [state]
                        (when goog.DEBUG (f-util/clog "register-action! :route/home"))
                        (when goog.DEBUG (f-util/clog "register-action! :route/home, state: " state))
                        (let [page-id (:db/id (:app/page (ds/pull state '[{:app/page [:db/id]}] :app)))]
                          [[:db/transact [[:db/add page-id :page/navigated {:page :home}]]]])))



(nxr/register-action! :add/products
                      (fn [_state params]
                        (when goog.DEBUG (f-util/clog "register-action! :add/products, params:" params))
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
                          (when goog.DEBUG (f-util/clog "action :add/products, products to transact:" products))
                          [[:db/transact products]])))


(nxr/register-action! :route/products
                      (fn [state params]
                        (when goog.DEBUG (f-util/clog "register-action! :route/products, params:" params))
                        (let [pg (:pg params)
                              page-id (:db/id (:app/page (ds/pull state '[{:app/page [:db/id]}] :app)))
                              ;; Check if we have any products for this pg
                              has-products? (seq (ds/q '[:find [?e ...]
                                                         :in $ ?pg
                                                         :where
                                                         [?e :product/pg ?pg-ref]
                                                         [?pg-ref :pg/id ?pg]]
                                                       state pg))]
                          (when goog.DEBUG (f-util/clog "register-action! :route/products, has-products?:" has-products?))
                          (if has-products?
                            ;; Products already exist, just navigate
                            (do
                              (when goog.DEBUG (f-util/clog "register-action! :route/products, products already fetched"))
                              [[:db/transact [[:db/add page-id :page/navigated {:page :products, :pg pg}]]]])
                            ;; No products yet, fetch them first then navigate
                            (let [pg-config (ds/pull state '[*] [:pg/id pg])
                                  query-api (:pg/query-api pg-config)]
                              (when goog.DEBUG (f-util/clog "register-action! :route/products, fetching products for:" pg))
                              [[:backend/fetch {:api query-api :pg pg}]
                               [:db/transact [[:db/add page-id :page/navigated {:page :products, :pg pg}]]]])))))


(nxr/register-action! :route/product
                      (fn [state params]
                        (when goog.DEBUG (f-util/clog "register-action! :route/product, params:" params))
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
                          (when goog.DEBUG (f-util/clog "register-action! :route/product, has-products?:" has-products?))
                          (if has-products?
                            ;; Products already exist, just navigate to the specific product
                            (do
                              (when goog.DEBUG (f-util/clog "register-action! :route/product, showing product:" id))
                              [[:db/transact [[:db/add page-id :page/navigated {:page :product, :pg pg, :id id}]]]])
                            ;; No products yet, fetch them first then navigate to the product
                            (let [pg-config (ds/pull state '[*] [:pg/id pg])
                                  query-api (:pg/query-api pg-config)]
                              (when goog.DEBUG (f-util/clog "register-action! :route/product, fetching products for:" pg))
                              [[:backend/fetch {:api query-api :pg pg}]
                               [:db/transact [[:db/add page-id :page/navigated {:page :product, :pg pg, :id id}]]]])))))


(nxr/register-action! :route/new
                      (fn [state params]
                        (when goog.DEBUG (f-util/clog "register-action! :route/new, params:" params))
                        (let [pg (:pg params)
                              page-id (:db/id (:app/page (ds/pull state '[{:app/page [:db/id]}] :app)))]
                          [[:db/transact [[:db/add page-id :page/navigated {:page :new, :pg pg}]]]])))



;; NOTE: Fetch and post needs to be effects, since they make http get and post which are a side-effects.
(nxr/register-effect! :backend/fetch
                      (fn [_ system params]
                        (when goog.DEBUG (f-util/clog "effect :backend/fetch, params:" params))
                        (f-http/fetch system params)))


(nxr/register-effect! :backend/post
                      (fn [_ system params]
                        (when goog.DEBUG (f-util/clog "effect :backend/post, params:" params))
                        (f-http/post system params)))


(defn ^:export init! []
  (when goog.DEBUG (f-util/clog "init!"))
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
             view-state {:pg-config (:app/pg-config app)
                         :page (get-in app [:app/page :page/navigated])
                         :started-at (:app/started-at app)
                         :products products
                         :new-product new-product
                         :validation-error validation-error
                         :product-created product-created}]
         (when goog.DEBUG (f-util/clog "view-state:" view-state))
         (r/render !el
                   (f-views/view view-state)))))
    
    ;; Add dataspex, see: https://chromewebstore.google.com/detail/dataspex/blgomkhaagnapapellmdfelmohbalneo
    (dataspex/inspect "App state" !conn)
    ;; Tell replicant to use the Nexus dispatch mechanism.
    (r/set-dispatch!
     (fn [dispatch-data actions]
       (nxr/dispatch system dispatch-data actions)))
    ;; Initialize routes.
    (f-routes/start! f-routes/routes system)
    ; Trigger initial render as in the replicant-state-datascript example.
    (ds/transact! !conn
                  [[:db/add :app :app/started-at (js/Date.)]])))


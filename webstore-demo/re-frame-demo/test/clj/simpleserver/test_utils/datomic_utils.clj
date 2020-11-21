(ns simpleserver.test-utils.datomic-utils
  (:require [simpleserver.test-utils.test-data :as test-data]
            [simpleserver.test-utils.test-service :as test-service]
            [clojure.tools.logging :as log]
            [datomic.api :as d])
  )


;; ******************************************************
;; Domain

(defn- init-product-groups-table [conn product-groups]
  (log/debug "ENTER init-product-groups-table")
  (let [product-group-datoms (mapv
                               (fn [item]
                                 (let [k (key item)
                                       v (val item)]
                                   {:domain.product-group/id (Long/parseLong k)
                                    :domain.product-group/name v}))
                               product-groups)]
    @(d/transact conn product-group-datoms)))

(defn- init-product-table [conn products]
  (log/debug "ENTER init-product-table")
  (let [product-datoms (mapv (fn [product]
                               (let [p-id (Long/parseLong (nth product 0))
                                     pg-id (Long/parseLong (nth product 1))
                                     title (nth product 2)
                                     price (Double/parseDouble (nth product 3))
                                     a_or_d (nth product 4)
                                     year (Long/parseLong (nth product 5))
                                     country (nth product 6)
                                     g_or_l (nth product 7)
                                     ]
                                 {:domain.product/id p-id
                                  :domain.product/pg-id pg-id
                                  :domain.product/title title
                                  :domain.product/price price
                                  :domain.product/a_or_d a_or_d
                                  :domain.product/year year
                                  :domain.product/country country
                                  :domain.product/g_or_l g_or_l}))
                             products)]
    @(d/transact conn product-datoms)))

(defn- empty-domain-tables [_]
  (log/debug "ENTER empty-domain-tables"))

(defmethod test-service/init-domain :datomic [env]
  (log/debug "ENTER init-domain")
  (if (= (:profile env) :test)
    (let [conn (get-in env [:service :domain :conn])]
      (empty-domain-tables conn)
      (init-product-groups-table conn (test-data/product-groups))
      (doseq [pg-id (keys (test-data/product-groups))]
        (let [products (test-data/raw-products pg-id)]
          (init-product-table conn products))))
    (throw (java.lang.UnsupportedOperationException. "You can reset domain only in test environment!"))))


;; ******************************************************
;; Session

(defmethod test-service/get-sessions :datomic [env]
  (log/debug "ENTER get-sessions")
  (let [token-ids (d/q '[:find ?token
                         :where [_ :session.session/token ?token]]
                       (d/db (get-in env [:service :domain :conn])))]
    (reduce (fn [s [token-id]]
              (conj s token-id))
            #{}
            token-ids)))

(defmethod test-service/reset-sessions! :datomic [env]
  (log/debug "ENTER reset-sessions!")
  (if (= (:profile env) :test)
    (let [conn (get-in env [:service :domain :conn])
          token-ids (d/q '[:find ?id
                           :where
                           [?id :session.session/token]]
                         (d/db conn))]
      (doseq [token-id token-ids]
        @(d/transact conn [[:db.fn/retractEntity (first token-id)]])))
    (throw (java.lang.UnsupportedOperationException. "You can reset sessions only in test environment!"))))


;; ******************************************************
;; User

(defn convert-users [raw-users]
  (map (fn [[id email first-name last-name hashed-password]]
         {:userid id
          :email email
          :first-name first-name
          :last-name last-name
          :hashed-password hashed-password})
       raw-users))

(defmethod test-service/get-users :datomic [env]
  (log/debug (str "ENTER -get-users"))
  (let [conn (get-in env [:service :session :conn])
        raw-users (d/q '[:find ?id ?email ?first-name ?last-name ?hashed-password
                         :where
                         [?e :user.user/id ?id]
                         [?e :user.user/email ?email]
                         [?e :user.user/first-name ?first-name]
                         [?e :user.user/last-name ?last-name]
                         [?e :user.user/hashed-password ?hashed-password]]
                       (d/db conn))]
    (convert-users raw-users)))

(defmethod test-service/reset-users! :datomic [env]
  (log/debug (str "ENTER -reset-users!"))
  (if (= (:profile env) :test)
    (let [conn (get-in env [:service :user :conn])
          old-user-ids (d/q '[:find ?id
                              :where
                              [?id :user.user/id]]
                            (d/db conn))
          new-users (mapv (fn [user]
                            {:user.user/id (:userid user)
                             :user.user/email (:email user)
                             :user.user/first-name (:first-name user)
                             :user.user/last-name (:last-name user)
                             :user.user/hashed-password (:hashed-password user)})
                          (vals (test-data/users)))]
      (doseq [user-id old-user-ids]
        @(d/transact conn [[:db.fn/retractEntity (first user-id)]]))
      @(d/transact conn new-users))
    (throw (java.lang.UnsupportedOperationException. "You can reset users only in test environment!")))
  )

(comment
  (test-service/get-users (simpleserver.test-config/test-env))


  (simpleserver.test-config/go)
  (simpleserver.test-config/test-env)
  (test-service/reset-users! (simpleserver.test-config/test-env))
  (test-service/get-users (simpleserver.test-config/test-env))

  (test-service/init-domain (simpleserver.test-config/test-env))
  (simpleserver.test-config/halt)

  (test-service/get-sessions (simpleserver.test-config/test-env))
  (test-service/reset-sessions! (simpleserver.test-config/test-env))

  (test-data/raw-products "2")

  (d/q '[:find ?name
         :where [_ :domain.product-group/name ?name]]
       (d/db (get-in (simpleserver.test-config/test-env) [:service :domain :conn])))
  (d/q '[:find ?title
         :where [_ :domain.product/title ?title]]
       (d/db (get-in (simpleserver.test-config/test-env) [:service :domain :conn])))

  )


(ns simpleserver.test-utils.dynamodb-utils
  (:require [simpleserver.test-utils.test-data :as test-data]
            [simpleserver.test-utils.test-service :as test-service]
            [simpleserver.service.user.user-common :as ss-user-common]
            [cognitect.aws.client.api :as aws]
            [clojure.tools.logging :as log]))


;; ******************************************************
;; Domain

(defn- init-product-groups-table [client product-groups-table product-groups]
  (log/debug "ENTER init-product-groups-table")
  (doseq [pg product-groups]
    (let [ret (aws/invoke client {:op :PutItem
                                  :request {:TableName product-groups-table
                                            :Item {"pgid" {:S (first pg)}
                                                   "pgname" {:S (second pg)}}}})]
      (if (not (empty? ret))
        (throw (ex-info "Failed to put product-groups" ret))))))


(defn- init-product-table [client product-table products]
  (log/debug "ENTER init-product-table")
  (doseq [product products]
    (let [ret (aws/invoke client {:op :PutItem
                                  :request {:TableName product-table
                                            :Item {"pid" {:S (nth product 0)}
                                                   "pgid" {:S (nth product 1)}
                                                   "title" {:S (nth product 2)}
                                                   "price" {:S (nth product 3)}
                                                   "a_or_d" {:S (nth product 4)}
                                                   "year" {:S (nth product 5)}
                                                   "country" {:S (nth product 6)}
                                                   "g_or_l" {:S (nth product 7)}}}})]
      (if (not (empty? ret))
        (throw (ex-info "Failed to put products" ret))))))

(defmethod test-service/init-domain :ddb [env]
  (log/debug "ENTER init-domain")
  (let [client (get-in env [:service :domain :db :client])
        product-groups-table (get-in env [:service :domain :db :tables :product-group])
        product-table (get-in env [:service :domain :db :tables :product])]
    (init-product-groups-table client product-groups-table (test-data/product-groups))
    (doseq [pg-id (keys (test-data/product-groups))]
      (let [products (test-data/raw-products pg-id)]
        (init-product-table client product-table products)))))

;; ******************************************************
;; Session

(defmethod test-service/get-sessions :ddb [env]
  (log/debug "ENTER get-sessions")
  (let [items (aws/invoke (get-in env [:service :session :db :client]) {:op :Scan
                                                                        :request {:TableName (get-in env [:service :session :db :tables :session])}})]
    (reduce (fn [sessions session]
              (conj sessions (get-in session [:token :S])))
            #{}
            (items :Items))))

(defn- remove-token! [db token]
  (log/debug "ENTER remove-token:")
  (let [result (aws/invoke (:client db) {:op :DeleteItem
                                         :request {:TableName (get-in db [:tables :session])
                                                   :Key {"token" {:S token}}}})]
    (if (:__type result)
      (throw (ex-info "Failed to get token" result))
      result)))

(defmethod test-service/reset-sessions! :ddb [env]
  (log/debug "ENTER reset-sessions!")
  (if (= (:profile env) :test)
    (let [db (get-in env [:service :session :db])
          sessions (test-service/get-sessions env)]
      (dorun (map (partial remove-token! db) sessions)))
    (throw (java.lang.UnsupportedOperationException. "You can reset sessions only in test environment!"))))

;; ******************************************************
;; User

(defn- get-converted-users
  [raw-users]
  (map (fn [item]
         item
         (let [user-id (get-in item [:userid :S])
               email (get-in item [:email :S])
               first-name (get-in item [:firstname :S])
               last-name (get-in item [:lastname :S])
               hashed-password (get-in item [:hpwd :S])]
           {:userid user-id
            :email email
            :first-name first-name
            :last-name last-name
            :hashed-password hashed-password}))
       (:Items raw-users)))

(defn- add-new-user-without-hashing-password!
  [env my-ddb my-table email first-name last-name password]
  (log/debug (str "ENTER add-new-user"))
  (let [new-id (ss-user-common/uuid)
        request {:TableName my-table
                 :Item {"userid" {:S new-id}
                        "email" {:S email}
                        "firstname" {:S first-name}
                        "lastname" {:S last-name}
                        "hpwd" {:S password}}}
        ret (aws/invoke my-ddb {:op :PutItem
                                :request request})]
    (if (:__type ret)
      (throw (ex-info "Failed to add new user without hashing password" ret))
      {:email email, :ret :ok})))

(defmethod test-service/get-users :ddb [env]
  (log/debug (str "ENTER -get-users"))
  (let [db (get-in env [:service :user :db])
        raw-users (aws/invoke (:client db) {:op :Scan
                                            :request {:TableName (get-in db [:tables :users])}})
        converted-users (get-converted-users raw-users)]
    (if (:__type raw-users)
      (throw (ex-info "Failed to get raw users" raw-users))
      (reduce (fn [users user]
                (assoc users (:userid user) user))
              {}
              converted-users))))

(defmethod test-service/reset-users! :ddb [env]
  (log/debug (str "ENTER -reset-users!"))
  (if (= (:profile env) :test)
    (let [db (get-in env [:service :user :db])]
      (let [users-to-delete (test-service/get-users env)
            emails-to-delete (map (fn [item]
                                    (:email (second item)))
                                  users-to-delete)
            initial-users (test-data/users)]
        (dorun (map (fn [email]
                      (let [ret (aws/invoke (:client db) {:op :DeleteItem
                                                          :request {
                                                                    :TableName (get-in db [:tables :users])
                                                                    :Key {"email" {:S email}}}})]
                        (if (:__type ret)
                          (throw (ex-info "Failed to delete user" ret))
                          ret)))
                    emails-to-delete))
        (dorun (map (fn [user]
                      (let [user-map (second user)]
                        (add-new-user-without-hashing-password!
                          env
                          (:client db)
                          (get-in db [:tables :users])
                          (:email user-map)
                          (:first-name user-map)
                          (:last-name user-map)
                          (:hashed-password user-map))))
                    initial-users))))
    (throw (java.lang.UnsupportedOperationException. "You can reset users only in test environment!"))))

(comment
  (simpleserver.test-config/go)
  (reset-users! (simpleserver.test-config/test-env))

  (get-users (simpleserver.test-config/test-env))

  (reset-sessions! (simpleserver.test-config/test-env))
  (simpleserver.test-config/test-env)
  (get-sessions (simpleserver.test-config/test-env))

  (init-domain (simpleserver.test-config/test-env))
  )
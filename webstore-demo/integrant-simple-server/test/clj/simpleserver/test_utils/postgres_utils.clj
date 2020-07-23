(ns simpleserver.test-utils.postgres-utils
  (:require [simpleserver.test-utils.test-data :as test-data]
            [simpleserver.test-utils.test-service :as test-service]
            [clojure.tools.logging :as log]
            [next.jdbc :as jdbc]
            [next.jdbc.sql :as sql]))

;; ******************************************************
;; Domain

(defn- init-product-groups-table [db product-groups]
  (log/debug "ENTER init-product-groups-table")
  (with-open [connection (jdbc/get-connection (:datasource db))]
    (jdbc/execute-one! connection ["DELETE FROM product_group"])
    (doseq [pg product-groups]
      (sql/insert! connection :product_group {:id (first pg), :name (second pg)}))))

;; Before tests we just inject the test data to the "csv database" (atom in Integrant test system).
(defmethod test-service/init-domain :postgres [env]
  (log/debug "ENTER init-domain")
  (if (= (:profile env) :test)
    (let [db (get-in env [:service :domain :db])]
      (init-product-groups-table db (test-data/product-groups)))
    (throw (java.lang.UnsupportedOperationException. "You can reset sessions only in test environment!")))

  )

;; ******************************************************
;; Session

(defmethod test-service/get-sessions :postgres [env]
  (log/debug "ENTER get-sessions")
  )

(defmethod test-service/reset-sessions! :postgres [env]
  (log/debug "ENTER reset-sessions!")
  )

;; ******************************************************
;; User

(defmethod test-service/get-users :postgres [env]
  (log/debug (str "ENTER -get-users"))
  )

(defmethod test-service/reset-users! :postgres [env]
  (log/debug (str "ENTER -reset-users!"))
  )

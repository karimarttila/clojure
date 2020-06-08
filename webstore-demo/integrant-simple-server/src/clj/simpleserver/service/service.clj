(ns simpleserver.service.service
  (:require [clojure.tools.logging :as log]
            [simpleserver.service.domain.domain-csv :as domain-csv]
            [simpleserver.service.domain.domain-dynamodb :as domain-ddb]
            [simpleserver.service.session.session-csv :as session-csv]
            [simpleserver.service.session.session-dynamodb :as session-ddb]
            [simpleserver.service.user.user-csv :as user-csv]
            [simpleserver.service.user.user-dynamodb :as user-ddb]
            [simpleserver.service.dynamodb-config :as ddb-config]
            ))


(defn- get-domain
  "Gets domain environment."
  [db  csv-datadir ddb-config]
  ; We could use some fancy multimethod dispatch or even create a fancy macro
  ; which creates the domain entity based on some record name we get from the configuration.
  ; But let's make a simple cond and not make things look too complex
  ; based on some open configuration idea what we don't actually need here.
  (log/debug (str "ENTER get-domain, db: " db))
  (let [{:keys [ddb] {:keys [product-group product]} :tables} ddb-config]
    (cond
      (= db :csv) (domain-csv/->CsvR  csv-datadir)
      (db #{:local-ddb :aws-ddb}) (domain-ddb/->AwsDynamoDbR ddb product-group product)
      :else (throw (UnsupportedOperationException. (str "Unknown environment: " db)))
      ))
  )

(defn- get-session
  "Gets session environment."
  [db ddb-config]
  (log/debug (str "ENTER get-session, db: " db))
  (let [{:keys [ddb] {:keys [session]} :tables} ddb-config]
    (cond
      (= db :csv) (session-csv/->CsvR)
      (db #{:local-ddb :aws-ddb}) (session-ddb/->AwsDynamoDbR ddb session)
      :else (throw (UnsupportedOperationException. (str "Unknown environment: " db)))
      ))
  )

(defn- get-user
  "Gets user environment."
  [db ddb-config]
  (log/debug (str "ENTER get-user, db: " db))
  (let [{:keys [ddb] {:keys [users]} :tables} ddb-config]
    (cond
      (= db :csv) (user-csv/->CsvR)
      (db #{:local-ddb :aws-ddb}) (user-ddb/->AwsDynamoDbR ddb users)
      :else (throw (UnsupportedOperationException. (str "Unknown environment: " db)))
      ))
  )

(defn get-service-config
  "Gets service entities for given db request (:csv, :local-ddb...).
  Integrant calls this function to get service for server."
  [config]
  (let [db (:active-db config)
        csv-datadir (get-in config [:db :csv :data-dir])
        ddb-config (ddb-config/get-dynamodb-config config)]
    {:domain  (get-domain db csv-datadir ddb-config)
     :session (get-session db ddb-config)
     :user    (get-user db ddb-config)}))

(defn get-service
  "Gets requested service given by service-key from environment."
  [env service-key]
  (let [service-entity (:service env)]
    (service-key service-entity)))

(comment
  #_(get-service
    (simpleserver.util.config/get-config))
  )
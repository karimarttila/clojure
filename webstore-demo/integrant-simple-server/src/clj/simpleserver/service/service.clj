(ns simpleserver.service.service
  (:require [clojure.tools.logging :as log]
            [simpleserver.service.domain.domain-csv :as domain-csv]
            [simpleserver.service.domain.domain-dynamodb :as domain-ddb]
            [simpleserver.service.session.session-csv :as session-csv]
            [simpleserver.service.session.session-dynamodb :as session-ddb]
            [simpleserver.service.user.user-csv :as user-csv]
            [simpleserver.service.user.user-dynamodb :as user-ddb]
            [simpleserver.service.dynamodb-config :as ddb-config]))


(defn- get-domain
  "Gets domain environment."
  [active-db csv local-ddb]
  ; We could use some fancy multimethod dispatch or even create a fancy macro
  ; which creates the domain entity based on some record name we get from the configuration.
  ; But let's make a simple cond and not make things look too complex
  ; based on some open configuration idea what we don't actually need here.
  (log/debug (str "ENTER get-domain, active-db: " active-db))
  (cond
    (= active-db :csv) (domain-csv/->CsvR csv)
    (active-db #{:local-ddb :aws-ddb}) (domain-ddb/->AwsDynamoDbR local-ddb "TODO-KORJAA" "TODO-KORJAA")
    :else (throw (UnsupportedOperationException. (str "Unknown data store: " active-db)))))

(defn- get-session
  "Gets session environment."
  [active-db csv local-ddb]
  (log/debug (str "ENTER get-session, active-db: " active-db))
  (cond
    (= active-db :csv) (session-csv/->CsvR csv)
    (active-db #{:local-ddb :aws-ddb}) (session-ddb/->AwsDynamoDbR "TODO-KORJAA" "TODO-KORJAA")
    :else (throw (UnsupportedOperationException. (str "Unknown data store: " active-db)))))

(defn- get-user
  "Gets user environment."
  [active-db csv local-ddb]
  (log/debug (str "ENTER get-user, active-db: " active-db))
  (cond
    (= active-db :csv) (user-csv/->CsvR csv)
    (active-db #{:local-ddb :aws-ddb}) (user-ddb/->AwsDynamoDbR "TODO-KORJAA" "TODO-KORJAA")
    :else (throw (UnsupportedOperationException. (str "Unknown data store: " active-db)))))

(defn get-service-config
  "Gets service entities for given db request (:csv, :local-ddb...).
  Integrant calls this function to get service for server."
  [active-db csv local-ddb]
  (log/debug (str "ENTER get-service-config, active-db: " active-db))
  {:domain (get-domain active-db csv local-ddb)
   :session (get-session active-db csv local-ddb)
   :user (get-user active-db csv local-ddb)
   })

(defn get-service
  "Gets requested service given by service-key from environment."
  [env service-key]
  (let [service-entity (:service env)]
    (service-key service-entity)))

#_(comment
    (get-service
      (simpleserver.util.config/get-config))
    )
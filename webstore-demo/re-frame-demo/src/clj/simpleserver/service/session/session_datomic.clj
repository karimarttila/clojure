(ns simpleserver.service.session.session-datomic
  (:require [clojure.tools.logging :as log]
            [datomic.api :as d]
            [simpleserver.service.session.session-interface :as ss-session-i]
            [simpleserver.service.session.session-common :as ss-session-common]))

(defn get-token
  [token conn]
  (first (d/q '[:find ?token
                :in $ ?token
                :where [?e :session.session/token ?token]]
              (d/db conn) token)))

(defn remove-token!
  [token conn]
  (let [id (first (d/q '[:find ?id
                         :in $ ?token
                         :where
                         [?id :session.session/token ?token]]
                       (d/db conn) token))]
    @(d/transact conn [[:db.fn/retractEntity id]])))

(defrecord DatomicR [conn]
  ss-session-i/SessionInterface

  (create-json-web-token
    [_ env email]
    (log/debug (str "ENTER create-json-web-token, email: " email))
    (let [json-web-token (ss-session-common/create-json-web-token env email)]
      @(d/transact conn [{:session.session/token json-web-token}])
      json-web-token))

  (validate-token
    [_ _ token]
    (log/debug (str "ENTER validate-token, token: " token))
    (ss-session-common/validate-token token conn get-token remove-token!)))


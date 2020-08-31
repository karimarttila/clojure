(ns simpleserver.service.session.session-postgres
  (:require [hugsql.core :as hugsql]
            [clojure.tools.logging :as log]
            [simpleserver.service.session.session-interface :as ss-session-i]
            [simpleserver.service.session.session-common :as ss-session-common]))

(declare sql-get-token)
(declare sql-insert-token)
(declare sql-remove-token)

(hugsql/def-db-fns "simpleserver/service/session/session-postgres.sql" {:quoting :ansi})

(defn get-token
  [token db]
  (if-let [ret (:token (sql-get-token db {:token token}))]
    ret
    (throw (ex-info "Failed to get token: " {:token token}))))

(defn remove-token!
  [token db]
  (let [ret (sql-remove-token db {:token token})]
    (if (= ret 1)
      token
      (throw (ex-info "Failed to remove token" {:token token})))))

(defrecord PostgresR [db]
  ss-session-i/SessionInterface

  (create-json-web-token
    [_ env email]
    (log/debug (str "ENTER create-json-web-token, email: " email))
    (let [json-web-token (ss-session-common/create-json-web-token env email)]
      (sql-insert-token db {:token json-web-token})
      json-web-token))

  (validate-token
    [_ _ token]
    (log/debug (str "ENTER validate-token, token: " token))
    (ss-session-common/validate-token token db get-token remove-token!)))



(comment
  (simpleserver.test-config/go)
  (simpleserver.test-config/halt)
  (simpleserver.test-config/test-env)
  (do
    (simpleserver.test-config/go)
    (let [db (get-in (simpleserver.test-config/test-env) [:service :domain :db])]
      (:token (sql-get-token db {:token "asdf"}))))
  (do
    (simpleserver.test-config/go)
    (let [db (get-in (simpleserver.test-config/test-env) [:service :domain :db])]
      (sql-remove-token db {:token "asdf"})))
  )
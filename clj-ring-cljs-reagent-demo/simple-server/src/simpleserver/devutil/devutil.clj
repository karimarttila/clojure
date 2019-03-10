(ns simpleserver.devutil.devutil
  (:require [clojure.tools.namespace.repl :as tools-repl]))

;; Experimenting if this could be a workaround for the issue that
;; refreshing genclass namespaces fail.
(defn my-refresh
  []
  (tools-repl/refresh)
  (load "../util/azuregenclass/product")
  (load "../util/azuregenclass/productgroup")
  (load "../util/azuregenclass/session")
  (load "../util/azuregenclass/users")
  (load "../userdb/users_table_storage")
  (load "../domaindb/domain_table_storage")
  (load "../sessiondb/session_table_storage")
  )



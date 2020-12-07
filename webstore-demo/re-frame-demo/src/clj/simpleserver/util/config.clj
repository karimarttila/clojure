(ns simpleserver.util.config
  (:require
    [aero.core :as aero]
    [clojure.java.io :as io]))                                     ;; clj-kondo requires this?

(defn create-config
  []
  (aero/read-config (io/resource "config.edn")))


;; Commented out for clj-kondo
;; Testing locally.
#_(comment
    (def config (create-config))
    (def table-name "session")
    (def my-env :dev)
    (def my-table-prefix "ss")
    )





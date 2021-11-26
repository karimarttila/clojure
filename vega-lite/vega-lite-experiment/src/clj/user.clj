(ns user
  (:require [integrant.repl :as igr :refer [clear go halt prep init reset reset-all]]
            [integrant.repl.state :as state]
            [clojure.tools.namespace.repl :as repl]
            [kaocha.repl :as kaocha]
            [kaocha.report]
            [vega.backend.main :as main]))


; Original:
;(igr/set-prep! main/system-config)

(igr/set-prep!
  (fn []
    ;(prn (str "Namespace before in-ns: " *ns*))
    (in-ns 'user)
    ;(prn (str "Namespace before require: " *ns*))
    (require 'user)
    ;(prn (str "Namespace after require: " *ns*))
    (let [reply (main/system-config)]
      ;(prn (str "Namespace after system-config: " *ns*))
      reply)))

(defn system [] (or state/system (throw (ex-info "System not running" {}))))

(defn env [] (:backend/env (system)))

(comment
  (user/system)
  (user/env)
  (igr/reset)
  )



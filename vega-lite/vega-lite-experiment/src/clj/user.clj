(ns user
  (:require [integrant.repl :refer [clear go halt prep init reset reset-all]]
            [integrant.repl.state :as state]
            [clojure.tools.namespace.repl :as repl]
            [vega.backend.main :as main]))


(integrant.repl/set-prep! main/system-config)

(defn system [] (or state/system (throw (ex-info "System not running" {}))))

(defn env [] (:backend/env (system)))

(comment
  (user/system)
  (user/env)
  )

(ns user
  (:require [integrant.repl :refer [clear go halt prep init reset reset-all]]
            [integrant.repl.state :as state]
            [simpleserver.core :as core]))

(integrant.repl/set-prep! core/system-config)

;; Taken from one Metosin example.
(defn system [] (or state/system (throw (ex-info "System not running" {}))))


(comment
  (system)
  (prep)
  (init)
  (go)
  (halt)
  (reset)
  (reset-all)

)
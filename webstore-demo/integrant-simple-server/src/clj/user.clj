(ns user
  (:require [integrant.repl]                               ;; :refer [clear go halt prep init reset reset-all]
            [integrant.repl.state :as state]
            [simpleserver.core :as core]))

(integrant.repl/set-prep! core/system-config)

(defn system [] (or state/system (throw (ex-info "System not running" {}))))

;; NOTE: In Cursive, Integrant hot keys are:
;; M-h: go
;; M-j: reset
;; M-k: halt


#_(comment
    (user/my-reset)
    (user/my-go)
    (user/my-halt)
    state/system
    (system)
    )
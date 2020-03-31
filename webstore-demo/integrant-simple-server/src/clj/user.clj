(ns user
  (:require [integrant.repl :refer [clear go halt prep init reset reset-all]]
            [integrant.repl.state :as state]
            [simpleserver.core :as core]))

(integrant.repl/set-prep! core/system-config)

;; Taken from one Metosin example.
(defn system [] (or state/system (throw (ex-info "System not running" {}))))

;(defn web-server-state [] (::main/web-server (system)))

(defn my-reset
  []
  (reset))

(defn my-go
  []
  (go))

(comment
  state/system
  (system)
  (keys (ns-publics 'user))
  *ns*
  (my-reset)
  (system)
  (clear)
  (prep)
  (init)
  (go)
  (halt)
  (reset)
  (reset-all)
  (core/jee)
)
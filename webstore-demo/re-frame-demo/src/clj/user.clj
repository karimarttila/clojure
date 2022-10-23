(ns user
  (:require [integrant.repl :refer [reset]]
            ;[integrant.repl :refer [clear go halt prep init reset reset-all]]
            [integrant.repl.state :as state]
            [simpleserver.core :as core]))

(integrant.repl/set-prep! core/system-config-start)

(defn system [] (or state/system (throw (ex-info "System not running" {}))))

(defn env [] (:backend/env (system)))
(defn service [] (:service (env)))

(defn my-dummy-reset []
  (reset))

;; NOTE: In Cursive, Integrant hot keys are:
;; M-h: go
;; M-j: reset
;; M-k: halt

; In Calva the Integrant hot keys are:
;; ctlr+T alt+h: go
;; M-j: reset
;; ctlr+T alt+k: halt


(comment
  (user/system)
  (user/env)
   ; alt+j hotkey in Cursive
  (integrant.repl/reset)
  )


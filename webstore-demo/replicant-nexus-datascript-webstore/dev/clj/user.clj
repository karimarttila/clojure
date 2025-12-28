(ns user
  {:clj-kondo/config {:linters {:unused-referred-var {:level :off}}}} 
  (:require [integrant.repl :refer [clear go halt prep init reset reset-all]]
            [integrant.repl.state :as state]
            ))

;; https://github.com/AbhinavOmprakash/snitch
#_{:clj-kondo/ignore [:unused-namespace]}
(require '[snitch.core :refer [defn* defmethod* *fn *let]])


(integrant.repl/set-prep! (fn []
                            ((requiring-resolve 'backend.main/system-config))))

(defn system [] (or state/system
                    (throw (ex-info "System not running" {}))))

(defn env [] (system))



(comment

  (env)
  (system)
  (halt)
  (go)
  (clear)
  (halt)
  (prep)
  (init)
  (reset)
  (reset-all)

  )


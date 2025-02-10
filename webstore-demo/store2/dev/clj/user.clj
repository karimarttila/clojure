(ns user
  (:require [integrant.repl :refer [clear go halt prep init reset reset-all]]
            [integrant.repl.state :as state]
            ))


(integrant.repl/set-prep! (fn []
                            ((requiring-resolve 'backend.main/system-config))))

(defn system [] (or state/system
                    (throw (ex-info "System not running" {}))))

(defn env [] (system))



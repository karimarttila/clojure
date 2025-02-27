(ns user
  (:require [integrant.repl :refer [clear go halt prep init reset reset-all]]
            [integrant.repl.state :as state]
            ))


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
  )


(comment
  
  (-> (env)
      :db/tsv
      deref
      :books
      first
      )
  ;;=> {:id 2001,
  ;;    :product-group 1,
  ;;    :title "Kalevala",
  ;;    :price 3.95,
  ;;    :author "Elias Lönnrot",
  ;;    :year 1835,
  ;;    :country "Finland",
  ;;    :language "Finnish"}
  
  )



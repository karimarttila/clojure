(ns worldstat.backend.data.world
  (:require [clojure.tools.logging :as log]
            [jsonista.core :as jsonista]
            [worldstat.common.data.filter :as wf]))

;; Using the example in https://vega.github.io/vega/examples/world-map/
;; + minor tuning.

(defn enrich-world-data [env metric]
  (-> (slurp "resources/public/data/world-110m.json")
      jsonista/read-value))

(defn get-metric-names [env]
  (log/debug "ENTER get-metric-names")
  {:metric-names (get-in env [:data :series-codes])})

(defn get-years [env]
  (log/debug "ENTER get-years")
  {:years (sort (get-in env [:data :years]))})

(defn get-world-data [env metric]
  (log/debug "ENTER get-world-data, metric: " metric)
  {:metric metric
   :points (transduce (comp (wf/filter-by-metric metric)) conj (get-in env [:data :points]))})

(comment
  (keys (:data (user/env)))
  (get-in (user/env) [:data :points])
  )

(ns worldstat.backend.data.world
  (:require [clojure.tools.logging :as log]
            [kixi.stats.core :as kixi]
            [worldstat.common.data.filter :as wf]))

;; Using the example in https://vega.github.io/vega/examples/world-map/
;; + minor tuning.

(defn get-metric-names [env]
  (log/debug "ENTER get-metric-names")
  {:metric-names (get-in env [:data :series-codes])})

(defn get-years [env]
  (log/debug "ENTER get-years")
  {:years (sort (get-in env [:data :years]))})

(defn get-world-data [env metric]
  (log/debug "ENTER get-world-data, metric: " metric)
  (let [metric-name (metric (get-in env [:data :series-codes]))
        points (transduce (comp (wf/filter-by-metric metric)) conj (get-in env [:data :points]))]
    {:metric metric
     :metric-name metric-name
     :points points
     :min (transduce (map :value) kixi/min points)
     :max (transduce (map :value) kixi/max points)
     :mean (transduce (map :value) kixi/mean points)
     :standard-deviation (transduce (map :value) kixi/standard-deviation points)}
    ))

(comment
  (keys (:data (user/env)))
  (get-in (user/env) [:data :points])
  )

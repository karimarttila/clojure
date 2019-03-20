(ns simpleserver.devutil.devutil
  (:require [clojure.tools.namespace.repl :as tools-repl]))


(defn my-refresh
  []
  (tools-repl/refresh)
  )



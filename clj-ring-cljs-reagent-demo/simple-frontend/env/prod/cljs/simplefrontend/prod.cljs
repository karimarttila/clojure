(ns simplefrontend.prod
  (:require
    [simplefrontend.core :as core]))

;;ignore println statements in prod
(set! *print-fn* (fn [& _]))

(core/init!)

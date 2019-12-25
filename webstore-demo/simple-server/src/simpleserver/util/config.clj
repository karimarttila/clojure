(ns simpleserver.util.config
  (:require
    [maailma.core :as m]
    ))

(def config (m/build-config (m/resource "config.edn")))

(comment
  config
  )
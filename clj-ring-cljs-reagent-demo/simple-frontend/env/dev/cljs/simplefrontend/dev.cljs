(ns ^:figwheel-no-load simplefrontend.dev
  (:require
    [simplefrontend.core :as core]
    [devtools.core :as devtools]))


(enable-console-print!)

(devtools/install!)

(core/init!)

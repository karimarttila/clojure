(ns simplefrontend.layout
  (:require
    [simplefrontend.reagent-wrapper :as sf-rw]
    ))

(defn main-layout
  "Provides main layout for the SPA."
  [view]
  [sf-rw/grid view]
  )

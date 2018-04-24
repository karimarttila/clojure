(ns simplefrontend.reagent-wrapper
  (:require
    [cljsjs.react-bootstrap]
    [reagent.core :as r]))

(def grid (r/adapt-react-class (aget js/ReactBootstrap "Grid")))
(def col (r/adapt-react-class (aget js/ReactBootstrap "Col")))
(def row (r/adapt-react-class (aget js/ReactBootstrap "Row")))
(def table (r/adapt-react-class (aget js/ReactBootstrap "Table")))
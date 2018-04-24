(ns simplefrontend.reagent-wrapper
  (:require
    [cljsjs.react-bootstrap]
    [reagent.core :as r]))

(def jumbotron (r/adapt-react-class (aget js/ReactBootstrap "Jumbotron")))
(def grid (r/adapt-react-class (aget js/ReactBootstrap "Grid")))

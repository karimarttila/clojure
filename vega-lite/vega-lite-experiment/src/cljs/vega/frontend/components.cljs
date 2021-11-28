(ns vega.frontend.components
  (:require
    [reagent.core :as r]
    [reagent.dom :as rd]
    ["react" :as react]
    ["react-dom" :as r-dom]
    ["react-vega" :as r-vega :refer [VegaLite]]
    ["vega-embed" :as vegaEmbed]
    ["vega" :as vega]
    ["vega-lite" :as vega-lite]
    ["vega-lite-api" :as vega-lite-api :refer [vl]]
    )
  )

(def debug true)

;; ********************************************************'
;; Vega Lite API
;; As explained in https://observablehq.com/@vega/vega-lite-api#standalone_use
;; but using Clojurescript.

(defonce my-vl (.register vega-lite-api vega vega-lite #js {:view {:renderer "canvas"}}))

(defn render-it [dom-node spec]
  (js/console.log dom-node) ; See the div in browser console.
  [(-> spec
       (.render)
       (.then
         (fn [viewElement]
           (-> dom-node
               (.appendChild viewElement)))))])

(defn vega-lite-api-render
  "Reagent component that renders vega"
  [func data]
  (let [spec (func data)]
    (r/create-class
      {:display-name "vega"
       :component-did-mount (fn [this]
                              (render-it (rd/dom-node this) spec))
       :reagent-render (fn [this]
                         [:div.viz])})))

;; *****************************************************************
;; Vega-Lite React wrapper

(defn vega-lite-react-wrapper [spec]
  (r/create-element
   VegaLite
   #js {:spec spec}))

(defn vega-lite-react-wrapper-old-style [spec]
  (r/create-element
   VegaLite
   #js {:spec (clj->js spec)}))



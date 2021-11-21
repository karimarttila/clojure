(ns vega.frontend.components
  (:require
    [reagent.core :as r]
    [reagent.dom :as rd]
    ["react" :as react]
    ["vega-embed" :as vegaEmbed]
    ["vega" :as vega]
    ["vega-lite" :as vega-lite]
    ["vega-lite-api" :as vega-lite-api :refer [vl]]
    )
  )

;; ********************************************************'
;; Vega
;; From: https://github.com/metasoarous/oz

(defn- apply-log-level
  [{:as opts :keys [log-level]}]
  (if (or (keyword? log-level) (string? log-level))
    (-> opts
        (dissoc :log-level)
        (assoc :logLevel
               (case (keyword log-level)
                 :debug vega/Debug
                 :info vega/Info
                 :warn vega/Warn)))
    opts))

(def debug true)

(defn vega-debug
  "In development show the actions menu and log with debug level.
  In production logging is :none, and show only export in actions menu."
  []
  (if debug
    {:log-level :debug
     :actions {:export true, :source true, :compiled false, :editor true}}
    {:log-level :info
     :actions false}))

(defn ^:no-doc r-embed-vega
  ([elem doc] (r-embed-vega elem doc {}))
  ([elem doc {:as opts :keys [view-callback]}]
   (when doc
     (let [doc (clj->js doc)
           opts (-> opts
                    (dissoc :view-callback)
                    (->> (merge {:renderer :canvas
                                 :mode "vega-lite"}))
                    (apply-log-level))
           opts (merge {:renderer :canvas}
                       opts)]
       (-> (vegaEmbed elem doc (clj->js opts))
           (.then (fn [res]
                    (when view-callback
                      (view-callback (.-view res)))))
           (.catch (fn [err]
                     (js/console.log err))))))))

(defn r-vega
  ([doc] (r-vega doc {}))
  ([doc opts]
   (let [opts (merge {:mode "vega"} opts)]
     (r/create-class
      {:display-name "vega"
       :component-did-mount (fn [this]
                              (r-embed-vega (rd/dom-node this) doc opts))
       :component-will-update (fn [this [_ new-doc new-opts]]
                                (r-embed-vega (rd/dom-node this) new-doc new-opts))
       :reagent-render (fn [doc]
                         [:div.viz])}))))

(defn r-vega-lite
  "Reagent component that renders vega-lite."
  ([doc] (r-vega-lite doc {}))
  ([doc opts]
   ;; Which way should the merge go?
   (r-vega doc (merge opts {:mode "vega-lite"}))))


;; ********************************************************'
;; Vega Lite API


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




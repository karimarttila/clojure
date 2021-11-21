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
;; Vega<
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

(defn ^:no-doc my-embed-vega
  ([elem doc] (my-embed-vega elem doc {}))
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

(defn my-vega
  "Reagent component that renders vega"
  ([doc] (my-vega doc {}))
  ([doc opts]
   (let [opts (merge {:mode "vega"} opts)]
     (r/create-class
      {:display-name "vega"
       :component-did-mount (fn [this]
                              (my-embed-vega (rd/dom-node this) doc opts))
       :component-will-update (fn [this [_ new-doc new-opts]]
                                (my-embed-vega (rd/dom-node this) new-doc new-opts))
       :reagent-render (fn [doc]
                         [:div.viz])}))))

(defn my-vega-lite
  "Reagent component that renders vega-lite."
  ([doc] (my-vega-lite doc {}))
  ([doc opts]
   ;; Which way should the merge go?
   (my-vega doc (merge opts {:mode "vega-lite"}))))


;; ********************************************************'
;; Vega Lite API

#_(defn vega-lite-api-view
  []
  (fn []
    (let [my-vl (.register vega-lite-api vega vega-lite)]
      (-> my-vl
          (.markBar)
          (.data (clj->js [{:a "A", :b 28}, {:a "B", :b 55}, {:a "C", :b 43},
                           {:a "D", :b 91}, {:a "E", :b 81}, {:a "F", :b 53},
                           {:a "G", :b 19}, {:a "H", :b 87}, {:a "I", :b 52},
                           ]))
          (.encode
            (-> my-vl (.x) (.fieldQ "b"))
            (-> my-vl (.y) (.fieldN "a")))
          (.render)
          ))
    )
  )

(comment

  (def my-vl (.register vega-lite-api vega vega-lite  #js {:view {:renderer "canvas"}}))


  (let [my-vl (.register vega-lite-api vega vega-lite #js {:view {:renderer "canvas"}})]
    (-> my-vl
        (.markBar)
        (.data (clj->js [{:a "A", :b 28}, {:a "B", :b 55}, {:a "C", :b 43},
                         {:a "D", :b 91}, {:a "E", :b 81}, {:a "F", :b 53},
                         {:a "G", :b 19}, {:a "H", :b 87}, {:a "I", :b 52},
                         ]))
        (.encode
          (-> my-vl (.x) (.fieldQ "b"))
          (-> my-vl (.y) (.fieldN "a")))
        (.toSpec)
        ))



  )

;(comment
;  my-vega
;  my-vega-lite
;  vega
;  vega-lite
;  (sort (keys (js->clj vega-lite-api)))
;  (def my-vl-tmp (. vega-lite-api (register vega vega-lite #js {:view {:renderer "canvas"}})))
;  (def my-vl (.register vega-lite-api vega vega-lite  #js {:view {:renderer "canvas"}}))
;
;
;  (let [my-vl (.register vega-lite-api vega vega-lite #js {:view {:renderer "canvas"}})]
;    (-> my-vl
;        (.markBar)
;        (.data (clj->js [{:a "A", :b 28}, {:a "B", :b 55}, {:a "C", :b 43},
;                         {:a "D", :b 91}, {:a "E", :b 81}, {:a "F", :b 53},
;                         {:a "G", :b 19}, {:a "H", :b 87}, {:a "I", :b 52},
;                         ]))
;        (.encode
;          (-> my-vl (.x) (.fieldQ "b"))
;          (-> my-vl (.y) (.fieldN "a")))
;        (.render)
;        (.then
;          (fn [viewElement]
;            (-> js/document
;                (.getElementById "app")
;                (.appendChild viewElement)
;                )))))
;
;(-> js/document
;      (.getElementById "app")
;      (.-innerHTML)
;      (set! "clojure")
;      )
;
;
;(def my-vl (.register vega-lite-api vega vega-lite  #js {:view {:renderer "canvas"}}))
;  (-> my-vl
;      (.markBar)
;      (.data (clj->js [{:a "A", :b 28}, {:a "B", :b 55}, {:a "C", :b 43},
;                       {:a "D", :b 91}, {:a "E", :b 81}, {:a "F", :b 53},
;                       {:a "G", :b 19}, {:a "H", :b 87}, {:a "I", :b 52},
;                       ]))
;      (.encode
;        (-> my-vl (.x) (.fieldQ "b"))
;        (-> my-vl (.y) (.fieldN "a")))
;      #_(.render)
;      )
;
;  my-vl
;  )
;




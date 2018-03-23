(ns csgen.gen.generator
  (:require
    [clojure.java.io :as io]
    [clojure.tools.logging :as log]
    [clj-time.core :as time]
    [clj-time.format :as timeformat]
    [csgen.util.random :as cg-random]
    [csgen.util.prop :as cg-prop]
    [clojure.core.matrix :as cm]
    [clojure.core.matrix.stats :as cm-stats]))


(defn -get-product-groups
  "Gets product groups"
  []
  (log/trace "ENTER -get-product-groups")
  (let [group-count (cg-prop/get-int-value "group-count")
        product-groups (map (fn [n]
                              (let [group-name (cg-prop/get-str-value (str "group-name-" n))
                                    product-id-min (cg-prop/get-int-value (str "group-product-id-min-" n))
                                    product-id-max (cg-prop/get-int-value (str "group-product-id-max-" n))
                                    probability (int (* 100 (cg-prop/get-double-value (str "probability-browsing-products-in-group-" n))))
                                    group {:id             n,
                                           :name           group-name
                                           :product-id-min product-id-min,
                                           :product-id-max product-id-max
                                           :probability    probability}]
                                group))

                            (range 1 (inc (cg-prop/get-int-value "group-count"))))]
    product-groups))


(defn -count-group-probabilities
  "Counts probabilities for groups."
  [groups]
  (log/trace "ENTER -count-group-probabilities")
  (loop [ret-list []
         groups-left groups
         prob-this-far 0]
    (if (empty? groups-left)
      ret-list
      (let [group (first groups-left)
            new-prob (+ prob-this-far (:probability group))
            new-group (assoc group :probability-start (inc prob-this-far))
            new-group (assoc new-group :probability-end new-prob)
            new-list (conj ret-list new-group)]
        (recur new-list (rest groups-left) new-prob)))))


(def product-groups (-count-group-probabilities (-get-product-groups)))


(defn -draw-group-or-product-click
  "Randomly choose either product group or product click"
  []
  (log/trace "ENTER -draw-group-or-product-click")
  (let [group-probability (* 100 (cg-prop/get-double-value "probability-browsing-group"))
        randon-number (cg-random/generate-equal-integer 1 101)
        drawn (if (< randon-number group-probability)
                :browsing-group
                :browsing-product)]
    drawn))


(defn -draw-product-group
  "Randomly draws one product group"
  []
  (log/trace "ENTER -draw-product-group")
  (let [groups product-groups
        p (cg-random/generate-equal-integer 1 101)
        drawn-group (first (filter
                             (fn [group]
                               (let [min (:probability-start group)
                                     max (:probability-end group)]
                                 (and (>= p min) (<= p max))))
                             groups))]
    drawn-group))


(defn -draw-user-id
  "Draws customer id randomly using Gaussian."
  []
  (log/trace "ENTER -draw-user-id")
  (let [id-min (cg-prop/get-int-value "customer-id-min")
        id-max (cg-prop/get-int-value "customer-id-max")
        ids [id-min, id-max]
        mean (cm-stats/mean ids)
        std (cm-stats/sd ids)
        id (cg-random/generate-gaussian-integer-with-floors mean (/ std 2) id-min id-max)]
    id))


(defn -draw-product
  "Draws a product from given product group."
  [product-group]
  (log/trace "ENTER -draw-product")
  (let [pg-id (:id product-group)
        id-min (cg-prop/get-int-value (str "group-product-id-min-" pg-id))
        id-max (cg-prop/get-int-value (str "group-product-id-max-" pg-id))
        ids [id-min, id-max]
        mean (cm-stats/mean ids)
        std (cm-stats/sd ids)
        id (cg-random/generate-gaussian-integer-with-floors mean (/ std 2) id-min id-max)]
    {:id id}))


(defn -generate-product-group-click
  "Generates product group click, i.e. user is browsing certain product group (e.g. Books or Movies)."
  []
  (log/trace "ENTER -generate-product-group-click")
  (let [product-group (-draw-product-group)
        base-url (cg-prop/get-str-value "web-store-url")
        user-id (-draw-user-id)
        url (str base-url "/api/group/" (:id product-group) "?userid=" user-id)]
    url))


(defn -generate-product-click
  "Generates product click"
  []
  (log/trace "ENTER -generate-product-click")
  (let [product-group (-draw-product-group)
        product (-draw-product product-group)
        base-url (cg-prop/get-str-value "web-store-url")
        user-id (-draw-user-id)
        url (str base-url "/api/group/" (:id product-group) "/product/" (:id product) "?userid=" user-id)]

    url))


(defn generate-click
  "Generates one click using probabilities given in properties file."
  []
  (log/trace "ENTER generate-click")
  (let [browsing-part (-draw-group-or-product-click)
        click-url (if (= browsing-part :browsing-group)
                    (-generate-product-group-click)
                    (-generate-product-click))]
    click-url))

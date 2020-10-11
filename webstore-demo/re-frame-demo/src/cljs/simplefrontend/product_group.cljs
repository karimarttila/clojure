(ns simplefrontend.product-group
  (:require
    [re-frame.core :as re-frame]
    [reagent.core :as r]
    [day8.re-frame.http-fx]
    [ajax.core :as ajax]
    [simplefrontend.http :as sf-http]
    [simplefrontend.state :as sf-state]
    [simplefrontend.util :as sf-util]))
(re-frame/reg-event-fx
  ::get-product-groups
  (fn [{:keys [db]} [_]]
    (let [jwt (:jwt db)])
    (sf-util/clog "get-product-groups")
    (sf-http/http-get db "/api/product-groups" ::get-ok ::get-failed)))



(defn product-groups-table []
  (let [data [[1 "jee"] [2 "oo"]]]
    [:table
     [:thead
      [:tr
       [:th "Id"]
       [:th "Name"]]]
     [:tbody
      (map (fn [item]
             (let [[my-key my-value] item]
               [:tr {:key my-key}
                [:td my-key]
                [:td [:a {:href (str "#/products/" my-key)} my-value]]]))
           data)]]))


(defn product-group-page
  "Product Groups view."
  []
  (let [_ (sf-util/clog "ENTER product-group-page")
        product-groups (r/atom nil)]
    (fn []
      [:div
       [:h3 "Product Groups"]
       [:div.sf-pg-container
        ]
       (if true ;; TODO
         [:div
          [:button.sf-go-to-home-button
           {:on-click (fn [e]
                        (.preventDefault e)
                        (re-frame/dispatch [::sf-state/navigate ::sf-state/home]))}
           "Go to home"]
          ])
       (sf-util/debug-panel {})])))


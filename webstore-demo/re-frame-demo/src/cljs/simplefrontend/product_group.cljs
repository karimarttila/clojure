(ns simplefrontend.product-group
  (:require
    [reitit.frontend.easy :as rfe]
    [re-frame.core :as re-frame]
    [day8.re-frame.http-fx]
    [simplefrontend.http :as sf-http]
    [simplefrontend.state :as sf-state]
    [simplefrontend.util :as sf-util]))

(defn product-groups-table [data]
  [:table.sf-table
   [:thead
    [:tr
     [:th "Id"]
     [:th "Name"]]]
   [:tbody
    (map (fn [item]
           (let [[k v] item
                 ; String for historical reasons, coerced to keyword.
                 kn (name k)]
             [:tr {:key k}
              [:td k]
              [:td [:a {:href (rfe/href ::sf-state/products {:pgid kn})} v]]]))
         data)]])

(re-frame/reg-event-db
  ::ret-ok
  (fn [db [_ res-body]]
    (sf-util/clog "reg-event-db ok: " res-body)
    (-> db
        (assoc-in [:product-groups :response] {:ret :ok :res-body res-body})
        (assoc-in [:product-groups :data] (:product-groups res-body))
        )))

(re-frame/reg-event-db
  ::ret-failed
  (fn [db [_ res-body]]
    (sf-util/clog "reg-event-db failed" db)
    (assoc-in db [:product-groups :response] {:ret :failed
                                              :msg (get-in res-body [:response :msg])})))

(re-frame/reg-sub
  ::product-groups-data
  (fn [db]
    (get-in db [:product-groups :data])))


(re-frame/reg-event-fx
  ::get-product-groups
  (fn [{:keys [db]} [_]]
    (sf-util/clog "get-product-groups")
    (sf-http/http-get db "/api/product-groups" nil ::ret-ok ::ret-failed)))

(defn product-group-page
  "Product Groups view."
  []
  (let [_ (sf-util/clog "ENTER product-group-page")]
    (fn []
      (let [product-groups-data @(re-frame/subscribe [::product-groups-data])
            _ (if-not product-groups-data (re-frame/dispatch [::get-product-groups]))]
       [:div
        [:h3 "Product Groups"]
        [:div.sf-pg-container
         (product-groups-table product-groups-data)]
        [:div
         [:button.sf-basic-button
          {:on-click (fn [e]
                       (.preventDefault e)
                       (re-frame/dispatch [::sf-state/navigate ::sf-state/home]))}
          "Go to home"]]
        (sf-util/debug-panel {:product-groups-data product-groups-data})]))))


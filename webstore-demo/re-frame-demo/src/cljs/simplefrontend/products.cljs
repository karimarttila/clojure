(ns simplefrontend.products
  (:require
    [re-frame.core :as re-frame]
    [reitit.frontend.easy :as rfe]
    [day8.re-frame.http-fx]
    [simplefrontend.http :as sf-http]
    [simplefrontend.state :as sf-state]
    [simplefrontend.util :as sf-util]))



(defn products-table [data]
  [:table.sf-table
   [:thead
    [:tr
     [:th "Id"]
     [:th "Name"]
     [:th "Price"]]]
   [:tbody
    (map (fn [item]
           (let [[p-id pg-id name price] item]
             [:tr {:key p-id}
              [:td p-id]
              [:td [:a {:href (rfe/href ::sf-state/product {:pgid pg-id :pid p-id})} name]]
              [:td price]]))
         data)]])

(re-frame/reg-event-db
  ::ret-ok
  (fn [db [_ res-body]]
    (sf-util/clog "reg-event-db ok: " res-body)
    (let [pgid (:pg-id res-body)]
      (-> db
          (assoc-in [:products :response] {:ret :ok :res-body res-body})
          (assoc-in [:products :data pgid] (:products res-body))))))

(re-frame/reg-event-db
  ::ret-failed
  (fn [db [_ res-body]]
    (sf-util/clog "reg-event-db failed" db)
    (assoc-in db [:products :response] {:ret :failed
                                        :msg (get-in res-body [:response :msg])})))

(re-frame/reg-sub
  ::products-data
  (fn [db params]
    (sf-util/clog "::products-data, params" params)
    (let [pgid (second params)
          data (get-in db [:products :data])
          _ (sf-util/clog "products-data" data)]
      (get-in data [pgid]))))


(re-frame/reg-sub
  ::product-group-name
  (fn [db params]
    (sf-util/clog "::product-group-name, params" params)
    (let [pgid (keyword (second params))
          data (get-in db [:product-groups :data])]
      (pgid data))))

(re-frame/reg-event-fx
  ::get-products
  (fn [{:keys [db]} [_ pg-id]]
    (sf-util/clog "get-product, pg-id" pg-id)
    (sf-http/http-get db (str "/api/products/" pg-id) nil ::ret-ok ::ret-failed)))


(defn products-page
  "Products view."
  [match] ; NOTE: This is the current-route given as parameter to the view. You can get the pgid also from :path-params.
  (let [_ (sf-util/clog "ENTER products-page, match" match)
        {:keys [path]} (:parameters match)
        {:keys [pgid]} path
        pgid (str pgid)
        _ (sf-util/clog "path" path)
        _ (sf-util/clog "pgid" pgid)]
    (fn []
      (let [products-data @(re-frame/subscribe [::products-data pgid])
            product-group-name @(re-frame/subscribe [::product-group-name pgid])
            _ (if-not products-data (re-frame/dispatch [::get-products pgid]))]
        [:div
         [:h3 "Products - " product-group-name ]
         [:div.sf-pg-container
          (products-table products-data)]
         [:div
          [:button.sf-basic-button
           {:on-click (fn [e]
                        (.preventDefault e)
                        (re-frame/dispatch [::sf-state/navigate ::sf-state/home]))}
           "Go to home"]
          ]
         (sf-util/debug-panel {:products-data products-data})]))))


(comment
  "asdf"
  (products-table nil)

  )

(ns simplefrontend.product
  (:require
    [re-frame.core :as re-frame]
    [day8.re-frame.http-fx]
    [simplefrontend.http :as sf-http]
    [simplefrontend.state :as sf-state]
    [simplefrontend.util :as sf-util]))

(defn product-table [data titles]
  (let [table-values (map list titles data)]
    [:table.sf-table
     [:thead
      [:tr
       [:th "Header"]
       [:th "Product"]]]
     [:tbody
      (map (fn [item]
             (let [[field value] item]
               [:tr {:key field}
                [:td field]
                [:td value]
                ]))
           table-values)]]))

(re-frame/reg-event-db
  ::ret-ok
  (fn [db [_ res-body]]
    (sf-util/clog "reg-event-db ok: " res-body)
    (let [pgid (:pg-id res-body)
          pid (:p-id res-body)]
      (-> db
          (assoc-in [:product :response] {:ret :ok :res-body res-body})
          (assoc-in [:product :data pgid pid] (:product res-body))))))

(re-frame/reg-event-db
  ::ret-failed
  (fn [db [_ res-body]]
    (sf-util/clog "reg-event-db failed" db)
    (assoc-in db [:product :response] {:ret :failed
                                       :msg (get-in res-body [:response :msg])})))

(re-frame/reg-sub
  ::product-data
  (fn [db params]
    (sf-util/clog "::product-data, params" params)
    (let [pgid (nth params 1)
          pid (nth params 2)
          data (get-in db [:product :data])
          _ (sf-util/clog "product-data" data)]
      (get-in data [pgid pid]))))

(re-frame/reg-event-fx
  ::get-product
  (fn [{:keys [db]} [_ pg-id p-id]]
    (sf-util/clog "get-product, pg-id, p-id" {:pg-id pg-id :p-id p-id})
    (sf-http/http-get db (str "/api/product/" pg-id "/" p-id) nil ::ret-ok ::ret-failed)))


(defn product-page
  "Product view."
  [match]
  (let [_ (sf-util/clog "ENTER product-page, match" match)
        {:keys [path]} (:parameters match)
        {:keys [pgid pid]} path
        pgid (str pgid)
        pid (str pid)
        _ (sf-util/clog "path" path)
        _ (sf-util/clog "pgid" pgid)
        _ (sf-util/clog "pid" pid)]

    (fn []
      (let [titles (if (= pgid "1")
                     ["Id" "Pg-Id" "Name" "Price" "Author" "Year" "Country" "Language"] ; Book
                     ["Id" "Pg-Id" "Name" "Price" "Director" "Year" "Country" "Category"] ; Movie
                     )
            product-data @(re-frame/subscribe [::product-data pgid pid])
            _ (if-not product-data (re-frame/dispatch [::get-product pgid pid]))]
        [:div
         [:h3 "Product "]
         [:div.sf-pg-container
          (product-table product-data titles)]
         [:div
          [:button.sf-basic-button
           {:on-click (fn [e]
                        (.preventDefault e)
                        (re-frame/dispatch [::sf-state/navigate ::sf-state/products {:pgid pgid}]))}
           "Back to Products"]
          [:button.sf-basic-button
           {:on-click (fn [e]
                        (.preventDefault e)
                        (re-frame/dispatch [::sf-state/navigate ::sf-state/home]))}
           "Go to home"]
          ]
         (sf-util/debug-panel {:product-data product-data})]))))


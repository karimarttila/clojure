(ns frontend.views
  #_{:clj-kondo/ignore [:unused-namespace]}
  ; We may occasionally turn logging on for some function
  ; for debugging purposes.
  (:require [frontend.util :as f-util]))


(defn products-page? [page product]
  (and (= (:page page) :products) (= (:pg page) (:id product))))


(defn- product-button [product page]
  (let [button-tag (if (products-page? page product)
                     :button.rounded-lg.border-2.border-gray-500.bg-blue-100.p-4.m-2.hover:bg-gray-200.cursor-pointer
                     :button.rounded-lg.border-2.border-gray-300.p-4.m-2.hover:bg-gray-200.cursor-pointer)]
    [:a {:href (str "#/products/" (name (:id product)))}
     [button-tag
      [:p.text-center.text-xl.font-semibold
       (:name product)]]]))


(defn books-table [books]
  [:table.table-auto.w-full
   [:thead
    [:tr
     (for [header ["ID" "Title" "Author" "Year" "Country" "Language" "Price"]]
       [:th.px-4.py-2 header])]]
   [:tbody
    (for [{:keys [id title author year country language price]} books]
      ^{:key id}
      [:tr
       (for [value [id title author year country language price]]
         [:td.border.px-4.py-2 value])])]])


(defn movies-table [movies]
  [:table.table-auto.w-full
   [:thead
    [:tr
     (for [header ["ID" "Title" "Director" "Year" "Country" "Genre" "Price"]]
       [:th.px-4.py-2 header])]]
   [:tbody
    (for [{:keys [id title director year country genre price]} movies]
      ^{:key id}
      [:tr
       (for [value [id title director year country genre price]]
         [:td.border.px-4.py-2 value])])]])


(defn- product-groups-buttons [product-groups page]
  [:div
   [:div.flex.flex-wrap.justify-center
    (for [product product-groups]
      ^{:key (:id product)} (product-button product page))]])


(defn- header-view [state]
  [:div.flex ;.h-screen
   [:div.flex-grow.p-4
    ;[:div.flex.flex-col.items-center.min-h-screen.mt-1]
    [:h1.text-3xl.font-bold.text-center.mt-5 "WEB STORE with REPLICANT"]
    [:h2.text-xl.font-bold.text-center.mt-10 "Choose product group:"]
    [:div.mt-10
     (product-groups-buttons (:db/product-groups state) (:page/navigated state))]]])


(defn- page-content [state]
  (let [page (:page/navigated state)]
    ;(f-util/clog "page-content, page: " page)
    ;(f-util/clog "page-content, state: " state)
    (when (= (:page page) :products)
      (let [table (case (:pg page)
                    :books (books-table (get-in state [:db/data :books]))
                    :movies (movies-table (get-in state [:db/data :movies]))
                    [:div])]
        table))))


(defn view [state]
  ;(f-util/clog "view, state: " state)
  [:div.flex.h-screen
   [:div.flex-grow.p-4
    [:div.flex.flex-col.items-center.min-h-screen.mt-10
     (header-view state)
     (page-content state)]]])

(ns frontend.views
  (:require [clojure.string :as cstring]
            #_[frontend.util :as f-util]))


(defn products-page? [page product]
  (and (= (:page page) :products) (= (:pg page) (:id product))))


(defn book-details [book]
  [:table.table-auto.w-full
   [:tbody
    (for [[header value] [["Id" (:id book)]
                          ["Title" (:title book)]
                          ["Author" (:author book)]
                          ["Year" (:year book)]
                          ["Country" (:country book)]
                          ["Language" (:language book)]
                          ["Price" (:price book)]]]
      [:tr
       [:td.border.px-4.py-2 header]
       [:td.border.px-4.py-2 value]])]])

(defn movie-details [movie]
  [:table.table-auto.w-full
   [:tbody
    (for [[header value] [["Id" (:id movie)]
                          ["Title" (:title movie)]
                          ["Director" (:director movie)]
                          ["Year" (:year movie)]
                          ["Country" (:country movie)]
                          ["Genre" (:genre movie)]
                          ["Price" (:price movie)]]]
      [:tr
       [:td.border.px-4.py-2 header]
       [:td.border.px-4.py-2 value]])]])


(defn products-table [products pg-key]
  (let [pg (name pg-key)]
    [:table.table-auto.w-full
     [:thead
      [:tr
       (for [header ["Id" "Title"]]
         [:th.px-4.py-2 header])]]
     [:tbody
      (for [{:keys [id title]} products]
        [:tr
         [:td.border.px-4.py-2 [:a {:href (str "#/product/" pg "/" id)} id]]
         (for [value [title]]
           [:td.border.px-4.py-2 value])])]]))


(defn- new-product-button [product]
  (let [button-tag :button.rounded-lg.border-2.border-gray-300.px-4.py-1.m-2.hover:bg-gray-200.cursor-pointer]
    [:div.flex.justify-center
     [:a {:href (str "#/new/" (name (:id product)))}
      [button-tag
       [:p.text-center.text-xs
        "Create"]]]]))


(defn- product-button [product page]
  (let [button-tag (if (products-page? page product)
                     :button.rounded-lg.border-2.border-gray-500.bg-blue-100.p-4.m-2.hover:bg-gray-200.cursor-pointer
                     :button.rounded-lg.border-2.border-gray-300.p-4.m-2.hover:bg-gray-200.cursor-pointer)]
    [:div
     [:a {:href (str "#/products/" (name (:id product)))}
      [button-tag
       [:p.text-center.text-xl.font-semibold
        (:name product)]]]
     (new-product-button product)]))


(defn- product-groups-buttons [product-groups page]
  [:div
   [:div.flex.flex-wrap.justify-center
    (for [product product-groups]
      (product-button product page))]])


(defn- header-view [state]
  [:div.flex ;.h-screen
   [:div.flex-grow.p-4
    ;[:div.flex.flex-col.items-center.min-h-screen.mt-1]
    [:h1.text-3xl.font-bold.text-center.mt-5 "WEB STORE with REPLICANT"]
    [:h2.text-xl.font-bold.text-center.mt-10 "Choose product group:"]
    [:div.mt-5
     (product-groups-buttons (:db/pg-config state) (:page/navigated state))]]])


(defn new-movie []
  [:div
   [:form {:on {:submit [[:dom/prevent-default]
                         [:action/new {:pg :movies}]]}}
    [:table.table-auto.w-full
     [:tbody
      (for [header ["Title" "Director" "Year" "Country" "Genre" "Price"]]
        (let [input-tag (keyword (str "input#" (cstring/lower-case header)))
              db-key-on (keyword (str (cstring/lower-case header)))]
          [:tr
           [:td.border.px-4.py-2 header]
           [:td.border.px-4.py-2 [input-tag {:on {:input [[:db/assoc-in [:db/new-product db-key-on] :event/target.value]]}}]]]))]]
    [:div.flex.justify-center.mt-4
     [:button.rounded-lg.border-2.border-gray-300.px-4.py-1.m-2.hover:bg-gray-200.cursor-pointer
      {:type :submit}
      "Submit"]]]])


(defn new-book []
  [:div
   [:form {:on {:submit [[:dom/prevent-default]
                         [:action/new {:pg :books}]]}}
    [:table.table-auto.w-full
     [:tbody
      (for [header ["Title" "Author" "Year" "Country" "Language" "Price"]]
        (let [input-tag (keyword (str "input#" (cstring/lower-case header)))
              db-key-on (keyword (str (cstring/lower-case header)))]
          [:tr
           [:td.border.px-4.py-2 header]
           [:td.border.px-4.py-2 [input-tag {:on {:input [[:db/assoc-in [:db/new-product db-key-on] :event/target.value]]}}]]]))]]
    [:div.flex.justify-center.mt-4
     [:button.rounded-lg.border-2.border-gray-300.px-4.py-1.m-2.hover:bg-gray-200.cursor-pointer
      {:type :submit}
      "Submit"]]]])


(defn find-item-by-id [items id]
  (some #(when (= (:id %) id) %) items))


(defn- page-content [state]
  (let [page (:page/navigated state)]
    ;(f-util/clog "page-content, page: " page)
    ;(f-util/clog "page-content, state: " state)
    (case (:page page)
      :home
      (let [status (:db/product-created state)
            error (:error status)]
        (if error
          [:div
           [:p.text-red-500 " Failed to create new product"]]
          (when status
            [:div
             [:p.text-blue-500 "New product created!"]])))
      :products
      (let [table (products-table (get-in state [:db/data (:pg page)]) (:pg page))]
        table)
      :product
      (let [id (:id page)
            product (find-item-by-id (get-in state [:db/data (:pg page)]) id)
            table (case (:pg page)
                    :books (book-details product)
                    :movies (movie-details product)
                    [:div])]
        table)
      :new
      (let [table (case (:pg page)
                    :books (new-book)
                    :movies (new-movie)
                    [:div])]
        table)
      ; We need this for home page.
      [:div])))


(defn view [state]
  ;(f-util/clog "view, state: " state)
  [:div.flex.h-screen
   [:div.flex-grow.p-4
    [:div.flex.flex-col.items-center.min-h-screen.mt-10
     (header-view state)
     (page-content state)]]])



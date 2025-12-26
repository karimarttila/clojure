(ns frontend.views
  (:require [clojure.string :as cstring]
            [frontend.util :as f-util]))

;; NOTE: You cannot use goog.DEBUG in the cljc file!
;; For debugging sessions, remove comment of the logging calls, and after debuggins session comment out again.


(defn find-item-by-id [items id]
  (some #(when (= (:product/id %) id) %) items))


(defn- show-error [msg button? action]
  [:div.inline-block.bg-red-50.border.border-red-500.rounded.px-4.py-3 {:role "alert" :style {:max-width "fit-content"}}
   [:div.flex.items-center
    [:p.font-bold.text-red-700 msg]
    (when button?
      [:button.text-xs.px-2.py-1.ml-4.rounded.bg-red-50.hover:bg-gray-300.cursor-pointer.border.border-gray-400
       {:on {:click [action]}}
       "X"])]])


(defn- show-info [msg button? action]
  [:div.inline-block.bg-blue-50.border.border-blue-500.rounded.px-4.py-3 {:role "alert" :style {:max-width "fit-content"}}
   [:div.flex.items-center
    [:p.font-bold.text-blue-700 msg]
    (when button?
      [:button.text-xs.px-2.py-1.ml-4.rounded.bg-blue-50.hover:bg-gray-300.cursor-pointer.border.border-gray-400
       {:on {:click [action]}}
       "X"])]])



; TODO: We could refactor book-details and movie-details
; to product-details, and give a list of [header key] as param.

(defn book-details [book]
  [:table.table-auto.w-full
   [:tbody
    (for [[header value] [["Id" (:product/id book)]
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
    (for [[header value] [["Id" (:product/id movie)]
                          ["Title" (:title movie)]
                          ["Director" (:director movie)]
                          ["Year" (:year movie)]
                          ["Country" (:country movie)]
                          ["Genre" (:genre movie)]
                          ["Price" (:price movie)]]]
      [:tr
       [:td.border.px-4.py-2 header]
       [:td.border.px-4.py-2 value]])]])


(defn- sort-icon [current-field current-direction field]
  (if (= current-field field)
    (if (= current-direction :asc)
      "▲"
      "▼")
    "⇅"))

(defn products-table [products pg-key table-sort]
  (let [_ (f-util/clog "products-table, products: " products)
        pg (name pg-key)
        sort-field (:sort/field table-sort)
        sort-direction (:sort/direction table-sort)
        ;; Sort products based on current sort state
        sorted-products (if sort-field
                          (let [comparator-fn (if (= sort-direction :asc)
                                                compare
                                                #(compare %2 %1))]
                            (sort-by sort-field comparator-fn products))
                          products)]
    [:table.table-auto.w-full
     [:thead
      [:tr
       (for [[header field] [["Id" :product/id] ["Title" :title]]]
         [:th.px-4.py-2.cursor-pointer.hover:bg-gray-100
          {:on {:click [[:action/sort-table {:field field}]]}}
          [:div.flex.items-center.justify-center
           [:span header]
           [:span.ml-1.text-xs (sort-icon sort-field sort-direction field)]]])]]
     [:tbody
      (for [product sorted-products]
        (let [id (:product/id product)
              title (:title product)]
          [:tr
           [:td.border.px-4.py-2 [:a {:href (str "#/product/" pg "/" id)} id]]
           [:td.border.px-4.py-2 title]]))]]))


(defn- new-product-button [product]
  (let [button-tag :button.rounded-lg.border-2.border-gray-300.px-4.py-1.m-2.hover:bg-gray-200.cursor-pointer]
    [:div.flex.justify-center
     [:a {:href (str "#/new/" (name (:pg/id product)))}
      [button-tag
       [:p.text-center.text-xs
        "Create"]]]]))


(defn- product-button [product]
  (let [button-tag :button.rounded-lg.border-2.border-gray-500.bg-blue-100.p-4.m-2.hover:bg-gray-200.cursor-pointer]
    [:div
     [:a {:href (str "#/products/" (name (:pg/id product)))}
      [button-tag
       [:p.text-center.text-xl.font-semibold
        (:pg/name product)]]]
     (new-product-button product)]))


(defn- product-groups-buttons [product-groups]
  [:div
   [:div.flex.flex-wrap.justify-center
    (for [product product-groups]
      (product-button product))]])


(defn- header-view [state]
  [:div.flex ;.h-screen
   [:div.flex-grow.p-4
    [:h1.text-3xl.font-bold.text-center.mt-5 "WEB STORE with REPLICANT, NEXUS and DATASCRIPT"]
    [:h2.text-xl.font-bold.text-center.mt-10 "Choose product group:"]
    [:div.mt-5
     (product-groups-buttons (:pg-config state))]]])


(defn new-product [state pg headers]
  (let [new-product-data (:new-product state)]
    [:div
     [:form {:on {:submit [[:dom/prevent-default]
                           [:action/validate {:pg pg}]]}}
      [:table.table-auto.w-full
       [:tbody
        (for [header headers]
          (let [input-tag (keyword (str "input#" (cstring/lower-case header)))
                db-key-on (keyword (str (cstring/lower-case header)))
                current-value (get new-product-data db-key-on "")]
            [:tr
             [:td.border.px-4.py-2 header]
             [:td.border.px-4.py-2 
              [input-tag {:value current-value
                          :on {:input [[:frontend.views/update-field [:db/new-product db-key-on] :event/target.value]]}}]]]))]]
      [:div.flex.justify-center.mt-4
       [:button.rounded-lg.border-2.border-gray-300.px-4.py-1.m-2.hover:bg-gray-200.cursor-pointer
        {:type :submit}
        "Submit"]]
      (let [error-data (:validation-error state)
            error-map (:error error-data)
            [k v] (first error-map)]
        (when (and error-map k v)
          (show-error (str (name k) ": " (first v)) false nil)))]]))


(defn- page-content [state]
  (let [page (:page state)]
    (f-util/clog "page-content, page: " page)
    (case (:page page)
      :home
      (let [status (:product-created state)
            error (:error status)
            success (:success status)]
        (cond
          error [:div (show-error "Failed to create product!" true [:db/retract [:db/ident :db/product-created] :error])]
          success [:div (show-info "New product created!" true [:db/retract [:db/ident :db/product-created] :success])]
          :else nil))
      :products
      (let [table (products-table (:products state) (:pg page) (:table-sort state))]
        table)
      :product
      (let [id (:id page)
            product (find-item-by-id (:products state) id)
            table (case (:pg page)
                    :books (book-details product)
                    :movies (movie-details product)
                    [:div])]
        table)
      :new
      (let [table (case (:pg page)
                    :books (new-product state :books ["Title" "Author" "Year" "Country" "Language" "Price"])
                    :movies (new-product state :movies ["Title" "Director" "Year" "Country" "Genre" "Price"])
                    [:div])]
        table)
      ; We need this for home page.
      [:div])))


(defn view [state]
  (f-util/clog "view, state: " state)
  [:div.flex.h-screen
   [:div.flex-grow.p-4
    [:div.flex.flex-col.items-center.min-h-screen.mt-10
     (header-view state)
     (page-content state)]]])


(comment
  (get-in {:app/page {:db/id 3, :page/navigated {:page :products, :pg :books}}} [:app/page :page/navigated])
  ;;=> {:page :products, :pg :books}
  ;;=> {:db/id 3, :page/navigated {:page :products, :pg :books}}
  
  )

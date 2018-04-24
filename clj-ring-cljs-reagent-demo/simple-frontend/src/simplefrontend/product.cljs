(ns simplefrontend.product
  (:require
    [reagent.core :as r]
    [ajax.core :as a-core]
    [simplefrontend.reagent-wrapper :as sf-rw]
    [simplefrontend.config :as sf-config]))


;; ***** Namespace vars. *****
(def my-error-msg-atom (r/atom nil))
(def my-success-msg-atom (r/atom nil))
;; For debugging
(def my-response-atom (r/atom nil))
;; The product from server.
(def my-product-atom (r/atom nil))
;; For development purposes.
(def my-dev-product-atom (r/atom ["2011","1","The Decameron","29.03","Giovanni Boccaccio","1351","Italy","Italian"]))


(defn reset-page
  "Reset page atoms when coming here from home page."
  []
  (reset! my-response-atom nil)
  (reset! my-error-msg-atom nil)
  (reset! my-success-msg-atom nil))


(defn -handler
  "The success (http status 200) handler."
  [response]
  (.log js/console (str "ENTER -handler, response: " response))
  ;(.log js/console (str "ENTER -handler"))
  (let []
    (do
      (reset! my-response-atom response)
      (reset! my-product-atom (@my-response-atom "product"))
      (reset! my-success-msg-atom "TODO")
      (reset! my-error-msg-atom nil))))


(defn -error-handler
  "The error (http status not 200) handler."
  [response]
  (.log js/console (str "ENTER -error-handler, response: " response))
  (let [error-msg ((:response response) "msg")]
    (do
      (reset! my-response-atom response)
      (reset! my-error-msg-atom error-msg)
      (reset! my-success-msg-atom nil))))


(defn -get-product
  "Does the GET for product"
  [token pg-id p-id]
  (let [url (str (sf-config/get-base-url) "/product/" pg-id "/" p-id)]
    (let [response (a-core/GET url
                               {:format          :json
                                :response-format :json
                                :headers         {"Accept"        "application/json"
                                                  "Content-Type"  "application/json"
                                                  "Authorization" token}
                                :handler         -handler
                                :error-handler   -error-handler})]
      (.log js/console (str "Response: " response))
      response)))


(defn -product-table
  [data titles]
  (let [table-values (map list titles data)]
    [sf-rw/table {:striped   true
                :bordered  true
                :condensed true
                :hover     true}
     [:tbody
      (map (fn [item]
             (let [[field value] item]
               [:tr {:key field}
                [:td field]
                [:td value]
                ]))
           table-values)]]))


(defn product-page
  "The actual page function called by simplefrontend.core."
  [token pg-id p-id]
  (.log js/console (str "ENTER product-page, pg-id: " pg-id ", p-id: " p-id))
  (let [response (-get-product token pg-id p-id)
        titles (if (= pg-id "1")
                 ["Id" "Pg-Id" "Name" "Price" "Author" "Year" "Country" "Language"] ; Book
                 ["Id" "Pg-Id" "Name" "Price" "Director" "Year" "Country" "Category"] ; Movie
                 )]
    (fn []
      [:div
       [:h1 "Product"]
       (if (not (nil? @my-product-atom))
         [:div (-product-table @my-product-atom titles)])
       ;; During development:
       ;(if (not (nil? @my-dev-products-atom))
       ;  [:div (-products-table @my-dev-products-atom)]
       ;  )
       [:div [:a {:href (str "#/products/" pg-id)} "Back to Products page"]]
       [:div [:a {:href "#/productgroups"} "Back to Product Groups page"]]
       [:div [:a {:href "#/"} "Back to Web Store Home Page"]]])))

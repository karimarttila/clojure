(ns simplefrontend.products
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
;; The products from server.
(def my-products-atom (r/atom nil))
;; For development purposes.
(def my-dev-products-atom (r/atom [["1", "2", "Citizen Kane", "12.32"], ["2", "2", "Vertigo", "31.98"]]))


(defn reset-page
  "Reset page atoms when coming here from home page."
  []
  (reset! my-response-atom nil)
  (reset! my-error-msg-atom nil)
  (reset! my-success-msg-atom nil))


(defn -handler
  "The success (http status 200) handler."
  [response]
  ;(.log js/console (str "ENTER -handler, response: " response))
  (.log js/console (str "ENTER -handler"))
  (let []
    (do
      (reset! my-response-atom response)
      (reset! my-products-atom (@my-response-atom "products"))
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


(defn -get-products
  "Does the GET for products"
  [token pg-id]
  (let [url (str (sf-config/get-base-url) "/products/" pg-id)]
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


(defn -products-table
  [data]
  [sf-rw/table {:striped   true
                :bordered  true
                :condensed true
                :hover     true}
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
              [:td [:a {:href (str "#/product/" pg-id "/" p-id)} name]]
              [:td price]]))
         data)]])


(defn products-page
  "The actual page function called by simplefrontend.core."
  [token pg-id]
  (.log js/console (str "ENTER products-page, pg-id: " pg-id))
  (let [response (-get-products token pg-id)
        category (if (= pg-id "1")
                   "Books"
                   "Movies")]
    (fn []
      [:div
       [:h1 (str "Products: " category)]
       (if (not (nil? @my-products-atom))
         [:div (-products-table @my-products-atom)])

       ;; During development:
       ;(if (not (nil? @my-dev-products-atom))
       ;  [:div (-products-table @my-dev-products-atom)]
       ;  )
       [:div [:a {:href "#/productgroups"} "Back to Product Groups page"]]
       [:div [:a {:href "#/"} "Back to Web Store Home Page"]]])))

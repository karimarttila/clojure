(ns backend.routes
  (:require
   [clojure.edn :as edn]
   [clojure.java.io :as io]
   [clojure.tools.logging :as log]
   [cognitect.transit :as transit]
   [hiccup2.core :as hiccup]
   [integrant.core :as ig]
   [muuntaja.core :as m]
   [reitit.coercion.malli :as malli.coercion]
   [reitit.ring :as ring]
   [reitit.ring.coercion :as ring.coercion]
   [reitit.ring.middleware.exception]
   [reitit.ring.middleware.muuntaja :as muuntaja]
   [reitit.swagger :as swagger]
   [reitit.swagger-ui :as swagger-ui]
   [ring.util.http-response :as resp]
   [common.schema :as schema]
   [backend.api.products :as products]))


(def muuntaja-instance
  (m/create (-> m/default-options
                (assoc-in [:formats "application/transit+json" :encoder-opts :handlers java.time.Instant]
                          (transit/write-handler (constantly "Instant") #(.toString %)))
                (assoc-in [:formats "application/transit+json" :decoder-opts :handlers "Instant"]
                          (transit/read-handler #(java.time.Instant/parse %))))))


(defn wrap-database-middleware
  "Return a middleware that associates our database instance to the request map.
   Key :db holds an atom which simulates our database."
  [handler database]
  (fn
    ([request]
     (handler (assoc request :db database)))

    ([request respond raise]
     (handler (assoc request :db database)
              respond
              raise))))


(defn default-error-handler
  "Default safe handler for any exception."
  [^Exception e _]
  (prn e)
  {:status 500
   :body {:type "exception"
          :class (.getName (.getClass e))}})


(defn main-js-file []
  (-> (or (io/resource "public/js/manifest.edn")
          (io/file "target/dev/public/js/manifest.edn"))
      slurp
      edn/read-string
      first
      :output-name))


(defn index []
  (hiccup/html {:mode :html}
               (hiccup/raw "<!DOCTYPE html>\n")
               [:html
                {:lang "en"}
                [:head
                 [:title "Replicant-webstore"]
                 [:meta {:charset "utf-8"}]
                 ; TODO: REMOVE LATER todomvc related stuff!
                 [:link {:rel "stylesheet" :href "/css/main.css"}]
                 [:link {:rel "icon" :href "/assets/favicon.ico" :type "image/x-icon"}]
                 [:meta {:name "viewport" :content "width=device-width, initial-scale=1, shrink-to-fit=no"}]]
                [:body
                 ; This div id needs to be the same as in frontend app.cljs!
                 [:div#app
                  [:div.loading
                   [:h1 "Loading, please wait..."]]]
                 [:script {:type "text/javascript" :src (str "/js/" (main-js-file))}]]]))


(defn app [env]
  (ring/ring-handler
   (ring/router
    ["/api"
     ["/products"
      ["/books"
       [""
        {:summary "Return books"
         :get {:handler #'products/get-books
               :responses {200 {:body [:sequential schema/book]}}}}]
       ["/:id"
        {:parameters {:path [:map [:id :int]]}
         :get {:responses {200 {:body schema/book}}
               :handler #'products/get-book}}]]
      ["/movies"
       [""
        {:summary "Return movies"
         :get {:handler #'products/get-movies
               :responses {200 {:body [:sequential schema/movie]}}}}]
       ["/:id"
        {:parameters {:path [:map [:id :int]]}
         :get {:responses {200 {:body schema/movie}}
               :handler #'products/get-movie}}]]]
     ["/swagger.json" {:no-doc true
                       :get (swagger/create-swagger-handler)}]
     ["/docs/*" {:no-doc true
                 :get (swagger-ui/create-swagger-ui-handler {:url "/api/swagger.json"})}]]
    {:data {:muuntaja muuntaja-instance
            :coercion malli.coercion/coercion
            :middleware [muuntaja/format-middleware
                         (reitit.ring.middleware.exception/create-exception-middleware {:reitit.ring.middleware.exception/default default-error-handler})
                         ring.coercion/coerce-exceptions-middleware
                         ring.coercion/coerce-request-middleware
                         ring.coercion/coerce-response-middleware
                         [wrap-database-middleware (:db env)]]}})


    ;; Default handler - handle resources (js files), index.html and 404 for API endpoints
   (ring/routes
    (ring/create-resource-handler {:path ""
                                   :root "public"})
    (ring/ring-handler
     (ring/router
      [""
       ["/api/*" {:handler (fn [_req]
                             (resp/not-found))}]
           ;; Return index.html for any non-API routes for History API routing
       ["/*" {:get {:handler (fn [_req] (resp/ok (str (index))))}}]]
      {:conflicts nil})))))


(defmethod ig/init-key :web/routes [_ env]
  (app env))

(defmethod ig/halt-key! :web/routes [_ _routes]
  (log/info "Shutting down web routes"))


(comment
  ; Remember to Integrant/reset first!
  (str (index))
  ;;=> "<!DOCTYPE html><html lang=\"en\"><head><title>Example</title><meta charset=\"utf-8\"><meta content=\"width=device-width, initial-scale=1, shrink-to-fit=no\" name=\"viewport\"></head><body><div id=\"app\"><div class=\"loading\"><h1>Loading, please wait...</h1></div></div><script src=\"/js/main.js\" type=\"text/javascript\"></script></body></html>"
  (main-js-file)
  ;;=> "main.js"
  
  (do (require '[clj-http.client :as client])
      (client/get "http://localhost:9333/api/products/books"))
  ;;=> {:cached nil,
  ;;...
  ;;    :status 200,
  ;;    :body
  ;;    "[{\"id\":2001,\"product-group\":1,\"title\":\"Kalevala\",\"price\":3.95,\"author\":\"Elias Lönnrot\",\"year\":1835,\"country\":\"Finland\",\"language\":\"Finnish\"}]",
  
  ;; If error, see it using *e:
  *e
  
  ;; Example how to tap to the data using djblue Portal:
  (require '[clj-http.client :as client])
  (require '[jsonista.core :as json])
  (defn json-to-edn [json-str]
    (json/read-value json-str (json/object-mapper {:decode-key-fn keyword}))) 
  (json-to-edn "{\"name\": \"Book\", \"price\": 29.99}") 
  
  (:body (client/get "http://localhost:9333/api/products/books"))
  ;; Tap to the data:
  ; https://github.com/djblue/portal
  (require '[portal.api :as p])
  ; This should open the Portal window.
  (def p (p/open))
  (add-tap #'p/submit) 
  (tap> :hello)
  (tap> (json-to-edn (:body (client/get "http://localhost:9333/api/products/books"))))
  ;; You should now see a vector of book maps in the portal window.
  
  
  
  
  
  )
(ns frontend.http
  (:require-macros [cljs.core.async.macros :refer [go]])
  #_{:clj-kondo/ignore [:unused-namespace]}
  (:require    [cljs.core.async :refer [<!]]
               [cljs-http.client :as http]
               [cognitect.transit :as transit]
               [nexus.registry :as nxr]
               [frontend.util :as f-util]))


(defn fetch [system action]
  (when goog.DEBUG (f-util/clog "fetch, action: " action))
  (let [pg (:pg action)
        api (:api action)
        url (str "/api" api)]
    (go (try
          (let [response (<! (http/get url))]
            (if (= 200 (:status response))
              (let [data (:body response)]
                (when goog.DEBUG (f-util/clog "fetch, data: " data))
                ;; Dispatch to Nexus to add products
                (nxr/dispatch system nil [[:add/products {:pg pg :products data}]]))
              (when goog.DEBUG (f-util/clog "fetch, error status: " (:status response)))))
          (catch js/Error e
            (when goog.DEBUG (f-util/clog "fetch, error: " (.-message e))))))))


(defn post [system action]
  (when goog.DEBUG (f-util/clog "post, action: " action))
  (let [product (:product action)
        pg (:pg action)
        url (str "/api" (get-in action [:post :api]))]
    (go (try
          (let [response (<! (http/post url {:json-params product}))]
            (if (= 200 (:status response))
              ;; Success - dispatch actions to add product, clear form, and navigate home
              (nxr/dispatch system nil [[:add/products {:products [(:body response)] :pg pg}]
                                        [:db/retract [:db/ident :db/new-product] :title]
                                        [:db/retract [:db/ident :db/new-product] :author]
                                        [:db/retract [:db/ident :db/new-product] :year]
                                        [:db/retract [:db/ident :db/new-product] :country]
                                        [:db/retract [:db/ident :db/new-product] :language]
                                        [:db/retract [:db/ident :db/new-product] :price]
                                        [:db/retract [:db/ident :db/new-product] :director]
                                        [:db/retract [:db/ident :db/new-product] :genre]
                                        [:db/add [:db/ident :db/product-created] :success true]
                                        [:route/home]])
              ;; Error - dispatch action to show error
              (nxr/dispatch system nil [[:db/add [:db/ident :db/product-created] :error (:status response)]
                                        [:route/home]])))
          (catch js/Error e
            ;; Exception - dispatch action to show error
            (nxr/dispatch system nil [[:db/add [:db/ident :db/product-created] :error (.-message e)]
                                      [:route/home]]))))))



(comment

  (let [action {:query {:id :books, :api "/products/books"}, :pg :books}]
    ;; NOTE: You get the logging in the browser Console! (not in REPL window!)
    (fetch :dummy action)))

(comment

  ;(client/get "http://localhost:9333/api/products/books")
  (go (let [response (<! (http/get "/api/products/books"))]
        (if (= 200 (:status response))
          (def ok-query (:body response))
          (def failed-query (:status response)))))
  ok-query
  failed-query
  
  (def my-book  {:author "Kari Marttila",
                 :country "Finland",
                 ; :id 2034,  => No :id when posting!!!
                 :language "Finnish",
                 :price 54,
                 :product-group 1,
                 :title "XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX",
                 :year 1997})
  ;;=> #'frontend.http/my-book

  (go (let [response (<! (http/post "/api/products/books" {:json-params my-book}))]
        (if (= 200 (:status response))
          (def ok-post (:body response))
          (do (def my-response response)
              (def failed-post (:status response))))))
  ;;=> #object [cljs.core.async.impl.channels.ManyToManyChannel]
  ;;=> nil

  (def my-movie {:product-group 2, :title "Juurakon Hulda", :price 82.92, :director "Valentin Vaala", :year 1937, :country "Finland", :genre "Drama"})
  (go (let [response (<! (http/post "/api/products/movies" {:json-params my-movie}))]
        (if (= 200 (:status response))
          (def ok-post (:body response))
          (do (def my-response response)
              (def failed-post (:status response))))))

  ok-post
  ;;=> {:title "XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX",
  ;;    :author "Kari Marttila",
  ;;    :year 1997,
  ;;    :language "Finnish",
  ;;    :id 2038,
  ;;    :product-group 1,
  ;;    :price 54.61,
  ;;    :country "Finland"}
  ;;=> {:id 2036}
  failed-post
  my-response

  *e)

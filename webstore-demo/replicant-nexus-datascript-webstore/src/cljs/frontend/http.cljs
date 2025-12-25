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


#_(defn fetch [system action]
  (when goog.DEBUG (f-util/clog "fetch, action: " action))
  (let [pg (:pg action)
        url (str "/api" (get-in action [:query :api]))]
    (go (try
          (let [response (<! (http/get url))]
            (if (= 200 (:status response))
              (let [data (:body response)]
                (when goog.DEBUG (f-util/clog "fetch, data: " data))
                )
              #_(dispatcher nil [[:db/assoc-in [:db/data pg] (:body response)]])
              #_(dispatcher nil [[:db/assoc-in [:db/data pg] {:error (:status response)
                                                              :pg pg}]])))
          (catch js/Error e
            (when goog.DEBUG (f-util/clog "fetch, error: " (.-message e)))
            #_(dispatcher nil [[:db/assoc :db/data {:error (.-message e)
                                                  :pg pg}]
                             [:route/home]]))))))



(comment 
  

  
  (let [action {:query {:id :books, :api "/products/books"}, :pg :books}]
    ;; NOTE: You get the logging in the browser Console! (not in REPL window!)
    (fetch :dummy action))
  
  
  
  
  
  )


(defn post [dispatcher action]
  (when goog.DEBUG (f-util/clog "post, action: " action))
  (let [product (:product action)
        pg (:pg action)
        url (str "/api" (get-in action [:post :api]))]
    (go (try
          (let [response (<! (http/post url {:json-params product}))]
            (if (= 200 (:status response))
              (dispatcher nil [[:db/assoc :db/product-created {:product (:body response)
                                                               :pg pg}]
                               [:db/dissoc :db/new-product]
                               ; Fetch new products (since added one).
                               [:backend/fetch {:query (:query action)
                                                :pg pg}]
                               [:route/home]])
              (dispatcher nil [[:db/assoc :db/product-created {:error (:status response)
                                                               :pg pg}]
                               [:db/dissoc :db/new-product]
                               [:route/home]])))
          (catch js/Error e
            (dispatcher nil [[:db/assoc :db/product-created {:error (.-message e)
                                                             :pg pg}]
                             [:db/dissoc :db/new-product]
                             [:route/home]]))))))


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

  (go (let [response (<! (http/post "/api/products/books" {:json-params my-book}))]
        (if (= 200 (:status response))
          (def ok-post (:body response))
          (do (def my-response response)
              (def failed-post (:status response))))))

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

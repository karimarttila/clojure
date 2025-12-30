(ns frontend.http
  (:require-macros [cljs.core.async.macros :refer [go]])
  #_{:clj-kondo/ignore [:unused-namespace]}
  (:require    [cljs.core.async :refer [<!]]
               [cljs-http.client :as http]
               [cognitect.transit :as transit]
               [nexus.registry :as nxr]
               [datascript.core :as ds]
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
                #_ (when goog.DEBUG (f-util/clog "fetch, data: " data))
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
          (when goog.DEBUG (f-util/clog "post, sending request to:" url))
          (when goog.DEBUG (f-util/clog "post, product data:" product))
          (let [response (<! (http/post url {:json-params product}))]
            (when goog.DEBUG (f-util/clog "post, response status:" (:status response)))
            (if (= 200 (:status response))
              ;; Success - get pg-config to fetch query API
              (let [conn (:conn system)
                    db (ds/db conn)
                    pg-config (ds/pull db '[*] [:pg/id pg])
                    query-api (:pg/query-api pg-config)]
                (when goog.DEBUG (f-util/clog "post, success - navigating to home"))
                ;; Dispatch actions to fetch fresh products list, clear form, and navigate home
                (nxr/dispatch system nil [[:backend/fetch {:api query-api :pg pg}]
                                          [:action/clear-new-product]
                                          [:db/add [:db/ident :product/created] :success true]
                                          [:route/home]]))
              ;; Error - STAY on form, just show error, DO NOT navigate
              (do
                (when goog.DEBUG (f-util/clog "post, error - staying on form, status:" (:status response)))
                (nxr/dispatch system nil [[:db/add [:db/ident :product/created] :error (:status response)]]))))
          (catch js/Error e
            ;; Exception - STAY on form, just show error, DO NOT navigate
            (when goog.DEBUG (f-util/clog "post, exception - staying on form, error:" (.-message e)))
            (nxr/dispatch system nil [[:db/add [:db/ident :product/created] :error (.-message e)]]))))))


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

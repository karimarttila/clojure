(ns frontend.http
  (:require-macros [cljs.core.async.macros :refer [go]])
  #_{:clj-kondo/ignore [:unused-namespace]}
  (:require    [cljs.core.async :refer [<!]]
               [cljs-http.client :as http]
               [cognitect.transit :as transit]
               [frontend.util :as f-util]))

(comment

  {:query {:post {:id :books, :api "/products/books"},
           :query {:id :books, :api "/products/books"},
           :product {:title "8", :price 8, :author "8", :year 8, :country "8", :language "8", :product-group 1},
           :pg :books}}



  ; GOOD:
  {:query {:id :books, :api "/products/books"}, :pg :books}

  ; BAD:
  {:pg :books,
   :query {:post {:id :books, :api "/products/books"},
           :query {:id :books, :api "/products/books"}, :product {:title "9", :price 9, :author "9", :year 9, :country "9", :language "9", :product-group 1}, :pg :books}})


(defn fetch [dispatcher action]
  (f-util/clog "***************************** fetch, action: " action)
  (let [pg (:pg action)
        url (str "/api" (get-in action [:query :api]))]
    (go (let [response (<! (http/get url))]
          (if (= 200 (:status response))
            (dispatcher nil [[:db/assoc-in [:db/data pg] (:body response)]])
            (dispatcher nil [[:db/assoc-in [:db/data pg] {:error (:status response)
                                                          :pg pg}]])))))
  )


(comment
  {:post {:id :books, :api "/products/books"},
   :query {:id :books, :api "/products/books"},
   :product {:title "9", :price 9, :author "9", :year 9, :country "9", :language "9", :product-group 1}, :pg :books}
  
  )

; "post, action: " {:post {:id :books, :api "/products/books"}, :product {:title "asdf", :price "4", :author "asdf", :year "4", :country "asdf", :language "asdf", :product-group 1}, :pg :books}
(defn post [dispatcher action]
  (f-util/clog "post, action: " action)
  (let [product (:product action)
        pg (:pg action)
        url (str "/api" (get-in action [:post :api]))]
    (go (let [response (<! (http/post url {:json-params product}))]
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
                             [:route/home]]))))))


(comment

  ;(client/get "http://localhost:9333/api/products/books")
  (go (let [response (<! (http/get "/api/products/books"))]
        (if (= 200 (:status response))
          (def ok-query (:body response))
          (def failed-query (:status response)))))
  ok-query

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
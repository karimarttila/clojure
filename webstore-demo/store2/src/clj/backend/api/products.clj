(ns backend.api.products
  (:require [backend.db :as db]
            [common.schema :as schema]
            [malli.core :as m]
            [malli.transform :as mt]
            [ring.util.http-response :as resp])
  )


(defn get-books [req]
  (let [_ (def my-req req)
        ;books (@db ) _ (def jee db)
        ;my-type (type db)
        ;_ (println my-type)
        res [{:id 2001,
              :product-group 1,
              :title "Kalevala",
              :price 3.95,
              :author "Elias Lönnrot",
              :year 1835,
              :country "Finland",
              :language "Finnish"}] 
        ]
    (resp/ok res)))


(defn get-movies [req]
  (let [db (:db req)
        res {}]
    (resp/ok res)))


(comment

  (get-books (->> (user/env)
                  :db/tsv))

  (do (require '[clj-http.client :as client])
      (client/get "http://localhost:9333/api/products/books"))

  my-req
  (-> my-req
      keys
      :db
      ;deref
      ;keys
      )

  ;;=> {:status 200,
  ;;    :headers {},
  ;;    :body
  ;;    [{:id 2001,
  ;;      :product-group 1,
  ;;      :title "Kalevala",
  ;;      :price 3.95,
  ;;      :author "Elias Lönnrot",
  ;;      :year 1835,
  ;;      :country "Finland",
  ;;      :language "Finnish"}]}


  )





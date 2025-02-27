(ns backend.api.products
  (:require [ring.util.http-response :as resp]))

;; NOTE: I intentionally left a lot of debugging config and rich comments for learning purposes in this file.

;; NOTE (1/3): An example how to debug the handler: first create an atom in the namespace.
;; Then see the handler get-books and the rich comment.
(def my-atom (atom {}))

(defn get-books [req]
  (let [db (:db req)
        ;; NOTE (2/3): Open these two comments to see the db.
        ; _ (println @db)
        ; _ (swap! my-atom assoc :db @db)
        res (:books @db)]
    (resp/ok res)))

(comment
  ;; NOTE (3/3): If you opened the comments above, you can then debug the db entity like this:
  ; First call the api:
  (do (require '[clj-http.client :as client])
      (client/get "http://localhost:9333/api/products/books"))
  (-> @my-atom
      :db
      :books
      first)
  ;;=> {:id 2001,
  ;;    :product-group 1,
  ;;    :title "Kalevala",
  ;;    :price 3.95,
  ;;    :author "Elias Lönnrot",
  ;;    :year 1835,
  ;;    :country "Finland",
  ;;    :language "Finnish"} 
  )



(defn get-movies [req]
  (let [db (:db req)
        res (:movies @db)]
    (resp/ok res)))


(defn get-book [req]
  (let [db (:db req)
        id (get-in req [:parameters :path :id])
        ; _ (println (str "id: " id))
        ; _ (swap! my-atom assoc :req req)
        books (:books @db)
        res (first (filter (fn [book]
                             (= (:id book) id))
                           books))]
    (if (nil? res)
      (resp/not-found {:message "Not found" :id id})
      (resp/ok res))))


(defn get-movie [req]
  (let [db (:db req)
        id (get-in req [:parameters :path :id])
        movies (:movies @db)
        res (first (filter (fn [movie]
                             (= (:id movie) id))
                           movies))]
    (if (nil? res)
      (resp/not-found {:message "Not found" :id id})
      (resp/ok res))))



(comment

  (let [id 2002
        books (-> (user/env)
                  :db/tsv
                  deref
                  :books)]
    (first (filter (fn [book]
                     (= (:id book) id))
                   books)))


  (let [dummy-req {:db (-> (user/env) :db/tsv)}
        dummy-req (assoc dummy-req :parameters {:path {:id 2009}})]
    (get-book dummy-req))
  ;;=> {:status 200,
  ;;    :headers {},
  ;;    :body
  ;;    {:id 2009,
  ;;     :product-group 1,
  ;;     :title "The Adventures of Huckleberry Finn",
  ;;     :price 61.83,
  ;;     :author "Mark Twain",
  ;;     :year 1884,
  ;;     :country "United States",
  ;;     :language "English"}}

  (let [dummy-req {:db (-> (user/env) :db/tsv)}
        dummy-req (assoc dummy-req :parameters {:path {:id 9002}})]
    (get-book dummy-req))
  ;;=> {:status 404, :headers {}, :body {:message "Not found", :id 9002}}

  (do (require '[clj-http.client :as client])
      (client/get "http://localhost:9333/api/products/books/2002"))
  (do (require '[clj-http.client :as client])
      (client/get "http://localhost:9333/api/products/books/9002"))
  *e)

(comment

  {:parameters {:path {:id 2002}}}

  (do (require '[clj-http.client :as client])
      (client/get "http://localhost:9333/api/products/books/2002"))

  *e

  (do (require '[clj-http.client :as client])
      (client/get "http://localhost:9333/api/products/movies"))

  (-> (user/env)
      :db/tsv
      deref
      :books
      first)
  ;;=> {:id 2001,
  ;;    :product-group 1,
  ;;    :title "Kalevala",
  ;;    :price 3.95,
  ;;    :author "Elias Lönnrot",
  ;;    :year 1835,
  ;;    :country "Finland",
  ;;    :language "Finnish"}

  ; Some examples how to test the functionality without using http.
  ; This is how we get the atom database from the environment:
  (-> (user/env)
      :db/tsv)
  ; This is how we can test our handler just using the env:
  (let [dummy-req {:db (-> (user/env) :db/tsv)}]
    (get-books dummy-req))

  (let [json-str (-> (do
                       (require '[jsonista.core :as json])
                       (require '[clojure.edn])
                       (require '[clj-http.client :as client])
                       (client/get "http://localhost:9333/api/products/books"))
                     :body)]
    (-> (json/read-value json-str json/keyword-keys-object-mapper)
        first))
  ;;=> {:title "Kalevala",
  ;;    :author "Elias Lönnrot",
  ;;    :year 1835,
  ;;    :language "Finnish",
  ;;    :id 2001,
  ;;    :product-group 1,
  ;;    :price 3.95,
  ;;    :country "Finland"}

  (-> (do
        (require '[jsonista.core :as json])
        (require '[clojure.edn])
        (require '[clj-http.client :as client])
        (client/get "http://localhost:9333/api/products/books/2002"))
      keys)

  (->
   @my-atom
   :req
   :parameters)
  ;;=> {:path {:id 2002}}
  )





(ns backend.api.products
  (:require [ring.util.http-response :as resp]))


;; NOTE: I intentionally left a lot of debugging config and rich comments for learning purposes in these source files.

;; NOTE (1/3): An example how to debug the handler: first create an atom in the namespace.
;; Then see the handler get-books and the rich comment.
(def my-atom (atom {}))

(defn get-books [req]
  (let [db (:db req)
        ;_ (swap! my-atom assoc :req req)
        ;; NOTE (2/3): Open these two comments to see the db.
        ; _ (println @db)
        ; _ (swap! my-atom assoc :db @db)
        res (:books @db)]
    (resp/ok res)))

;; (comment

;;   (get-books {})
;;   (get-movies {})
;;   (require '[portal.api :as p]
;;            '[user])
;;   (def p (p/open))
;;   (add-tap #'p/submit)
;;   (tap> (-> (user/env)
;;             :db/tsv
;;             deref
;;             :books))

;;   (:books @(:db/tsv (user/env)))
;;   (:req @my-atom))

;; (comment
;;   ;; NOTE (3/3): If you opened the comments above, you can then debug the db entity like this:
;;   ; First call the api:
;;   (client/get "http://localhost:9333/api/products/books")
;;   (-> @my-atom
;;       :db
;;       :books
;;       first)
;;   ;;=> {:id 2001,
;;   ;;    :product-group 1,
;;   ;;    :title "Kalevala",
;;   ;;    :price 3.95,
;;   ;;    :author "Elias Lönnrot",
;;   ;;    :year 1835,
;;   ;;    :country "Finland",
;;   ;;    :language "Finnish"} 
;;   )


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


(defn next-id [db key]
  (let [products (key db)
        max-id (apply max (map :id products))]
    (inc max-id)))


(defn add-product [db key product]
  (swap! db update key conj product))


(defn create-book [req]
  (let [book (:body (:parameters req))
        id (next-id @(:db req) :books)
        book (assoc book :id id)]
    (add-product (:db req) :books book)
    (resp/ok book)))


(defn create-movie [req]
  (let [movie (:body (:parameters req))
        id (next-id @(:db req) :movies)
        movie (assoc movie :id id)]
    (add-product (:db req) :movies movie)
    (resp/ok movie)))



;; (comment

;;   ;(:parameters my-req)
;;   ;(keys my-req)

;;   (require '[jsonista.core :as json])

;;   (defn post-book [book]
;;     (client/post "http://localhost:9333/api/products/books"
;;                  {:body (json/write-value-as-string book)
;;                   :headers {"Content-Type" "application/json"}}))

;;   (post-book {:product-group 1,
;;               :title "KARIN KIRJA 1111111111111111111",
;;               :price 3.95,
;;               :author "Elias Lönnrot",
;;               :year 1835,
;;               :country "Finland",
;;               :language "Finnish"})

;;   (client/get "http://localhost:9333/api/products/books")

;;   (count (-> (user/env)
;;              :db/tsv
;;              deref
;;              :books))

;;   ;(require '[portal.api :as p])
;;   (def p (p/open))
;;   (add-tap #'p/submit)
;;   (tap> (-> (user/env)
;;             :db/tsv
;;             deref
;;             :books))

;;   (defn post-movie [movie]
;;     (client/post "http://localhost:9333/api/products/movies"
;;                  {:body (json/write-value-as-string movie)
;;                   :headers {"Content-Type" "application/json"}}))

;;   (post-movie {:product-group 1,
;;                :title "KARIN ELOKUVA 1111111111111111111",
;;                :price 3.95,
;;                :director "Kari Marttila",
;;                :year 1935,
;;                :country "Finland",
;;                :genre "Horror"})

;;   (count (-> (user/env)
;;              :db/tsv
;;              deref
;;              :movies))

;;   *e

;;   ; (next-id @(:db my-req) :books)
;;   ;;=> 2002


;;   ;(require '[user])
;;   (let [id 2002
;;         books (-> (user/env)
;;                   :db/tsv
;;                   deref
;;                   :books)]
;;     (first (filter (fn [book]
;;                      (= (:id book) id))
;;                    books)))

;;   (let [dummy-req {:db (-> (user/env) :db/tsv)}
;;         dummy-req (assoc dummy-req :parameters {:path {:id 2009}})]
;;     (get-book dummy-req))
;;   ;;=> {:status 200,
;;   ;;    :headers {},
;;   ;;    :body
;;   ;;    {:id 2009,
;;   ;;     :product-group 1,
;;   ;;     :title "The Adventures of Huckleberry Finn",
;;   ;;     :price 61.83,
;;   ;;     :author "Mark Twain",
;;   ;;     :year 1884,
;;   ;;     :country "United States",
;;   ;;     :language "English"}}

;;   (let [dummy-req {:db (-> (user/env) :db/tsv)}
;;         dummy-req (assoc dummy-req :parameters {:path {:id 9002}})]
;;     (get-book dummy-req))
;;   ;;=> {:status 404, :headers {}, :body {:message "Not found", :id 9002}}

;;   ; (require '[clj-http.client :as client])
;;   (client/get "http://localhost:9333/api/products/books/2002")
;;   (client/get "http://localhost:9333/api/products/books/9002")
;;   *e)


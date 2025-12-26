
(ns scratch-frontend
  (:require 
   [datascript.core :as ds]
   [frontend.app :as app]
   ))

(comment
  ;; Experimentation

  (ds/pull (ds/db app/!conn) '[*] :app)
  ;;=> {:db/id 5,
  ;;    :app/page {:db/id 43},
  ;;    :app/pg-config [{:db/id 1} {:db/id 2}],
  ;;    :app/started-at #inst "2025-12-26T08:48:48.323-00:00",
  ;;    :db/ident :app}


  (ds/pull (ds/db app/!conn) '[* {:app/pg-config [*]} {:app/page [*]}] :app)
  ;;=> {:app/page {:db/id 43, :page/navigated {:page :home}},
  ;;    :app/pg-config
  ;;    [{:db/id 1,
  ;;      :pg/id :books,
  ;;      :pg/name "Books",
  ;;      :pg/pg-id 1,
  ;;      :pg/post-api "/products/books",
  ;;      :pg/post-id :books,
  ;;      :pg/query-api "/products/books",
  ;;      :pg/query-id :books}
  ;;     {:db/id 2,
  ;;      :pg/id :movies,
  ;;      :pg/name "Movies",
  ;;      :pg/pg-id 2,
  ;;      :pg/post-api "/products/movies",
  ;;      :pg/post-id :movies,
  ;;      :pg/query-api "/products/movies",
  ;;      :pg/query-id :movies}],
  ;;    :db/id 5,
  ;;    :app/started-at #inst "2025-12-26T08:48:48.323-00:00",
  ;;    :db/ident :app}

  ;;=> All products in the database
  (ds/q '[:find [(pull ?e [*]) ...]
          :where [?e :product/id]]
        (ds/db app/!conn))

  ;; Pull all products for a specific pg
  ;;=> All books
  (ds/q '[:find [(pull ?e [*]) ...]
          :in $ ?pg
          :where
          [?e :product/pg ?pg-ref]
          [?pg-ref :pg/id ?pg]]
        (ds/db app/!conn) :books)
  ;;=> []
  

  )
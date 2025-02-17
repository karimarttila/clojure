(ns common.schema
  (:require [malli.core :as m]
            [malli.util :as mu]
            [malli.transform :as mt]
            [malli.experimental.time :as malli.time]
            [malli.registry :as malli.registry]))

(malli.registry/set-default-registry!
 (malli.registry/composite-registry
  (m/default-schemas)
  (malli.time/schemas)))


(def book
  [:map
   [:id :int]
   [:product-group :int]
   [:title :string]
   [:price :double]
   [:author :string]
   [:year :int]
   [:country :string]
   [:language :string]])


(def movie
  [:map
   [:id :int]
   [:product-group :int]
   [:title :string]
   [:price :double]
   [:director :string]
   [:year :int]
   [:country :string]
   [:genre :string]])



(comment


  ;; Let's leave the rich comment here,
  ;; readers can see how I developed the functionality.
  
  ;; How to do coercion to malli? We need to convert strings to ints and doubles.
  ;; Let's examine it.
  (def item {:id 1 :text "Some text" :price 3.19})
  (def item-schema
    [:map
     [:id :int]
     [:text :string]
     [:price :double]])

  (m/validate item-schema item)
  ;;=> true
  (m/decode item-schema item mt/json-transformer)
  ;;=> {:id 1, :text "Some text", :price 3.19}
  ; Let's try using strings instead of int and double:
  (def item2 {:id "1" :text "Some text" :price "3.19"})
  (m/validate item-schema item2)
  ;;=> false
  (m/decode item-schema item2 mt/string-transformer)
  ;;=> {:id 1, :text "Some text", :price 3.19}
  ; Beautiful. :-) 
  

  (m/decode book (->> (user/env)
                 :db/tsv
                 deref
                 :db
                 :books
                 first)
             mt/string-transformer)
  ;;=> {:id 2001,
  ;;    :product-group 1,
  ;;    :title "Kalevala",
  ;;    :price 3.95,
  ;;    :author "Elias Lönnrot",
  ;;    :year 1835,
  ;;    :country "Finland",
  ;;    :language "Finnish"}
  
  (->> (user/env)
       :db/tsv
         ; Deref atom
       deref
       :db
       :books
       first)
  ;;=> {:id "2001",
  ;;    :product-group "1",
  ;;    :title "Kalevala",
  ;;    :price "3.95",
  ;;    :author "Elias Lönnrot",
  ;;    :year "1835",
  ;;    :country "Finland",
  ;;    :language "Finnish"}
  
  (->> (user/env)
       :db/tsv
         ; Deref atom
       deref
       :db
       :movies
       first)
;;=> {:id "1",
;;    :product-group "2",
;;    :title "Juurakon Hulda",
;;    :price "82.92",
;;    :director "Valentin Vaala",
;;    :year "1937",
;;    :country "Finland",
;;    :genre "Drama"}
  )


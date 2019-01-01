(ns simpleserver.util.azuregenclass.product
  (:import (com.microsoft.azure.storage.table TableServiceEntity))
  (:gen-class
    :extends com.microsoft.azure.storage.table.TableServiceEntity
    :constructors {[] []}
    :state state
    :init init
    :prefix "bean-"
    :main false
    :methods [[getTitle [] String]
              [setTitle [String] void]
              [getPrice [] String]
              [setPrice [String] void]
              [getAorD [] String]                           ; Author or Director
              [setAorD[String] void]
              [getYear [] String]
              [setYear [String] void]
              [getCountry [] String]
              [setCountry [String] void]
              [getGorL [] String]                           ; Genre or Language
              [setGorL [String] void]]
    ))


(defn bean-init []
  [[] (atom {:title nil, :price nil, :aord nil, :year nil, :country nil, :gorl nil})])

(defmacro setfield
  [this key value]
  `(swap! (.state ~this) into {~key ~value}))

(defmacro getfield
  [this key]
  `(@(.state ~this) ~key))

(defn ^String bean-getTitle
  [this]
  (getfield this :title))

(defn bean-setTitle [this ^java.lang.String title]
  (setfield this :title title))

(defn ^String bean-getPrice
  [this]
  (getfield this :price))

(defn bean-setPrice [this ^java.lang.String price]
  (setfield this :price price))

(defn ^String bean-getAorD
  [this]
  (getfield this :aord))

(defn bean-setAorD [this ^java.lang.String aord]
  (setfield this :aord aord))

(defn ^String bean-getYear
  [this]
  (getfield this :year))

(defn bean-setYear [this ^java.lang.String year]
  (setfield this :year year))

(defn ^String bean-getCountry
  [this]
  (getfield this :country))

(defn bean-setCountry [this ^java.lang.String country]
  (setfield this :country country))

(defn ^String bean-getGorL
  [this]
  (getfield this :gorl))

(defn bean-setGorL [this ^java.lang.String gorl]
  (setfield this :gorl gorl))

;(compile 'simpleserver.util.azuregenclass.product)

;(comment (compile 'simpleserver.util.azuregenclass.product))
(ns simpleserver.util.azuregenclass.product
  (:import (com.microsoft.azure.storage.table TableServiceEntity))
  (:gen-class
    :extends com.microsoft.azure.storage.table.TableServiceEntity
    :constructors {[] []}
    :state state
    :init init
    :prefix "bean-"
    :main false
    :methods [[setTitle [String] void]
              [getTitle [] String]]
    ))


(defn bean-init []
  [[] (atom {:title nil})])

(defmacro setfield
  [this key value]
  `(swap! (.state ~this) into {~key ~value}))

(defmacro getfield
  [this key]
  `(@(.state ~this) ~key))

(defn bean-setTitle [this ^java.lang.String title]
  (setfield this :title title))

(defn ^String bean-getTitle
  [this]
  (getfield this :title))

(compile 'simpleserver.util.azuregenclass.product)


(ns simpleserver.util.azuregenclass.users
  (:import (com.microsoft.azure.storage.table TableServiceEntity))
  (:gen-class
    :extends com.microsoft.azure.storage.table.TableServiceEntity
    :constructors {[] []}
    :state state
    :init init
    :prefix "bean-"
    :main false
    :methods [[getLastname [] String]
              [setLastname [String] void]
              [getFirstname [] String]
              [setFirstname [String] void]
              [getHpwd [] String]
              [setHpwd[String] void]]
    ))


(defn bean-init []
  [[] (atom {:last-name nil, :first-name nil, :hpwd nil})])

(defmacro setfield
  [this key value]
  `(swap! (.state ~this) into {~key ~value}))

(defmacro getfield
  [this key]
  `(@(.state ~this) ~key))

(defn ^String bean-getLastname
  [this]
  (getfield this :last-name))

(defn bean-setLastname [this ^java.lang.String last-name]
  (setfield this :last-name last-name))

(defn ^String bean-getFirstname
  [this]
  (getfield this :first-name))

(defn bean-setFirstname [this ^java.lang.String first-name]
  (setfield this :first-name first-name))

(defn ^String bean-getHpwd
  [this]
  (getfield this :hpwd))

(defn bean-setHpwd [this ^java.lang.String hpwd]
  (setfield this :hpwd hpwd))

;(compile 'simpleserver.util.azuregenclass.users)

;(comment (compile 'simpleserver.util.azuregenclass.users
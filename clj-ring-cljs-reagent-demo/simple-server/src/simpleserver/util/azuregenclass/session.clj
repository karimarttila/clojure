(ns simpleserver.util.azuregenclass.session
  (:import (com.microsoft.azure.storage.table TableServiceEntity))
  (:gen-class
    :extends com.microsoft.azure.storage.table.TableServiceEntity
    :constructors {[] []}
    :init init
    :prefix "bean-"
    :state state))

(defn bean-init
  ([]
    ))

;(compile 'simpleserver.util.azuregenclass.session)
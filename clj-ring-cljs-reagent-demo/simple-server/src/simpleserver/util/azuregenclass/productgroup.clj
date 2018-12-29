(ns simpleserver.util.azuregenclass.productgroup
  (:import (com.microsoft.azure.storage.table TableServiceEntity))
  (:gen-class
    :extends com.microsoft.azure.storage.table.TableServiceEntity
    :constructors {[] []}
    :init initialize
    :state state))

(defn -initialize
  ([]
    ))

(compile 'simpleserver.util.azuregenclass.productgroup)

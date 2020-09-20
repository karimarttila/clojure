(ns simplefrontend.state
  (:require [re-frame.core :as re-frame]))


(re-frame/reg-event-db ::todo
  (fn [db [_ data]]
    (assoc-in db [:data :todo] data)))

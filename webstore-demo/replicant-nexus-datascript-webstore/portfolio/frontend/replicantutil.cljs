(ns frontend.replicantutil
  (:require
   [replicant.dom :as r]))


(r/set-dispatch!
 (fn [event-data _handler-data]
   (when (= :replicant.trigger/dom-event
            (:replicant/trigger event-data))
     (when goog.DEBUG
       (prn "** set-dispatch! **")))))



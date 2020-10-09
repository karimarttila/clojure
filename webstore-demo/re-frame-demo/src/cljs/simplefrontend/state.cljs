(ns simplefrontend.state
  (:require [re-frame.core :as re-frame]))

;; Subscriptions

(re-frame/reg-sub
  ::current-route
  (fn [db]
    (:current-route db)))

(re-frame/reg-sub
  ::jwt
  (fn [db]
    (:jwt db)))

(re-frame/reg-sub
  ::debug
  (fn [db]
    (:debug db)))

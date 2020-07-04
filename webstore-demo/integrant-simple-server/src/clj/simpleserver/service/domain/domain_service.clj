(ns simpleserver.service.domain.domain-service
  "Provides simplified access to domain functions."
  (:require [simpleserver.service.service :as ss-service]
            [simpleserver.service.domain.domain-interface :as ss-domain-i]))

(defn- get-service [env]
  (ss-service/get-service env :domain))

(defn get-product-groups [env]
  (ss-domain-i/get-product-groups (get-service env) env))

(defn get-products [env pg-id]
  (ss-domain-i/get-products (get-service env) env pg-id))

(defn get-product [env pg-id p-id]
  (ss-domain-i/get-product (get-service env) env pg-id p-id))


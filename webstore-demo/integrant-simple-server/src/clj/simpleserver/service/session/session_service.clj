(ns simpleserver.service.session.session-service
  "Provides simplified access to session functions."
  (:require [simpleserver.service.service :as ss-service]
            [simpleserver.service.session.session-interface :as ss-session-i]))

(defn- get-service [env]
  (ss-service/get-service env :session))

(defn create-json-web-token [env email]
  (ss-session-i/create-json-web-token (get-service env) env email))

(defn validate-token [env token]
  (ss-session-i/validate-token (get-service env) env token))


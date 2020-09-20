(ns simpleserver.service.user.user-service
  "Provides simplified access to user functions."
  (:require [simpleserver.service.service :as ss-service]
            [simpleserver.service.user.user-interface :as ss-user-i]))

(defn- get-service [env]
  (ss-service/get-service env :user))

(defn email-already-exists? [env email]
  (ss-user-i/email-already-exists? (get-service env) env email))

(defn add-new-user [env email first-name last-name password]
  (ss-user-i/add-new-user (get-service env) env email first-name last-name password))

(defn credentials-ok? [env email password]
  (ss-user-i/credentials-ok? (get-service env) env email password))

(defn -get-users [env]
  (ss-user-i/-get-users (get-service env) env))

(defn -reset-users! [env]
  (ss-user-i/-reset-users! (get-service env) env))
(ns simplefrontend.http
  (:require [re-frame.core :as re-frame]
            [simplefrontend.util :as sf-util]
            [goog.crypt.base64 :as base64]
            [ajax.core :as ajax]))

(defn -base64-encode
  "Does the base64 encoding for the string"
  [str]
  (base64/encodeString str false))


(defn -encode-token
  "Encodes the token to be used for pages"
  [jwt]
  (str "Basic " (-base64-encode (str jwt))))


(defn auth-header [db]
  (let [jwt (get-in db [:jwt])
        ret (if jwt
              [:Authorization (-encode-token jwt)]
              nil)
        _ (sf-util/clog "auth-header, ret: " ret)]
    ret))

;; See: https://github.com/day8/re-frame-http-fx
(defn http [method db uri data on-success on-failure]
  {:http-xhrio {:debug true
                :method method
                :uri uri
                :params data
                :headers (auth-header db)
                :format (ajax/json-request-format)
                :response-format (ajax/json-response-format {:keywords? true})
                :on-success [on-success]
                :on-failure [on-failure]}
   :db db})

(def http-post (partial http :post))
(def http-get (partial http :get))


(ns simplefrontend.http
  (:require [simplefrontend.util :as sf-util]
            [goog.crypt.base64 :as base64]
            [ajax.core :as ajax :refer []])) ; NOTE: Empty refer for clj-kondo

(defn -base64-encode
  "Does the base64 encoding for the string"
  [str]
  (base64/encodeString str false))


(defn -encode-token
  "Encodes the token to be used for pages"
  [jwt]
  (str "Basic " (-base64-encode (str jwt))))


(defn get-jwt [db]
  (let [jwt (get-in db [:jwt])
        ret (if jwt
              (-encode-token jwt)
              nil)
        _ (sf-util/clog "auth-header, ret: " ret)]
    ret))

; TODO: How to use EDN in request and response bodys?
; Now for some reason we get edn response with 200 status just fine but
; e.g. login goes to error handler.
; [:Accept "application/edn" :Content-Type "application/edn"]
(defn get-headers [db]
  (let [jwt (get-jwt db)
        ret (cond-> {:Accept "application/json" :Content-Type "application/json"}
                    jwt (assoc :Authorization jwt))
        _ (sf-util/clog "get-headers, ret" ret)]
    ret
    ))

;; See: https://github.com/day8/re-frame-http-fx
(defn http [method db uri data on-success on-failure]
  (sf-util/clog "http, uri" uri)
  (let [xhrio (cond-> {:debug true
                       :method method
                       :uri uri
                       :headers (get-headers db)
                       :format (ajax/json-request-format)
                       :response-format (ajax/json-response-format {:keywords? true})
                       :on-success [on-success]
                       :on-failure [on-failure]}
                      data (assoc :params data))]
    {:http-xhrio xhrio
     :db db}))

(def http-post (partial http :post))
(def http-get (partial http :get))


(ns simplefrontend.session
  (:require
    [goog.crypt.base64 :as base64]
    [reagent.core :as r]
    [ajax.core :as a-core]
    ))

;; -------------------------
;; Application state.
(def app-state (r/atom {}))


;; -------------------------
;; Utilities

(defn -base64-encode
  "Does the base64 encoding for the string"
  [str]
  (base64/encodeString str false))


(defn -encode-token
  "Encodes the token to be used for pages"
  [token]
  (str "Basic " (-base64-encode (str token))))


(defn get-encoded-token
  "Gets the token for pages"
  []
  (-encode-token (@app-state :token)))

(defn set-token
  "Sets the token for the application"
  [token]
  (swap! app-state assoc :token token))


(defn set-current-page
  [page]
  (swap! app-state assoc :page page))

(defn get-current-page
  []
  (@app-state :page))
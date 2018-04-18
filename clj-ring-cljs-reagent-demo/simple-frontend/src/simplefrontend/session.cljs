(ns simplefrontend.session
  (:require
    [goog.crypt.base64 :as base64]
    [reagent.core :as r]
    [ajax.core :as a-core]))


;; -------------------------
;; Application state.
(def app-state (r/atom {}))
(def page-params (r/atom {}))

;; -------------------------
;; Utilities

(def token-key "sf-token")

(defn -base64-encode
  "Does the base64 encoding for the string"
  [str]
  (base64/encodeString str false))


(defn -encode-token
  "Encodes the token to be used for pages"
  [token]
  (str "Basic " (-base64-encode (str token))))


(defn get-encoded-token
  "Gets the encoded token for pages"
  []
  (let [token-from-app-state (@app-state :token)
        token (if token-from-app-state
                token-from-app-state
                (.getItem (.-localStorage js/window) token-key))]
    (-encode-token token)))



(defn set-token
  "Sets the token for the application"
  [token]
  ; Store to Clojurescript application state atom.
  (swap! app-state assoc :token token)
  ; Also store to browser local storage.
  (.setItem (.-localStorage js/window) token-key token))


(defn set-page-params!
  [page params]
  (swap! page-params assoc page params))

(defn get-page-params
  [page]
  (@page-params page))

(defn set-current-page!
  [page]
  (swap! app-state assoc :page page))

(defn get-current-page
  []
  (@app-state :page))
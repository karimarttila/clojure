(ns simplefrontend.config)

;; -------------------------
;; Application wide properties.
;(def backend-host-config {:host "localhost" :port 3045})
(def backend-host-config {:host "localhost" :port 6161})

(defn get-base-url
  []
  (let [host (:host backend-host-config)
        port (:port backend-host-config)
        url (str "http://" host ":" port)]
    url))


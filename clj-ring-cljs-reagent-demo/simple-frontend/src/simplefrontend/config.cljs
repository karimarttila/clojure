(ns simplefrontend.config)

;; -------------------------
;; Application wide properties.
(def backend-host-config {:host "localhost" :port 3045})

(defn get-base-url
  []
  (let [host (:host backend-host-config)
        port (:port backend-host-config)
        url (str "http://" host ":" port)]
    url))


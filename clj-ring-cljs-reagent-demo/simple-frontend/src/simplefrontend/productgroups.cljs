(ns simplefrontend.productgroups
  (:require
    [reagent.core :as r]
    [ajax.core :as a-core]
    [goog.crypt.base64 :as base64]
    ))


;; ***** Namespace vars. *****
(def my-error-msg-atom (r/atom nil))
(def my-success-msg-atom (r/atom nil))
;; For debugging
(def my-response-atom (r/atom nil))


(defn reset-page
  "Reset page atoms when coming here from home page."
  []
  (reset! my-response-atom nil)
  (reset! my-error-msg-atom nil)
  (reset! my-success-msg-atom nil)
  )


(defn -handler
  "The success (http status 200) handler."
  [response]
  (.log js/console (str "ENTER -handler, response: " response))
  (let [
        ]
    (do
      (reset! my-response-atom response)
      (reset! my-success-msg-atom "TODO")
      (reset! my-error-msg-atom nil)
      ))
  )


(defn -error-handler
  "The error (http status not 200) handler."
  [response]
  (.log js/console (str "ENTER -error-handler, response: " response))
  (let [error-msg ((:response response) "msg")]
    (do
      (reset! my-response-atom response)
      (reset! my-error-msg-atom error-msg)
      (reset! my-success-msg-atom nil))
    )
  )

(defn -base64-encode
  "Does the base64 encoding for the string"
  [str]
  (base64/encodeString str false))


(defn -get-productgroups
  "Does the GET for productgroups"
  [token]
  (let [host (:host simplefrontend.core/backend-host-config)
        port (:port simplefrontend.core/backend-host-config)
        url (str "http://" host ":" port "/product-groups")
        encoded-token (str "Basic " (-base64-encode (str token)))
        ]
    (let [response (a-core/GET url
                               {:format          :json
                                :response-format :json
                                :headers         {"Accept"        "application/json"
                                                  "Content-Type"  "application/json"
                                                  "Authorization" encoded-token
                                                  }
                                :handler         -handler
                                :error-handler   -error-handler
                                }
                               )]
      (.log js/console (str "Response: " response))
      response)
    ))

;; TODO: CONTINUE HERE: HOW TO SHOW THE PRODUCT GROUP LIST?
(defn productgroups-page
  "The actual page function called by simplefrontend.core."
  [token]
  (.log js/console (str "ENTER productgroups-page"))
  (let [dummy-call (-get-productgroups token)
        ;product-groups (@my-response-atom :product-groups)
        ]
    (fn []
      [:div
       [:h1 "Product Groups"]
       ;[:p product-groups]
       [:div [:a {:href "#/"} "Back to Web Store Home Page"]]])))




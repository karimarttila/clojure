(ns frontend.http
  (:require-macros [cljs.core.async.macros :refer [go]])
  (:require    [cljs.core.async :refer [<!]]
               [cljs-http.client :as http]
               [frontend.util :as f-util]))



(defn fetch [state action]
  (f-util/clog "fetch, state: " @state)
  (f-util/clog "fetch, action: " action)
  (let [id (get-in action [:query :id])
        _ (f-util/clog "fetch, id: " id)
        url (str "/api" (get-in action [:query :api]))]
    (go (let [response (<! (http/get url))]
          (if (= 200 (:status response))
            (swap! state assoc-in [:data id] (:body response))
            (swap! state assoc-in [:data id] (:status response)))))))



(comment

  (def my-state (atom {}))

  (fetch my-state {:jee "jee"})
  (count (:books @my-state))

  ;; Example how to tap to the data using djblue Portal: 
  (require '[portal.web :as p])
  ; NOTE: This asks a popup window, you have to accept it in the browser!!!
  (def p (p/open))
  ; Now you should have a new pop-up browser window...
  (add-tap #'p/submit)
  (tap> :hello)
  (tap> (:books @my-state))
  ;; You should now see a vector of book maps in the portal window.
  )




(ns frontend.http
  (:require-macros [cljs.core.async.macros :refer [go]])
  (:require    [cljs.core.async :refer [<!]]
               [cljs-http.client :as http]
               [frontend.util :as f-util]))



(defn fetch [dispatcher action]
  ;(f-util/clog "fetch, state: " @state)
  (f-util/clog "fetch, action: " action)
  (let [id (get-in action [:query :id])
        _ (f-util/clog "fetch, id: " id)
        url (str "/api" (get-in action [:query :api]))]
    (go (let [response (<! (http/get url))]
          (if (= 200 (:status response))
            (dispatcher nil [[:db/assoc-in [:db/data id] (:body response)]])
            (dispatcher nil [[:db/assoc-in [:db/data id] (:status response)]]))))))


(ns simplefrontend.http
  (:require [re-frame.core :as re-frame]
            [ajax.core :as ajax]
            ))

;; See: https://github.com/day8/re-frame-http-fx


#_(defn request [{:keys [_method _uri _params _on-success _on-failure] :as opts}]
  (js/alert (str "request, opts: " opts))
  {:http-xhrio (merge {:format (ajax/transit-request-format)
                       :response-format (ajax/transit-response-format)}
                      opts)})

#_(re-frame/reg-event-fx
  ::http
  (fn [_ [_ req]]
    (js/alert (str "::http, request: " req))
    (request req)))



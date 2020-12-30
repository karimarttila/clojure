(ns worldstat.backend.routes.routes
  (:require [reitit.swagger-ui :as swagger-ui]
            [reitit.swagger :as swagger]
            [ring.util.http-response :as r]
            [worldstat.backend.data.world :as world]
            [worldstat.backend.routes.app-routes :as app-routes]))

;; ******************************************************************
; Curl api like:
; http localhost:5522/worldstat/api/version
;; ******************************************************************


(def my-version {:version 0.1 :date "2020-12-19"})

(defn create [env]
  ["/worldstat"
   ["/swagger.json"
    {:get {:no-doc true
           :swagger {:info {:title "worldstat-api"
                            :description "worldstat"}
                     :tags [{:name "worldstat", :description "worldstat"}
                            {:name "admin", :description "administration"}
                            {:name "health" :description "health api"}]}
           :handler (swagger/create-swagger-handler)}}]
   ["/api-docs/*"
    {:get {:no-doc true
           :handler (swagger-ui/create-swagger-ui-handler
                      {:config {:validatorUrl nil}
                       :url "/worldstat/swagger.json"})}}]

   ["/api"
    ["/version" {:swagger {:tags ["version"]}}
     ["" {:get {:summary "get version info"
                :responses {200 {:description "version info"}}
                :handler (constantly {:status 200, :body my-version})}}]]
    ["/health" {:swagger {:tags ["health"]}}
     ["/ping" {:get {:summary "ping"
                     :responses {200 {:description "pong"}}
                     :handler (constantly {:status 200, :body {:message "pong"}})}}]
     ; For testing purposes (has the :data payload).
     ["/test" {:get {:summary "test"
                     :responses {200 {:description "test"}}
                     :handler (fn [req]
                                (r/ok {:reply "pong"}))}
               ; For testing purposes (has post data).
               :post {:summary "post test"
                      :parameters {:body any?}
                      :handler (fn [req]
                                 (let [body (get-in req [:parameters :body])
                                       myreq (:ping body)]
                                   (r/ok {:request myreq :reply "pong"})))}}]]
    ["/data" {:swagger {:tags ["data"]}}
     ["/:metric" {:get {:summary "metric"
                        :parameters {:path [:map [:metric string?]]}
                        :responses {200 {:description "data"}}
                        :handler (fn [req]
                                   (let [metric (get-in req [:parameters :path :metric])]
                                     (-> (world/get-world-data (keyword metric))
                                         r/ok)))}}]]
    (app-routes/routes env)]])

(comment
  (require '[clj-http.client])
  (clj-http.client/get "http://localhost:5522/worldstat/api/version")
  (clj-http.client/get "http://localhost:5522/worldstat/api/health/test")
  (clj-http.client/get "http://localhost:5522/worldstat/api/health/ping")
  (clj-http.client/get "http://localhost:5522/worldstat/api/health/test" {:content-type :application/json :accept :application/json :debug true})
  (clj-http.client/get "http://localhost:5522/worldstat/api/health/test" {:content-type :application/edn :accept :application/edn :debug true})
  (clj-http.client/post "http://localhost:5522/worldstat/api/health/test" {:form-params {:ping "ping"} :content-type :application/json :accept :application/json :debug true})
  )

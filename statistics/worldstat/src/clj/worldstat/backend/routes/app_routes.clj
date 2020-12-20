(ns worldstat.backend.routes.app-routes
  (:require
    [clojure.string :as str]
    [clojure.java.io :as io]
    [reitit.ring.malli :as malli]
    [malli.edn :as edn]
    [ring.util.http-response :as r]
    [tick.alpha.api :as tick]
    [worldstat.backend.routes.http :as http]))

(defn routes [{:keys [data]}]
  [["/admin"
    {:swagger {:tags ["admin"]}}

    ["/import"
     {:post {:swagger {:consumes #{"application/edn"}}
             :summary "import worldstat"
             :parameters {:body [:map [:TODO string?]]}
             :responses {200 {:description ""}}
             :handler (fn [{{:keys [body]} :parameters}]
                        (r/ok {:TODO "TODO"}))}}]]

   ["/worldstat"
    {:swagger {:tags ["worldstat"]}
     :parameters {:query [:map [:TODO string?]]}}

    ["/list"
     {:get {:summary "List worldstat"
            :responses {200 {:description "list worldstat"}}
            :handler (fn [{{{:keys [:TODO]} :query} :parameters}]
                       (r/ok {:TODO "TODO"}))}}]]])

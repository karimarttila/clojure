(ns frontend.scenes
  (:require [portfolio.replicant :refer-macros [defscene]]
            [portfolio.ui :as portfolio]
            [frontend.views :as f-views]
            [frontend.replicantutil :as f-rutil]))



(defscene show-info
  (f-views/show-info "Hello info from Portfolio!" true :db/dummy))

(defscene show-error
  (f-views/show-error "Hello error from Portfolio!" true :db/dummy))


(defn main []
  (portfolio/start!
   {:config
    {:css-paths ["/css/main.css"]
     :viewport/defaults
     {:background/background-color "#fdeddd"}}}))


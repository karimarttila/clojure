(ns frontend.scenes
  #_{:clj-kondo/ignore [:unused-namespace]}
  (:require [portfolio.replicant :refer-macros [defscene]]
            [portfolio.ui :as portfolio]
            ;; NOTE: defscene macro uses frontend.views
            [frontend.views :as f-views]
            ;; NOTE: We need to require frontend.replicantutil here
            ;; Since it provides the render mechanism for Portfolio!
            [frontend.replicantutil :as f-rutil]))


;; See portfolio in:
;; http://localhost:8331/portfolio/index

;; TODO: How to add this suppress to namespace scope?
#_{:clojure-lsp/ignore [:clojure-lsp/unused-public-var]}
(defscene show-info
  #_{:clj-kondo/ignore [:syntax]}
  (f-views/show-info "Hello info from Portfolio!" true :db/dummy))

#_{:clojure-lsp/ignore [:clojure-lsp/unused-public-var]}
(defscene show-error
  #_{:clj-kondo/ignore [:syntax]}
  (f-views/show-error "Hello error from Portfolio!" true :db/dummy))


(defn main []
  (portfolio/start!
   {:config
    {:css-paths ["/css/main.css"]
     :viewport/defaults
     {:background/background-color "#fdeddd"}}}))


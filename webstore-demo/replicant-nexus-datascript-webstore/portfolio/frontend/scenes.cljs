(ns frontend.scenes
  {:clj-kondo/config {:linters {:private-call {:level :off}}}}
  (:require [portfolio.replicant :refer-macros [defscene]]
            [portfolio.ui :as portfolio]
            [frontend.views :as f-views]))


;; See portfolio in:
;; http://localhost:9333/portfolio/index

;; TODO: How to add this suppress to namespace scope?
#_{:clojure-lsp/ignore [:clojure-lsp/unused-public-var]}
(defscene show-info
  []
  (f-views/show-info "Hello info from Portfolio!" true :db/dummy))

#_{:clojure-lsp/ignore [:clojure-lsp/unused-public-var]}
(defscene show-error
  []
  (f-views/show-error "Hello error from Portfolio!" true :db/dummy))


(defn main []
  (portfolio/start!
   {:config
    {:css-paths ["/css/main.css"]
     :viewport/defaults
     {:background/background-color "#fdeddd"}}}))


;; NOTE: Do not use namespace in scratch!
;; That way you can send code snippets to the current namespace from this scratch file.
;; In Cursive send from editor to REPL. <shift>-<ctrl>-ö.
;; NOTE: Keep in this file this project related scratch stuff that is in git.
;; Store general Clojure scratch code snippets in: /mnt/edata/aw/kari/my-clj-dev/dev-src/commonscratch.clj
;; ... and rename that file occasionally to e.g. "old-scratch-2019-05" in that directory.

(in-ns 'user)

(mydev/reset)


(require '[simpleserver.domain.domain-single-node])

(def s-node (simpleserver.domain.domain-single-node/->SingleNodeR simpleserver.util.config/config-state))
s-node
(simpleserver.domain.domain-interface/get-product-groups s-node)
(simpleserver.domain.domain-interface/get-products s-node 1)
(simpleserver.domain.domain-interface/get-product s-node 1 2024)



(simpleserver.domain.domain-single-node/-get-raw-products 1)

@simpleserver.domain.domain-single-node/my-domain-atom

(def pg-id 1)
(require '[clojure.java.io :as io])
(require '[clojure.data.csv :as csv])
(require '[simpleserver.util.config :as ss-config])
(def data-dir (get-in simpleserver.util.config/config-state [:domain :data-dir]))
data-dir
(with-open [reader (io/reader (str data-dir "/pg-" pg-id "-products.csv"))]
                (doall
                  (csv/read-csv reader :separator \tab)))

; Get vars in user namespace.
(ns-publics 'user)


(require '[simpleserver.webserver.server])

*ns*


; NOTE: You can refresh mount states like this:
; First edit config, e.g. simpleserver.util.config.
; Then reset:
(mydev/reset)
; Then check new config:
simpleserver.util.config/config-state

; ************** WARNING **************************
; NOTE: When sending this to repl using <ctrl>-<shift>-ö doesn't always get the refreshed state.
; But when doing the same in the repl in put window does the job.
; I asked about that in Clojurians Slack in #cursive channel.


; Require mydev which has development stuff.
; NOTE: If there is syntax error in mydev it gets required but you cannot e.g. (mydev/refresh) => No such namespace: mydev.
(require '[mydev])
(mydev/refresh)
(mydev/refresh-all)
(mydev/reset)

;; Mount:
(require '[mount.core :as mount])
(mount/start)
(mount/stop)



; Start just config-state.
(mount/start #'simpleserver.util.config/config-state)
simpleserver.util.config/config-state
(mount/stop #'simpleserver.util.config/config-state)
simpleserver.util.config/config-state
; Check the content of config-state.
(def my-cs simpleserver.util.config/config-state)
my-cs
(get-in my-cs [:server :port])


(mydev/curl-get "/info")


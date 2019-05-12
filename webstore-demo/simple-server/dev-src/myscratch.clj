;; NOTE: Do not use namespace in scratch!
;; That way you can send code snippets to the current namespace from this scratch file.
;; In Cursive send from editor to REPL. <shift>-<ctrl>-ö.
;; NOTE: Keep in this file this project related scratch stuff that is in git.
;; Store general Clojure scratch code snippets in: /mnt/edata/aw/kari/my-clj-dev/dev-src/commonscratch.clj
;; ... and rename that file occasionally to e.g. "old-scratch-2019-05" in that directory.

; Print classpath in Clojure REPL
(pprint (clojure.string/split (System/getProperty "java.class.path") #":"))


; NOTE: Remember to add AWS_PROFILE=YOUR-PROFILE to Run Configuration / Enviroment
(require '[clojure.core.async :as a]
         '[clojure.java.io :as io]
         '[clojure.data.json :as json]
         '[cognitect.aws.client.api :as aws]
         '[cognitect.aws.client.api.async :as aws.async])

;; Mount:
(require '[mount.core :as mount])
(mount/start)
(mount/stop)
(mydev/reset)
simpleserver.util.config/config-state


(do
  (require '[mydev])
  (require '[mount.core :as mount])
  (mount/start)
  (mydev/curl-get "/info"))

; For command line repl.
(do (require '[clojure.core.async :as a] '[clojure.java.io :as io] '[clojure.data.json :as json] '[cognitect.aws.client.api :as aws] '[cognitect.aws.client.api.async :as aws.async]) (def ddb (aws/client {:api :dynamodb})) (aws/invoke ddb {:op :ListTables}) )

;; 0 Create a client to talk to DynamoDB
(def ddb (aws/client {:api :dynamodb}))

(aws/invoke ddb {:op :ListTables})
;; ask what it can do
(aws/ops ddb)
(aws/doc ddb :Scan)

(aws/invoke ddb
            {:op      :Scan
             :request {:TableName                 "ss-dev-product-group"}})


(require '[clojure.pprint])
(use 'clojure.pprint)
(import 'java.lang.Thread)
(-> (Thread/currentThread) (.getContextClassLoader) (.getURLs) (seq) (pprint))

(do
  (require '[mydev])
  (mydev/reset)
  simpleserver.util.config/config-state

  (require '[cognitect.aws.client.api :as aws])
  (require '[cognitect.aws.credentials :as credentials])

  (def endpoint (get-in simpleserver.util.config/config-state [:aws :endpoint]))
  (def access-key (get-in simpleserver.util.config/config-state [:aws :access-key]))
  (def secret-key (get-in simpleserver.util.config/config-state [:aws :secret-key]))
  endpoint
  access-key
  secret-key

  (def cred (credentials/basic-credentials-provider {:access-key-id     access-key
                                                     :secret-access-key secret-key}))
  cred

  ; https://cognitect-labs.github.io/aws-api/cognitect.aws.client.api-api.html
  (def ddb (aws/client {:api :dynamodb :credentials-provider cred
                        :endpoint-override endpoint}))

  (def ddb (aws/client {:api :dynamodb }))

  (aws/doc ddb :ListTables)
  (aws/ops ddb)
  (aws/invoke ddb {:op :ListTables})
  )

(aws/validate-requests ddb true)

(in-ns 'user)

(require '[mydev])
(mydev/reset)
simpleserver.util.config/config-state

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

(require '[mydev])
(require '[mount.core :as mount])
(mount/start)
(mydev/curl-get "/info")


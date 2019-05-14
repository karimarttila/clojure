
;; NOTE: Do not use namespace in scratch!
;; That way you can send code snippets to the current namespace from this scratch file.
;; In Cursive send from editor to REPL. <shift>-<ctrl>-ö.
;; NOTE: Keep in this file this project related scratch stuff that is in git.
;; Store general Clojure scratch code snippets in: /mnt/edata/aw/kari/my-clj-dev/dev-src/commonscratch.clj
;; ... and rename that file occasionally to e.g. "old-scratch-2019-05" in that directory.

;; ****************** WARNING *******************
;; Settings | Languages & Frameworks | Clojure | Evaluate forms in REPL namespace
;; must be turned on or (mydev/reset) here in the scratch file
;; works differently than in the REPL editor.
;; ****************** WARNING *******************



*ns*
(in-ns 'user)
(require '[simpleserver.domain.domain-dynamodb :as ss-ddb])
(def ddb-config (ss-ddb/get-dynamodb-config))
ddb-config
(let [{my-ddb :my-ddb
       my-table :my-table} ddb-config]
  (str my-ddb my-table))

(def my-ddb-domain (simpleserver.domain.domain-config/-get-domain "single-node"))
(def my-aws-domain (simpleserver.domain.domain-config/-get-domain "aws"))
my-single-node-domain
my-aws-domain
(simpleserver.domain.domain-interface/get-product-groups my-aws-domain)
(simpleserver.domain.domain-interface/get-products my-aws-domain 1)
(simpleserver.domain.domain-interface/get-product my-aws-domain 1 2024)

(def raw (simpleserver.domain.domain-interface/get-product-groups my-aws-domain))
raw
(def items (:Items raw))
items

(reduce
        (fn
          [mymap item]
          (assoc mymap
            (-> item :pgid :S) (-> item :pgname :S)))
        {}
        items)


(mydev/curl-get "/info")

(require 'mydev)
(mydev/reset)
simpleserver.util.config/config-state

; Print classpath in Clojure REPL
(pprint (clojure.string/split (System/getProperty "java.class.path") #":"))
(System/getenv "AWS_PROFILE")

; NOTE: Remember to add AWS_PROFILE=YOUR-PROFILE to Run Configuration / Enviroment
(require '[clojure.core.async :as a]
         '[clojure.java.io :as io]
         '[clojure.data.json :as json]
         '[cognitect.aws.client.api :as aws]
         '[cognitect.aws.client.api.async :as aws.async])


(do (require 'mydev) (mydev/reset))
(require 'mydev)
;; Mount:
(require '[mount.core :as mount])
(mount/start)
(mount/stop)
(mydev/reset)
(mydev/refresh-all)
simpleserver.util.config/config-state
simpleserver.domain.domain-config/domain-state
simpleserver.webserver.server/web-server-state

(in-ns 'user)

(simpleserver.domain.domain-config/-get-domain "single-node")
(simpleserver.domain.domain-config/-get-domain "aws")
(simpleserver.domain.domain-config/-get-domain "not-found")



(def my-single-node-domain (simpleserver.domain.domain-config/-get-domain "single-node"))
(def my-aws-domain (simpleserver.domain.domain-config/-get-domain "aws"))
my-single-node-domain
my-aws-domain
(simpleserver.domain.domain-interface/get-product-groups my-single-node-domain)
(simpleserver.domain.domain-interface/get-products my-single-node-domain 1)
(simpleserver.domain.domain-interface/get-product my-single-node-domain 1 2024)



(do
  (require '[mydev])
  (require '[mount.core :as mount])
  (mount/start)
  (mydev/curl-get "/info"))

(mydev/curl-get "/product-groups")

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
             :request {:TableName "ss-dev-product-group"}})


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

  (comment
    (def cred (credentials/basic-credentials-provider {:access-key-id     access-key
                                                       :secret-access-key secret-key}))
    cred)


  ; https://cognitect-labs.github.io/aws-api/cognitect.aws.client.api-api.html
  (comment
    (def ddb (aws/client {:api               :dynamodb :credentials-provider cred
                          :endpoint-override endpoint})))

  (in-ns 'user)
  (do
    ;; Profile credentials.
    (require '[cognitect.aws.client.api :as aws])
    (require '[cognitect.aws.credentials :as credentials])

    (def endpoint (get-in simpleserver.util.config/config-state [:aws :endpoint]))
    endpoint
    (def my-profile (get-in simpleserver.util.config/config-state [:aws :aws-profile]))
    my-profile

    (def profile-cred (credentials/profile-credentials-provider my-profile))
    profile-cred

    (def ddb (aws/client {:api :dynamodb :credentials-provider profile-cred
                          :endpoint-override endpoint}))
    (comment
      (def ddb (aws/client {:api :dynamodb :credentials-provider profile-cred
                            })))
    ;(def ddb (aws/client {:api :dynamodb :endpoint-override endpoint}))

    ;(def ddb (aws/client {:api :dynamodb }))

    (aws/invoke ddb {:op :Scan :request {:TableName "ss-dev-product-group"}}))

  (require '[cognitect.aws.config :as cog-config])
  (def my-cred-file "/home/marttkar/.aws/credentials")
  my-cred-file

  (def my-cog-profiles (cog-config/parse my-cred-file))
  my-cog-profiles
    (def my-profile (get-in simpleserver.util.config/config-state [:aws :aws-profile]))
  (str "%" my-profile "%")
  (type my-profile)

  (get my-cog-profiles "local-dynamodb")




  (aws/validate-requests ddb true))

(in-ns 'user)

(require '[mydev])
(mydev/reset)
simpleserver.util.config/config-state


(require '[mount.core :as mount])
(mount/start)
(mount/stop)
(mydev/reset)

(require '[simpleserver.domain.domain-single-node])
(def s-node (simpleserver.domain.domain-single-node/->SingleNodeR))
s-node
simpleserver.util.config/config-state
(simpleserver.domain.domain-interface/get-product-groups s-node)
(simpleserver.domain.domain-interface/get-products s-node 1)
(simpleserver.domain.domain-interface/get-product s-node 1 2024)


(in-ns 'user)

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


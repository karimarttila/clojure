;; NOTE: This file is just a scratch file with ephemeral REPL experimentation!
;; The idea is borrowed from Stuart Halloway's presentation about Repl Driven Development:
;; See: https://vimeo.com/223309989 , at 33:47: "Save Everything"
;; You don't usually save this kind of scratch file to Git but I wanted to save this file for historical purposes
;; to see later on what kind of experimentation I did while developing this exercise.

;; NOTE: Do not use namespace in scratch!
;; That way you can send code snippets to the current namespace from this scratch file.
;; In Cursive send from editor to REPL: <shift>-<ctrl>-Ö.
;; Stop states, refresh, start states: <shift>-<ctrl>-L
;; NOTE: Keep in this file this project related scratch stuff that is in git.
;; Store general Clojure scratch code snippets in: /mnt/edata/aw/kari/my-clj-dev/dev-src/commonscratch.clj
;; ... and rename that file occasionally to e.g. "old-scratch-2019-05" in that directory.

;; ****************** WARNING *******************
;; Settings | Languages & Frameworks | Clojure | Evaluate forms in REPL namespace
;; must be turned on or (mydev/reset) here in the scratch file
;; works differently than in the REPL editor.
;; ****************** WARNING *******************

;; ************************************************
;; NOTE:
;; In Cursive : Clojure Deps => choose aliases dev-src and test.
;; In Cursive REPL Run configuration: Aliases: dev-src,env-dev,test
;; ************************************************

;; ************************************
;; Implementing the server apis...


(start-web-server (get-in ss-config/config [:server :port]))
(do (require 'mydev) (mydev/do-get "/info"))
(do (require 'mydev) (mydev/do-get "/test"))
(do (require 'mydev) (do-post "signin" {:first-name "mikko" :last-name "mikkonen" :password "salainen" :email "mikkoXX.mikkonen@foo.com"}))
(stop-web-server)
(reset-web-server (get-in ss-config/config [:server :port]))


(defn call-api [path verb body]
  (let [my-port (get-in ss-config/config [:server :port])
        my-fn (cond
                (= verb "get") http-client/get
                (= verb "post") http-client/post)]
    (try
      (select-keys
        (my-fn (str "http://localhost:" my-port "/" path) {:as :json :form-params body :content-type :json}) [:status :body])
      (catch ExceptionInfo e
        (do
          (log/warn (str "Got exception:" (.getMessage e)))
          ;(log/debug (prn (str "e: " e)))
          ;(def *my-e e) ; For checking it in repl...
          (let [my-e (Throwable->map e)
                status ((my-e :data) :status)
                body ((my-e :data) :body)
                _ (log/debug (prn (str "status: " status)))
                _ (log/debug (prn (str "body: " body)))]
            {:status status :body body}))))))


[clojure.tools.logging :as log]
[clojure.tools.namespace.repl :as ns-repl]
[clj-http.client :as http-client]

(do
  (in-ns 'mydev)
  (require '[clojure.tools.logging :as log]
           '[clj-http.client :as http-client]
           '[simpleserver.util.config :as ss-config])
  (defn do-post
    "A helper function to query the APIs in REPL (you don't have to jump to IDEA terminal and back to REPL)"
    [path body]
    (log/debug "ENTER do-post")
    (let [my-port (get-in ss-config/config [:server :port])]
      (select-keys
        (http-client/post (str "http://localhost:" my-port "/" path) {:form-params body :content-type :json :throw-exceptions false :coerce :always})
        [:status :body])))
  )

(def jee 1)
((fn [] jee))

(reset-web-server (get-in ss-config/config [:server :port]))
;(do (in-ns 'mydev) (http-client/post "http://localhost:6161/signin" {:body "{\"x\": \"1\", \"y\": \"1\"}"}))
;(do (in-ns 'mydev) (http-client/post "http://localhost:6161/signin" {:body {:x 1 :y 2} }))
;(do (in-ns 'mydev) (http-client/post "http://localhost:6161/signin" {:form-params {:x 1 :y 2}}))
;(do (in-ns 'mydev) (http-client/post "http://localhost:6161/signin" {:body "{\"x\": \"1\", \"y\": \"1\"}"}))
;(do (in-ns 'mydev) (http-client/post "http://localhost:6161/signin" {:form-params {:x 1 :y 88} :content-type :json}))

(do (in-ns 'mydev) (do-post "signin" {:first-name "mikko" :last-name "mikkonen" :password "salainen" :email "mikkoX.mikkonen@foo.com"}))
(do (in-ns 'mydev) (http-client/post "http://localhost:6161/signin" {:form-params {:first-name "mikko" :last-name "mikkonen" :password "salainen" :email "mikko.mikkonen@foo.com"} :content-type :json}))
(http-client/post "http://localhost:6161/signin" {:form-params {:first-name "mikko" :last-name "mikkonen" :password "salainen" :email "mikko.mikkonen@foo.com"} :content-type :json})
(do (in-ns 'mydev) (http-client/get "http://localhost:6161/info"))
(do (in-ns 'mydev) (do-post "signin" {:x 1 :y 88}))


(def routes2
  ["/plain"
   ["/plus" {:get (fn [{{:strs [x y]} :query-params :as req}]
                    {:status 200
                     :body {:total (+ (Long/parseLong x) (Long/parseLong y))}})
             :post (fn [{{:keys [x y]} :body-params}]
                     {:status 200
                      :body {:total (+ x y)}})}]])
(do (in-ns 'mydev) (http-client/get "http://localhost:6161/plain/plus" {:query-params {:x 1 :y 5}}))
(do (in-ns 'mydev) (http-client/post "http://localhost:6161/plain/plus" {:form-params {:x 1 :y 88} :content-type :json}))



(http-client/get "http://localhost:6161/test")
(:x (:body {:body {:x 1 :y 2}}))
*e

(-signin 1 2)

(remove-ns 'simpleserver.webserver.server)
(in-ns 'simpleserver.webserver.server)
@server
(start-web-server (get-in ss-config/config [:server :port]))
(do (require 'mydev) (mydev/do-get "/info"))
(do (require 'mydev) (mydev/do-get "/test"))
(do (require 'mydev) (mydev/do-post "/signin" {"x" 1 "y" 2}))
(do (require 'mydev) (mydev/do-post "/signin" {}))
(stop-web-server)
(reset-web-server (get-in ss-config/config [:server :port]))
(@server :status)
*ns*


(do
  (in-ns 'user)
  (require '[simpleserver.domain.domain-config])
  (simpleserver.domain.domain-interface/get-product
    simpleserver.domain.domain-config/domain 1 2001)
  )

(ns user)
(do
  (in-ns 'user)
  (require 'simpleserver.user.user-config
           'simpleserver.user.user-interface)
  (simpleserver.user.user-interface/email-already-exists?
    simpleserver.user.user-config/user "kari.karttinen@foo.com")
  (simpleserver.user.user-interface/email-already-exists?
    simpleserver.user.user-config/user "kari.karttinen@NOT.FOUND")
  (simpleserver.user.user-interface/add-new-user
    simpleserver.user.user-config/user "kari.karttinen@NOT.FOUND" "Kari" "Karttinen" "asdf")
  (simpleserver.user.user-interface/email-already-exists?
    simpleserver.user.user-config/user "kari.karttinen@NOT.FOUND")
  (simpleserver.user.user-interface/-get-users
    simpleserver.user.user-config/user)
  (simpleserver.user.user-interface/credentials-ok?
    simpleserver.user.user-config/user "kari.karttinen@NOT.FOUND" "asdf")

  )

;; Demonstration how indirection works in Clojure.
(do
  (remove-ns 'demo)
  (ns demo)
  ; a1 evaluates to value 1.
  (def a1 1)
  ; a2 evaluates to value which a1 has now (i.e. 1).
  (def a2 a1)
  ; a3 is a function which will evaluate to the value a1 has when calling a3 (i.e. we don't know it yet, the value of a1 might change).
  (def a3 (fn [] a1))
  ; Now we change a1.
  (def a1 2)
  ; a4 is same as a3.
  (defn a4 [] a1)
  ; Now we change a1 again.
  (def a1 3)
  ; 3, since a1 value was changed.
  (prn (str "a1: " a1))
  ; 1 since a2's value was evaluated when a1 was still 1.
  (prn (str "a2: " a2))
  ; 3 since a3 is a function and will evaluate a1's current value.
  (prn (str "a3: " (a3)))
  ; same as a3.
  (prn (str "a4: " (a4)))
  ;(clojure.repl/dir demo)
  )

*e

*ns*
(in-ns 'user)

@server
(declare server)
(defn init-server []
  (if (nil? @server)
    (atom {:status :stopped, :server nil})
    (do
      (stop-web-server))))

(def server (init-server))
@server
(def server (atom {:status :stopped, :server nil}))

(do
  (in-ns 'user)
  (require 'mydev)
  (mydev/refresh)
  (mydev/curl-get "/info"))

(do
  (in-ns 'user)
  (require 'mydev)
  (mydev/reset)
  (mydev/curl-get "/info"))

(do
  (in-ns 'user)
  (require 'mydev)
  (mydev/curl-get "/info"))
(mydev/curl-get "/product-groups")

(remove-ns 'simpleserver.webserver.server)
(in-ns 'simpleserver.webserver.server)
@server
(start-web-server (get-in ss-config/config [:server :port]))
(do (require 'mydev) (mydev/curl-get "/info"))
(stop-web-server)
(reset-web-server (get-in ss-config/config [:server :port]))
(@server :status)
*e
*ns*
(clojure.repl/dir simpleserver.webserver.server)


(defn start-web-server
  "Starts the web server."
  [port]
  (log/debug "ENTER start-web-server")
  (let [state (:status @server)]
    (if (= state :stopped)
      (let [new-server (run-jetty web-server {:port port :join? false})]
        (do
          (reset! server {:status :running, :server new-server})
          (log/info (str "Started server: " new-server))))
      (log/warn (str "Server was already running: " (@server :server))))))

(defn stop-web-server
  "Stops the web server."
  []
  (log/debug "ENTER stop-web-server")
  (let [state (:status @server)]
    (if (= state :running)
      (let [old-server (@server :server)]
        (do
          (.stop old-server)
          (reset! server {:status :stopped, :server nil})
          (log/info (str "Stopped server: " old-server))))
      (log/warn "Server was already stopped"))))



ss-config

(do
  (require '[maailma.core :as m])
  (def env (m/build-config (m/resource "config.edn")))
  env)

(remove-ns 'simpleserver.domain.domain-config)

;****************************************************************
; Dropped Mount, and started to use Maailma instead of Cprop.
;****************************************************************

(->>
  (all-ns)
  (filter #(clojure.string/starts-with? % "simpleserver")))

(do
  (in-ns 'simpleserver.session.session-test)
  (run-tests))

(clojure.test/test-vars [#'simpleserver.session.session-test/create-json-web-token])

(do
  (in-ns 'simpleserver.session.session-test)
  ()
  (create-json-web-token))

simpleserver.session.session-common/my-expiration-time

(remove-ns 'simpleserver.session.session-common)
(remove-ns 'simpleserver.webserver.server)
(def web-server-state nil)




*ns*

(def ^:dynamic *jwt* nil)
*jwt*

;; Add:
;(validate-token
;  [this token]
;  (def *t token)  => THIS!
; Run tests and then:
(prn simpleserver.session.session-single-node/*t)

(require '[mount.core :as mount])
; Start just config-state.
(mount/start #'simpleserver.util.config/config-state)
simpleserver.util.config/config-state
(mount/stop #'simpleserver.util.config/config-state)
(mount/stop #'simpleserver.webserver.server/web-server-state)
(mount/start #'simpleserver.webserver.server/web-server-state)


(do
  (in-ns 'user)
  (require 'mydev)
  (mydev/refresh-all)
  (mydev/reset)
  (mydev/curl-get "/info"))

(remove-ns 'simpleserver.session.session-single-node)



(get-in simpleserver.util.config/config-state [:jwt :exp])

(compile (symbol "simpleserver.session.session-common"))
(compile (symbol "simpleserver.util.config"))
(remove-ns 'simpleserver.session.session-common)

(simpleserver.session.session-common/create-json-web-token "testing")
simpleserver.session.session-common/my-hex-secret

*ns*
(simpleserver.session.session-interface/create-json-web-token simpleserver.session.session-config/session-state "testing@foo.com")



@simpleserver.session.session-single-node/my-sessions

(let [my-session ss-session-config/session-state
      _ (log/debug (str "my-session: " my-session))
      initial-len (count (ss-session-i/-get-sessions my-session))
      _ (log/debug (str "initial-len: " initial-len))
      test-email "kari.karttinen@foo.com"
      jwt (ss-session-i/create-json-web-token my-session test-email)
      _ (log/debug (str "Got jwt: " jwt))
      new-len (count (ss-session-i/-get-sessions my-session))
      _ (log/debug (str "Sessions: " new-len))
      ret (ss-session-i/validate-token my-session jwt)
      _ (log/debug (str "validation returned: " ret))
      ret-email (ret :email)
      ]
  )


(do
  (ns-unalias *ns* 'ss-config)
  (ns-unalias *ns* 'ss-session-config)
  (ns-unalias *ns* 'ss-session-i))


(do
  (in-ns 'user)
  (require 'mydev)
  (mydev/reset)
  (mydev/curl-get "/info"))

(do
  (in-ns 'user)
  (require 'mydev)
  (mydev/refresh-all))


(require '[simpleserver.domain.domain-config])
(require '[mount.core :as mount])
; Start just config-state.
(mount/start #'simpleserver.util.config/config-state)
simpleserver.util.config/config-state
(mount/stop #'simpleserver.util.config/config-state)
simpleserver.util.config/config-state
; Check the content of config-state.
(def my-cs simpleserver.util.config/config-state)
my-cs


(do (require 'simpleserver.session.session-common)
    @simpleserver.session.session-common/my-expiration-time)

*ns*

(mydev/curl-get "/info")

(do
  (require 'clojure.java.shell)
  (->> (clojure.java.shell/sh "/bin/bash" "-c" "netstat -an | grep 6161")))

(do (require 'mydev) (mydev/reset))
(mydev/curl-get "/info")

(var-get 'simpleserver.webserver.server/-info)
(clojure.repl/dir user)

(do (in-ns 'simpleserver.webserver.server)
    (clojure.repl/dir simpleserver.webserver.server))

(ns-unmap 'simpleserver.webserver.server '-info)

*ns*
(remove-ns 'simpleserver.webserver.server)
(in-ns 'user)

(use 'simpleserver.webserver.server :reload-all)

;; **************************************************************************************
;; This is how to change one definition, e.g. -info
; 1. Change to the namespace:
(in-ns 'simpleserver.webserver.server)
; 2. Go to the file and send to the repl just that defn (i.e. (defn -info...
; 3. Test it directly:
(do (require 'simpleserver.webserver.server) (simpleserver.webserver.server/-info))
; 4. Test that the new defn is used also when running in jetty:
(do
  (in-ns 'user)
  (require 'mydev)
  (mydev/reset)
  (mydev/curl-get "/info"))
;; **************************************************************************************


(System/getenv "CONF")

(do (require 'cprop.core)
    (cprop.core/load-config))

simpleserver.util.config/config-state
@simpleserver.util.config/development-db
(simpleserver.util.config/create-config)


(def ok-product
  ["2001" "1" "Kalevala-LOCAL-aws" "3.95" "Elias Lönnrot" "1835" "Finland" "Finnish"])
ok-product


(def raw-product
  {:Items        [{:country {:S "Finland"},
                   :a_or_d  {:S "Elias Lönnrot"},
                   :year    {:S "1835"},
                   :pgid    {:S "1"},
                   :price   {:S "3.95"},
                   :pid     {:S "2001"},
                   :g_or_l  {:S "Finnish"},
                   :title   {:S "Kalevala-LOCAL-aws"}}],
   :Count        1,
   :ScannedCount 1})
raw-product

(def product-map (first (:Items raw-product)))
product-map

(:S (:pid product-map))
((comp :S :pid) product-map)



((juxt (comp :S :pid) (comp :S :pgid)) (first (:Items raw-product)))

(def new-product
  (->>
    (:Items raw-product)
    (first)
    ((juxt (comp :S :pid) (comp :S :pgid) (comp :S :title) (comp :S :price) (comp :S :a_or_d) (comp :S :year) (comp :S :country) (comp :S :g_or_l)) (first (:Items raw-product)))
    ))
new-product
ok-product
(= new-product ok-product)




(require '[mount.core :as mount])
; Start just config-state.
(mount/start #'simpleserver.util.config/config-state)
simpleserver.util.config/config-state
(mount/stop #'simpleserver.util.config/config-state)
simpleserver.util.config/config-state
; Check the content of config-state.
(def my-cs simpleserver.util.config/config-state)
my-cs

(in-ns 'user)

(require 'mydev)
(do (require 'mydev) (mydev/reset))
;; Mount:
(require '[mount.core :as mount])
(mount/start)
(mount/stop)
(mydev/reset)
(mydev/refresh-all)


simpleserver.util.config/config-state
simpleserver.domain.domain-config/domain-state
simpleserver.webserver.server/web-server-state

(mydev/set-development-db! :read-config)
(mydev/set-development-db! :single-node)
(mydev/set-development-db! :local-dynamodb)
(mydev/set-development-db! :real-aws)

@simpleserver.util.config/development-db
(do
  (in-ns 'user)
  (require '[simpleserver.domain.domain-config])
  (simpleserver.domain.domain-interface/get-product simpleserver.domain.domain-config/domain-state 1 2001)
  )

(simpleserver.domain.domain-interface/get-products simpleserver.domain.domain-config/domain-state 1)


(mount/start #'simpleserver.util.config/config-state)
(mydev/set-development-db! :single-node)
(mydev/set-development-db! :local-dynamodb)

simpleserver.util.config/config-state
(mount/stop #'simpleserver.util.config/config-state)
simpleserver.util.config/config-state




(remove-ns 'simpleserver.domain.domain-test)

(in-ns 'user)

(do
  (in-ns 'user)
  (require '[simpleserver.domain.domain-test])
  ; TODO: How to call one test in REPL?
  ; Does not work.
  (clojure.test/test-vars [#'simpleserver.domain.domain-test/get-product-groups-test])
  )

; And finally let's use the domain via the domain config
; - that way we don't actually know or care what's the actual data store
; (single-node or localdynamodb or aws dynamodb) is.
(require '[simpleserver.domain.domain-config :as ss-domain-config])
(def my-domain ss-domain-config/domain-state)
my-domain
(simpleserver.domain.domain-interface/get-product-groups simpleserver.domain.domain-config/domain-state)
(simpleserver.domain.domain-interface/get-products simpleserver.domain.domain-config/domain-state 1)
(simpleserver.domain.domain-interface/get-product simpleserver.domain.domain-config/domain-state 2 45)
;; Not found
(simpleserver.domain.domain-interface/get-product simpleserver.domain.domain-config/domain-state 2 100000)
(simpleserver.domain.domain-interface/get-product simpleserver.domain.domain-config/domain-state 5 45)


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

  (def ddb (aws/client {:api               :dynamodb :credentials-provider profile-cred
                        :endpoint-override endpoint}))
  (comment
    (def ddb (aws/client {:api :dynamodb :credentials-provider profile-cred
                          })))
  ;(def ddb (aws/client {:api :dynamodb :endpoint-override endpoint}))

  ;(def ddb (aws/client {:api :dynamodb }))

  (aws/invoke ddb {:op :Scan :request {:TableName "ss-dev-product-group"}})
  (aws/invoke ddb {:op      :Scan
                   :request {:TableName "ss-dev-product"}})


  (aws/invoke ddb {:op      :Query
                   :request {:TableName                 "ss-dev-product"
                             :IndexName                 "PGIndex"
                             :KeyConditionExpression    "pgid = :pgid"
                             :ExpressionAttributeValues {":pgid" {:S "2"}}
                             }})

  (aws/invoke ddb {:op      :Query
                   :request {:TableName                 "ss-dev-product"
                             :KeyConditionExpression    "pid = :pid"
                             :ExpressionAttributeValues {":pid" {:S "2"}}
                             }})

  (aws/invoke ddb {:op      :Query
                   :request {:TableName     "ss-dev-product"
                             :KeyConditions {"pgid" {:AttributeValueList {:S "2"}
                                                     :ComparisonOperator "EQ"}
                                             "pid"  {:AttributeValueList {:S "3"}
                                                     :ComparisonOperator "EQ"}}
                             }})
  ;; Not found product
  (aws/invoke ddb {:op      :Query
                   :request {:TableName     "ss-dev-product"
                             :KeyConditions {"pgid" {:AttributeValueList {:S "2"}
                                                     :ComparisonOperator "EQ"}
                                             "pid"  {:AttributeValueList {:S "10000"}
                                                     :ComparisonOperator "EQ"}}
                             }})
  (aws/ops ddb)
  (aws/doc ddb :Scan)
  (aws/doc ddb :Query)

  ; TODO HERE
  ;

  (def raw-products (simpleserver.domain.domain-interface/get-products my-aws-domain 1))
  raw-products

  (:Items raw-products)

  (seq (->> (:Items raw-products)
            (map (juxt (comp :S :pid) (comp :S :pgid) (comp :S :title) (comp :S :price)))
            (into [])))

  )


*ns*
(remove-ns 'simpleserver.webserver.server)
(in-ns 'user)
(require '[simpleserver.domain.domain-dynamodb :as ss-ddb])
(def ddb-config (ss-ddb/get-dynamodb-config "product"))
ddb-config
(let [{my-ddb   :my-ddb
       my-table :my-table} ddb-config]
  (str my-ddb my-table))

(def my-ddb-domain (simpleserver.domain.domain-config/-get-domain "single-node"))
(def my-aws-domain (simpleserver.domain.domain-config/-get-domain "aws"))
my-ddb-domain
my-single-node-domain
my-aws-domain
(simpleserver.domain.domain-interface/get-product-groups my-aws-domain)
(simpleserver.domain.domain-interface/get-products my-aws-domain 1)
(simpleserver.domain.domain-interface/get-product my-aws-domain 2 3)


(def raw (simpleserver.domain.domain-interface/get-product-groups my-aws-domain))
raw
(def items (:Items raw))
items

(->> items
     (map (juxt (comp :S :pgid) (comp :S :pgname)))
     (into {}))


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

; **********************************************************************************************

; Start just config-state.
(mount/start #'simpleserver.webserver.server/web-server-state)
(mount/stop #'simpleserver.webserver.server/web-server-state)
simpleserver.webserver.server/web-server-state

(do
  (require 'simpleserver.webserver.server)
  (simpleserver.webserver.server/start-web-server 6161))

(use 'simpleserver.webserver.server :reload-all)
(use 'simpleserver.webserver.server :reload)

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

(def ddb-config (simpleserver.domain.domain-dynamodb/get-dynamodb-config "product-group"))
(def ddb-config (simpleserver.domain.domain-dynamodb/get-dynamodb-config "product"))
ddb-config
(def my-ddb (-> ddb-config :my-ddb))
my-ddb
(def my-table (-> ddb-config :my-table))
(aws/invoke my-ddb {:op :Scan :request {:TableName my-table}})





(def my-single-node-domain (simpleserver.domain.domain-config/-get-domain "single-node"))
(def my-aws-domain (simpleserver.domain.domain-config/-get-domain "aws"))
my-single-node-domain
my-aws-domain
(simpleserver.domain.domain-interface/get-product-groups my-single-node-domain)
(simpleserver.domain.domain-interface/get-products my-single-node-domain 1)
(simpleserver.domain.domain-interface/get-product my-single-node-domain 1 2024)

(let [my-ddb-config (simpleserver.domain.domain-dynamodb/get-dynamodb-config "product-group")
      {my-ddb   :my-ddb
       my-table :my-table} my-ddb-config
      raw-map (aws/invoke my-ddb {:op      :Scan
                                  :request {:TableName my-table}})]
  (comment
    (reduce
      (fn
        [mymap item]
        (assoc mymap
          (-> item :pgid :S) (-> item :pgname :S)))
      {}
      (:Items raw-map)))


  (->> (:Items raw-map)
       (map (juxt (comp :S :pgid) (comp :S :pgname)))
       (into {}))
  )

(def items [{:pgid {:S "1"}, :pgname {:S "Books-local-aws"}} {:pgid {:S "2"}, :pgname {:S "Movies-local-aws"}}])
items
(->> items
     (map (juxt (comp :S :pgid) (comp :S :pgname)))
     (into {}))

(juxt (comp :S :pgid) (comp :S :pgname))

(do
  (require '[mydev])
  (require '[mount.core :as mount])
  (mount/start)
  (mydev/curl-get "/info"))

(mydev/curl-get "/product-groups")

; For command line repl.
(do (require '[clojure.core.async :as a] '[clojure.java.io :as io] '[clojure.data.json :as json] '[cognitect.aws.client.api :as aws] '[cognitect.aws.client.api.async :as aws.async]) (def ddb (aws/client {:api :dynamodb})) (aws/invoke ddb {:op :ListTables}))

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


  (def cred (credentials/basic-credentials-provider {:access-key-id     access-key
                                                     :secret-access-key secret-key}))
  cred


  ; https://cognitect-labs.github.io/aws-api/cognitect.aws.client.api-api.html

  (def ddb (aws/client {:api               :dynamodb :credentials-provider cred
                        :endpoint-override endpoint})))

(in-ns 'user)



(require '[cognitect.aws.config :as cog-config])
(def my-cred-file "/home/marttkar/.aws/credentials")
my-cred-file

(def my-cog-profiles (cog-config/parse my-cred-file))
my-cog-profiles
(def my-profile (get-in simpleserver.util.config/config-state [:aws :aws-profile]))
(str "%" my-profile "%")
(type my-profile)

(get my-cog-profiles "local-dynamodb")




(aws/validate-requests ddb true)

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
(remove-ns 'simpleserver.webserver.server)

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


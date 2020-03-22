(ns myscratch)

;; NOTE: This file is just a scratch file with ephemeral REPL experimentation!
;; The idea is borrowed from Stuart Halloway's presentation about Repl Driven Development:
;; See: https://vimeo.com/223309989 , at 33:47: "Save Everything"
;; You don't usually save this kind of scratch file in Git but I wanted to save this file for historical purposes
;; to see later on what kind of experimentation I did while developing this exercise.

;; NOTE: Do use use namespace in scratch, or in refresh you accidentally
;; populate some production namespace while developing.
;; Well, later on I actually started using namespace and added all stuff in here in comments and used user namespace for adding experimental stuff so that it doesn't accidentally go to production namespaces while doing development.

;; In Cursive send from editor to REPL: <alt>-l
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

;; ************************************************
;; NOTE: Keep all code in a comment block or refresh will run all code.
;; ************************************************

;; Continuing the local dynamodb development...

(if true "true" nil)
(if false "true" nil)
(if true "true")
(if false "true")


(comment
  (do
    (in-ns 'user)
    (require '[mydev])
    (require '[simpleserver.webserver.server])
    (simpleserver.webserver.server/start-web-server (get-in simpleserver.util.config/config [:server :port]))
    (let [
          ret (mydev/do-get "/info" {})]
      (prn (str "/info returned: " ret)))
    (simpleserver.webserver.server/stop-web-server)
    )
  )

(comment)
(aws/invoke
  my-ddb
  {:op      :Query
   :request {:TableName                 my-table
             :IndexName                 "PGIndex"
             :KeyConditionExpression    "pgid = :pgid"
             :ExpressionAttributeValues {":pgid" {:S (str pg-id)}}
             }})



(comment
  (do
    (require '[mydev])
    (mydev/refresh))

  (do
    (require '[cognitect.aws.credentials :as credentials])
    (require '[cognitect.aws.client.api :as aws])
    (def my-ddb
      (if (nil? my-credentials)
        (aws/client {:api                  :dynamodb
                     :credentials-provider my-credentials})
        (aws/client {:api                  :dynamodb
                     :credentials-provider my-credentials
                     :endpoint-override    my-endpoint})))
    (sort (keys (aws/ops my-ddb)))
    ; =>
    ; (:BatchGetItem
    ;  :BatchWriteItem
    ; ...
    (aws/doc my-ddb :PutItem)
    ; => A long API specification what is required with PutItem and what the response is.
    )





  (do
    (in-ns 'user)
    (def table-name "users")
    (require '[simpleserver.util.config :as ss-config])
    (require '[cognitect.aws.credentials :as credentials])
    (require '[cognitect.aws.client.api :as aws])
    (def my-env (get-in ss-config/config [:runtime-env]))
    (def my-table-prefix (get-in ss-config/config [:aws :ss-table-prefix]))
    (def my-table (str my-table-prefix "-" my-env "-" table-name))
    user/my-table
    (def my-endpoint (get-in simpleserver.util.config/config [:aws :endpoint]))
    (def my-profile (get-in simpleserver.util.config/config [:aws :aws-profile]))
    (def my-credentials (credentials/profile-credentials-provider my-profile))
    (def my-ddb
      (if (nil? my-credentials)
        (aws/client {:api                  :dynamodb
                     :credentials-provider my-credentials})
        (aws/client {:api                  :dynamodb
                     :credentials-provider my-credentials
                     :endpoint-override    my-endpoint})))
    user/my-ddb
    (def raw-users (aws/invoke my-ddb {:op      :Scan
                                       :request {:TableName my-table}}))
    raw-users
    (:Items raw-users)
    (def converted-users
      (map (fn [item]
             item
             (let [user-id (get-in item [:userid :S])
                   email (get-in item [:email :S])
                   first-name (get-in item [:firstname :S])
                   last-name (get-in item [:lastname :S])
                   hashed-password (get-in item [:hpwd :S])]
               {:userid          user-id
                :email           email
                :first-name      first-name
                :last-name       last-name
                :hashed-password hashed-password}))
           (:Items raw-users)))
    user/converted-users

    (reduce (fn [users user]
              (assoc users (:userid user) user))
            {}
            user/converted-users)

    (def one-converted-user
      {:userid          "1",
       :email           "kari.karttinen@foo.com",
       :first-name      "Kari",
       :last-name       "Karttinen",
       :hashed-password "1340477763"}
      )
    one-converted-user
    (assoc {} (:userid one-converted-user) one-converted-user)

    (def one-item {:firstname {:S "Timo"},
                   :userid    {:S "2"},
                   :hpwd      {:S "-36072128"},
                   :email     {:S "timo.tillinen@foo.com"},
                   :lastname  {:S "Tillinen"}})
    one-item
    (get-in one-item [:userid :S])
    (:S (:userid one-item))

    (aws/doc my-ddb :Query)
    (def email-exists-ret (aws/invoke my-ddb {:op      :Query
                                              :request {:TableName                 my-table
                                                        :KeyConditionExpression    "email = :email"
                                                        :ExpressionAttributeValues {":email" {:S (str "timo.tillinen@foo.com")}}}}))
    user/email-exists-ret
    (get-in (first (:Items user/email-exists-ret)) [:email :S])

    (aws/invoke my-ddb {:op      :PutItem
                        :request {
                                  :TableName my-table
                                  :Item      {"userid"    {:S "12"}
                                              "email"     {:S "etu2.suku@foo.com"}
                                              "firstname" {:S "etu"}
                                              "lastname"  {:S "suku"}
                                              "hpwd"      {:S "XXX"}}
                                  }})

    (aws/invoke my-ddb {:op      :DeleteItem
                        :request {
                                  :TableName my-table
                                  :Key       {"email" {:S "olavi.virta@foo.com"}}}})

    (def users {"2" {:userid          "2",
                     :email           "timo.tillinen@foo.com",
                     :first-name      "Timo",
                     :last-name       "Tillinen",
                     :hashed-password "-36072128"},
                "1" {:userid          "1",
                     :email           "kari.karttinen@foo.com",
                     :first-name      "Kari",
                     :last-name       "Karttinen",
                     :hashed-password "1340477763"},

                "3" {:userid          "3",
                     :email           "erkka.erkkila@foo.com",
                     :first-name      "Erkka",
                     :last-name       "Erkkilä",
                     :hashed-password "1655387230"},
                })
    users
    (map (fn [item]
           (:email (second item)))
         users)

    )
  )

(comment
  ; in user-dynamodb

  (simpleserver.user.user-interface/email-already-exists?
    simpleserver.user.user-config/user "kari.karttinen@foo.com")

  )

(comment
  (do
    (in-ns 'user)
    (def table-name "session")
    (require '[simpleserver.util.config :as ss-config])
    (require '[cognitect.aws.credentials :as credentials])
    (require '[cognitect.aws.client.api :as aws])
    (def my-env (get-in ss-config/config [:runtime-env]))
    (def my-table-prefix (get-in ss-config/config [:aws :ss-table-prefix]))
    (def my-table (str my-table-prefix "-" my-env "-" table-name))
    (def my-endpoint (get-in simpleserver.util.config/config [:aws :endpoint]))
    (def my-profile (get-in simpleserver.util.config/config [:aws :aws-profile]))
    (def my-credentials (credentials/profile-credentials-provider my-profile))
    (def my-ddb
      (if (nil? my-credentials)
        (aws/client {:api                  :dynamodb
                     :credentials-provider my-credentials})
        (aws/client {:api                  :dynamodb
                     :credentials-provider my-credentials
                     :endpoint-override    my-endpoint})))
    (aws/invoke my-ddb {:op :ListTables})
    ;; ask what it can do
    (aws/ops my-ddb)
    (sort (keys (aws/ops my-ddb)))
    (aws/doc my-ddb :PutItem)

    (aws/doc my-ddb :PutItem)
    (aws/invoke my-ddb {:op      :PutItem
                        :request {
                                  :TableName my-table
                                  :Item      {"token" {:S "jee4"}}
                                  }})
    (aws/invoke my-ddb {:op      :DeleteItem
                        :request {
                                  :TableName my-table
                                  :Key       {"token" {:S "jee2"}}}})
    (aws/invoke my-ddb {:op      :Scan
                        :request {:TableName my-table}})
    (def result (aws/invoke my-ddb {:op      :GetItem
                                    :request {:TableName my-table
                                              :Key       {"token" {:S "jee3"}}}}))
    (get-in result [:Item :token :S])

    (def items (aws/invoke my-ddb {:op      :Scan
                                   :request {:TableName my-table}}))
    (reduce (fn [sessions session]
              (conj sessions (get-in session [:token :S])))
            #{}
            (items :Items))
    )
  )


(comment
  (def table-name "product-group")
  (def my-env (get-in ss-config/config [:runtime-env]))
  my-env
  (def my-table-prefix (get-in ss-config/config [:aws :ss-table-prefix]))
  my-table-prefix
  (def my-table (str my-table-prefix "-" my-env "-" table-name))
  my-table
  (def my-endpoint (get-in simpleserver.util.config/config [:aws :endpoint]))
  my-endpoint
  (def my-profile (get-in simpleserver.util.config/config [:aws :aws-profile]))
  my-profile
  (def my-credentials (credentials/profile-credentials-provider my-profile))
  my-profile
  (def my-ddb
    (if (nil? my-credentials)
      (aws/client {:api                  :dynamodb
                   :credentials-provider my-credentials})
      (aws/client {:api                  :dynamodb
                   :credentials-provider my-credentials
                   :endpoint-override    my-endpoint})))
  my-ddb
  {:my-ddb my-ddb :my-table my-table}
  (aws/invoke my-ddb {:op :ListTables}))


(comment
  (def my-ddb-config (get-dynamodb-config "product-group"))
  my-ddb-config
  (let [{my-ddb   :my-ddb
         my-table :my-table} my-ddb-config]
    my-table)
  (def raw-map
    (aws/invoke my-ddb {:op      :Scan
                        :request {:TableName my-table}}))
  (reduce
    (fn
      [mymap item]
      (assoc mymap
        (-> item :pgid :S) (-> item :pgname :S)))
    {}
    (:Items raw-map)))

(comment
  (do
    ;; Profile credentials.
    (require '[cognitect.aws.client.api :as aws])
    (require '[cognitect.aws.credentials :as credentials])

    (def endpoint (get-in simpleserver.util.config/config [:aws :endpoint]))
    endpoint
    (def my-profile (get-in simpleserver.util.config/config [:aws :aws-profile]))
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

    ))


;; ************************************
;; Implementing the server apis...

(comment
  (if (= 1 2)
    "Yeah!"
    nil)

  (int 1)
  (int "1")
  (Integer/parseInt "1")
  (Integer/parseInt 1)
  (type "1")
  (if (string? "1")
    "YES!"
    "NO!"))

(comment
  (do (require 'simpleserver.webserver.server)
      (clojure.repl/dir simpleserver.webserver.server))

  (simpleserver.domain.domain-config/domain))

(comment
  ; Run tests in file (.
  (do (in-ns 'simpleserver.webserver.server-test) (run-tests))

  (def foo {:status 200, :body {:ret "ok", :msg "Credentials ok" :json-web-token "eyJhbGciOiJIUzI1NiJ9.eyJlbWFpbCI6Imthcmkua2FydHRpbmVuQGZvby5jb20iLCJleHAiOjE1Nzc5MDY3NTN9.yxdq97PPKMfMRDePrdaMM9aEl2STzbfjZVMAv8q7mNE"}})

  (do
    (in-ns 'simpleserver.webserver.server)
    (start-web-server (get-in simpleserver.util.config/config [:server :port]))
    (let [
          _ (require 'user)
          ret (user/do-get "/info" {})]
      (prn (str "/info returned: " ret)))
    (stop-web-server)
    (in-ns 'user)))

(comment
  *ns*
  (in-ns 'user)
  (in-ns 'simpleserver.webserver.server)
  {:a} {:b 1}

  (do (in-ns 'simpleserver.webserver.server) (start-web-server (get-in simpleserver.util.config/config [:server :port])))
  (do (require 'user) (user/do-get "/info" {}))
  (do (require 'user) (user/do-get "/print-req-get/1" nil))
  (do (require 'user) (user/do-get "/print-req-get" {:query-a 1 :query-b 2}))
  (do (require 'user) (user/do-post "/print-req-post" {:query-a 1 :query-b 2}))
  (do (require 'user) (user/do-post "signin" {:first-name "mikko" :last-name "mikkonen" :password "salainen" :email "mikko.mikkonen@foo.com"}))
  (do (require 'user) (user/do-post "login" {:email "mikko.mikkonen@foo.com" :password "salainen"}))
  (do (require 'user) (user/do-post "login" {:email "mikko.mikkonen@foo.com" :password "WRONG"}))
  (do (in-ns 'simpleserver.webserver.server) (stop-web-server))
  (do (in-ns 'simpleserver.webserver.server) (reset-web-server (get-in ss-config/config [:server :port]))))

(comment
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
  [clj-http.client :as http-client])

(comment
  (do
    (in-ns 'user)
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
    ))

(comment
  (def jee 1)
  ((fn [] jee))

  (reset-web-server (get-in ss-config/config [:server :port]))
  ;(do (in-ns 'mydev) (http-client/post "http://localhost:6161/signin" {:body "{\"x\": \"1\", \"y\": \"1\"}"}))
  ;(do (in-ns 'mydev) (http-client/post "http://localhost:6161/signin" {:body {:x 1 :y 2} }))
  ;(do (in-ns 'mydev) (http-client/post "http://localhost:6161/signin" {:form-params {:x 1 :y 2}}))
  ;(do (in-ns 'mydev) (http-client/post "http://localhost:6161/signin" {:body "{\"x\": \"1\", \"y\": \"1\"}"}))
  ;(do (in-ns 'mydev) (http-client/post "http://localhost:6161/signin" {:form-params {:x 1 :y 88} :content-type :json}))

  (do (in-ns 'user) (do-post "signin" {:first-name "mikko" :last-name "mikkonen" :password "salainen" :email "mikkoX.mikkonen@foo.com"}))
  (do (in-ns 'user) (http-client/post "http://localhost:6161/signin" {:form-params {:first-name "mikko" :last-name "mikkonen" :password "salainen" :email "mikko.mikkonen@foo.com"} :content-type :json}))
  (http-client/post "http://localhost:6161/signin" {:form-params {:first-name "mikko" :last-name "mikkonen" :password "salainen" :email "mikko.mikkonen@foo.com"} :content-type :json})
  (do (in-ns 'user) (http-client/get "http://localhost:6161/info"))
  (do (in-ns 'user) (do-post "signin" {:x 1 :y 88})))

(comment
  (def routes2
    ["/plain"
     ["/plus" {:get  (fn [{{:strs [x y]} :query-params :as req}]
                       {:status 200
                        :body   {:total (+ (Long/parseLong x) (Long/parseLong y))}})
               :post (fn [{{:keys [x y]} :body-params}]
                       {:status 200
                        :body   {:total (+ x y)}})}]])
  (do (in-ns 'user) (http-client/get "http://localhost:6161/plain/plus" {:query-params {:x 1 :y 5}}))
  (do (in-ns 'user) (http-client/post "http://localhost:6161/plain/plus" {:form-params {:x 1 :y 88} :content-type :json})))


(comment
  (http-client/get "http://localhost:6161/test")
  (:x (:body {:body {:x 1 :y 2}}))
  *e

  (-signin 1 2)

  (remove-ns 'simpleserver.webserver.server)
  (in-ns 'simpleserver.webserver.server)
  @server
  (start-web-server (get-in ss-config/config [:server :port]))
  (do (require 'user) (user/do-get "/info"))
  (do (require 'user) (user/do-get "/test"))
  (do (require 'user) (user/do-post "/signin" {"x" 1 "y" 2}))
  (do (require 'user) (user/do-post "/signin" {}))
  (stop-web-server)
  (reset-web-server (get-in ss-config/config [:server :port]))
  (@server :status)
  *ns*)


(comment
  (do
    (in-ns 'user)
    (require '[simpleserver.domain.domain-config])
    (simpleserver.domain.domain-interface/get-product
      simpleserver.domain.domain-config/domain 1 2001)
    ))

(comment
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

    ))

(comment
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
    ))

(comment
  *e

  *ns*
  (in-ns 'user))

(comment
  @server
  (declare server)
  (defn init-server []
    (if (nil? @server)
      (atom {:status :stopped, :server nil})
      (do
        (stop-web-server))))

  (def server (init-server))
  @server
  (def server (atom {:status :stopped, :server nil})))

(comment
  (do
    (in-ns 'user)
    (require 'user)
    (user/refresh)
    (user/curl-get "/info"))

  (do
    (in-ns 'user)
    (require 'user)
    (user/reset)
    (user/curl-get "/info"))

  (do
    (in-ns 'user)
    (require 'user)
    (user/curl-get "/info"))
  (user/curl-get "/product-groups"))


(comment
  (remove-ns 'simpleserver.webserver.server)
  (in-ns 'simpleserver.webserver.server)
  @server
  (start-web-server (get-in ss-config/config [:server :port]))
  (do (require 'user) (user/curl-get "/info"))
  (stop-web-server)
  (reset-web-server (get-in ss-config/config [:server :port]))
  (@server :status)
  *e
  *ns*
  (clojure.repl/dir simpleserver.webserver.server))


(comment
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
        (log/warn "Server was already stopped")))))


(comment
  ss-config

  (do
    (require '[maailma.core :as m])
    (def env (m/build-config (m/resource "config.edn")))
    env)

  (remove-ns 'simpleserver.domain.domain-config))

;****************************************************************
; Dropped Mount, and started to use Maailma instead of Cprop.
;****************************************************************

(comment
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
  (def web-server-state nil))


(comment

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
    (require 'user)
    (user/refresh-all)
    (user/reset)
    (user/curl-get "/info"))

  (remove-ns 'simpleserver.session.session-single-node))


(comment
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
    ))


(comment
  (do
    (ns-unalias *ns* 'ss-config)
    (ns-unalias *ns* 'ss-session-config)
    (ns-unalias *ns* 'ss-session-i))

  (do
    (in-ns 'user)
    (require 'user)
    (user/reset)
    (user/curl-get "/info"))

  (do
    (in-ns 'user)
    (require 'user)
    (user/refresh-all)))

(comment

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
      @simpleserver.session.session-common/my-expiration-time))


(comment
  *ns*

  (user/curl-get "/info")

  (do
    (require 'clojure.java.shell)
    (->> (clojure.java.shell/sh "/bin/bash" "-c" "netstat -an | grep 6161")))

  (do (require 'user) (user/reset))
  (user/curl-get "/info")

  (var-get 'simpleserver.webserver.server/-info)
  (clojure.repl/dir user)

  (do (in-ns 'simpleserver.webserver.server)
      (clojure.repl/dir simpleserver.webserver.server))

  (ns-unmap 'simpleserver.webserver.server '-info)

  *ns*
  (remove-ns 'simpleserver.webserver.server)
  (in-ns 'user)

  (use 'simpleserver.webserver.server :reload-all))

(comment
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
    (require 'user)
    (user/reset)
    (user/curl-get "/info")))
;; **************************************************************************************


(comment
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
  ((comp :S :pid) product-map))

(comment

  ((juxt (comp :S :pid) (comp :S :pgid)) (first (:Items raw-product)))

  (def new-product
    (->>
      (:Items raw-product)
      (first)
      ((juxt (comp :S :pid) (comp :S :pgid) (comp :S :title) (comp :S :price) (comp :S :a_or_d) (comp :S :year) (comp :S :country) (comp :S :g_or_l)) (first (:Items raw-product)))
      ))
  new-product
  ok-product
  (= new-product ok-product))


(comment

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

  (require 'user)
  (do (require 'user) (user/reset))
  ;; Mount:
  (require '[mount.core :as mount])
  (mount/start)
  (mount/stop)
  (user/reset)
  (user/refresh-all))

(comment

  simpleserver.util.config/config-state
  simpleserver.domain.domain-config/domain-state
  simpleserver.webserver.server/web-server-state

  (user/set-development-db! :read-config)
  (user/set-development-db! :single-node)
  (user/set-development-db! :local-dynamodb)
  (user/set-development-db! :real-aws)

  @simpleserver.util.config/development-db
  (do
    (in-ns 'user)
    (require '[simpleserver.domain.domain-config])
    (simpleserver.domain.domain-interface/get-product simpleserver.domain.domain-config/domain-state 1 2001)
    )

  (simpleserver.domain.domain-interface/get-products simpleserver.domain.domain-config/domain-state 1)


  (mount/start #'simpleserver.util.config/config-state)
  (user/set-development-db! :single-node)
  (user/set-development-db! :local-dynamodb)

  simpleserver.util.config/config-state
  (mount/stop #'simpleserver.util.config/config-state)
  simpleserver.util.config/config-state)


(comment

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
  (simpleserver.domain.domain-interface/get-product simpleserver.domain.domain-config/domain-state 5 45))

(comment
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

    ))


(comment
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
    items))


(comment
  (user/curl-get "/info")

  (require 'user)
  (user/reset)
  simpleserver.util.config/config-state

  ; Print classpath in Clojure REPL
  (pprint (clojure.string/split (System/getProperty "java.class.path") #":"))
  (System/getenv "AWS_PROFILE")

  ; NOTE: Remember to add AWS_PROFILE=YOUR-PROFILE to Run Configuration / Enviroment
  (require '[clojure.core.async :as a]
           '[clojure.java.io :as io]
           '[clojure.data.json :as json]
           '[cognitect.aws.client.api :as aws]
           '[cognitect.aws.client.api.async :as aws.async]))

; **********************************************************************************************

(comment
  ; Start just config-state.
  (mount/start #'simpleserver.webserver.server/web-server-state)
  (mount/stop #'simpleserver.webserver.server/web-server-state)
  simpleserver.webserver.server/web-server-state

  (do
    (require 'simpleserver.webserver.server)
    (simpleserver.webserver.server/start-web-server 6161))

  (use 'simpleserver.webserver.server :reload-all)
  (use 'simpleserver.webserver.server :reload)

  (require 'user)
  ;; Mount:
  (require '[mount.core :as mount])
  (mount/start)
  (mount/stop)
  (user/reset)
  (user/refresh-all)
  simpleserver.util.config/config-state
  simpleserver.domain.domain-config/domain-state
  simpleserver.webserver.server/web-server-state)


(comment
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
  (aws/invoke my-ddb {:op :Scan :request {:TableName my-table}}))


(comment

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
    ))

(comment

  (def items [{:pgid {:S "1"}, :pgname {:S "Books-local-aws"}} {:pgid {:S "2"}, :pgname {:S "Movies-local-aws"}}])
  items
  (->> items
       (map (juxt (comp :S :pgid) (comp :S :pgname)))
       (into {}))

  (juxt (comp :S :pgid) (comp :S :pgname))

  (do
    (require '[user])
    (require '[mount.core :as mount])
    (mount/start)
    (user/curl-get "/info"))

  (user/curl-get "/product-groups"))

(comment

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
  (-> (Thread/currentThread) (.getContextClassLoader) (.getURLs) (seq) (pprint)))

(comment

  (do
    (require '[user])
    (user/reset)
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

  (in-ns 'user))

(comment

  (require '[cognitect.aws.config :as cog-config])
  (def my-cred-file "/home/marttkar/.aws/credentials")
  my-cred-file

  (def my-cog-profiles (cog-config/parse my-cred-file))
  my-cog-profiles
  (def my-profile (get-in simpleserver.util.config/config-state [:aws :aws-profile]))
  (str "%" my-profile "%")
  (type my-profile)

  (get my-cog-profiles "local-dynamodb"))



(comment

  (aws/validate-requests ddb true)

  (in-ns 'user)

  (require '[user])
  (user/reset)
  simpleserver.util.config/config-state


  (require '[mount.core :as mount])
  (mount/start)
  (mount/stop)
  (user/reset)

  (require '[simpleserver.domain.domain-single-node])
  (def s-node (simpleserver.domain.domain-single-node/->SingleNodeR))
  s-node
  simpleserver.util.config/config-state
  (simpleserver.domain.domain-interface/get-product-groups s-node)
  (simpleserver.domain.domain-interface/get-products s-node 1)
  (simpleserver.domain.domain-interface/get-product s-node 1 2024))


(comment
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
  (ns-publics 'user))


(comment
  (require '[simpleserver.webserver.server])

  *ns*
  (remove-ns 'simpleserver.webserver.server)

  ; NOTE: You can refresh mount states like this:
  ; First edit config, e.g. simpleserver.util.config.
  ; Then reset:
  (user/reset)
  ; Then check new config:
  simpleserver.util.config/config-state

  ; ************** WARNING **************************
  ; NOTE: When sending this to repl using <ctrl>-<shift>-ö doesn't always get the refreshed state.
  ; But when doing the same in the repl in put window does the job.
  ; I asked about that in Clojurians Slack in #cursive channel.


  ; Require mydev which has development stuff.
  ; NOTE: If there is syntax error in mydev it gets required but you cannot e.g. (mydev/refresh) => No such namespace: mydev.
  (require '[user])
  (user/refresh)
  (user/refresh-all)
  (user/reset)

  ;; Mount:
  (require '[mount.core :as mount])
  (mount/start)
  (mount/stop))

(comment

  ; Start just config-state.
  (mount/start #'simpleserver.util.config/config-state)
  simpleserver.util.config/config-state
  (mount/stop #'simpleserver.util.config/config-state)
  simpleserver.util.config/config-state
  ; Check the content of config-state.
  (def my-cs simpleserver.util.config/config-state)
  my-cs
  (get-in my-cs [:server :port])

  (require '[user])
  (require '[mount.core :as mount])
  (mount/start)
  (user/curl-get "/info"))


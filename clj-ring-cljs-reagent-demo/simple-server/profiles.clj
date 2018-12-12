;; **********************************************
;; Environment related profiles (choose only one)

{

 :dev
 {
  ;:plugins [[test2junit "1.3.3"]]
  :dependencies [[javax.servlet/servlet-api "2.5"]
                 [ring/ring-mock "0.3.0"]]}


 :single-node
 {
  :env {
        :ss-env "single-node"
        :my-env "dev"
        }
  }

 :local-dynamodb
 {
  :env {
        :ss-env "local-dynamodb"
        :my-env "dev"
        ; NOTE: Endpoint format was tricky to realize.
        :endpoint "http://dynamodb.eu-west-1.localhost:8000"
        ; Local DynamoDB: dummy but must be the same length as real keys.
        :access-key "XXXXXXXXXXXXXX___NOT"
        :secret-key "XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX___NOT"
        }
  }

 :aws-dynamodb-dev
 {
  :env {
        :ss-env "aws-dynamodb"
        :my-env "dev"
        :aws-profile "tmv-test"
        }
  }

 :aws-dynamodb-prod
 {
  :env {
        :ss-env "aws-dynamodb"
        :my-env "prod"
        :aws-profile "tmv-prod"
        }
  }


 ;; **********************************************
 ;; Logging profiles, choose only one.

 :log-dev
 {
  :resource-paths
  ["logconfig/dev"]}

 :log-prod
 {
  :resource-paths
  ["logconfig/prod"]}}




;; **********************************************
;; For repl development (always choose in IDEA Run Configuration).
;; Add this to your ~/.lein/profiles.clj:
;; :dependencies [[org.clojure/tools.namespace "0.2.11"]]
;; Then you are able to use:
;; (require '[clojure.tools.namespace.repl :refer [refresh]]) (refresh)
;; See: https://github.com/clojure/tools.namespace
;;


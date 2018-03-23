;; **********************************************
;; Environment related profiles (choose only one)

{

 :dev

 {
  ;:plugins [[test2junit "1.3.3"]]
  :dependencies [[javax.servlet/servlet-api "2.5"]
                 [ring/ring-mock "0.3.0"]]}


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
;; (require '[clojure.tools.namespace.repl :refer [refresh]])
;; (refresh)
;; See: https://github.com/clojure/tools.namespace
;;


(ns frontendinit
  (:require  [integrant.repl :refer [go]]))

;; Initialize our frontend development environment:
; Start shadow-cljs server and watch.
(do (require 'shadow.cljs.devtools.server) (shadow.cljs.devtools.server/start!))
(do (require 'shadow.cljs.devtools.api) (shadow.cljs.devtools.api/watch :app))
; Next hard reset browser: http://localhost:8333/struct/
; Note: you cannot do this with http call, since it calls the backend, 
; and you need to connect the _browser_ Javascript engine with the cljs repl.

; Do Integrant reset.
; This is a bit weird that we have this in the frontend side.
; But the reason is the way Calva connects to the frontend REPL, 
; and to the backend REPL via frontend REPL. If you have this in the 
; backend REPL, you cannot do Integrant reset, since the jetty port is 
; kept bound related to this (go) command.
(go)

(ns simpleserver.core
  (:gen-class)
  (:require
    [clojure.tools.logging :as log]
    [clojure.java.io :as io]
    [simpleserver.webserver.server :as ss-ws]))


;; Development:
;; (do (require '[clojure.tools.namespace.repl :refer [refresh]]) (refresh))


;; NOTE: When testing in REPL you can call (-main 1 2 3 4) directly
;; Using lein in command line: lein with-profile +log-dev ring server-headless resources/simpleserver.properties
;; Creating jar:
;; lein with-profile +log-prod ring uberjar


;; In REPL call: (-main "resources/simpleserver.properties")
;; Kari's Cursive settings that makes integration with editor and REPL more fluent:
;; <shift><ctrl><N> => Switch REPL namespace to current file (which is in editor when command given)
;; <shift><ctrl><M> => Load current namespace to REPL
;; <shift><ctrl><Å> => Send S-expression to REPL input
;; <caps><alt><U> => Focus to Editor (choose dialog window)
;; <esc><esc> => Focus to Editor last edit.
;; <caps><alt><I> => Focus to REPL output
;; <caps><alt><O> => Focus to REPL input
;; <caps><ctrl><I/K> => (In REPL): Browser REPL history
;; <ctrl><enter> => (In REPL): Send REPL input to REPL.
;; <caps><alt><J/L> => (In editor) => Switch tabs in editor
;; <ctrl><X>-<ctrl><O> (In editor) => Switch to next editor window (as in Emacs)
;;
(defn -main
  "Main not used since a Ring application."
  [& args]
  (throw (ex-info (str "Use ring to start the server, example: "
                       "SIMPLESERVER_CONFIG_FILE=resources/simpleserver.properties lein with-profile +log-dev ring server-headless") {})))


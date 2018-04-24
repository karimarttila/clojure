(defproject simple-frontend "0.1.0-SNAPSHOT"
  :description "Simple Frontend"
  :dependencies [[org.clojure/clojure "1.9.0"]
                 [org.clojure/clojurescript "1.10.238"]
                 [reagent "0.7.0"]
                 [reagent-utils "0.3.1"]
                 [secretary "1.2.3"]
                 [cljs-ajax "0.7.3"]
                 [cljsjs/react-bootstrap "0.31.5-0"]
                 ]


  :plugins [[lein-cljsbuild "1.1.5"]
            [lein-figwheel "0.5.15"]]

  :min-lein-version "2.5.0"

  :clean-targets ^{:protect false}
 [:target-path
  [:cljsbuild :builds :app :compiler :output-dir]
  [:cljsbuild :builds :app :compiler :output-to]]

 :resource-paths ["public"]

  :figwheel {:http-server-root "."
             :server-port      3445                         ;; default is 3449
             :nrepl-port       7045                         ;; default is 7002
             :nrepl-middleware ["cemerick.piggieback/wrap-cljs-repl"]
             :css-dirs         ["public/css"]}

  :cljsbuild {:builds
              {:app
               {:source-paths ["src" "env/dev/cljs"]
                :compiler
                              {:main          "simplefrontend.dev"
                               :output-to     "public/js/app.js"
                               :output-dir    "public/js/out"
                               :asset-path    "js/out"
                               :source-map    true
                               :optimizations :none
                               :pretty-print  true}
                :figwheel
                              {:on-jsload       "simplefrontend.core/mount-root"
                               :websocket-url  "ws://localhost:3445/figwheel-ws"}}


               :release
               {:source-paths ["src" "env/prod/cljs"]
                :compiler
                              {:output-to     "public/js/app.js"
                               :output-dir    "public/js/release"
                               :asset-path    "js/out"
                               :optimizations :advanced
                               :pretty-print  false}}}}






  :aliases {"package" ["do" "clean" ["cljsbuild" "once" "release"]]}

  :profiles {:dev {:dependencies [[binaryage/devtools "0.9.7"]
                                  [figwheel-sidecar "0.5.15"]
                                  [org.clojure/tools.nrepl "0.2.13"]
                                  [com.cemerick/piggieback "0.2.2"]]}})

;Instructions how to start remote REPL to Figwheel:
;- Start Figwheel REPL in terminal as instructed above.
;- Check the port Figwheel provides nREPL, e.g.: "Figwheel: Starting nREPL server on port: 7002".
;- In Cursive: Create new Run configuration: Clojure REPL / Remote:
;-- Host: localhost
;-- Port: 7002
;- Start the remote REPL in Cursive.
;- In REPL:
;-- Choose cljs (default is clj).
;-- (use 'figwheel-sidecar.repl-api) (cljs-repl)
;-- You should now see the same Figwheel text as in terminal
;-- Open browser: http://localhost:3449
;-- In Cursive remote REPL:
;--- (simplefrontend.signin/submit-form "Jeppe" "Virtanen" "jeppe.virtanen@tieto.com" "pass")
;--- You now should see the logging in browser console (open it in Chrome: Ctrl-Shift-i).
;--- So, you are now able to test your functions that are running in browser using Cursive REPL.

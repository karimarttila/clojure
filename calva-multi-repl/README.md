# Calva Multi-Repl Demo <!-- omit in toc -->

## Table of Contents <!-- omit in toc -->

- [Introduction](#introduction)
- [Backend (Clojure) REPL](#backend-clojure-repl)
- [Frontend (Clojurescript) REPL](#frontend-clojurescript-repl)
- [CLJC Files](#cljc-files)

## Introduction

This a minimal Calva multi-repl demo. I did this demo for myself to experiment with the new Calva multi-repl functionality.

## Backend (Clojure) REPL

Open a terminal in this directory and run command:

```bash
bb backend-repl
# Prints something like:
# cmd:  [clojure -M:dev:backend:calva-external-repl:kari -i bb-scripts/backendinit.clj -m nrepl.cmdline --middleware "[cider.nrepl/cider-middleware]"]
# nREPL server started on port 44571 on host localhost - nrepl://localhost:44571
```

In VSCode/Calva: Command Palette => `Calva: Connect to Running REPL Server in the Project` => Choose: `deps.edn`
=> This should print something like this in the Terminal window:

```text
Using host:port localhost:44571 ...
Hooking up nREPL sessions on port 44571...
Connected session: clj, port: 44571
```

**NOTE:** The port should be the same.

Open file [bemain.clj](./src/clj/backend/bemain.clj) in VSCode. Evaluate the S-expressions in the rich comment:

```clojure
(comment
  (+ 1 2)
  ;;=> 3
  (print "Hello from backend")
  ;;=> nil
  )
```

You should see in the VSCode `Terminal`:
```text
; clj  backend.bemain 
(+ 1 2)
3
(print "Hello from backend")
Hello from backend
nil
```

You have now verified that your backend Clojure REPL is connected to Calva.

## Frontend (Clojurescript) REPL

Open a terminal in this directory and run command:

```bash
bb shadow-watch
# Prints something like:
#> shadow:watch
#...
#shadow-cljs - HTTP server available at http://localhost:6080
# ...
# shadow-cljs - nREPL server started on port 46407
# ...
```

Open browser in `http://localhost:6080`, you should see text: `If you see this text, index.html is served!`

Open browser developer tools panel / Console to see the Console output. You should see the `(js/console.log "Code reloaded!")` in the [femain.cljs](./src/cljs/frontend/femain.cljs):

```text
Hello, shadow-cljs!
```

In VSCode/Calva: Command Palette => `Calva: Connect to Running REPL Server in the Project` => Choose: `shadow-cljs` => `Select which build to connect to` => Choose: `:app`

You should see something like this in the VSCode `Terminal`:

```text
Connecting using "shadow-cljs" project type.
Connecting ...
Reading port file: file:///a/prs/github/clojure/calva-multi-repl/.shadow-cljs/nrepl.port ...
Using host:port localhost:46407 ...
Hooking up nREPL sessions on port 46407...
Connected session: clj:2, port: 46407
...
Creating cljs repl session...
Connecting cljs repl: shadow-cljs...
Connected shadow-cljs runtime: 3, Chrome 537.36 [Linux x86_64], host: browser
Connected session: cljs:2, repl: :app
Evaluating code from settings: 'calva.autoEvaluateCode.onConnect.cljs'
; cljs:2  user 
(require '[cljs.repl :refer [apropos dir doc find-doc print-doc pst source]])
nil
shadow-cljs remote notificatuons not supported with shadow-cljs version < 3.2.1
```

**NOTE:** The port should be the same.

Open file [femain.clj](./src/cljs/frontend/femain.cljs) in VSCode. Evaluate the S-expressions in the rich comment:

```clojure
(comment
  (+ 3 4)
  ;;=> 7
  (print "Hello from frontend")
  ;;=> nil
  )
```

You should see in the VSCode `Terminal`:
```text
; cljs:2  frontend.femain 
(+ 3 4)
7
(print "Hello from frontend")
Hello from frontend
nil
```

Check in the browser Developer tools panel, that you also see `Hello from frontend` in the Console output.

You have now verified that your frontend Clojurescript REPL is connected to Calva.

## CLJC Files

Open file [cmain.clj](./src/cljc/common/cmain.cljc) in VSCode. 

Check that you see `.cljc -> clj` in the bottom bar new `REPL` icon. This means your cljc file will be evaluated in the backend Clojure REPL.

Evaluate the S-expressions in the rich comment:

```clojure
(comment
  (+ 5 6)
  ;;=> 11
  (print "Hello from common")
  ;;=> nil
  )
```

You should see in the VSCode `Terminal`:

```text
; clj  common.cmain 
(+ 5 6)
11
(print "Hello from common")
Hello from common
nil
```

Next, click the `.cljc -> clj` text: `Click to show REPL sessions menu` => Choose `cljs` (frontend) REPL. Now you should see text `cljs` and `:app` in the bottom bar. This means your cljc file will be evaluated in the frontend Clojurescript REPL.

Evaluate again:

```clojure
(comment
  (+ 5 6)
  ;;=> 11
  (print "Hello from common")
  ;;=> nil
  )
```

This time you should see:

```text
; cljs:2  common.cmain 
(+ 5 6)
11
(print "Hello from common")
Hello from common
nil
```

Check in the browser Developer tools panel, that you also see `Hello from common` in the Console output.

You have now verified that your cljc common files can be evaluated both in the backend Clojure REPL and in the frontend Clojurescript REPL.

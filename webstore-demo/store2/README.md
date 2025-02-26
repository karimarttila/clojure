# Store2 Clojure Fullstack Exercise

- [Store2 Clojure Fullstack Exercise](#store2-clojure-fullstack-exercise)
  - [TODO](#todo)
  - [Introduction](#introduction)
  - [Example Projects](#example-projects)
  - [What Does This Demo Do and What is the Purpose of this Exercise?](#what-does-this-demo-do-and-what-is-the-purpose-of-this-exercise)
  - [Babashka](#babashka)
  - [Starting only the Clojure Backend REPL](#starting-only-the-clojure-backend-repl)
  - [The Backend Configuration: Aero](#the-backend-configuration-aero)
  - [The Backend Clojure State Management: Integrant](#the-backend-clojure-state-management-integrant)
  - [Starting the Frontend Dev Build](#starting-the-frontend-dev-build)
  - [Connect both Clojure Backend REPL and Clojurescript Frontend REPL](#connect-both-clojure-backend-repl-and-clojurescript-frontend-repl)
    - [Using Calva: Connect to a Running REPL in the Project](#using-calva-connect-to-a-running-repl-in-the-project)
    - [Using Calva: Jack-in](#using-calva-jack-in)
    - [Some Extra Utilities](#some-extra-utilities)
  - [Building the Fullstack Application](#building-the-fullstack-application)
  - [TODO](#todo-1)


## TODO

Kun valmis, niin poista kaikki todomvc koodi.
Esim. package.json:
    "todomvc-app-css": "^2.4.3",
    "todomvc-common": "^1.0.5"


## Introduction

I have implemented various webstore exercises (e.g. [Clojure Re-Frame Exercise](https://www.karimarttila.fi/clojure/2020/10/15/clojure-re-frame-exercise.html)) to learn how to use Clojure to implement both the backend and frontend. This new `store2` exercise is just one of them. In this new exercise I wanted to learn how to implement the frontend using [replicant](https://github.com/cjohansen/replicant) library, which is a thin HTML rendering layer for ClojureScript. I wanted to see how `replicant` compares to [Reagent](https://reagent-project.github.io/) that I have used previously with Clojurescript.

## Example Projects

I used mostly two example projects in my exercise:

- [metosin-example-project](https://github.com/metosin/example-project). This example project shows how to use [babashka](https://github.com/babashka/babashka) as a command runner (I have previously used mostly [just](https://github.com/casey/just)). I also used a lot of configurations of this example as a basis for my exercise. This example project provides also a good example on how to use [reitit](https://github.com/metosin/reitit), middleware, [malli](https://github.com/metosin/malli), etc.
- [todomvc](https://github.com/anteoas/replicant-todomvc). 

## What Does This Demo Do and What is the Purpose of this Exercise?

This `store2` is a simple webstore that implements a backend and frontend. The backend uses a file based "database" of products, and exposes an API for logging in, and browsing the products. The frontend implements the web app for browsing the products. The exercise is simple in that sense that you don't need to set up e.g. any database to examine how this exercise runs. I wanted to keep the exercise minimal so, that I can learn to use `replicant` and also refresh my memory regarding the Clojure/script tooling, and also learn new ways to configure things (like using `babashka`). I also wanted to see how I can use [Calva](https://calva.io/) in both backend Clojure and frontend Clojurescript programming.

So, the point of this exercise is not to implement everything from scratch but to learn to use new technologies (`replicant`) and how to use new tooling ideas. Therefore, I have used existing code from previously mentioned examples as much as I could.

## Babashka

The implementor of the `metosin-example-project` has used `babashka` as a command runner, and I use it in this exercise the same way. 

To list the project commands:

```bash
bb tasks
```

## Starting only the Clojure Backend REPL

**NOTE:** See also [Connect both Clojure Backend REPL and Clojurescript Frontend REPL](#connect-both-clojure-backend-repl-and-clojurescript-frontend-repl) chapter, which is the recommended way to connect VSCode/Calva to both backend and frontend REPLs.

The file [example.user.edn](./example.user.edn) provides a simple configuration for starting REPL for [Calva](https://calva.io/). Copy paste that file as `.user.edn` and provide your own configuration how to start REPL for your editor. Then:

```bash
bb user-repl
```

Now you have the backend REPL running and you can connect to it using your editor. In my Calva configuration I use command `Calva: Connect to a Running REPL in the Project` => `clojure-backend`.

I have in my VSCode settings.json file:

```json
    "calva.replConnectSequences": [
        {
            "name": "backend + frontend",
            "projectType": "shadow-cljs",
            "cljsType": "shadow-cljs",
            "menuSelections": {
                "cljsLaunchBuilds": [
                    ":app"
                ],
                "cljsDefaultBuild": ":app"
            }
        },
        {
            "name": "clojure-backend",
            "nReplPortFile": [
                ".nrepl-port"
            ],
            "projectType": "deps.edn",
            "cljsType": "none"
        },
        {
            "name": "clojurescript-frontend",
            "projectType": "shadow-cljs",
            "cljsType": {
                "dependsOn": "shadow-cljs",
                "connectCode": "(shadow.cljs.devtools.api/repl :app)"
            }
        }
    ],
```

If you plan to use VSCode as your editor, I recommend you read my blog articles regarding how to configure Calva with VSCode:

- [Configuring VSCode/Calva for Clojure programming](https://www.karimarttila.fi/clojure/2022/10/08/clojure-calva.html)
- [Configuring VSCode/Calva for Clojure programming - Part 2](https://www.karimarttila.fi/clojure/2022/10/16/clojure-calva-part2.html)
- [Configuring VSCode/Calva for Clojure programming - Part 3](https://www.karimarttila.fi/clojure/2022/10/18/clojure-calva-part3.html)
- [Clojure Keybindings](https://www.karimarttila.fi/clojure/2025/02/02/clojure-keybindings.html)

## The Backend Configuration: Aero

The `metosin-example-project` project uses [Aero](https://github.com/juxt/aero) for providing the configuration mechanism for the application, I have also used `Aero` in this exercise. The Aero configuration file is [config.edn](./resources/config.edn).

## The Backend Clojure State Management: Integrant

The `metosin-example-project` project uses [Integrant](https://github.com/juxt/aero) for providing state management and live-reload of Clojure namespaces. I have also used `Integrant` in my previous exercises for this functionality.

I have in my VSCode/Calva configurations keybindings for Integrant:

**settings.json**:

```json
    "calva.customREPLCommandSnippets": [
        {
            "name": "Integrant-reset",
            "snippet": "(integrant.repl/reset)",
            "repl": "clj"
        },
        {
            "name": "Integrant-go",
            "snippet": "(integrant.repl/go)",
            "repl": "clj"
        },
        {
            "name": "Integrant-halt",
            "snippet": "(integrant.repl/halt)",
            "repl": "clj"
        }
    ],
```

**keybindings.json**:

```json
  {
    "key": "alt+j",
    "command": "calva.runCustomREPLCommand",
    "when": "calva:connected && calva:keybindingsEnabled && editorLangId == 'clojure'",
    "args": {
      "ns": "user",
      "snippet": "(integrant.repl/reset)"
    }
  },
  {
    "key": "ctrl+t alt+h",
    "command": "calva.runCustomREPLCommand",
    "when": "calva:connected && calva:keybindingsEnabled && editorLangId == 'clojure'",
    "args": {
      "ns": "user",
      "snippet": "(integrant.repl/go)"
    }
  },
  {
    "key": "ctrl+t alt+k",
    "command": "calva.runCustomREPLCommand",
    "when": "calva:connected && calva:keybindingsEnabled && editorLangId == 'clojure'",
    "args": {
      "ns": "user",
      "snippet": "(integrant.repl/halt)"
    }
  },
```

So, in my VSCode/Calva editor, I mostly use `alt-l` to evaluate current Sexpr (S-expression), and `alt-j` to reload all namespaces using Integrant.

## Starting the Frontend Dev Build

**NOTE:** See also [Connect both Clojure Backend REPL and Clojurescript Frontend REPL](#connect-both-clojure-backend-repl-and-clojurescript-frontend-repl) chapter, which is the recommended way to connect VSCode/Calva to both backend and frontend REPLs.

The frontend uses [replicant](https://github.com/cjohansen/replicant) library. 

See also the [Replicant User Documentation](https://replicant.fun/learn/)

```bash
npm install
bb frontend-dev
```

**NOTE:** Shadow-cljs says: `HTTP server available at http://localhost:9080`. But you should not use this development server port, since the backend servers the frontend. Use the backend development port instead: `http://localhost:9333`.

Next, you need to have backend REPL up. In your editor (or REPL terminal): `(integrant.repl/reset)`. Backend now serves the generated index.html file, which has the javascript directive `main.js`, which is generated by the `shadow-cljs` (`bb frontend-dev` above starts shadow-cljs).


## Connect both Clojure Backend REPL and Clojurescript Frontend REPL

**Prerequisites**:

Install:

- Clojure cli
- Babashka

```bash
npm install
```

### Using Calva: Connect to a Running REPL in the Project

Three terminals:

**In the #1 terminal:**

See `.user.edn` for the actual clojure command and aliases that are needed.

NOTE: `backend-repl` does also Interant reset!

``` bash
bb backend-repl
```

... wait till you see: `nREPL server started on port...`, and that there are no errors.


**In the #2 terminal:**

NOTE: `frontend-repl` also starts shadow-cljs server and starts watching the build.

```bash
bb frontend-repl
```

... wait till you see: `[:app] Build completed. ...`, and that there are no errors.

**In the #3 terminal / VSCode**:

- Start VSCode
- VSCode command:
- `Calva: Connect to a Running REPL in the Project`
- Project type: `backend + frontend`
- In browser hard refresh `http://localhost:8333/struct/` => This connects the frontend repl to the browser javascript engine (in the `frontendinit.clj` we already did the Integrant `(go)`, which started to serve the frontend).
- You should be good to go now: You have both backend REPL and frontend REPL connected to your VSCode editor.
- Test backend REPL: In the `clj` file try: `(+ 1 1- 
- Test frontend REPL: In the `cljs` file try: `(js/console.log "I am connected to the browser!")`
- Try to edit some frontend main page html element => the live reload should work and the browser view should be automatically updated.

... to verify both REPLs are connected!

Try editing some cljs file to see live-reload works in the browser app.


### Using Calva: Jack-in

Start the just `npm run postcss:watch` since we use Calva to start shadow-cljs build and frontend REPL. Do not start the Clojure backend REPL from the terminal, since we use Calva to start the backend REPL.

- In VSCode, look for command `Calva: Start a Project REPL and Connect (a.k.a. Jack-in)`.
- Calva shows project types, choose: `deps.edn + shadow-cljs`.
- Choose aliases: `:backend`, `:dev`, `:frontend` and `:shadow-cljs`. (**NOTE**: Do not choose the `calva` alias: that is for the terminal REPL!)
- Jacking process starts, wait...
- Go to some clj file and `alt+j` (`(integrant.repl/reset)`).
- In browser, refresh: `http://localhost:9333/#`
- If you see `No build connected` near the REPL (VSCode bottom info area): click it, it should say: `:app`.
- Now you should have both backend clj REPL and frontend cljs REPL.
- Open some clj file (e.g. `main.clj`), in a rich comment: `(+ 1 1)` => You should see: `clj backend.main (+ 1 1) and 2` in the terminal output.
- Open some cljs file (e.g. `app.cljs`), in a rich comment: `(+ 1 1)` => You should see: `cljs frontend.app (+ 1 1) and 2` in the terminal output. You can also try: `(js/console.log "TESTING...")` => you should see `TESTING...` in the browser developer tool / Console.


### Some Extra Utilities

Move terminal tab into a new window so that you have more space in the main editor VSCode window:

- VSCode command `Terminal: Move Terminal into Editor Area`.
- Then grab the terminal tab in the editor area and move it outside of the current VSCode window => creates a new VSCode window for the terminal.


## Building the Fullstack Application

Metosin example provided a good solution to building the application:

```bash
bb build
```

Run the built app:

```bash
java -cp target/app.jar clojure.main -m backend.main
```

... and open browser in `http://localhost:9333`.


## TODO


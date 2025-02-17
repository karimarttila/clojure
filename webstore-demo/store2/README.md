# Store2 Clojure Fullstack Exercise

- [Store2 Clojure Fullstack Exercise](#store2-clojure-fullstack-exercise)
  - [Introduction](#introduction)
  - [Example Projects](#example-projects)
  - [What Does This Demo Do and What is the Purpose of this Exercise?](#what-does-this-demo-do-and-what-is-the-purpose-of-this-exercise)
  - [Babashka](#babashka)
  - [Starting the Clojure REPL](#starting-the-clojure-repl)
  - [The Backend Configuration: Aero](#the-backend-configuration-aero)
  - [The Backend Clojure State Management: Integrant](#the-backend-clojure-state-management-integrant)
  - [Starting the Frontend Dev Build](#starting-the-frontend-dev-build)
  - [Building the Fullstack Application](#building-the-fullstack-application)


## Introduction

I have implemented various webstore exercises (e.g. [Clojure Re-Frame Exercise](https://www.karimarttila.fi/clojure/2020/10/15/clojure-re-frame-exercise.html)) to learn how to use Clojure to implement both the backend and frontend. This new `store2` exercise is just one of them. In this new exercise I wanted to learn how to implement the frontend using [UIx](https://github.com/pitch-io/uix) library, which is a thin [React](https://reactjs.org/) wrapper for ClojureScript. I wanted to see how `UIx` compares to [Reagent](https://reagent-project.github.io/) that I have used previously with Clojurescript.

## Example Projects

I used mostly two example projects in my exercise:

- [metosin-example-project](https://github.com/metosin/example-project). This example project shows how to use [babashka](https://github.com/babashka/babashka) as a command runner (I have previously used mostly [just](https://github.com/casey/just)). I also used a lot of configurations of this example as a basis for my exercise. This example project provides also a good example on how to use [reitit](https://github.com/metosin/reitit), middleware, [malli](https://github.com/metosin/malli), etc.
- [uix-starter](https://github.com/pitch-io/uix-starter). This is the "official UIx starter project."

## What Does This Demo Do and What is the Purpose of this Exercise?

This `store2` is a simple webstore that implements a backend and frontend. The backend uses a file based "database" of products, and exposes an API for logging in, and browsing the products. The frontend implements the web app for browsing the products. The exercise is simple in that sense that you don't need to set up e.g. any database to examine how this exercise runs. I wanted to keep the exercise minimal so, that I can learn to use `UIx` and also refresh my memory regarding the Clojure/script tooling, and also learn new ways to configure things (like using `babashka`). I also wanted to see how I can use [Calva](https://calva.io/) in both backend Clojure and frontend Clojurescript programming.

So, the point of this exercise is not to implement everything from scratch but to learn to use new technologies (`UIx`) and how to use new tooling ideas. Therefore, I have used existing code from previously mentioned examples as much as I could.

## Babashka

The implementor of the `metosin-example-project` has used `babashka` as a command runner, and I use it in this exercise the same way. 

To list the project commands:

```bash
bb tasks
```

## Starting the Clojure REPL

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

```bash
npm i
bb frontend-dev
```

**NOTE:** Shadow-cljs says: `HTTP server available at http://localhost:9080`. But you should not use this development server port, since the backend servers the frontend. Use the backend development port instead: `http://localhost:9333`.

Next, you need to have backend REPL up. In your editor (or REPL terminal): `(integrant.repl/reset)`. Backend now serves the generated index.html file, which has the javascript directive `main.js`, which is generated by the `shadow-cljs` (`bb frontend-dev` above starts shadow-cljs).


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

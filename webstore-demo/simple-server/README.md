# Simple Server  <!-- omit in toc -->


# Table of Contents  <!-- omit in toc -->
- [WORK IN PROGRESS](#work-in-progress)
- [Introduction](#introduction)
- [Technical Description](#technical-description)
- [Application State Management](#application-state-management)
- [Configuration Handling](#configuration-handling)
- [REPL Driven Development](#repl-driven-development)
- [Local DynamoDB Instance](#local-dynamodb-instance)
- [Clojure Development](#clojure-development)
  - [IntelliJ IDEA / Cursive](#intellij-idea--cursive)
  - [Command Line](#command-line)
  - [Hot Code Reloading](#hot-code-reloading)
  - [Connecting REPL to Running Ring Server](#connecting-repl-to-running-ring-server)
    - [Connect to Ring App using Remote REPL in IDEA/Cursive](#connect-to-ring-app-using-remote-repl-in-ideacursive)
  - [Static Code Analysis](#static-code-analysis)
- [Unit Testing](#unit-testing)
- [Building for Production](#building-for-production)


# WORK IN PROGRESS

I delete this chapter once this exercise is done and this README file is properly documented.

# Introduction

This Simple Server is a re-implementation of my original [Simple Server](https://github.com/karimarttila/clojure/tree/master/clj-ring-cljs-reagent-demo/simple-server). I created this new Simple Server to learn to use [deps.edn](https://clojure.org/guides/deps_and_cli) instead of [Leiningen](https://leiningen.org/) and also to try new more effective REPL workflows as explained e.g. in [Chicago Clojure - 2017-06-21 - Stuart Halloway on Repl Driven Development](https://vimeo.com/223309989) and [Atom, Chlorine, and Cognitect's REBL by Sean Corfield](https://www.youtube.com/watch?v=ZhzMoEz4j1k&feature=youtu.be).

NOTE: I don't iterate my Clojure development observations in this README.md that I already found out when I did the original Clojure Simple Server - I recommend the reader to read that README.md file.

# Technical Description

Simple Server is implemented using [Clojure](https://clojure.org/) and [Ring](https://github.com/ring-clojure).

# Application State Management

I used the [mount](https://github.com/tolitius/mount) application state management library. Mount is easy to use and using Mount it was easy to reload different development configurations (e.g. local database, AWS local container based development DynamoDB database vs. real AWS DynamoDB database).

# Configuration Handling

I used the [cprop](https://github.com/tolitius/cprop) configuration management library. I created most of the application in "env-dev-single-node" mode (simulating the databases by reading the data from files). In deps.edn I created various configuration aliases:

```clojure
:env-dev-single-node    {:extra-paths ["resources/config/dev-single-node"]}
:env-dev-local-dynamodb {:extra-paths ["resources/config/dev-local-dynamodb"]}
:env-dev-real-aws       {:extra-paths ["resources/config/dev-real-aws"]}
```

... and in those paths I had different config.edn files which had the development configurations for testing various environments (single-node, local-dynamodb and real aws). I also created some development utilities to quickly switch from one configuration to another, example:

```clojure
(mydev/set-development-db! :single-node)
; => {:my-env "dev", :ss-env "single-node", :server {:port 6161}, :domain {:data-dir "resources/data"}}
(mydev/set-development-db! :local-dynamodb)
; => {:my-env "dev", :ss-env "aws", :server {:port 6161}, :domain {:data-dir "resources/data"}, :aws {:ss-table-prefix "ss", :aws-profile "local-dynamodb", :endpoint {:protocol :http, :hostname "localhost", :port 8000}}}
```

This is the real power of Lisp - you can mold and fold the data and code in a REPL session any way you want without ever needing to start the REPL.

# REPL Driven Development

I watched [Chicago Clojure - 2017-06-21 - Stuart Halloway on Repl Driven Development](https://vimeo.com/223309989) presentation and I realized that previously I had done REPL driven development completely wrong: I had written everything in the REPL editor. Instead you should use some scratch file and just send the S-expressions to the REPL for compilation and evaluation. This way you can have all your experiements saved in a scratch file. In this exercise I actually created three kinds of Clojure files:

- 1. [src](https://github.com/karimarttila/clojure/tree/master/webstore-demo/simple-server/src): the actual production source code. This code will be packaged as the production deployment that runs the application in production. Will be added also into the Git repository, of course.
- 2. [test](https://github.com/karimarttila/clojure/tree/master/webstore-demo/simple-server/test): the test source code. This code is for testing purposes and is not shipped into production but will be added also into the Git repository, of course (e.g. to be run in the CI server).
- 3. [dev-src](https://github.com/karimarttila/clojure/tree/master/webstore-demo/simple-server/dev-src): the development source code. This code is just for development purposes and you don't necessarily add this code into the git repository (and you don't package this code as part of the deployment unit, of course). I have added this code also in this Git repository for educational purposes. In this directory I have just two files:

      - [mydev.clj](https://github.com/karimarttila/clojure/blob/master/webstore-demo/simple-server/dev-src/mydev.clj): auxiliary functions to start/stop application state, change configuration during development, calling APIs for experimental testing etc.
      - [myscratch.clj](https://github.com/karimarttila/clojure/blob/master/webstore-demo/simple-server/dev-src/myscratch.clj): scratch file. This file is pure unstructured mind flow. The idea of this file is what Stuart Halloway is talking about in the above mentioned presentation: do not write code in the REPL editor but in a scratch file. So, in this file I experimented various things when developing the application - take a look to have an idea what I was thinking about when developing the application.



# Local DynamoDB Instance

I used local DynamoDB instance while developing this new version of the Clojure Simple Server. See instructions in [Local-DynamoDB README.md](../../clj-ring-cljs-reagent-demo/simple-server/dynamodb/README.md).

# Clojure Development

## IntelliJ IDEA / Cursive

I run Clojure code in Cursive using Deps ("Run with Deps" option in Cursive Run/Debug Configurations). Mostly I use alias "dev-src" which comprises my development code ("dev-src" source tree) with production code ("src" source tree).

## Command Line

Start server in command line: 

```bash
TODO 
```

## Hot Code Reloading

Ring starts the server in hot code reloading mode which is pretty nice when developing the backend application - you can start your server using the command given above and just make code changes and test the server APIs using Curl without restarting the server.

When you want to create the production version follow [Ring Setup for Production](https://github.com/ring-clojure/ring/wiki/Setup-for-production) instructions.

## Connecting REPL to Running Ring Server

TODO


### Connect to Ring App using Remote REPL in IDEA/Cursive

TODO

## Static Code Analysis

TODO


# Unit Testing

TODO



# Building for Production

TODO

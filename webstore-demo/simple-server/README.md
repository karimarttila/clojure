# Simple Server  <!-- omit in toc -->


# Table of Contents  <!-- omit in toc -->
- [WORK IN PROGRESS](#work-in-progress)
- [Introduction](#introduction)
- [Technical Description](#technical-description)
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

# Simple Server Integrant Version  <!-- omit in toc -->


# Table of Contents  <!-- omit in toc -->
- [Introduction](#introduction)
- [Technical Description](#technical-description)
- [Application State Management](#application-state-management)
- [Configuration Handling](#configuration-handling)
- [(REPL Driven) Clojure Development](#repl-driven-clojure-development)
  - [Using a REPL Scratch File](#using-a-repl-scratch-file)
  - [You Can Do It Without Application State Management Libraries](#you-can-do-it-without-application-state-management-libraries)
  - [Editing Clojure Code Efficiently](#editing-clojure-code-efficiently)
  - [Using IntelliJ IDEA + Cursive and Emacs + Cider Interchangeably](#using-intellij-idea--cursive-and-emacs--cider-interchangeably)
  - [Rich Comments](#rich-comments)
  - [Debugger](#debugger)
- [Logging](#logging)
- [Linting](#linting)
- [DynamoDB Functionality](#dynamodb-functionality)
  - [Local DynamoDB Docker Emulator](#local-dynamodb-docker-emulator)
  - [Using Cognitect AWS Clojure Library](#using-cognitect-aws-clojure-library)
- [IntelliJ IDEA / Cursive Run Configuration](#intellij-idea--cursive-run-configuration)
- [Unit Testing](#unit-testing)
- [Building Fat Jar and Running It](#building-fat-jar-and-running-it)
- [Next Steps for Myself](#next-steps-for-myself)
- [For a Clojure Learner](#for-a-clojure-learner)


# Introduction

I did this third version of my Simple Server exercise using Integrant (see previous versions in [clj-ring-cljs-reagent-demo](../../clj-ring-cljs-reagent-demo) and in [simple-server](../simple-server) ).

The idea of this third exercise was to learn and explore the [Integrant library](https://github.com/weavejester/integrant) and also the [Integrant-REPL workflow](https://github.com/weavejester/integrant-repl) which is popular in Metosin (and to see why it is so popular in Metosin).

NOTE:

- I don't iterate those Clojure development observations in this README.md that I already found out when I did the previous Clojure Simple Server versions - I recommend the reader to read the README.md file of those previous implementations if you are interested about it.
- Most of the application code in this new Simple Server implementation is same as in the previous Clojure Simple Server implementations (except those areas where I did most of the changes: application state management using Integrant etc. ).
- This implementation is not meant to be an example how to create a production level web server in Clojure - it is just my personal Clojure exercise.

If you are interested to read my personal observations regarding the five languages I used to implement this same web server you might be interested to read my [Five Languages, Five Stories](https://medium.com/@kari.marttila/five-languages-five-stories-1afd7b0b583f) blog post. (There is actually nowadays also an implementation using Kotlin, see my Github repo.)


# Technical Description

Simple Server is implemented using [Clojure](https://clojure.org/) and [Ring](https://github.com/ring-clojure). For routing I used [reitit](https://github.com/metosin/reitit). For state management I used [Integrant library](https://github.com/weavejester/integrant) and for the REPL related workflow I used [Integrant-REPL workflow](https://github.com/weavejester/integrant-repl).


# Application State Management

So, in this third Simple Server version I wanted to compare the workflow using no particular state management library (see: [simple-server](../simple-server)) and this new Simple Server version with the [Integrant library](https://github.com/weavejester/integrant). You can read my experiences without using any state management library in that previous exercise, see [README.md](../simple-server/README.md) in chapter "You Can Do It Without Application State Management Libraries". In this new README file in this chapter I focus on my experiences using Integrant.

TODO: Experiences.



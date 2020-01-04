# Simple Server  <!-- omit in toc -->


# Table of Contents  <!-- omit in toc -->
- [Introduction](#introduction)
- [Technical Description](#technical-description)
- [Application State Management](#application-state-management)
- [Configuration Handling](#configuration-handling)
- [REPL Driven Development](#repl-driven-development)
  - [Using a REPL Scratch File](#using-a-repl-scratch-file)
  - [You Can Do It without Application State Management Libraries](#you-can-do-it-without-application-state-management-libraries)
  - [Editing Clojure Code Efficiently](#editing-clojure-code-efficiently)
  - [Using IntelliJ IDEA + Cursive and Emacs + Cider Interchangeably](#using-intellij-idea--cursive-and-emacs--cider-interchangeably)
  - [Rich Comments](#rich-comments)
  - [Debugger](#debugger)
- [Logging](#logging)
- [Linting](#linting)
- [Local DynamoDB Instance](#local-dynamodb-instance)
- [IntelliJ IDEA / Cursive Run Configuration](#intellij-idea--cursive-run-configuration)
- [Unit Testing](#unit-testing)
- [Building Fat Jar and Running It](#building-fat-jar-and-running-it)
- [Next Steps](#next-steps)


# Introduction

This Clojure Simple Server is a re-implementation of my original Clojure [Simple Server](https://github.com/karimarttila/clojure/tree/master/clj-ring-cljs-reagent-demo/simple-server). I did some three years ago. I created the first version of that Clojure exercise server to learn to use Clojure. I created this new Clojure Simple Server version mainly to learn new Clojure libraries and ways of working as:

- Use [deps.edn](https://clojure.org/guides/deps_and_cli) instead of [Leiningen](https://leiningen.org/).
- Learn to use more effective REPL workflows as explained e.g. in [Chicago Clojure - 2017-06-21 - Stuart Halloway on Repl Driven Development](https://vimeo.com/223309989).
- Use [Cognitect AWS Api](https://github.com/cognitect-labs/aws-api) instead of [Amazonica](https://github.com/mcohen01/amazonica) (NOTE: to be done later)
- Use Metosin libraries (reitit, NOTE: malli later).

NOTE: 

- I don't iterate those Clojure development observations in this README.md that I already found out when I did the original Clojure Simple Server version - I recommend the reader to read the README.md file of that previous implementation if you are interested about it.
- Most of the application code in this new Simple Server implementation is same as in the first Clojure implementation of the Simple Server implementation (except of those areas where I did most of the changes: application state management etc. ).
- This implementation is not meant to be an example how to create a production level web server in Clojure - it is just my personal Clojure exercise.

If you are interested to read my personal observations regarding the five languages I used to implement this same web server you might be interested to read my [Five Languages, Five Stories](https://medium.com/@kari.marttila/five-languages-five-stories-1afd7b0b583f) blog post.


# Technical Description

Simple Server is implemented using [Clojure](https://clojure.org/) and [Ring](https://github.com/ring-clojure). For routing I used [reitit](https://github.com/metosin/reitit).


# Application State Management

First I started to use the [mount](https://github.com/tolitius/mount) application state management library. Mount is easy to use and using Mount it is easy to manage the application state. I created different Mount managed state entities e.g. for domain and server. But somehow I felt that using an application state management library and occasionally reloading all namespaces wasn't that productive for me. Sometimes I also got some weird errors that I couldn't resolve but I had to restart the REPL which I tried to avoid in this exercise. Finally I gave up, removed Mount and implemented a very simple custom state management for the web server: just store the web server in an atom (and protect it with defonce). This was actually a good solution for me. It forced me to better understand the namespace concept, top level form concepts and the idea how to compile certain pieces of the code: individual S expressions, def and defn forms and the whole namespace (and avoid the "refresh-all", i.e. reload all namespaces workflow). See more in the "REPL Driven Development" chapter.


# Configuration Handling

I first started to use the [cprop](https://github.com/tolitius/cprop) configuration management library. Later on when I started to use [reitit](https://github.com/metosin/reitit) I switched also to use the [maailma](https://github.com/metosin/maailma) configuration management library from the same company - [Metosin](https://www.metosin.fi/en/) (there is a specific reason for this - I decided to join the company and I thought it would be wise to learn to use some of Metosin's libraries beforehand). I created most of the application in "env-dev-single-node" mode (simulating the databases by reading the data from files - NOTE: I'll create an AWS DynamoDB version later). In deps.edn I created various configuration aliases:

```clojure
:env-dev-single-node    {:extra-paths ["resources/config/dev-single-node"]}
:env-dev-local-dynamodb {:extra-paths ["resources/config/dev-local-dynamodb"]}
:env-dev-real-aws       {:extra-paths ["resources/config/dev-real-aws"]}
```

... and in those paths I had different config.edn files which had the development configurations for testing various environments (single-node, local-dynamodb and real aws).


# REPL Driven Development

## Using a REPL Scratch File

I watched [Chicago Clojure - 2017-06-21 - Stuart Halloway on Repl Driven Development](https://vimeo.com/223309989) presentation and I realized that previously I had done REPL driven development completely wrong: I had written everything in the REPL editor. Instead you should use some scratch file and just send the S-expressions to the REPL for compilation and evaluation. This way you can have all your experiements saved in a scratch file. In this exercise I actually created three kinds of Clojure files:

- 1. [src](https://github.com/karimarttila/clojure/tree/master/webstore-demo/simple-server/src): the actual production source code. This code will be packaged as the production deployment that runs the application in production. Will be added also into the Git repository, of course.
- 2. [test](https://github.com/karimarttila/clojure/tree/master/webstore-demo/simple-server/test): the test source code. This code is for testing purposes and is not shipped into production but will be added also into the Git repository, of course (e.g. to be run in the CI server).
- 3. [dev-src](https://github.com/karimarttila/clojure/tree/master/webstore-demo/simple-server/dev-src): the development source code. This code is just for development purposes and you don't necessarily add this code into the git repository (and you don't package this code as part of the deployment unit, of course). I have added this code also in this Git repository for educational purposes. In this directory I have just two files:

      - [mydev.clj](https://github.com/karimarttila/clojure/blob/master/webstore-demo/simple-server/dev-src/mydev.clj): auxiliary functions to start/stop application state, change configuration during development, calling APIs for experimental testing etc.
      - [myscratch.clj](https://github.com/karimarttila/clojure/blob/master/webstore-demo/simple-server/dev-src/myscratch.clj): scratch file. This file is pure unstructured mind flow. The idea of this file is what Stuart Halloway is talking about in the above mentioned presentation: do not write code in the REPL editor but in a scratch file. So, in this file I experimented various things when developing the application - take a look to have an idea what I was thinking about when developing the application.

Then in my scratch file I had various short Clojure code snippets to restart the application state and test something quickly, example:

```clojure
(in-ns 'simpleserver.webserver.server)
@server
(start-web-server (get-in ss-config/config [:server :port]))
(do (require 'mydev) (mydev/curl-get "/info"))
(stop-web-server)
```

I.e. Jump into the right namespace, check the server status, start the server, curl one api and stop the server.

## You Can Do It without Application State Management Libraries

I realized that for simple application like this exercise you don't actually need some application state management library (like Componen, Mount or Integrant). And personally I also realized that it is better to learn to compile your Clojure code in those three categories (individual S expression, def and defn top forms and the whole namespace) when you change something than just blindly "refresh all namespaces and rely some application state management library dependency graph magic to do it for you so that you don't need to fully understand what actually happened". Well, this is my personal feeling and there might be reasons for more complex applications to use some real application state management library - let's see when I have a chance to do something more complex in Clojure hopefully in the near future. So, my recommendation is first to try to manage without any application state management library and try to understand how to compile and load certain clojure constructs. I watched Eric Normand excellent [REPL Driven Development](https://purelyfunctional.tv/courses/repl-driven-development-in-clojure/) course and at the end of the course Eric says that he doesn't use any application state management libraries or "refresh all" workflows which was actually very releaving to hear since I was a bit concerned if I just somehow didn't "get" how to use these state management libraries. BTW. If you are learning Clojure or you have already done quite a bit Clojure programming but want to learn more effective ways for your Clojure workflow I highly recommend Eric Normand's courses in [PurelyFunctional.tv](https://purelyfunctional.tv/) (disclaimer: this is not a paid advertisement - I'm a subscriber and I just feel that I have personally learned enormously watching Eric's courses). There are a lot of excellent Clojure books that emphasize Clojure programming and idioms but it is a totally different feeling to watch how a real Clojure guru works with Clojure code and at the same time explains the rationale what he is doing. So, I thank Eric for all the stuff he has learned me this far and I definitely watch the rest of his courses as well.


## Editing Clojure Code Efficiently

I have configured my Ubuntu key map so that I use Caps Lock key as a special key with other keys, e.g. Caps Lock with i,j,k,l keys are the arrow keys etc. This way I can keep my hands in the "asdf" and "ölkj" positions all the time when writing code. I use mostly Emacs key mapping with some of my own tweaking in IntelliJ IDEA + Cursive so that it is fast to navigate from one window to another, jump to the namespace I'm editing, compile S expressions and top level forms (defs and defns) and the whole namespace. I realized that with good productivity editor configurations and a good workflow + understanding how Clojure code gets compiled and loaded you can be quite productive using a very simple workflow: try code in the REPL scratch editor file, when you are content with the code, move the code to the actual Clojure namespace file, compile that section (top level form or the whole namespace), go back to scratch file, try calling that code in that namespace etc. And all this without ever leaving your hands from the standard "asdf"+"jklö" positions (it is also beneficial to learn to type the so called "ten finger system"). An example from my Linux X11 configuration:

```
    key <AC06> { [  h,  H,  Home,  ...
    key <AC07> { [  j,  J,  Left,  ...
    key <AC08> { [  k,  K,  Down,  ...
    key <AC09> { [  l,  L,  Right, ...
    key <AC10> { [  odiaeresis,  Odiaeresis,  End, ...
```

One great productivity trick is to edit S expressions as entitites. You should learn how to use "slurping" and "barfing" and other way to move S expressions efectively in your code. E.g. I already mentioned that I use Emacs key binding in IntelliJ IDEA (since Emacs is my favorite editor in headless environments). Emacs uses <ctrl>-k to delete all characters from the cursor to the end of line, and actually moves the string to the "yank area" from with you can "yank" the string to a new position by <ctrl>-y. I created a shortcut key <shift><ctrl>-k to delete the S expression next to cursor and move the S expression to the yank area, from which I can yank the S expression to a new place. I use this <shift><ctlr>-k with slurping and barfing all the time when editing Clojure code - it really makes editing Clojure code in actual source files and REPL scratch editor file a breeze.

I tried to make slurping and barfing as "natural" and "intuitive" to my keyboard practices and configuration as possible. Since I use the i,j,k,l characters for arrow keys (up, left, down, right) I found it natural to have the following configuration for slurping/barfing:

```elisp
     (define-key paredit-mode-map (kbd "C-M-j")  'paredit-backward-slurp-sexp)
     (define-key paredit-mode-map (kbd "M-<right>") 'paredit-forward-slurp-sexp)
     (define-key paredit-mode-map (kbd "C-M-l")  'paredit-backward-barf-sexp)
     (define-key paredit-mode-map (kbd "M-<left>")  'paredit-forward-barf-sexp)
```

Example: Slurp forward is using little finger in Caps-lock (which is Alt-Gr in my Linux X11 configuration) + thumb in Alt key (M) and then hitting "l" key with right ring finger - I feel this is natural since Caps-lock + l is mapped to "right", so: I'm slurping to the "right" direction. 

You can use your imagination what kind of small optimizations to use with your keymapping configurations. I studied a few years classical guitar and the teacher always emphasized economy when moving fingers. I have tried to follow the same economical principles with my Clojure keymappings. Example. I realized that I often set REPL to a certain namespace and then load the namespace to REPL - therefore it is economically feasible to have those key strokes near to each other: M-å and M-ä. One note regarding these scandinavian characters (my native language is Finnish). We have in the Finnish keyboards three so called umlaut characters: å, ä and ö. These characters don't have a native Emacs mappings, of course, so it is feasible to use them with Meta (Alt) and Control characters (so you don't need "double characters like C-c + C-k). Below you can see the hotkeys that I use often with my REPL interaction when programming Clojure:

```elisp
     (define-key cider-mode-map (kbd "M-l")  'cider-eval-last-sexp)
     (define-key cider-mode-map (kbd "M-ö")  'cider-eval-defun-at-point)
     (define-key cider-mode-map (kbd "M-å")  'cider-repl-set-ns)
     (define-key cider-mode-map (kbd "M-ä")  'cider-load-buffer)
     (define-key cider-mode-map (kbd "C-å")  'cider-test-run-ns-tests)
     (define-key cider-mode-map (kbd "C-ä")  'cider-test-run-test) 
```



## Using IntelliJ IDEA + Cursive and Emacs + Cider Interchangeably

I used IntelliJ IDEA + Cursive plugin when implementing this Clojure exercise but just for curiosity I wanted to try how it feels like to use [Emacs](TODO) and [Cider](TODO). The experience was quite pleasant. I managed to configure Emacs with the same theme I use with IntelliJ ([leuven](TODO) - mostly the same colors for the same syntactic/semantic entities) and the same favorite hotkeys to compile code regarding one S-expression or the whole namespace, run all tests in the namespace or just the test under cursor etc. It took some time and some googling regarding Emacs [elisp](TODO) but finally I was pretty satisfied: now I can quite effortlessly use either IntelliJ IDEA + Cursive or Emacs + Cider when developing Clojure code. 

Emacs with various helpfull packages like [company](TODO), [projectile](TODO), [clojure-mode](TODO), [cider](TODO), [eldoc-mode](TODO) turns Emacs to quite a powerfull integrated development environment for Clojure.

TODO: Explain how to start with Cider...


## Rich Comments

This is a trick I learned from one of Stuart Halloway's excellent videos. Add at the end of your Clojure (production) file a "rich comment" which demonstrates how to use the entities defined in that namespace. Example from: [domain_single_node.clj](https://github.com/karimarttila/clojure/blob/master/webstore-demo/simple-server/src/simpleserver/domain/domain_single_node.clj):

```Clojure
(comment
  (-get-raw-products 1)
  )
```
I.e. a ```comment``` S expression defines valid Clojure code that gets parsed *but not evaluated*. This way the code doesn't have any effect in production but during development it provides a nice way to give examples how to use entities in your Clojure code and also quickly evaluate the S expressions inside the commment block (efficiently and quickly using you Clojure editor hot keys, of course).


## Debugger

You don't need debugger with Clojure. :-) There is a debugger in Cursive and I only once tried that it works. If you want to learn good debugging practices in Clojure you need to learn to use the REPL efficiently. Good resources are the above mentioned [REPL Driven Development](https://purelyfunctional.tv/courses/repl-driven-development-in-clojure/) course and [Chicago Clojure - 2017-06-21 - Stuart Halloway on Repl Driven Development](https://vimeo.com/223309989) video. E.g. in that video Stuart shows how to implement a simple breakpoint using Cursive - i.e. create your own debugger!


# Logging

I used [Logback](http://logback.qos.ch/). I tried to log all function entries and exits (in debug level) just for an exercise - e.g. nice to see in REPL the function entries/exits. If this were a real production system one could easily configure logging to be much less intrusive.


# Linting

I used [clj-kondo](https://github.com/borkdude/clj-kondo) as a linter. There is a nice instruction [how to use clj-kondo with IntelliJ IDEA](https://github.com/borkdude/clj-kondo/blob/master/doc/editor-integration.md). With the IntelliJ integration clj-kondo is a really good tool you should use with IntelliJ + Cursive. There are good instructions also for [Emacs integration](https://github.com/borkdude/flycheck-clj-kondo). I tried clj-kondo also with Emacs and it was pretty easy to install and use.



# Local DynamoDB Instance

TO-BE-DONE: I'll implement the DynamoDB version later.


# IntelliJ IDEA / Cursive Run Configuration

I have a simple Clojure REPL configuration in IntelliJ IDEA / Cursive which uses deps.edn with profiles: ```dev-src,env-dev-single-node```, i.e. I use the dev-src profile which adds the directory dev-src (mydev.clj and the scratch file myscratch.clj) to the sources path. I did the development using the single-node profile. I'll create the AWS DynamoDB version later in which I'm going to need another AWS related profile, of course.


# Unit Testing

To run the unit tests in command line use: [run-tests.sh](https://github.com/karimarttila/clojure/blob/master/webstore-demo/simple-server/run-tests.sh), example:

```bash
./run-tests.sh env-dev-single-node
```

Starting the unit tests in command line takes some time since Clojure needs to boot a new JVM instance. I ran unit tests in command line usually only once per coding session: before commiting the code to Git. You seldom need to run the unit tests in command line since you have a REPL integration in your editor and you have a running REPL in your editor at all times when you are programming new Clojure code. So, you usually create new code and experiment with the code in your scratch file sending forms for evaluation to REPL. When you are happy with the functionality you move the production part to src tree and the test part to test tree. And then run the unit tests in the test tree with your hot keys by sending the tests for evaluation to a running REPL session (i.e. no JVM boot). 

# Building Fat Jar and Running It

Use: ```./build-jar.sh env-dev-single-node ``` to build the fat jar with the single-node profile. 

Use: ```run.jar``` to run the fat jar. You can override the profile values using two environment variables, example: ```SS_PORT=6161 SS_CONFIG_FILE=misc-conf/config.edn ./run-jar.sh```


# Next Steps

Next steps with this exercise are:

- Implement the [AWS DynamoDB](https://aws.amazon.com/dynamodb) version. I already have a configuration mechanism for this in domain, session and user namespaces.
- Implement request/response data validation using Metosin [Malli](https://github.com/metosin/malli) library.


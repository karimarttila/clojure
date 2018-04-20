# Clojure Ring / ClojureScript Reagent Demonstration


## Table of Contents

  * [Table of Contents](#table-of-contents)
  * [Introduction](#introduction)
  * [Rationale for Creating the Demonstration](#rationale-for-creating-the-demonstration)


## Introduction

The demonstration has two parts:

1. **Simple Server** implemented using [Clojure](https://clojure.org/) and [Ring](https://github.com/ring-clojure).
2. **Simple Frontend** implemented using [ClojureScript](https://clojurescript.org/) and [Reagent](https://reagent-project.github.io/).

See the respective subdirectories for Simple Frontend and Simple Server (you can find README.md files in subdirectories which give more detailed instructions how to run frontend and server and some experiences and lessons learned while developing them).

## Rationale for Creating the Demonstration

The rationale to create this demonstration was to learn how to use ClojureScript to implement a [Single Page Application](https://en.wikipedia.org/wiki/Single-page_application) (SPA). I have previously implemented one production SPA using [Angular](https://angular.io/). Now I wanted to learn to use the excellent Clojure language to implement SPAs and compare my experiences to use Javascript / ClojureScript and Angular / React (Reagent) implementing SPAs. In [A Real-World Comparison of Front-End Frameworks with Benchmarks (2018 update)](https://medium.freecodecamp.org/a-real-world-comparison-of-front-end-frameworks-with-benchmarks-2018-update-e5760fb4a962) article  ClojureScript won in the Lines of Code category (and didn't do that bad in other categories as well). So, learning ClojureScript could be a good addition to my skill set. 

Another reason to create this demonstration was also to deepen my Clojure / Ring / Compojure skills to implement a more functional server with Web services APIs, authentication, JSON web token etc. And of course learn how to integrate the ClojureScript frontend to the Clojure backend and how to do efficient development in both sides.

## Conclusions

I must say that I really enjoyed implementing both the frontend and server side of this demonstration using ClojureScript and Clojure. Clojure is really powerful and concise language and REPL makes server development a real breeze. 

Using the same language to implement the frontend was also really nice. You can use the same data structures and other language primitives to process the data returned from the server in the frontend side. Using Reagent was also easy. An old backend developer educated himself from zero to hero frontend developer in a few days. :-)

BTW. I wrote a blog post in [my Medium publication](https://medium.com/@kari.marttila) about the experiences when implementing this demonstration. See article: "Become a Full Stack Developer with Clojure and ClojureScript!"


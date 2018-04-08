# Simple Server

## Introduction

Simple Server serves as a backend server for the Simple Frontend.


## Technical Description

Simple Servers is implemented using [Clojure](https://clojure.org/) and [Ring](https://github.com/ring-clojure).

## Clojure Development

### IntelliJ IDEA / Cursive

If you are using IntelliJ IDEA with Cursive plugin you can configure REPL with properties:
- Profiles: +log-dev
- Environment: SIMPLESERVER_CONFIG_FILE=resources/simpleserver.properties

### Command Line

Command line: 

```bash
SIMPLESERVER_CONFIG_FILE=resources/simpleserver.properties lein with-profile +log-dev ring server-headless
```

### Hot Code Reloading

Ring starts the server in hot code reloading mode which is pretty nice when developing the backend application - you can start your server using the command given above and just make code changes and test the server APIs using Curl without restarting the server.

When you want to create the production version follow [Ring Setup for Production](https://github.com/ring-clojure/ring/wiki/Setup-for-production) instructions.

### Connecting REPL to Running Ring Server

#### The Hard Way

I added this hard way just as a curiosity. You should use the easy way I describe below since hot code reload works only with the easy way. :-)

You can connect Clojure REPL to a running Ring server using this scenario:

- Start REPL:
```bash
SIMPLESERVER_CONFIG_FILE=resources/simpleserver.properties lein with-profile +log-dev repl
```

- After the REPL has started it tells that nREPL server is listening in some port, e.g.: 

```
nrepl://127.0.0.1:51954
```

- In the previous REPL start Jetty for the web server handler:
```
(use 'ring.adapter.jetty)
(run-jetty simpleserver.webserver.server/web-server {:port 3000})
```

- Ok. Now you have the first REPL running the Ring web server.
- Now start another REPL and connect it to the previous NREPL port:

```bash
lein repl :connect localhost:51954
```

- In this second REPL you can now explore an Clojure function or data structure. Example:

```
simpleserver.core=> (count (vals @simpleserver.userdb.users/users))
3
```

- In console using curl send a POST to the Ring server to add a new user:

```bash
curl -H "Content-Type: application/json" -X POST -d '{"first-name":"Jamppa", "last-name": "Tuominen", "email": "jamppa.tuominen@tieto.com", "password":"123"}' http://localhost:3000/sign-in
```

- Now count the users again:

```
simpleserver.core=> (count (vals @simpleserver.userdb.users/users))
4
```

The issue using this scenario is that hot code reload is not working. 

#### The Easy Way

I added the following nrepl configuration to the ring configuration (in project.clj):

```clojure
:nrepl {:start? true :port 55444}
```

Now you can start the server using command:

```bash
SIMPLESERVER_CONFIG_FILE=resources/simpleserver.properties lein with-profile +log-dev ring server-headless
```

... and enjoy both connecting a REPL to the given nrepl port:

```bash
lein repl :connect localhost:55444
```

... and hot code reload.

See instructions in [lein-ring documentation](https://github.com/weavejester/lein-ring).


### Static Code Analysis

You can use [Eastwood](https://github.com/jonase/eastwood) for static code analysis. Add Eastwood plugin to your home profile as instructed in Eastwood documentation. Then give command:

```
lein eastwood
```

Other useful tools in blog article [The state of code quality tools in Clojure](https://blog.jeaye.com/2017/08/31/clojure-code-quality/).



### CORS Issues

I had to spend quite a lot of time before I got the [CORS](https://en.wikipedia.org/wiki/Cross-origin_resource_sharing) configurations done properly:

#### Simple Server

In the backend side I use [ring-cors](https://github.com/r0man/ring-cors) library to configure the CORS related headers:

```clojure
  (wrap-cors routes :access-control-allow-origin [#".*"]
             :access-control-allow-headers ["Content-Type"]
             :access-control-allow-methods [:get :put :post :delete :options])
```

The reason why I had to spend such a long time with this is that I first didn't realize that wrap-cors was not working with (ri-defaults/wrap-defaults ri-defaults/api-defaults) - I need to figure out later why this is so.

#### Simple Frontend

Now that you have the CORS configurations done in the server side, you can post the form values to server using [cljs-ajax](https://github.com/JulianBirch/cljs-ajax) library:


```clojurescript
    (let [response (a-core/POST url
        {:format          :json
         :params          data
         :response-format :json
         :headers         {"Accept" "application/json"
                                    "Content-Type" "application/json"
                          }
...                          
```

#### Using Remote REPL to Debug CORS Issues

I first forgot the ":format :json" part of the request. This also puzzled me quite a lot since the server side POST processing was working just fine when I tested the POST interface with [curl](http://manpages.ubuntu.com/manpages/trusty/man1/curl.1.html) or [Postman](https://www.getpostman.com/). Then I used the power of Lisp and added a simple debugging trace to server side code:


```clojure
(def my-body (atom nil))

(defn -reset-body
  [body]
  (reset! my-body body))

...
(defn -sign-in
  [req]
  (log/trace "ENTER -sign-in")
  (log/trace (str "req: " req))
  (let [body (:body req)
        dummy (-reset-body body)
...
```

... i.e. I store the body to an atom in the POST handler.

Then I connect a remote REPL to the running application as described above (the Easy Way). I sent a request using Postman and check the atom value in remote REPL:

```bash
user=> @simpleserver.webserver.server/my-body
{:first-name "Jamppa", :last-name "Tuominen", :email "jamppa.tuominen@tieto.com", :password "123"}
user=> (type @simpleserver.webserver.server/my-body)
clojure.lang.PersistentArrayMap
```

... looking good. Now send the post in ClojureScript Simple Frontend application (without the ":format :json" part of the request):

```bash
user=> @simpleserver.webserver.server/my-body
("^ " "~:first-name" "k" "~:last-name" "k" "~:email" "1@com.foo" "~:password" "k")
user=> (type @simpleserver.webserver.server/my-body)
clojure.lang.LazySeq
```

... what the heck? - says the developer. But it was an easy way to debug a running application and find out where the problem lies.

Remote REPL really is a powerful way to debug your running application.



## Building for Production

TODO

```
TODO

```

# Simple Server

## Table of Contents

  * [Table of Contents](#table-of-contents)
  * [Introduction](#introduction)
  * [Technical Description](#technical-description)
  * [Clojure Development](#clojure-development)
     * [IntelliJ IDEA / Cursive](#intellij-idea--cursive)
     * [Command Line](#command-line)
     * [Hot Code Reloading](#hot-code-reloading)
     * [Connecting REPL to Running Ring Server](#connecting-repl-to-running-ring-server)
        * [The Hard Way](#the-hard-way)
        * [The Easy Way](#the-easy-way)
        * [Connect to Remote REPL using Cursive REPL](#connect-to-remote-repl-using-cursive-repl)
     * [Static Code Analysis](#static-code-analysis)
     * [CORS Issues](#cors-issues)
        * [Simple Server](#simple-server-1)
        * [Simple Frontend](#simple-frontend)
        * [Using Remote REPL to Debug CORS Issues](#using-remote-repl-to-debug-cors-issues)
     * [Session Handling](#session-handling)
  * [Building for Production](#building-for-production)



## Introduction

Simple Server serves as a backend server for the Simple Frontend.

I also wrote a bit more concise summary in my [Medium blog](https://medium.com/@kari.marttila/become-a-full-stack-developer-with-clojure-and-clojurescript-c58c93479294) compared to the longer text you can find here in this readme.md.



## Technical Description

Simple Server is implemented using [Clojure](https://clojure.org/) and [Ring](https://github.com/ring-clojure).

## Clojure Development

### IntelliJ IDEA / Cursive

If you are using IntelliJ IDEA with Cursive plugin you can configure REPL with properties:
- Profiles: +log-dev
- Environment: SIMPLESERVER_CONFIG_FILE=resources/simpleserver.properties

### Command Line

Start server in command line: 

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
(run-jetty simpleserver.webserver.server/web-server {:port 3045})
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
curl -H "Content-Type: application/json" -X POST -d '{"first-name":"Jamppa", "last-name": "Tuominen", "email": "jamppa.tuominen@tieto.com", "password":"123"}' http://localhost:3045/sign-in
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


#### Connect to Remote REPL using Cursive REPL

Very simple: Just create a remote REPL configuration with hostname: localhost, and port 55444.


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
("^ " "~:first-name" "Jamppa" "~:last-name" "Tuominen" "~:email" "jamppa.1.tuominen@tieto.com" "~:password" "foo")
user=> (type @simpleserver.webserver.server/my-body)
clojure.lang.LazySeq
```

... what the heck? - says the developer. But it was an easy way to debug a running application and find out where the problem lies (the ":format :json" part of the ClojureScript POST request missing).

Remote REPL really is a powerful way to debug your running application.

### Session Handling

In the backend side (Simple Server) I use the Clojure [buddy](https://github.com/funcool/buddy) library to create the [JSON Web Token](https://en.wikipedia.org/wiki/JSON_Web_Token) which is then passed to the Simple Frontend which needs to add the token to the http Authorization header for all API calls that needs authorization. Simple server then checks the validity of the session token (i.e. the token has not expired and the server has actually created the token). Internally the session is stored in the Simple Server in an atom in the session namespace. I could have used other buddy services to automate REST API authorization but I wanted to make the session handling more transparent for learning purposes and therefore handled the token storing / validation myself.

BTW. Using local REPL it is very easy to validate that the token handling works as expected, e.g.  (first set the json-web-token-expiration-as-seconds property in the simpleserver.properties file to some small number (e.g. 10 (seconds) so that you are able to test token expiration):

```
;; #1.
(do (require '[clojure.tools.namespace.repl :refer [refresh]]) (refresh))
:reloading ()
=> :ok
Loading src/simpleserver/webserver/session.clj... done
;; #2.
@my-sessions
=> #{}
;; #3.
(def my-good-token (create-json-web-token "kari"))
=> #'simpleserver.webserver.session/my-good-token
;; #4.
@my-sessions
=> #{"eyJhbGciOiJIUzI1NiJ9.eyJlbWFpbCI6ImthcmkiLCJleHAiOjE1MjM4Njk5NDJ9.W-bmUOt1b_jM1pv3KAjATsNKJqYE7jjTLwm6XM_FpTQ"}
;; #5.
(validate-token my-good-token)
=> {:email "kari", :exp 1523869942}
@my-sessions
=> #{"eyJhbGciOiJIUzI1NiJ9.eyJlbWFpbCI6ImthcmkiLCJleHAiOjE1MjM4Njk5NDJ9.W-bmUOt1b_jM1pv3KAjATsNKJqYE7jjTLwm6XM_FpTQ"}
;; #6.
(validate-token my-good-token)
2018-04-16 12:12:29 DE [nREPL-worker-8] TRACE simpleserver.webserver.session - Token is expired, removing it from my sessions and returnin nil: eyJhbGciOiJIUzI1NiJ9.eyJlbWFpbCI6ImthcmkiLCJleHAiOjE1MjM4Njk5NDJ9.W-bmUOt1b_jM1pv3KAjATsNKJqYE7jjTLwm6XM_FpTQ
=> nil
;; #7.
@my-sessions
=> #{}
;; #8.
(validate-token my-good-token)
=> nil
2018-04-16 12:12:36 DE [nREPL-worker-8] WARN  simpleserver.webserver.session - Token not found in my sessions - unknown token: eyJhbGciOiJIUzI1NiJ9.eyJlbWFpbCI6ImthcmkiLCJleHAiOjE1MjM4Njk5NDJ9.W-bmUOt1b_jM1pv3KAjATsNKJqYE7jjTLwm6XM_FpTQ
;; #9.
@my-sessions
=> #{}
;; #10. 
(def my-bad-token (buddy-jwt/sign {:email "bad"} my-hex-secret))
=> #'simpleserver.webserver.session/my-bad-token
;; #11.
@my-sessions
=> #{}
;; #12.
(validate-token my-bad-token)
=> nil
2018-04-16 12:18:40 DE [nREPL-worker-9] WARN  simpleserver.webserver.session - Token not found in my sessions - unknown token: eyJhbGciOiJIUzI1NiJ9.eyJlbWFpbCI6ImJhZCJ9.zm5xUy2vYF6-XGujPk_nsXplls8_xxEDHoVq98AJjZg
```

The numbers refer to the comments in the above REPL session:

1. First refresh the local REPL with all code changes and reload the namespace (to reset atom).
2. my-sessions atom set should be empty now.
3. Create a token using Simple Server API.
4. You should see the token now in my-sessions atom.
5. Test token validation - should return the decrypted token content.
6. Wait until token should be expired, then try validation again - should return nil and you should see the "Token is expired..." log.
7. my-sessions atom set should be empty again since validation removed expired token.
8. Try to validate the same token again. You should now see the first validation check that the session is unknown (not found in the sessions set). 
9. My sessions set should be empty still, of course.
10. Let's create a bad token outside the Simple Server API - token is not stored to Simple Server sessions set - it is created by a malicious party.
11. My sessions set should be empty still, of course.
12. Now try to validate the bad token using Simple Server API - Simple Server didn't create the token and rejects it.

Now that the actual application logic to validate token is ready, it is just a matter for the client to set the token to the http authorization header and in the Simple Server I parse the token from the http authorization header and pass the parsed token to the validation function.  You can test the process using the test scripts I provided in the scripts directory:

```
./post-sign-in.sh
{"email":"jamppa.jamppanen@foo.com","ret":"ok"}

./post-login.sh
{"ret":"ok","msg":"Credentials ok","json-web-token":"eyJhbGciOiJIUzI1NiJ9.eyJlbWFpbCI6ImphbXBwYS5qYW1wcGFuZW5AZm9vLmNvbSIsImV4cCI6MTUyMzg4NDExMn0.FiZ4rcterBqoEkCDxSOiddUurZ5pOaWhE-SiSMelxbo"}

... copy-paste the returned token to the get-product-groups call...
./get-product-groups.sh eyJhbGciOiJIUzI1NiJ9.eyJlbWFpbCI6ImphbXBwYS5qYW1wcGFuZW5AZm9vLmNvbSIsImV4cCI6MTUyMzg4NDExMn0.FiZ4rcterBqoEkCDxSOiddUurZ5pOaWhE-SiSMelxbo
...
{"ret":"ok","product-groups":{"1":"Books","2":"Movies"}}

... wait some time for the token to expire...
./get-product-groups.sh eyJhbGciOiJIUzI1NiJ9.eyJlbWFpbCI6ImphbXBwYS5qYW1wcGFuZW5AZm9vLmNvbSIsImV4cCI6MTUyMzg4NDExMn0.FiZ4rcterBqoEkCDxSOiddUurZ5pOaWhE-SiSMelxbo
...
{"ret":"failed","msg":"Given token is not valid"}

```

## Integration Testing

TODO: Create integration tests for API methods as in scripts directory.

## Building for Production

Run:

```bash
./build-distributable.sh
```

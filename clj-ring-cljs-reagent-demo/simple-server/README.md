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

```
SIMPLESERVER_CONFIG_FILE=resources/simpleserver.properties lein with-profile +log-dev ring server-headless
```

... and enjoy both connecting a REPL to the given nrepl port:

```
lein repl :connect localhost:55444
```

... and hot code reload.

See instructions in [lein-ring documentation](https://github.com/weavejester/lein-ring).



## Building for Production

TODO

```
TODO

```

# Simple Server

# Table of Contents
- [Simple Server](#simple-server)
- [Table of Contents](#table-of-contents)
- [Introduction](#introduction)
- [Technical Description](#technical-description)
- [Clojure Development](#clojure-development)
  - [IntelliJ IDEA / Cursive](#intellij-idea--cursive)
  - [Command Line](#command-line)
  - [Hot Code Reloading](#hot-code-reloading)
  - [Connecting REPL to Running Ring Server](#connecting-repl-to-running-ring-server)
    - [The Hard Way](#the-hard-way)
    - [The Easy Way](#the-easy-way)
    - [Connect to Ring App using Remote REPL in IDEA/Cursive](#connect-to-ring-app-using-remote-repl-in-ideacursive)
  - [Static Code Analysis](#static-code-analysis)
  - [CORS Issues](#cors-issues)
    - [Simple Server](#simple-server-1)
    - [Simple Frontend](#simple-frontend)
    - [Using Remote REPL to Debug CORS Issues](#using-remote-repl-to-debug-cors-issues)
  - [Session Handling](#session-handling)
- [Unit Testing](#unit-testing)
- [Building for Production](#building-for-production)
- [Simple Server Goes AWS - New Development Autumn 2018](#simple-server-goes-aws---new-development-autumn-2018)
  - [DynamoDB Docker Image](#dynamodb-docker-image)
  - [New Development Profiles: local-dynamodb and dynamodb-dev](#new-development-profiles-local-dynamodb-and-dynamodb-dev)
  - [Static Code Analysis and Test Coverage](#static-code-analysis-and-test-coverage)
- [Simple Server Goes Azure - New Development Winter 2018/2019](#simple-server-goes-azure---new-development-winter-20182019)
  - [New Development Profiles: local-table and azure-table-storage-dev](#new-development-profiles-local-table-and-azure-table-storage-dev)
  - [Local Azurite Table Storage Is Not Working Properly](#local-azurite-table-storage-is-not-working-properly)
  - [Some Clojure/Java Interop Observations](#some-clojurejava-interop-observations)
  - [Azure Storage Explorer](#azure-storage-explorer)


# Introduction

Simple Server serves as a backend server for the Simple Frontend.

I also wrote a bit more concise summary in my [Medium blog](https://medium.com/@kari.marttila/become-a-full-stack-developer-with-clojure-and-clojurescript-c58c93479294) compared to the longer text you can find here in this readme.md.



# Technical Description

Simple Server is implemented using [Clojure](https://clojure.org/) and [Ring](https://github.com/ring-clojure).

# Clojure Development

## IntelliJ IDEA / Cursive

If you are using IntelliJ IDEA with Cursive plugin you can configure REPL with properties:
- Profiles: +log-dev
- Environment: 
-- SIMPLESERVER_CONFIG_FILE=resources/simpleserver.properties
-- SS_ENV=single-node


## Command Line

Start server in command line: 

```bash
SIMPLESERVER_CONFIG_FILE=resources/simpleserver.properties lein with-profile +log-dev ring server-headless
```

## Hot Code Reloading

Ring starts the server in hot code reloading mode which is pretty nice when developing the backend application - you can start your server using the command given above and just make code changes and test the server APIs using Curl without restarting the server.

When you want to create the production version follow [Ring Setup for Production](https://github.com/ring-clojure/ring/wiki/Setup-for-production) instructions.

## Connecting REPL to Running Ring Server

### The Hard Way

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

### The Easy Way

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


### Connect to Ring App using Remote REPL in IDEA/Cursive

You can first create a IntelliJ IDEA / Cursive Leiningen Run Configuration:

- Edit Configurations
- "+" -> Leiningen
- Name: lein-ring-for-remote-repl
- Leiningen project: simple-server:1.0
- Arguments: with-profile +log-dev ring server-headless

Since you already have the nrepl configured in [project.clj](project.clj):

```clojure
  :ring {:handler simpleserver.webserver.server/web-server
         :init simpleserver.webserver.server/initialize-web-server
         :port 3045
         :nrepl {:start? true
                 :port 55444}}
```
You get a nREPL port open when you start this configuration in IDEA. Ok, now start "lein-ring-for-remote-repl".

Now create a new Remote REPL Run Configuration:

- Edit Configurations
- "+" -> Clojure REPL -> Remote
- Name: remote REPL 55444
- Host: localhost
- Port: 55444
- Context module: simple-server:1.0

Now start this "remote REPL 55444" Run Configuration as well.

Now you can call any function in remote REPL and the application reacts basically the same way as if you curled the app. E.g. in remote REPL:

```clojure
(simpleserver.domaindb.domain/get-product-groups)
;=> {"1" "Books", "2" "Movies"}
```

Cool, uh?


## Static Code Analysis

You can use [Eastwood](https://github.com/jonase/eastwood) for static code analysis. Add Eastwood plugin to your home profile as instructed in Eastwood documentation. Then give command:

```
lein eastwood
```

Other useful tools in blog article [The state of code quality tools in Clojure](https://blog.jeaye.com/2017/08/31/clojure-code-quality/).

NOTE: In autumn 2018 I one more static code analysis tool and test coverage tool, see chapter "Simple Server Goes AWS - New Development Autumn 2018".



## CORS Issues

I had to spend quite a lot of time before I got the [CORS](https://en.wikipedia.org/wiki/Cross-origin_resource_sharing) configurations done properly:

### Simple Server

In the backend side I use [ring-cors](https://github.com/r0man/ring-cors) library to configure the CORS related headers:

```clojure
  (wrap-cors routes :access-control-allow-origin [#".*"]
             :access-control-allow-headers ["Content-Type"]
             :access-control-allow-methods [:get :put :post :delete :options])
```

The reason why I had to spend such a long time with this is that I first didn't realize that wrap-cors was not working with (ri-defaults/wrap-defaults ri-defaults/api-defaults) - I need to figure out later why this is so.

### Simple Frontend

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

### Using Remote REPL to Debug CORS Issues

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

## Session Handling

In the backend side (Simple Server) I use the Clojure [buddy](https://github.com/funcool/buddy) library to create the [JSON Web Token](https://en.wikipedia.org/wiki/JSON_Web_Token) which is then passed to the Simple Frontend which needs to add the token to the http Authorization header for all API calls that needs authorization. Simple server then checks the validity of the session token (i.e. the token has not expired and the server has actually created the token). Internally the session is stored in the Simple Server in an atom in the session namespace (in autumn 2018 I added support for AWS DynamoDB, see chapter "Simple Server Goes AWS - New Development Autumn 2018"). I could have used other buddy services to automate REST API authorization but I wanted to make the session handling more transparent for learning purposes and therefore handled the token storing / validation myself.

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

# Unit Testing

To run the unit tests: ([run-tests.sh](https://github.com/karimarttila/clojure/blob/master/clj-ring-cljs-reagent-demo/simple-server/run-tests.sh))

```bash
./run-tests.sh
```



# Building for Production

Run:

```bash
./build-distributable.sh
```


# Simple Server Goes AWS - New Development Autumn 2018

After my [Five Languages](https://medium.com/@kari.marttila/five-languages-five-stories-1afd7b0b583f) project I was searching something new to learn. I decided to refresh my AWS skills a bit and change the Clojure Simple Server implementation making it stateless and keeping all data (web store product data, user data and session data) in [DynamoDB](https://aws.amazon.com/dynamodb/). Therefore I also had a nice excuse to learn how to use the [local DynamoDb Docker container](https://hub.docker.com/r/amazon/dynamodb-local/) version for development and also create some Terraform code which I haven't touch for a few month since in my corporate universe I'm using Azure and ARM at the moment. I'll later on [deploy Simple Server to AWS using EKS](https://github.com/karimarttila/aws/tree/master/simple-server-eks) so I could have a chance to deploy [Kubernetes](https://kubernetes.io/) configuration in the [AWS / Elastic Kubernetes Server](https://aws.amazon.com/eks/) (I have some [experience using Azure AKS](https://medium.com/@kari.marttila/running-azure-kubernetes-service-aks-882faad43f2c) - so it is also interesting to compare these services). I think I'll also try to [deploy Simple Server to AWS using Fargate](https://github.com/karimarttila/aws/tree/master/simple-server-fargate) to learn to use [Fargate](https://aws.amazon.com/fargate/) deployment model as well (and compare Fargate and EKS as container platforms. Maybe I later start another project "Simple Server Goes Azure", who knows.


## DynamoDB Docker Image

Get DynamoDb Docker Image:
```bash
docker pull amazon/dynamodb-local
```

Create a ```local-dynamodb``` aws profile. Then you are able to use aws cli with ```--endpoint-url http://localhost:8000``` endpoint which points to DynamoDB local Docker version listening in port 8000). Example:

```bash
AWS_PROFILE=local-dynamodb aws dynamodb create-table --endpoint-url http://localhost:8000 --table-name sseks-dev-session --attribute-definitions AttributeName=token,AttributeType=S --key-schema AttributeName=token,KeyType=HASH --provisioned-throughput ReadCapacityUnits=5,WriteCapacityUnits=5
```

There are scripts in [dynamodb](https://github.com/karimarttila/clojure/tree/master/clj-ring-cljs-reagent-demo/simple-server/docker/dynamodb) directory to create/describe/delete tables needed running Clojure Simple Server using ```local-dynamodb``` profile (which uses DynamoDB local Docker version). 


## New Development Profiles: local-dynamodb and dynamodb-dev

As explained in the previous chapter I use "local-dynamodb" profile for developing the DynamoDB version using local DynamoDB test instance running in a Docker container. The DynamoDB Docker container based development has a couple of cons: you don't have to pay for the actual DynamoDB ingress/egress while developing your API that stores/fetches data to/from DynamoDB, and development cycle is faster using the local DynamoDB Docker container than accessing every time the actual DynamoDB database.

I used a couple of Clojure mechanism that provide nice polymorphism: [multimethods](https://clojure.org/reference/multimethods) and [protocols](https://clojure.org/reference/protocols). Examples:
 
 - Multimethod: namespace [simpleserver.domaindb.domain-factory](https://github.com/karimarttila/clojure/blob/master/clj-ring-cljs-reagent-demo/simple-server/src/simpleserver/domaindb/domain_factory.clj) which provides the domain service entity which is needed for the domain protocol. The namespace provides one public function "create-domain" which calls the internal -m-create-domain multimethod which dispatches based on the environment variable "ss-env" (our profiles: single-node, local-dynamodb...) and returns the domain entity for that profile. 
 - Protocol: namespace [simpleserver.domaindb.domain-service-interface](https://github.com/karimarttila/clojure/blob/master/clj-ring-cljs-reagent-demo/simple-server/src/simpleserver/domaindb/domain_service_interface.clj) which is the actual domain interface (DomainServiceInterface) - server uses domain functions using the protocol interface which hides the actual implementations which are provided in the profile based implementation namespaces, e.g. namespace [simpleserver.domaindb.domain-local-dynamodb](https://github.com/karimarttila/clojure/blob/master/clj-ring-cljs-reagent-demo/simple-server/src/simpleserver/domaindb/domain_dynamodb.clj) which provides the defrecord which implements the generic DomainServiceInterface protocol for the local-dynamodb profile and the aws-dynamodb-dev profile.
 
 The unit tests and server namespaces just ask the domain/user factories to give the entity and then call domaindb and usersdb layers using the generic protocols with the provided entity and know nothing about the actual implementations that are running under the hood.

 The dynamodb handling is the same for both local dynamodb instance and real aws dynamodb instance. You can test this as described below.

**Single-node**: (i.e. not using dynamodb but reading the data files to Clojure data structures - statefull service)

```bash
./run-tests-profile-single-node-logs.sh
```

**Local DynamoDB**: (i.e. DynamoDB running locally in a Docker container)

```bash
cd dynamodb
./run-local-dynamodb.sh
./create-tables.sh local-dynamodb dev
./import-all-tables.sh local-dynamodb dev
cd ..
./run-tests-profile-local-dynamodb.sh
```

**Real AWS DynamoDB**: (and finally hitting the real AWS DynamoDB with our tests)

```bash
cd dynamodb
./create-tables.sh <your-aws-profile> dev
./import-all-tables.sh <your-aws-profile> dev
cd ..
run-tests-profile-aws-dynamodb-dev.sh
```

## Static Code Analysis and Test Coverage

I created a utility script to run two Static code analysis tools ([eastwood](https://github.com/jonase/eastwood) and [nvd](https://github.com/rm-hull/lein-nvd)) and one Code Coverage tool ([cloverage](https://github.com/cloverage/cloverage)):

```bash
./run-static-code-analysis.sh
```


# Simple Server Goes Azure - New Development Winter 2018/2019

After my implementing the Simple Server to use DynamoDB I thought I'm going to create the AWS EKS infra for it. But then I thought that I'm most probably going to start a new Azure project in the beginning of year 2019 and since I just passed my first Azure certification [Architecting Microsoft Azure Solutions](https://www.youracclaim.com/badges/62494509-bf1c-4cd0-ad5a-0b82d1dacfac/linked_in_profile) I thought that it might be more urgent to gather some real-life Azure experience first. Therefore I decided to implement the Simple Server to use [Azure Table Storage service](https://azure.microsoft.com/en-us/services/storage/tables/) the same way I earlier implemented the Simple Server to use AWS DynamoDB - once the Simple Server Azure Table Storage implementation is ready I can use it as a test bed to create an Azure AKS Kubernetes configuration for the application to study how to use Terraform with Azure which I don't yet have any experience. 

I used [Azurite](https://github.com/arafato/azurite) as development database. You can read in [azure-table-storage] directory the related README.md file and also browse the scripts. There are scripts to create the needed tables to Azurite and real Azure Table Storage service and also import the initial data to those tables and also scan the tables for development purposes.

The application uses profile "local-table" when working with Azurite.


## New Development Profiles: local-table and azure-table-storage-dev

As explained in the previous chapter I use "local-table" profile for developing the Azure version using local Azurite table storage test instance running in a Node module. The local Azurite based development has a couple of cons: you don't have to pay for the actual Table Storage ingress/egress while developing your API that stores/fetches data to/from Azure Table Storage, and development cycle is faster using the local Azurite Table Storage than accessing every time the actual Azure Table Storage service.

In the DynamoDB version I already had implemented the dispatching between the original single-node version and the new DynamoDB version. I used the same dispatching model and just added the new Azure Table Storage multimethods and defrecords (with postfix "-table-storage" in the Clojure namespaces).

The unit tests and server namespaces work the same way with this new profile as the old profiles, see the more detailed explanations in the previous DynamoDB chapter.
 
The Table Storage handling is the same for both local Azurite Table Storage and real Azure Table Storage service. You can test this as described below.

**Single-node**: (i.e. not using dynamodb but reading the data files to Clojure data structures - statefull service)

```bash
./run-tests-profile-single-node-logs.sh
```

**Local DynamoDB**: (i.e. DynamoDB running locally in a Docker container)

```bash
cd dynamodb
./run-local-dynamodb.sh
./create-tables.sh local-dynamodb dev
./import-all-tables.sh local-dynamodb dev
cd ..
./run-tests-profile-local-dynamodb.sh
```

**Real AWS DynamoDB**: (and finally hitting the real AWS DynamoDB with our tests). NOTE: This is mean to run locally using your own AWS profile.

```bash
cd dynamodb
./create-tables.sh <your-aws-profile> dev
./import-all-tables.sh <your-aws-profile> dev
cd ..
run-tests-profile-aws-dynamodb-dev.sh
```

Later on I added a couple of new profiles for AWS:

**aws-dynamodb-assumed-role** 

This is a profile for testing the IAM role policies so that you assume the EKS worker node Instance profile role and run the application tests using the temporary credentials for this role. See more detailed instructions in Kubernetes EKS README.md. You can use the same ":aws-dynamodb-assumed-role" script but you have to give the temporary credentials as environmental variables, e.g.:

AWS_ACCESS_KEY_ID="XXXXXXXXXX";AWS_SECRET_ACCESS_KEY="XXXXXXXXXXXXX";AWS_SESSION_TOKEN="XXXXXXXXXXXXXXXXX" ./run-tests-profile-aws-dynamodb-dev.sh

 
**aws-dynamodb-aws-eks**: This is a profile in which no credentials are provided and the application runs in AWS EKS and uses the EKS worker node instance profile.



**Azurite local table storage**: (i.e. running local Azurite in Node module)

```bash
cd azure-table-storage
./create-tables.sh local-table dev
./import-all-tables.sh local-table dev
cd ..
source <your azure file where you have the AZURE_CONNECTION_STRING environmental variable that defines the connection string to your Azure Storage account where you have the tables that Simple Server uses to run tests against.
run-tests-profile-azure-table-storage-service.sh
```

**Real Azure Table Storage service**: (and finally hitting the real Azure Table Storage service)

```bash
cd azure-table-storage
./create-tables.sh <your-azure-profile> dev
./import-all-tables.sh <your-azure-profile> dev
cd ..
run-tests-profile-azure-table-storage-dev.sh   TODO
```




## Local Azurite Table Storage Is Not Working Properly

While developing the Azure Table Storage version I was puzzled that when searching all products both local Azurite and real Azure Table Storage Service returned the right result. But when searching a certain product with PartitionKey and RowKey the real Azure Table Storage Service returned the right product but Azurite returned empty list. For the exact same code calling the Table Storage Java API. My only conclusion was that unless I had made some error with my test data (highly unlikely - I used the same table-importer.py to load the test data to both tables, then used Storage Explorer to verify that the exact product I'm looking for is in both tables) the Azurite version is not working properly. From this point on I decided to ditch the Azurite and use the real service in development. A bit sad since I thought that Azurite would have been a nice tool for local table development. I googled the issue and found out that some other developers had complained same kind of issues with Azurite.


## Some Clojure/Java Interop Observations

I tried to find a native Clojure API for Azure Table Storage service but couldn't find one (Microsoft, how rude!). Luckily you can find a Java API for almost anything and there is a Java API for Azure Table Storage as well: [azure-storage-java](https://github.com/Azure/azure-storage-java). There were some drastic changes in version 10 and I couldn't find the Table Storage API there. I could find it in the previous v. 8.0.0, so I just git cloned the repo and checked out the tag v.8.0.0 - there were nice samples how to use the Java API. I first considered three options: #1. Use the REST API of the Table Storage (and not use the Java API at all), #2. Create a Java proxy for Clojure implementation, i.e. use the Java API to create a Java proxy for Table Storage handling and then use this simple proxy from Clojure, or #3. Just use natively the original Java API from Simple Server Clojure code. I decided to go for option #3 since it provided real challenges to see how well Clojure/Java interop actually works (i.e. I need to access the original a bit complex Table Storage Java API directly from Clojure code). At least the beginning was pretty easy. Just add the dependency [com.microsoft.azure/azure-storage "8.0.0"] to Leiningen project.clj file. Then in Clojure namespace import the Java classes you need when accessing Table Storage using this Java API, e.g. :

```clojure
(:import (com.microsoft.azure.storage.table CloudTableClient)
           (com.microsoft.azure.storage CloudStorageAccount))
```

Then start using the Java API from Clojure using the samples as an example, e.g.:

```clojure
(def table-config (ss-azure-utils/get-table-storage-config))
(def cloud-storage-account (CloudStorageAccount/parse (:endpoint table-config)))
(def table-client (. cloud-storage-account createCloudTableClient))
```

Load the file into REPL and you are able to test the Java API the first time with Azurite:

```clojure
(into [] (. table-client listTables))
; => ["sseksdevsession" "sseksdevusers" "sseksdevproductgroup" "sseksdevproduct"]
```

Holy Moly, it works! Unbelievable. Exploring the Java API with Clojure REPL was easier than using the Java API in a Java test bench! (not to speak of the crude Java 10 REPL). Using Clojure REPL it was a breeze to experiment with the Java API and once you understood how to do certain queries just copy-pasted those code snippets to the actual Clojure code.

The Azure Storage Java API requires Java entity classes that are extended from the com.microsoft.azure.storage.table.TableServiceEntity class. I created Clojure [gen-class](https://clojuredocs.org/clojure.core/gen-class) for each domain entity I needed. See directory [azuregenclass](https://github.com/karimarttila/clojure/tree/master/clj-ring-cljs-reagent-demo/simple-server/src/simpleserver/util/azuregenclass) for examples. Then using the generated Java class as entity class the Java interop is pretty simple. Compare the following code snippets which read the product groups from AWS DynamoDB using native Clojure API and from Azure Table Storage Service using Java API via Clojure/Java interop:

**AWS DynamoDB using Native Clojure API:**

```clojure
(let [my-env (environ/env :my-env)
          my-table (str "sseks-" my-env "-product-group")
          ret (dynamodb/scan (ss-aws-utils/get-dynamodb-config) :table-name my-table)
          items (ret :items)]
      (reduce
        (fn
          [mymap item]
          (conj mymap {(item :pgid) (item :pgname)}))
        {}
        items))
```

**Azure Table Storage Service using Java API via Clojure/Java interop:**

```clojure
(let [table-query (TableQuery/from simpleserver.util.azuregenclass.productgroup)
          productgroup-table (. table-client getTableReference "sseksdevproductgroup")
          raw-product-groups (. productgroup-table execute table-query)]
      (reduce
        (fn
          [mymap item]
          (conj mymap {(. item getPartitionKey) (. item getRowKey)}))
        {}
        raw-product-groups))
```

So, we provide the gen-class [simpleserver.util.azuregenclass.productgroup](https://github.com/karimarttila/clojure/blob/master/clj-ring-cljs-reagent-demo/simple-server/src/simpleserver/util/azuregenclass/productgroup.clj) class as Java entity class to TableQuery, get reference to the table and then call Java API's execute method - the API uses the Java entity class (productgroup) to populate the values read from the Table Storage table. Then we use the same exact reduce function as in the AWS side but this time we call the Java class's getters 'getPartitionKey' and 'getRowKey' to get the product group id and product group name values.  


**WARNINGS**. 

- While experimenting with REPL I did notice that in certain situations REPL didn't load the generated class but used some earlier version which caused quite a lot of confusion. After making changes to gen-classes I just stopped REPL, gave command 'lein clean' in terminal and started REPL again which took a bit of time (a bit of a nuisance). I have to experiment and google how to use REPL with gen-classes more effectively.
- I realized just by experimenting that the Azure Storage Table fields must start with capital letter or you are not able to read the fields using Java API.
 

## Azure Storage Explorer

Microsoft provides nice tool - [Azure Storage Explorer](https://azure.microsoft.com/en-us/features/storage-explorer/) for Windows, Mac and Linux. I use Linux myself and the tool worked nicely out of the box - just extract the tar.gz file to some library, start the tool and provide your storage account name and key - the tool connected automatically to the storage account and you can experiment with the Table Storage tables you created earlier using bash scripts. The tool also discovered my Azurite Node module running in default port automatically - nice. 
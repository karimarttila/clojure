# Clickstream Generator

## Introduction

I needed clickstream events for an internal POC (proof of concept) I implemented some time ago. Since I'm pretty exited about Clojure and wrote a couple of blog articles about Clojure in [my Medium Publication](https://medium.com/@kari.marttila) I thought that I publish the clickstream generator web application in my Github account as a Clojure example.

So, this is a simple clickstream generator to demonstrate how to create a simple web service server using [Clojure](https://clojure.org/).

## Technical Description

The clickstream data generator is a simple Clojure application. See the example properties file provided with the application (you can create other properties files yourself for various purposes). 

There are two parts in the application:

1. Clickstream generator. Generates two kinds of clicks based on the imaginary web store which sells books (product group 1) and movies (product group 2) (see click templates below). 
2. Web server for starting/stopping click generation.

The server sends the generated clickstream events to raw-url AWS Kinesis stream.

You can configure the click event stochastic model in csgen.properties file. 

## Click Templates

There are two kinds of clicks generated:

1. Product group clicks, e.g. "https://webstore.demo.com/api/group/2?userid=77>" => User 77 is browsing product titles in product group 2 list.

2. Product clicks, e.g. "https://webstore.demo.com/api/group/2/product/345?userid=77>" => User 77 is viewing details of product 345 (belonging to product group 2).


## Web server Implementation

The clickstream functionality is hosted in a web server implemented using [Compojure](https://github.com/weavejester/compojure) (routing library for Ring) and [Ring](http://ring-clojure.github.io/ring/) (Clojure web applications library).



## Instructions to Use the Application in Development

1. Create a properties file (see example in resources directory).
2. Start server giving AWS credentials and the properties file using the following environment variables: 

```bash
AWS_ACCESS_KEY_ID=<YOUR-ACCESS-KEY> AWS_SECRET_ACCESS_KEY=<YOUR-SECRET-KEY>  CS_CONFIG_FILE=resources/csgen.properties lein with-profile +log-dev ring server-headless
```

Another way would be to create a temporary AWS token using [AWS STS](https://docs.aws.amazon.com/STS/latest/APIReference/Welcome.html) and use it in your development machine.


## Testing

Since this application was part an internal throw-away POC I didn't implement that many tests. There is one test, however. I wanted to know that the product group probability works properly, so the thest creates 100.000 product groups and checks that the ratios are within a given delta.

## Creating Distributable and AMI

The POC I talked earlier was deployed to AWS, so for this reason the Clojure code has dependencies to [Amazonica](https://github.com/mcohen01/amazonica), a Clojure Amazon AWS api. 

Follow these instructions to create a distributable and Amazon Machine Image (AMI):

Create distributable:

```bash
build-distributable.sh
```

Create AMI:

```bash
AWS_PROFILE=<YOUR-AWS-PROFILE> ./build-ami.sh
```

NOTE: The Ansible Playbook has a quick hack to start the clickstream generator server using /etc/rc.local. In production we should create a real /etc/init.d service, of course.

NOTE also that I didn't comprise the Terraform AWS configuration related how to use the AMI in some AWS envrironment. 

Another way would to pack the clickstream generator as a Docker container and use AWS ECS / Fargate to deploy the container.



#!/bin/bash

# NOTE: You can call this script with environment variable (:ss-port) like:
# SS_PORT=7272 ./run-jar.sh

# NOTE: You can add the configuration path in the classpath as in this example.

MY_JAR_NAME=simple-server-standalone.jar

if [ $# -ne 1 ]
then
    echo "Usage: ./run-jar.sh <env:dev/prod>"
    echo "Example: ./run-jar.sh dev"
    exit 1
fi

MY_ENV=$1

case $MY_ENV in
  dev|prod)
       echo "Using $MY_ENV environment when starting server"
       ;;
  *)
       echo "Unknown choice: $MY_ENV"
       exit 2
       ;;
esac


java -cp target/$MY_JAR_NAME:resources/config/${MY_ENV} clojure.main -m simpleserver.core


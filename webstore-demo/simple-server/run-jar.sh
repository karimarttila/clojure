#!/bin/bash

# NOTE: You can call this script with environment variable (:ss-port) like:
# SS_PORT=7272 ./run-jar.sh

MY_JAR_NAME=simple-server-standalone.jar

java -cp target/$MY_JAR_NAME clojure.main -m simpleserver.core


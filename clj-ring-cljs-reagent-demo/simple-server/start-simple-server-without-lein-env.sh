#!/bin/bash

# First move .lein-env away so that you know environmental variables should work.
# You should also build the single-node version!

# First move the .lein-env file so that we are not using it.
mv .lein-env tmp/.

# Then start the server.

export SS_ENV="single-node"
export MY_ENV="dev"
export SIMPLESERVER_CONFIG_FILE="resources/simpleserver.properties"

echo $SS_ENV
echo $MY_ENV
echo $SIMPLESERVER_CONFIG_FILE
java -jar target/uberjar/simple-server-1.0-standalone.jar

# TODO: For some reason the MY_ENV needs to be before SS_ENV - why: investigate!
# SIMPLESERVER_CONFIG_FILE=resources/simpleserver.properties;MY_ENV=dev;SS_ENV=single-node java -jar target/uberjar/simple-server-1.0-standalone.jar

#!/bin/bash

# First move .lein-env away so that you know environmental variables should work.
# You should also build the single-node version!

mv .lein-env tmp/.
SIMPLESERVER_CONFIG_FILE=resources/simpleserver.properties;MY_ENV=dev;SS_ENV=single-node java -jar target/uberjar/simple-server-1.0-standalone.jar

#!/bin/bash

SIMPLESERVER_CONFIG_FILE=resources/simpleserver.properties lein clean
SIMPLESERVER_CONFIG_FILE=resources/simpleserver.properties lein with-profile +single-node,+log-dev ring uberjar

echo "Distributable ready."
echo "You can start the distributable as:"
echo " SIMPLESERVER_CONFIG_FILE=<config-file> java -jar <uberjar>"
echo "Example:"
echo " SIMPLESERVER_CONFIG_FILE=resources/simpleserver.properties java -jar target/uberjar/simple-server-1.0-standalone.jar"


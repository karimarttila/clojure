#!/bin/bash

lein clean
SIMPLESERVER_CONFIG_FILE=resources/simpleserver.properties lein with-profile +log-prod ring uberjar

echo "Distributable ready."
echo "You can start the distributable as:"
echo " SIMPLESERVER_CONFIG_FILE=<config-file> java -jar <uberjar>"
echo "Example:"
echo " SIMPLESERVER_CONFIG_FILE=resources/simpleserver.properties java -jar target/uberjar/simple-server-1.0-standalone.jar"


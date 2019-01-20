#!/bin/bash

if [[ -z "${SS_TABLE_PREFIX}" ]]; then
    echo "SS_TABLE_PREFIX not set"
    exit -1
fi

SIMPLESERVER_CONFIG_FILE=resources/simpleserver.properties lein clean
SIMPLESERVER_CONFIG_FILE=resources/simpleserver.properties lein with-profile +aws-dynamodb-eks,+log-dev ring uberjar

echo "Distributable ready."
echo "You can start the distributable as:"
echo " SIMPLESERVER_CONFIG_FILE=<config-file> java -jar <uberjar>"
echo "Example:"
echo " SIMPLESERVER_CONFIG_FILE=resources/simpleserver.properties java -jar target/uberjar/simple-server-1.0-standalone.jar"



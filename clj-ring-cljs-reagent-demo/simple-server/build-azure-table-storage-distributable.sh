#!/bin/bash

if [[ -z "${AZURE_CONNECTION_STRING}" ]]; then
    echo "Environmental variable AZURE_CONNECTION_STRING is not set"
    echo "Source it first using command:"
    echo "source ~/.azure/kari2ssaksdevtables-connectionstring.sh"
    exit -1
fi

SIMPLESERVER_CONFIG_FILE=resources/simpleserver.properties lein clean
SIMPLESERVER_CONFIG_FILE=resources/simpleserver.properties lein with-profile +azure-table-storage-dev,+log-dev ring uberjar

echo "Distributable ready."
echo "You can start the distributable as:"
echo " SIMPLESERVER_CONFIG_FILE=<config-file> java -jar <uberjar>"
echo "Example:"
echo " SIMPLESERVER_CONFIG_FILE=resources/simpleserver.properties java -jar target/uberjar/simple-server-1.0-standalone.jar"



#!/bin/bash

if [ $# -ne 1 ]
then
  echo "Usage: ./start-simple-server.sh <logging-mode>"
  echo "Example: ./start-simple-server.sh dev"
  exit 1
fi

MY_LOGGING_MODE=$1

if [ "$MY_LOGGING_MODE" == "dev" ] || [ "$MY_LOGGING_MODE" == "prod" ]
then
  MY_LOGBACK_CONFIGURATION_FILE="resources/logconfig/${MY_LOGGING_MODE}/logback.xml"
else
  echo "Unknown choice: $MY_LOGGING_MODE"
  exit 2
fi

SIMPLESERVER_CONFIG_FILE=resources/simpleserver.properties java -Dlogback.configurationFile=$MY_LOGBACK_CONFIGURATION_FILE -jar target/uberjar/simple-server-1.0-standalone.jar

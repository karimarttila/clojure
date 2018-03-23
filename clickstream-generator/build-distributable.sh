#!/bin/bash

CS_CONFIG_FILE=resources/csgen.properties lein with-profile +log-prod ring uberjar 

echo "Distributable ready."
echo "You can start the distributable as:"
echo " AWS_ACCESS_KEY_ID=<YOUR-ACCESS-KEY> AWS_SECRET_ACCESS_KEY=<YOUR-SECRET-KEY> CS_CONFIG_FILE=<config-file> java -jar <uberjar>"
echo "Example:"
echo " AWS_ACCESS_KEY_ID=<YOUR-ACCESS-KEY> AWS_SECRET_ACCESS_KEY=<YOUR-SECRET-KEY> CS_CONFIG_FILE=resources/csgen.properties java -jar target/uberjar/csgen-1.0-standalone.jar"


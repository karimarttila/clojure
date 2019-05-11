#!/bin/bash


if [ $# -ne 0 ]
then
    echo "Usage: ./build-jar.sh"
    echo "Example: ./build-jar.sh"
    exit 1
fi

MY_JAR_NAME=simple-server-standalone.jar

clj -A:depstar -m hf.depstar.uberjar target/$MY_JAR_NAME

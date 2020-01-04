#!/bin/bash


if [ $# -ne 1 ]
then
    echo "Usage: ./build-jar.sh <profile>"
    echo "Example: ./build-jar.sh env-dev-single-node"
    exit 1
fi

rm -rf target
#./run-tests.sh env-dev-single-node

MY_JAR_NAME=simple-server-standalone.jar
SS_PROFILE=$1
mkdir target

clojure -A:depstar:${SS_PROFILE} -m hf.depstar.uberjar target/$MY_JAR_NAME
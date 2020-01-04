#!/bin/bash


# You can override profile configuration by configuration given in SS_CONFIG_FILE:
# SS_CONFIG_FILE=misc-conf/config.edn ./run-jar.sh
# You can override server port by SS_PORT environment variable:
# SS_PORT=8888 ./run-jar.sh
# ... or combine them:
# SS_CONFIG_FILE=misc-conf/config.edn SS_PORT=8888 ./run-jar.sh

MY_JAR_NAME=simple-server-standalone.jar

if [ $# -ne 0 ]
then
    echo "Usage: ./run-jar.sh"
    echo "Example: ./run-jar.sh"
    exit 1
fi

java -cp target/simple-server-standalone.jar clojure.main -m simpleserver.core run-server
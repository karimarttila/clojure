#!/bin/bash


if [ $# -ne 1 ]
then
    echo "Usage: ./run-tests.sh <DB>"
    echo "DBs: csv, ddb"
    echo "Example: ./run-tests.sh local-ddb"
    exit 1
fi

MYDB=$1

if [[ "$MYDB" =~ ^(csv|ddb|postgres)$ ]]; then
    echo "Starting tests with $MYDB configuration..."
else
    echo "Unknown DB configuration: $MYDB, exiting..."
    exit 2
fi

SS_DB=$MYDB clojure -A:dev:test:common:backend -m kaocha.runner



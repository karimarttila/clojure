#!/bin/bash


if [ $# -ne 1 ]
then
    echo "Usage: ./run-tests.sh <configuration>"
    echo "Configurations: env-dev, env-dev-single-node, env-dev-local-dynamodb, env-dev-real-aws"
    echo "Example: ./run-tests.sh env-dev-single-node"
    exit 1
fi

MYENV=$1

clj -Atest-runner:${MYENV}

# For more examples how to run different tests, exclude some etc:
# https://github.com/cognitect-labs/test-runner


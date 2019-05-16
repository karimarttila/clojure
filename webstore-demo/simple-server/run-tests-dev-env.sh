#!/bin/bash


if [ $# -ne 0 ]
then
    echo "Usage: ./run-tests-dev-env.sh"
    echo "Example: ./run-tests-dev-env.sh"
    exit 1
fi

clj -Atest-runner:env-dev

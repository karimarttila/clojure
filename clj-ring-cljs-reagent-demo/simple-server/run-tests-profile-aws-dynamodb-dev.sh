#!/bin/bash

SIMPLESERVER_CONFIG_FILE=resources/simpleserver.properties lein with-profile +aws-dynamodb-dev,+log-prod test

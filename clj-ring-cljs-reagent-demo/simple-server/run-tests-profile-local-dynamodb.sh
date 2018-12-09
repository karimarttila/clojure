#!/bin/bash

SIMPLESERVER_CONFIG_FILE=resources/simpleserver.properties lein with-profile +local-dynamodb,+log-prod test

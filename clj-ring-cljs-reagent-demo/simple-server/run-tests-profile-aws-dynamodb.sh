#!/bin/bash

SIMPLESERVER_CONFIG_FILE=resources/simpleserver.properties;SS_TABLE_PREFIX=kari-sseks lein with-profile +aws-dynamodb,+log-dev test

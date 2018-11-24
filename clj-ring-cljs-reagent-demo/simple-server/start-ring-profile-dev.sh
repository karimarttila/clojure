#!/bin/bash


SIMPLESERVER_CONFIG_FILE=resources/simpleserver.properties lein with-profile +single-node,+log-dev ring server-headless

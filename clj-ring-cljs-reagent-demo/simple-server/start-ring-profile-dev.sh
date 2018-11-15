#!/bin/bash


SIMPLESERVER_CONFIG_FILE=resources/simpleserver.properties lein with-profile +log-dev ring server-headless

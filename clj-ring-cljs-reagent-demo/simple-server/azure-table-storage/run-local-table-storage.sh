#!/bin/bash

# NOTE: You can run the Azurite as a native node module or as a Docker container. When writing this 2018-12-13 the docker images was updated some 9 months ago, and azurite github was updated some 17 days earlier - I thought it is more viable to use the native node version since it is more up-to-date.

# See: https://github.com/Azure/Azurite

# Using Azurite as a native node module: **********************

# Azurite storage dir is where Azurite stores data.
AZURITE_STORAGE_DIR=azurite/store-dir

mkdir -p $AZURITE_STORAGE_DIR
azurite/node_modules/.bin/azurite-table -l $AZURITE_STORAGE_DIR
# Run blog, queue and table in the same node instance.
#azurite/node_modules/.bin/azurite -l $AZURITE_STORAGE_DIR

# Using Azurite as a Docker container: **********************

#docker run -d -e executable=table  -t -p 10002:10002 -v /path/to/folder:/opt/azurite/folder arafato/azurite

# Run blob, queue and table in the same container.
#docker run -d -t -p 10000:10000 -p 10001:10001 -p 10002:10002 -v /path/to/folder:/opt/azurite/folder arafato/azurite


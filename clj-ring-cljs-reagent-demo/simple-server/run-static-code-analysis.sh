#!/bin/bash

EASTWOOD_LOG_FILE=static-eastwood.log
NVD_LOG_FILE=static-nvd.log
CLOVERAGE_LOG_FILE=static-cloverage.log

echo "Storing results to:"
echo "Eastwood:  $EASTWOOD_LOG_FILE"
echo "Nvd:       target/nvd and in $NVD_LOG_FILE"
echo "Cloverage: target/cloverage and in $CLOVERAGE_LOG_FILE"

SIMPLESERVER_CONFIG_FILE=resources/simpleserver.properties lein with-profile +single-node,+log-dev eastwood '{:config-files ["eastwood-exclusions.clj"]}' | tee $EASTWOOD_LOG_FILE

SIMPLESERVER_CONFIG_FILE=resources/simpleserver.properties lein with-profile +single-node,+log-dev nvd check | tee $NVD_LOG_FILE

SIMPLESERVER_CONFIG_FILE=resources/simpleserver.properties lein with-profile +single-node,+log-dev cloverage | tee $CLOVERAGE_LOG_FILE


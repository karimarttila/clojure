#!/bin/bash

TRANSACTOR_DIR=/mnt/ssd2/local/datomic-pro-1.0.6202
TRANSACTOR_BIN=${TRANSACTOR_DIR}/bin/transactor
TRANSACTOR_PROPS=${TRANSACTOR_DIR}/dev-transactor-template.properties

$TRANSACTOR_BIN $TRANSACTOR_PROPS

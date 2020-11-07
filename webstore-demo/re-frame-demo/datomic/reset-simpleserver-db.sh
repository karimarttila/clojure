#!/bin/bash

THIS_DIR=$(pwd)
TRANSACTOR_DIR=/mnt/ssd2/local/datomic-pro-1.0.6202
pushd $THIS_DIR
cd $TRANSACTOR_DIR
pwd
sleep 2
bin/repl < $THIS_DIR/reset-simpleserver-db.clj
popd

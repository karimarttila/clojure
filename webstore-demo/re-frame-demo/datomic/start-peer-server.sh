#!/bin/bash

TRANSACTOR_DIR=/mnt/ssd2/local/datomic-pro-1.0.6202

${TRANSACTOR_DIR}/bin/run -m datomic.peer-server -h localhost -p 8998 -a myaccesskey,mysecret -d simpleserver,datomic:dev://localhost:4334/simpleserver

#!/bin/bash

TRANSACTOR_DIR=/mnt/ssd2/local/datomic-pro-1.0.6202

${TRANSACTOR_DIR}/bin/console -p 8080 simpleserver datomic:dev://localhost:4334/

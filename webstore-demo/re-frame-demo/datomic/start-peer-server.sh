#!/bin/bash

TRANSACTOR_DIR=/mnt/ssd2/local/datomic-pro-1.0.6202

# simpleserver and test_simpleserver are the actual database and test database used in the exercise.
# I have added sample databases hello and myseattle just for experimenting queries in my scratch namespace.
${TRANSACTOR_DIR}/bin/run -m datomic.peer-server -h localhost -p 8998 -a myaccesskey,mysecret \
                                                        -d simpleserver,datomic:dev://localhost:4334/simpleserver \
                                                        -d test_simpleserver,datomic:dev://localhost:4334/test_simpleserver \
                                                        -d hello,datomic:dev://localhost:4334/hello \
                                                        -d myseattle,datomic:dev://localhost:4334/myseattle

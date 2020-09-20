#/bin/bash

export POSTGRES_PASSWORD=simpleserver
export RUNNING_BB=TRUE
bb bb_postgres.clj

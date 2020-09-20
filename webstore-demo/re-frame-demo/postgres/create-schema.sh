#!/usr/bin/env bash

POSTGRES_PASSWORD=simpleserver psql --host localhost --port 5532 --username=simpleserver --dbname=simpleserver -a -f V1__create_tables.sql
POSTGRES_PASSWORD=simpleserver psql --host localhost --port 5532 --username=simpleserver --dbname=simpleserver_test -a -f V1__create_tables.sql


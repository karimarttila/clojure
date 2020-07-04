#!/bin/bash
set -e

psql -v ON_ERROR_STOP=1 --username "$POSTGRES_USER" <<-EOF

    CREATE DATABASE simpleserver;
    CREATE DATABASE simpleserver_test;
    CREATE USER simpleserver WITH PASSWORD 'simpleserver';
    GRANT ALL PRIVILEGES ON DATABASE simpleserver TO simpleserver;
    GRANT ALL PRIVILEGES ON DATABASE simpleserver_test TO simpleserver;

EOF
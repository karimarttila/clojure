#!/bin/bash
set -e

psql -v ON_ERROR_STOP=1 --username "$POSTGRES_USER" <<-EOF

    CREATE DATABASE simpleserver
      WITH LC_CTYPE='fi_FI.UTF-8' LC_COLLATE='fi_FI.UTF-8' TEMPLATE template0;
    CREATE DATABASE simpleserver_test
      WITH LC_CTYPE='fi_FI.UTF-8' LC_COLLATE='fi_FI.UTF-8' TEMPLATE template0;
    CREATE USER simpleserver WITH PASSWORD 'simpleserver';
    GRANT ALL PRIVILEGES ON DATABASE simpleserver TO simpleserver;
    GRANT ALL PRIVILEGES ON DATABASE simpleserver_test TO simpleserver;

EOF


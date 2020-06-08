@list:
   just --list

# TODO: just db which runs a docker-compose which starts both local-dynamodb and local-postgres

# Start dynamodb emulator
@dynamodb:
    cd dynamodb && ./run-docker-compose.sh

# Start backend repl.
@backend:
    clj -A:dev:scratch:test:common:backend -m nrepl.cmdline -i -C

# Start backend repl with my toolbox.
@backend-kari:
    clj -A:dev:scratch:test:common:backend:kari -m nrepl.cmdline -i -C

# Lint
@lint:
    clj -A:dev -m clj-kondo.main --lint src

# Test
@test db:
    ./run-tests.sh {{db}}


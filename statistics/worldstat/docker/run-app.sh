#!/usr/bin/env sh

set -e

export PROFILE=prod

# Replace the parent process (the run-app.sh script) with this command to make java process pid 1.
exec java \
    -server \
    -Xms300m \
    -Xmx300m \
    -cp /app/worldstat.jar clojure.main --report stderr -m worldstat.backend.main

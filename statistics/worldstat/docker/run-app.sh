#!/usr/bin/env sh

set -e

export PROFILE=prod

# Replace the parent process (the run-app.sh script) with this command to make java process pid 1.
# Memory limits are pretty harsh because of the Heroku free tier memory limit (512MB)
exec java \
    -server \
    -Xms180m \
    -Xmx250m \
    -Xss512k \
    -XX:+UseContainerSupport \
    -XX:CICompilerCount=2 \
    -cp /app/worldstat.jar clojure.main --report stderr -m worldstat.backend.main

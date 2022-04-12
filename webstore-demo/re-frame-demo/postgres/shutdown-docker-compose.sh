#!/usr/bin/env bash

echo "Shutting down..."
docker-compose -p ss-postgres -f docker-compose-setup-local-postgres.yml down

#!/usr/bin/env bash

echo "NOTE: Remember to destroy the container if running again!"
echo "Starting docker compose..."
docker-compose -p ss-postgres -f docker-compose-setup-local-postgres.yml up -d
sleep 5
echo "Creating Simple Server schemas..."
./create-schema.sh
sleep 1
echo "Loading data..."
./run-bb-load-data.sh
sleep 1
docker logs -f ss-postgres_postgres_1

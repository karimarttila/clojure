#!/usr/bin/env bash

docker-compose -p ss-postgres -f docker-compose-setup-local-postgres.yml up -d
sleep 5
./create-schema.sh
sleep 1
docker logs -f ss-postgres_postgres_1


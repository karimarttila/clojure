#!/usr/bin/env bash

docker-compose -p ss-postgres -f docker-compose-setup-local-postgres.yml up
sleep 5
./create-schema.sh

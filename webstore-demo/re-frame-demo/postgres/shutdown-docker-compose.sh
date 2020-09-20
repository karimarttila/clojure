#!/usr/bin/env bash

echo "Shutting down..."
docker-compose -f docker-compose-setup-local-postgres.yml down

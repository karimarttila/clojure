#!/usr/bin/env bash

rm -rf dev-resources
cp -r ../dev-resources .
docker build -f Dockerfile -t ss-uploader:0.1 .
docker-compose -p ss-dynamodb -f docker-compose-setup-local-ddb.yml up


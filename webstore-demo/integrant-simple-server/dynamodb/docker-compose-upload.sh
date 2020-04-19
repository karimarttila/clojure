#!/usr/bin/env bash

source venv3/bin/activate
# For some reason Dockerfile didn't install boto in requirements...
pip3 install -r requirements.txt
# first local_dynamodb is the aws profile, second is the host name in docker-compose-setup-local-ddb.yml
./create-tables.sh local-dynamodb ss dev local-dynamodb
./import-all-tables.sh local-dynamodb ss dev local-dynamodb

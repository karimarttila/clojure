#!/usr/bin/env bash

source venv3/bin/activate
# For some reason Dockerfile didn't install boto in requirements...
pip3 install -r requirements.txt
./create-tables.sh local-dynamodb ss test local-dynamodb
./create-tables.sh local-dynamodb ss dev local-dynamodb
# Test data tables are empty. But dev simulates the situation that we have prod data ready.
./import-all-tables.sh local-dynamodb ss dev local-dynamodb

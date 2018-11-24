#!/bin/bash

echo "Creating sseks-dev-session table ***************************************"

AWS_PROFILE=local-dynamodb aws dynamodb create-table --endpoint-url http://localhost:8000 --table-name sseks-dev-session --attribute-definitions AttributeName=token,AttributeType=S --key-schema AttributeName=token,KeyType=HASH --provisioned-throughput ReadCapacityUnits=5,WriteCapacityUnits=5

echo "Creating sseks-dev-users table ***************************************"

AWS_PROFILE=local-dynamodb aws dynamodb create-table --endpoint-url http://localhost:8000 --table-name sseks-dev-users --attribute-definitions AttributeName=userid,AttributeType=S --key-schema AttributeName=userid,KeyType=HASH --provisioned-throughput ReadCapacityUnits=5,WriteCapacityUnits=5

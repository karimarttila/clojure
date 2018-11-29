#!/bin/bash

echo "Creating sseks-dev-session table ***************************************"

AWS_PROFILE=local-dynamodb aws dynamodb create-table --endpoint-url http://localhost:8000 --table-name sseks-dev-session --attribute-definitions AttributeName=token,AttributeType=S --key-schema AttributeName=token,KeyType=HASH --provisioned-throughput ReadCapacityUnits=5,WriteCapacityUnits=5

echo "Creating sseks-dev-users table ***************************************"

# NOTE: You don't define the email, first-name, last-name, hashed-password since
# DynamoDB is schemaless (you just add rows with those fields).
AWS_PROFILE=local-dynamodb aws dynamodb create-table --endpoint-url http://localhost:8000 --table-name sseks-dev-users --attribute-definitions AttributeName=userid,AttributeType=S --key-schema AttributeName=userid,KeyType=HASH --provisioned-throughput ReadCapacityUnits=5,WriteCapacityUnits=5

AWS_PROFILE=local-dynamodb aws dynamodb create-table --endpoint-url http://localhost:8000 --table-name sseks-dev-product-group --attribute-definitions AttributeName=pgid,AttributeType=S --key-schema AttributeName=pgid,KeyType=HASH --provisioned-throughput ReadCapacityUnits=5,WriteCapacityUnits=5

AWS_PROFILE=local-dynamodb aws dynamodb create-table --endpoint-url http://localhost:8000 --table-name sseks-dev-product --attribute-definitions AttributeName=pgid,AttributeType=S AttributeName=pid,AttributeType=S --key-schema AttributeName=pgid,KeyType=HASH AttributeName=pid,KeyType=RANGE --provisioned-throughput ReadCapacityUnits=5,WriteCapacityUnits=5


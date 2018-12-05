#!/bin/bash

if [ $# -ne 2 ]
then
  echo "Usage: ./create-tables.sh <aws-profile> <env>"
  echo "Example: ./create-tables.sh local-dynamodb dev"
  exit 1
fi

MY_AWS_PROFILE=$1
MY_ENV=$2

if [ "$MY_AWS_PROFILE" == "local-dynamodb" ]; then
  MY_ENDPOINT="--endpoint-url http://localhost:8000"
else
  MY_ENDPOINT=""
fi

MY_SESSION_TABLE="sseks-${MY_ENV}-session"
MY_USERS_TABLE="sseks-${MY_ENV}-users"
MY_PRODUCT_GROUP_TABLE="sseks-${MY_ENV}-product-group"
MY_PRODUCT_TABLE="sseks-${MY_ENV}-product"

echo "************  Create tables  ************"
echo "Using AWS profile: $MY_AWS_PROFILE"

echo "Creating sseks-dev-session table ***************************************"

AWS_PROFILE=$MY_AWS_PROFILE aws dynamodb create-table $MY_ENDPOINT --table-name $MY_SESSION_TABLE --attribute-definitions AttributeName=token,AttributeType=S --key-schema AttributeName=token,KeyType=HASH --provisioned-throughput ReadCapacityUnits=5,WriteCapacityUnits=5

echo "Creating sseks-dev-users table ***************************************"

# NOTE: You don't define the email, first-name, last-name, hashed-password since
# DynamoDB is schemaless (you just add rows with those fields).
AWS_PROFILE=$MY_AWS_PROFILE aws dynamodb create-table $MY_ENDPOINT --table-name $MY_USERS_TABLE --attribute-definitions AttributeName=userid,AttributeType=S AttributeName=email,AttributeType=S --key-schema AttributeName=email,KeyType=HASH AttributeName=userid,KeyType=RANGE --provisioned-throughput ReadCapacityUnits=5,WriteCapacityUnits=5

echo "Creating sseks-dev-product-group table ***************************************"

AWS_PROFILE=$MY_AWS_PROFILE aws dynamodb create-table $MY_ENDPOINT --table-name $MY_PRODUCT_GROUP_TABLE --attribute-definitions AttributeName=pgid,AttributeType=S --key-schema AttributeName=pgid,KeyType=HASH --provisioned-throughput ReadCapacityUnits=5,WriteCapacityUnits=5

echo "Creating sseks-dev-product table ***************************************"

AWS_PROFILE=$MY_AWS_PROFILE aws dynamodb create-table $MY_ENDPOINT --table-name $MY_PRODUCT_TABLE --attribute-definitions AttributeName=pgid,AttributeType=S AttributeName=pid,AttributeType=S --key-schema AttributeName=pgid,KeyType=HASH AttributeName=pid,KeyType=RANGE --provisioned-throughput ReadCapacityUnits=5,WriteCapacityUnits=5


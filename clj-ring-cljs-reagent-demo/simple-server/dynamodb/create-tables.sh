#!/bin/bash

if [ $# -ne 3 ]
then
  echo "Usage: ./create-tables.sh <aws-profile> <prefix> <env>"
  echo "Example: ./create-tables.sh local-dynamodb kari-sseks dev"
  exit 1
fi

MY_AWS_PROFILE=$1
MY_PREFIX=$2
MY_ENV=$3

# If AWS_PROFILE is "local-dynamodb" we are running local dynamodb, otherwise the AWS_PROFILE should be real AWS profile.
if [ "$MY_AWS_PROFILE" == "local-dynamodb" ]; then
  MY_ENDPOINT="--endpoint-url http://localhost:8000"
else
  MY_ENDPOINT=""
fi

MY_SESSION_TABLE="${MY_PREFIX}-${MY_ENV}-session"
MY_USERS_TABLE="${MY_PREFIX}-${MY_ENV}-users"
MY_PRODUCT_GROUP_TABLE="${MY_PREFIX}-${MY_ENV}-product-group"
MY_PRODUCT_TABLE="${MY_PREFIX}-${MY_ENV}-product"

echo "************  Create tables  ************"
echo "Using AWS profile: $MY_AWS_PROFILE"

echo "Creating ${MY_SESSION_TABLE} table ***************************************"

AWS_PROFILE=$MY_AWS_PROFILE aws dynamodb create-table $MY_ENDPOINT --table-name $MY_SESSION_TABLE --attribute-definitions AttributeName=token,AttributeType=S --key-schema AttributeName=token,KeyType=HASH --provisioned-throughput ReadCapacityUnits=5,WriteCapacityUnits=5

echo "Creating ${MY_USERS_TABLE} table ***************************************"

# NOTE: You don't define the email, first-name, last-name, hashed-password since
# DynamoDB is schemaless (you just add rows with those fields).
AWS_PROFILE=$MY_AWS_PROFILE aws dynamodb create-table $MY_ENDPOINT --table-name $MY_USERS_TABLE --attribute-definitions AttributeName=email,AttributeType=S --key-schema AttributeName=email,KeyType=HASH --provisioned-throughput ReadCapacityUnits=5,WriteCapacityUnits=5

echo "Creating ${MY_PRODUCT_GROUP_TABLE} table ***************************************"

AWS_PROFILE=$MY_AWS_PROFILE aws dynamodb create-table $MY_ENDPOINT --table-name $MY_PRODUCT_GROUP_TABLE --attribute-definitions AttributeName=pgid,AttributeType=S --key-schema AttributeName=pgid,KeyType=HASH --provisioned-throughput ReadCapacityUnits=5,WriteCapacityUnits=5

echo "Creating ${MY_PRODUCT_TABLE} table ***************************************"

AWS_PROFILE=$MY_AWS_PROFILE aws dynamodb create-table $MY_ENDPOINT --table-name $MY_PRODUCT_TABLE --attribute-definitions AttributeName=pgid,AttributeType=S AttributeName=pid,AttributeType=S --key-schema AttributeName=pid,KeyType=HASH AttributeName=pgid,KeyType=RANGE --provisioned-throughput ReadCapacityUnits=5,WriteCapacityUnits=5 --global-secondary-indexes IndexName=PGIndex,KeySchema=["{AttributeName=pgid,KeyType=HASH}","{AttributeName=pid,KeyType=RANGE}"],Projection="{ProjectionType=INCLUDE ,NonKeyAttributes=["title","price"]}",ProvisionedThroughput="{ReadCapacityUnits=5,WriteCapacityUnits=5}"


#!/bin/bash

if [ $# -ne 3 ]
then
  echo "Usage: ./scan-table.sh <aws-profile> <env> <table>"
  echo "Example: ./scan-table.sh local-dynamodb dev product-group"
  exit 1
fi

MY_AWS_PROFILE=$1
MY_ENV=$2
MY_TABLE=$3

if [ "$MY_AWS_PROFILE" == "local-dynamodb" ]; then
    MY_ENDPOINT="--endpoint-url http://localhost:8000"
    #MY_ENDPOINT="--endpoint-url http://dynamodb.eu-west-1.localhost:8000"
else
  MY_ENDPOINT=""
fi

echo "************  Scan table: $MY_TABLE  ************"
echo "Using AWS profile: $MY_AWS_PROFILE"

AWS_PROFILE=$MY_AWS_PROFILE aws dynamodb scan $MY_ENDPOINT --table-name $MY_TABLE

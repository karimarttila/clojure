#!/bin/bash

if [ $# -ne 4 ]
then
  echo "Usage: ./scan-table.sh <aws-profile> <prefix> <env> <table>"
  echo "Example: ./scan-table.sh local-dynamodb ss dev product-group"
  exit 1
fi

MY_AWS_PROFILE=$1
MY_PREFIX=$2
MY_ENV=$3
MY_TABLE=$4
TABLE="${MY_PREFIX}-${MY_ENV}-${MY_TABLE}"

if [ "$MY_AWS_PROFILE" == "local-dynamodb" ]; then
    MY_ENDPOINT="--endpoint-url http://localhost:8000"
    #MY_ENDPOINT="--endpoint-url http://dynamodb.eu-west-1.localhost:8000"
else
  MY_ENDPOINT=""
fi

echo "************  Scan table: $MY_TABLE  ************"
echo "Using AWS profile: $MY_AWS_PROFILE"

AWS_PROFILE=$MY_AWS_PROFILE aws dynamodb scan $MY_ENDPOINT --table-name $TABLE

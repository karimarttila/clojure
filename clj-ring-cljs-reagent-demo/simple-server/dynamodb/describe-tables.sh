#!/bin/bash

if [ $# -ne 3 ]
then
  echo "Usage: ./describe-tables.sh <aws-profile> <prefix> <env>"
  echo "Example: ./describe-tables.sh local-dynamodb kari-sseks dev"
  exit 1
fi

MY_AWS_PROFILE=$1
MY_PREFIX=$2
MY_ENV=$3

if [ "$MY_AWS_PROFILE" == "local-dynamodb" ]; then
  MY_ENDPOINT="--endpoint-url http://localhost:8000"
else
  MY_ENDPOINT=""
fi

MY_SESSION_TABLE="${MY_PREFIX}-${MY_ENV}-session"
MY_USERS_TABLE="${MY_PREFIX}-${MY_ENV}-users"
MY_PRODUCT_GROUP_TABLE="${MY_PREFIX}-${MY_ENV}-product-group"
MY_PRODUCT_TABLE="${MY_PREFIX}-${MY_ENV}-product"


echo "************  Describe tables  ************"
echo "Using AWS profile: $MY_AWS_PROFILE"

AWS_PROFILE=$MY_AWS_PROFILE aws dynamodb describe-table $MY_ENDPOINT --table-name $MY_SESSION_TABLE
AWS_PROFILE=$MY_AWS_PROFILE aws dynamodb describe-table $MY_ENDPOINT --table-name $MY_USERS_TABLE
AWS_PROFILE=$MY_AWS_PROFILE aws dynamodb describe-table $MY_ENDPOINT --table-name $MY_PRODUCT_GROUP_TABLE
AWS_PROFILE=$MY_AWS_PROFILE aws dynamodb describe-table $MY_ENDPOINT --table-name $MY_PRODUCT_TABLE

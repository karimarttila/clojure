#!/bin/bash

if [ $# -ne 2 ]
then
  echo "Usage: ./describe-tables.sh <aws-profile> <env>"
  echo "Example: ./describe-tables.sh local-dynamodb dev"
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
echo "MY_SESSION_TABLE: $MY_SESSION_TABLE"

echo "************  Describe tables  ************"
echo "Using AWS profile: $MY_AWS_PROFILE"

AWS_PROFILE=$MY_AWS_PROFILE aws dynamodb describe-table $MY_ENDPOINT --table-name $MY_SESSION_TABLE
AWS_PROFILE=$MY_AWS_PROFILE aws dynamodb describe-table $MY_ENDPOINT --table-name $MY_USERS_TABLE
AWS_PROFILE=$MY_AWS_PROFILE aws dynamodb describe-table $MY_ENDPOINT --table-name $MY_PRODUCT_GROUP_TABLE
AWS_PROFILE=$MY_AWS_PROFILE aws dynamodb describe-table $MY_ENDPOINT --table-name $MY_PRODUCT_TABLE

#!/usr/bin/env bash

if [ $# -ne 4 ]
  then
      echo "Usage: ./import-all-tables.sh <aws-profile> <prefix> <env> <host>"
      echo "Example: ./import-all-tables.sh local-dynamodb kari-sseks dev localhost"
    exit 1
fi

MY_AWS_PROFILE=$1
MY_PREFIX=$2
MY_ENV=$3
MY_HOST=$4
MY_DATA_DIR="dev-resources/data"

./import-table.sh $MY_AWS_PROFILE $MY_PREFIX $MY_ENV users ${MY_DATA_DIR}/initial-users.csv $MY_HOST
./import-table.sh $MY_AWS_PROFILE $MY_PREFIX $MY_ENV product-group ${MY_DATA_DIR}/product-groups.csv $MY_HOST
./import-table.sh $MY_AWS_PROFILE $MY_PREFIX $MY_ENV product ${MY_DATA_DIR}/pg-1-products.csv $MY_HOST
./import-table.sh $MY_AWS_PROFILE $MY_PREFIX $MY_ENV product ${MY_DATA_DIR}/pg-2-products.csv $MY_HOST

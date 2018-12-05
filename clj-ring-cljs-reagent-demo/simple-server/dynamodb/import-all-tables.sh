#!/usr/bin/env bash

if [ $# -ne 2 ]
  then
      echo "Usage: ./import-all-tables.sh <aws-profile> <env>"
      echo "Example: ./import-all-tables.sh local-dynamodb dev"
    exit 1
fi

MY_AWS_PROFILE=$1
MY_ENV=$2

./import-table.sh $MY_AWS_PROFILE $MY_ENV users ../resources/initial-users.csv
./import-table.sh $MY_AWS_PROFILE $MY_ENV product-group ../resources/product-groups.csv
./import-table.sh $MY_AWS_PROFILE $MY_ENV product ../resources/pg-1-products.csv
./import-table.sh $MY_AWS_PROFILE $MY_ENV product ../resources/pg-2-products.csv

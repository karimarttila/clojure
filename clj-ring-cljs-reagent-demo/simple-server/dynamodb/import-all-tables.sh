#!/usr/bin/env bash

if [ $# -ne 3 ]
  then
      echo "Usage: ./import-all-tables.sh <aws-profile> <prefix> <env>"
      echo "Example: ./import-all-tables.sh local-dynamodb kari-sseks dev"
    exit 1
fi

MY_AWS_PROFILE=$1
MY_PREFIX=$2
MY_ENV=$3

./import-table.sh $MY_AWS_PROFILE $MY_PREFIX $MY_ENV users ../resources/initial-users.csv
./import-table.sh $MY_AWS_PROFILE $MY_PREFIX $MY_ENV product-group ../resources/product-groups.csv
./import-table.sh $MY_AWS_PROFILE $MY_PREFIX $MY_ENV product ../resources/pg-1-products.csv
./import-table.sh $MY_AWS_PROFILE $MY_PREFIX $MY_ENV product ../resources/pg-2-products.csv

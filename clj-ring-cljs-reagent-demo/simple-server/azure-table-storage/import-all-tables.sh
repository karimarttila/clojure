#!/usr/bin/env bash

if [ $# -ne 3 ]
  then
      echo "Usage: ./import-all-tables.sh <azure-profile> <env> <prefix>"
      echo "Example: ./import-all-tables.sh azure dev karissvmdemo1"
    exit 1
fi

MY_AZURE_PROFILE=$1
MY_ENV=$2
MY_PREFIX=$3

./import-table.sh $MY_AZURE_PROFILE $MY_ENV users $MY_PREFIX ../resources/initial-users.csv
./import-table.sh $MY_AZURE_PROFILE $MY_ENV productgroup $MY_PREFIX ../resources/product-groups.csv
./import-table.sh $MY_AZURE_PROFILE $MY_ENV product $MY_PREFIX ../resources/pg-1-products.csv
./import-table.sh $MY_AZURE_PROFILE $MY_ENV product $MY_PREFIX ../resources/pg-2-products.csv

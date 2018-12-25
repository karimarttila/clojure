#!/usr/bin/env bash

if [ $# -ne 2 ]
  then
      echo "Usage: ./import-all-tables.sh <azure-profile> <env>"
      echo "Example: ./import-all-tables.sh local-table dev"
    exit 1
fi

MY_AZURE_PROFILE=$1
MY_ENV=$2

./import-table.sh $MY_AZURE_PROFILE $MY_ENV users ../resources/initial-users.csv
./import-table.sh $MY_AZURE_PROFILE $MY_ENV productgroup ../resources/product-groups.csv
./import-table.sh $MY_AZURE_PROFILE $MY_ENV product ../resources/pg-1-products.csv
./import-table.sh $MY_AZURE_PROFILE $MY_ENV product ../resources/pg-2-products.csv

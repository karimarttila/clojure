#!/bin/bash

if [ $# -ne 3 ]
then
  echo "Usage: ./delete-tables.sh <azure-profile> <env> <prefix>"
  echo "Example: ./delete-tables.sh azure dev karissvmdemo1"
  exit 1
fi

MY_AZURE_PROFILE=$1
MY_ENV=$2
MY_PREFIX=$3

if [ "$MY_AZURE_PROFILE" == "local-table" ]; then
  # Azurite hard coded values.
  MY_CONNECTION_STRING='--connection-string DefaultEndpointsProtocol=http;AccountName=devstoreaccount1;AccountKey=Eby8vdM02xNOcqFlqUwJPLlmEtlCDXJ1OUzFT50uSRZ6IFsuFq2UVErCz4I6tq/K1SZFPTOtr/KBHBeksoGMGw==;TableEndpoint=http://127.0.0.1:10002/devstoreaccount1;'
  #MY_AZURE_STORAGE_ACCOUNT=
  #MY_AZURE_STORAGE_KEY=
elif [ "$MY_AZURE_PROFILE" == "azure" ]; then
  MY_CONNECTION_STRING="--connection-string $AZURE_CONNECTION_STRING"
  #MY_AZURE_STORAGE_ACCOUNT="--account-name $AZURE_STORAGE_ACCOUNT"
  #MY_AZURE_STORAGE_KEY="--account-key $AZURE_STORAGE_KEY"
else
  echo "Unknown profile: $MY_AZURE_PROFILE"
  exit -1
fi

MY_SESSION_TABLE="${MY_PREFIX}${MY_ENV}session"
MY_USERS_TABLE="${MY_PREFIX}${MY_ENV}users"
MY_PRODUCT_GROUP_TABLE="${MY_PREFIX}${MY_ENV}productgroup"
MY_PRODUCT_TABLE="${MY_PREFIX}${MY_ENV}product"

echo "************  Delete tables  ************"
echo "Using AZURE profile: $MY_AZURE_PROFILE"

echo "Deleting table $MY_SESSION_TABLE... and other tables"
az storage table delete $MY_AZURE_STORAGE_ACCOUNT $MY_AZURE_STORAGE_KEY $MY_CONNECTION_STRING --name $MY_SESSION_TABLE

az storage table delete $MY_AZURE_STORAGE_ACCOUNT $MY_AZURE_STORAGE_KEY $MY_CONNECTION_STRING --name $MY_USERS_TABLE

az storage table delete $MY_AZURE_STORAGE_ACCOUNT $MY_AZURE_STORAGE_KEY $MY_CONNECTION_STRING --name $MY_PRODUCT_GROUP_TABLE

az storage table delete $MY_AZURE_STORAGE_ACCOUNT $MY_AZURE_STORAGE_KEY $MY_CONNECTION_STRING --name $MY_PRODUCT_TABLE

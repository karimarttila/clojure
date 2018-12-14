#!/bin/bash

if [ $# -ne 2 ]
then
  echo "Usage: ./create-tables.sh <azure-profile> <env>"
  echo "Example: ./create-tables.sh local-table dev"
  exit 1
fi

MY_AZURE_PROFILE=$1
MY_ENV=$2

if [ "$MY_AZURE_PROFILE" == "local-table" ]; then
  MY_CONNECTION_STRING='DefaultEndpointsProtocol=http;AccountName=devstoreaccount1;AccountKey=Eby8vdM02xNOcqFlqUwJPLlmEtlCDXJ1OUzFT50uSRZ6IFsuFq2UVErCz4I6tq/K1SZFPTOtr/KBHBeksoGMGw==;TableEndpoint=http://127.0.0.1:10002/devstoreaccount1;'
else
  MY_CONNECTION_STRING=
fi

MY_SESSION_TABLE="sseks-${MY_ENV}-session"
MY_USERS_TABLE="sseks-${MY_ENV}-users"
MY_PRODUCT_GROUP_TABLE="sseks-${MY_ENV}-product-group"
MY_PRODUCT_TABLE="sseks-${MY_ENV}-product"

echo "************  Create tables  ************"
echo "Using AZURE profile: $MY_AZURE_PROFILE"

az storage table list --connection-string $MY_CONNECTION_STRING


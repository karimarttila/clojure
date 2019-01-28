#!/bin/bash

if [ $# -ne 4 ]
then
  echo "Usage: ./scan-table.sh <azure-profile> <env> <table> <prefix>"
  echo "Example: ./scan-table.sh azure dev productgroup karissvmdemo1"
  exit 1
fi

MY_AZURE_PROFILE=$1
MY_ENV=$2
MY_RAW_TABLE=$3
MY_PREFIX=$4
MY_TABLE="${MY_PREFIX}${MY_ENV}${MY_RAW_TABLE}"

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

echo "************  Scan table: $MY_TABLE  ************"
echo "Using Azure profile: $MY_AZURE_PROFILE"

az storage  entity query --table-name $MY_TABLE $MY_AZURE_STORAGE_ACCOUNT $MY_AZURE_STORAGE_KEY $MY_CONNECTION_STRING

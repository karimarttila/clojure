#!/bin/bash

if [ $# -ne 1 ]
then
  echo "Usage: ./list-tables.sh <azure-profile>"
  echo "Example: ./list-tables.sh local-table"
  exit 1
fi

MY_AZURE_PROFILE=$1

if [ "$MY_AZURE_PROFILE" == "local-table" ]; then
  MY_CONNECTION_STRING='DefaultEndpointsProtocol=http;AccountName=devstoreaccount1;AccountKey=Eby8vdM02xNOcqFlqUwJPLlmEtlCDXJ1OUzFT50uSRZ6IFsuFq2UVErCz4I6tq/K1SZFPTOtr/KBHBeksoGMGw==;TableEndpoint=http://127.0.0.1:10002/devstoreaccount1;'
else
  MY_CONNECTION_STRING=
fi

echo "************  List tables  ************"
echo "Using AZURE profile: $MY_AZURE_PROFILE"


az storage table list --connection-string $MY_CONNECTION_STRING


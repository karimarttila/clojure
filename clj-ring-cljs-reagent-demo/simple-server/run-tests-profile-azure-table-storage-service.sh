#!/bin/bash

echo "NOTE: First source the Azure storage account name and key:"
echo "  source ~/.azure/ss-aks-profile.sh"

if [[ -z "${AZURE_STORAGE_ACCOUNT}" ]]; then
  echo "First set AZURE_STORAGE_ACCOUNT environmental variable using source command above"
  exit -2
fi

if [[ -z "${AZURE_STORAGE_KEY}" ]]; then
  echo "First set AZURE_STORAGE_KEY environmental variable using source command above"
  exit -2
fi


SIMPLESERVER_CONFIG_FILE=resources/simpleserver.properties lein with-profile +azure-table-storage-dev,+log-prod test

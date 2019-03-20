#!/bin/bash

echo "NOTE: First source the Azure storage account name and key:"
echo "  source ~/.azure/clj-azure-tables.sh"

if [[ -z "${AZURE_CONNECTION_STRING}" ]]; then
  echo "First set AZURE_CONNECTION_STRING environment variable using source command above"
  exit -2
fi

if [[ -z "${AZURE_TABLE_PREFIX}" ]]; then
  echo "First set AZURE_TABLE_PREFIX environment variable using source command above"
  exit -2
fi

SIMPLESERVER_CONFIG_FILE=resources/simpleserver.properties lein with-profile +azure-table-storage-dev,+log-prod test

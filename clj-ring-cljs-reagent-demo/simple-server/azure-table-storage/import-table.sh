#!/bin/bash


if [ $# -ne 5 ]
  then
      echo "Usage: ./import-table.sh <azure-profile> <env> <table> <prefix> <csv file>"
      echo "Example: ./import-table.sh azure dev karissvmdemo1 productgroup ../resources/product-groups.csv"
    exit 1
fi

MY_AZURE_PROFILE=$1
MY_ENV=$2
MY_TABLE=$3
MY_PREFIX=$4
MY_CSV_FILE=$5

MY_PY_CMD="import table_importer; table_importer.import_csv(\"$MY_AZURE_PROFILE\", \"$MY_ENV\", \"$MY_TABLE\", \"$MY_PREFIX\", \"$MY_CSV_FILE\")"
echo "MY_PY_CMD: $MY_PY_CMD"
MY_RET="$(python3 -c "$MY_PY_CMD")"
echo "MY_RET: $MY_RET"

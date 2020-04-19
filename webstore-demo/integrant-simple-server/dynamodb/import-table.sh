#!/bin/bash


if [ $# -ne 6 ]
  then
      echo "Usage: ./import-table.sh <aws-profile> <prefix> <env> <table> <csv file> <host>"
      echo "Example: ./import-table.sh local-dynamodb kari-sseks dev product-group ../resources/product-groups.csv localhost"
    exit 1
fi

MY_AWS_PROFILE=$1
MY_PREFIX=$2
MY_ENV=$3
MY_TABLE=$4
MY_CSV_FILE=$5
MY_HOST=$6

MY_PY_CMD="from pysrc import table_importer; table_importer.import_csv(\"$MY_AWS_PROFILE\", \"$MY_PREFIX\", \"$MY_ENV\", \"$MY_TABLE\", \"$MY_CSV_FILE\", \"$MY_HOST\" )"
echo "MY_PY_CMD: $MY_PY_CMD"
MY_RET="$(python3 -c "$MY_PY_CMD")"
echo "MY_RET: $MY_RET"

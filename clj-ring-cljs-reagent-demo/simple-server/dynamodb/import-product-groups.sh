#!/bin/bash


if [ $# -ne 4 ]
  then
      echo "Usage: ./import-product-groups.sh  <aws-profile> <env> <table> <csv file>"
      echo "Example: ./import-product-groups.sh local-dynamodb dev sseks-dev-product-group ../resources/product-groups.csv"
    exit 1
fi

MY_AWS_PROFILE=$1
MY_ENV=$2
MY_TABLE=$3
MY_CSV_FILE=$4

MY_PY_CMD="import product_groups_importer; product_groups_importer.import_csv(\"$MY_AWS_PROFILE\", \"$MY_ENV\", \"$MY_TABLE\", \"$MY_CSV_FILE\")"
echo "MY_PY_CMD: $MY_PY_CMD"
MY_RET="$(python3 -c "$MY_PY_CMD")"
echo "MY_RET: $MY_RET"

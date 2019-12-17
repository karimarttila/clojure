#!/bin/bash


if [ $# -ne 3 ]
then
    echo "Usage: ./get-product.sh <JSON Web Token> <pg-id> <p-id>"
    exit 1
fi
JSON_WEB_TOKEN=$1
PG_ID=$2
P_ID=$3

curl -v -u $JSON_WEB_TOKEN:NOT -H "Content-Type: application/json" -X GET http://localhost:6161/product/$PG_ID/$P_ID






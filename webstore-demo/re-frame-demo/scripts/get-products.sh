#!/bin/bash


if [ $# -ne 2 ]
then
    echo "Usage: ./get-products.sh <JSON Web Token> <pg-id>"
    exit 1
fi
JSON_WEB_TOKEN=$1
PG_ID=$2

curl -v -u $JSON_WEB_TOKEN:NOT -H "Content-Type: application/json" -X GET http://localhost:6161/api/products/$PG_ID





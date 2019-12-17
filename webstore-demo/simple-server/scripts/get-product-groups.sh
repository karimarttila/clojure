#!/bin/bash


if [ $# -ne 1 ]
then
    echo "Usage: ./get-product-groups.sh <JSON Web Token>"
    exit 1
fi
JSON_WEB_TOKEN=$1

curl -v -u $JSON_WEB_TOKEN:NOT -H "Content-Type: application/json" -X GET http://localhost:6161/product-groups




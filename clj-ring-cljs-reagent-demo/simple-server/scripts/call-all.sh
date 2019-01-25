#!/bin/bash

echo "Poor man's Robot Framework!"

if [ $# -ne 0 ]
then
    echo "Usage: ./call-all.sh"
    exit 1
fi

echo "Calling /info **************"
curl -v -H "Content-Type: application/json" -X GET http://localhost:3045/info

echo "Calling /signin **************"
curl -H "Content-Type: application/json" -X POST -d '{"first-name":"Jamppa", "last-name":"Jamppanen", "email": "jamppa.jamppanen@foo.com", "password":"Jamppa"}' http://localhost:3045/signin

echo "Calling /login **************"
MYJSON=$(curl -H "Content-Type: application/json" -X POST -d '{"email": "jamppa.jamppanen@foo.com", "password":"Jamppa"}' http://localhost:3045/login)
MYTOKEN=$(echo $MYJSON | jq '."json-web-token"')
JSON_WEB_TOKEN=$(echo $MYTOKEN | sed -e 's/^"//' -e 's/"$//')

PG_ID=2
P_ID=49

echo ""
echo "Calling /product-groups **************"
curl -v -u $JSON_WEB_TOKEN:NOT -H "Content-Type: application/json" -X GET http://localhost:3045/product-groups

echo ""
echo "Calling /products **************"
curl -v -u $JSON_WEB_TOKEN:NOT -H "Content-Type: application/json" -X GET http://localhost:3045/products/$PG_ID

echo ""
echo "Calling /product **************"
curl -v -u $JSON_WEB_TOKEN:NOT -H "Content-Type: application/json" -X GET http://localhost:3045/product/$PG_ID/$P_ID




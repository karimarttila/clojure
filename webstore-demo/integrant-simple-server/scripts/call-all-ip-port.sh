#!/bin/bash

echo "Poor man's Robot Framework!"

if [ $# -ne 2 ]
then
    echo "Usage: ./call-all-ip-port.sh <ip> <port>"
    exit 1
fi

MY_IP=$1
MY_PORT=$2

echo ""
echo "***********************************************************"
echo "Calling /info **************"
curl -v -H "Content-Type: application/json" -X GET http://${MY_IP}:${MY_PORT}/info

echo ""
echo "***********************************************************"
echo "Calling /signin **************"
curl -H "Content-Type: application/json" -X POST -d '{"first-name":"Jamppa", "last-name":"Jamppanen", "email": "jamppa.jamppanen@foo.com", "password":"Jamppa"}' http://${MY_IP}:${MY_PORT}/signin

echo ""
echo "***********************************************************"
echo "Calling /login **************"
MYJSON=$(curl -H "Content-Type: application/json" -X POST -d '{"email": "jamppa.jamppanen@foo.com", "password":"Jamppa"}' http://${MY_IP}:${MY_PORT}/login)
MYTOKEN=$(echo $MYJSON | jq '."json-web-token"')
JSON_WEB_TOKEN=$(echo $MYTOKEN | sed -e 's/^"//' -e 's/"$//')

PG_ID=2
P_ID=49

echo ""
echo "***********************************************************"
echo "Calling /product-groups **************"
curl -v -u $JSON_WEB_TOKEN:NOT -H "Content-Type: application/json" -X GET http://${MY_IP}:${MY_PORT}/product-groups

echo ""
echo "***********************************************************"
echo "Calling /products **************"
curl -v -u $JSON_WEB_TOKEN:NOT -H "Content-Type: application/json" -X GET http://${MY_IP}:${MY_PORT}/products/$PG_ID

echo ""
echo "***********************************************************"
echo "Calling /product **************"
curl -v -u $JSON_WEB_TOKEN:NOT -H "Content-Type: application/json" -X GET http://${MY_IP}:${MY_PORT}/product/$PG_ID/$P_ID




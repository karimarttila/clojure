#!/bin/bash


if [ $# -ne 0 ]
then
    echo "Usage: ./call-all.ss"
    exit 1
fi

echo "Calling /info **************"
curl -v -H "Content-Type: application/json" -X GET http://localhost:3045/info

echo "Calling /signin **************"
curl -H "Content-Type: application/json" -X POST -d '{"first-name":"Jamppa", "last-name":"Jamppanen", "email": "jamppa.jamppanen@foo.com", "password":"Jamppa"}' http://localhost:3045/signin

echo "Calling /login **************"
curl -H "Content-Type: application/json" -X POST -d '{"email": "jamppa.jamppanen@foo.com", "password":"Jamppa"}' http://localhost:3045/login

echo ""
echo "Calling /product-groups **************"


echo "Calling /products **************"


echo "Calling /product **************"





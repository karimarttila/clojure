#!/bin/bash

if [ $# -ne 1 ]
then
  echo "Usage: ./list-tables.sh <aws-profile>"
  echo "Example: ./list-tables.sh local-dynamodb"
  exit 1
fi

MY_AWS_PROFILE=$1

if [ "$MY_AWS_PROFILE" == "local-dynamodb" ]; then
  MY_ENDPOINT="--endpoint-url http://localhost:8000"
else
  MY_ENDPOINT=""
fi

echo "************  List tables  ************"
echo "Using AWS profile: $MY_AWS_PROFILE"

AWS_PROFILE=$MY_AWS_PROFILE aws dynamodb list-tables $MY_ENDPOINT


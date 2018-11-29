#!/bin/bash

if [ $# -ne 1 ]
then
  echo "Usage: ./list-tables <aws-profile>"
  exit 1
fi

MY_AWS_PROFILE=$1

if [ "$MY_AWS_PROFILE" == "local-dynamodb" ]; then
  MY_ENDPOINT="--endpoint-url http://localhost:8000"
else
  MY_ENDPOINT=""
fi

echo "************  List tables  ************"
echo "Using AWS profile: $AWS_PROFILE"

AWS_PROFILE=$MY_AWS_PROFILE aws dynamodb list-tables $MY_ENDPOINT


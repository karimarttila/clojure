#!/bin/bash

echo "************  Deleting: sseks-dev-session  ************"

AWS_PROFILE=local-dynamodb aws dynamodb delete-table --endpoint-url http://localhost:8000 --table-name sseks-dev-session

echo "************  Deleting: sseks-dev-users  ************"

AWS_PROFILE=local-dynamodb aws dynamodb delete-table --endpoint-url http://localhost:8000 --table-name sseks-dev-users

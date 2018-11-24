#!/bin/bash

echo "************  Describing tables  ************"

AWS_PROFILE=local-dynamodb aws dynamodb describe-table --endpoint-url http://localhost:8000 --table-name sseks-dev-session

AWS_PROFILE=local-dynamodb aws dynamodb describe-table --endpoint-url http://localhost:8000 --table-name sseks-dev-users

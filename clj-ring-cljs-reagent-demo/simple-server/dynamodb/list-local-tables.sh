#!/bin/bash

AWS_PROFILE=local-dynamodb aws dynamodb list-tables --endpoint-url http://localhost:8000


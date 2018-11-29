# DynamoDB Local Docker Version

# Instructions

Use the scripts to start the DynamoDB local Docker version (```./run-local-dynamodb``), create tables, describe tables and delete tables. 

You can use this local Docker version of DynamoDB for development purposes. The final EKS version of Simple Server uses real AWS DynamoDB.

There are helper scripts to create the four tables used for Clojure Simple Server:

- create-tables.sh
- delete-tables.sh
- describe-tables.sh
- list-tables.sh

The tables are:

AWS_PROFILE=$MY_AWS_PROFILE aws dynamodb describe-table $MY_ENDPOINT --table-name sseks-dev-session
AWS_PROFILE=$MY_AWS_PROFILE aws dynamodb describe-table $MY_ENDPOINT --table-name sseks-dev-users
AWS_PROFILE=$MY_AWS_PROFILE aws dynamodb describe-table $MY_ENDPOINT --table-name sseks-dev-product-group
AWS_PROFILE=$MY_AWS_PROFILE aws dynamodb describe-table $MY_ENDPOINT --table-name sseks-dev-product


 
# DynamoDB Local Docker Version

# Instructions

Use the scripts to start the DynamoDB local Docker version (```./run-local-dynamodb``), create tables, list tables, describe tables and delete tables. 

You can use this local Docker version of DynamoDB for development purposes. The final EKS version of Simple Server uses real AWS DynamoDB.

NOTE: The scripts can create tables both for DynamoDB running in local Docker instance or in real AWS environment. BUT: Use these scripts in AWS environment only for testing purposes - the Terraform scripts create the actual AWS tables with the rest of the AWS infra. See: [simple-server-eks](https://github.com/karimarttila/aws/tree/master/simple-server-eks). I.e. it is a Cloud infra development best practice to keep all infra in one configuration setup (in our case: Terraform).

There are helper scripts to create the four tables used for Clojure Simple Server:

- create-tables.sh
- delete-tables.sh
- describe-tables.sh
- list-tables.sh

The tables in dev env are:

- sseks-dev-session
- sseks-dev-users
- sseks-dev-product-group
- sseks-dev-product


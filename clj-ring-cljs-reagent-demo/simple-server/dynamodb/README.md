# DynamoDB Local Docker Version

# Instructions

Use the scripts to start the DynamoDB local Docker version (```./run-local-dynamodb``), create tables, list tables, describe tables and delete tables. 

You can use this local Docker version of DynamoDB for development purposes. The final EKS version of Simple Server uses real AWS DynamoDB.

NOTE: The scripts can create tables both for DynamoDB running in local Docker instance or in real AWS environment. BUT: Use these scripts in AWS environment only for testing purposes - the Terraform scripts create the actual AWS tables with the rest of the AWS infra. See: [simple-server-eks](https://github.com/karimarttila/aws/tree/master/simple-server-eks). I.e. it is a Cloud infra development best practice to keep all infra in one configuration setup (in our case: Terraform).

There are helper scripts to manipulate the four tables used for Clojure Simple Server:

- create-tables.sh
- delete-tables.sh
- describe-tables.sh
- list-tables.sh
- scan-table.sh

The tables are:

- sseks-<env>-session
- sseks-<env>-users
- sseks-<env>-product-group
- sseks-<env>-product

You can use the import-table.sh script to import the csv data (for all tables) into the dynamodb.

First you need to make some installations:

```bash
# Create the virtual environment for Python.
./create-virtual-env.sh
# Install aws library boto3.
pip install boto3
```
Then import data:

```bash
./import-table.sh local-dynamodb dev product-group ../resources/product-groups.csv
./import-table.sh local-dynamodb dev product ../resources/pg-1-products.csv
./import-table.sh local-dynamodb dev product ../resources/pg-2-products.csv
```



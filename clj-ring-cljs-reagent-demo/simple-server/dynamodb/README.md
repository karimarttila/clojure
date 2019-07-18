# DynamoDB Local Docker Version

# Instructions

Use the scripts to start the DynamoDB local Docker version (```./run-local-dynamodb``), create tables, list tables, describe tables and delete tables. 

You can use this local Docker version of DynamoDB for development purposes. The final EKS version of Simple Server uses real AWS DynamoDB.

NOTE: The scripts can create tables both for DynamoDB running in local Docker instance and for real AWS environment. BUT: Use these scripts in AWS environment only for testing purposes - the Terraform scripts create the actual AWS tables with the rest of the AWS infra. See: [simple-server-eks](https://github.com/karimarttila/aws/tree/master/simple-server-eks). I.e. it is a Cloud infra development best practice to keep all infra in one configuration setup (in our case: Terraform).

There are helper scripts to manipulate the four tables used for Clojure Simple Server:

- create-tables.sh
- delete-tables.sh
- describe-tables.sh
- list-tables.sh
- scan-table.sh
- import-table.sh
- import-all-tables.sh

The tables are:

- sseks-<env>-session
- sseks-<env>-users
- sseks-<env>-product-group
- sseks-<env>-product

First you need to make some installations:

```bash
# Create the virtual environment for Python.
./create-virtual-env.sh
# Activate the virtual env.
source venv3/bin/activate
# Install aws library boto3.
pip install boto3
```

Create the credential section in you ~/.aws/credentials file, e.g.

```text
[local-dynamodb]
aws_access_key_id = XXXXXXXXXXXXXX___NOT
aws_secret_access_key = XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX___NOT
```


Then import data:

```bash
# Start virtual env.
source venv3/bin/activate
# Start the DynamoDB Docker container (in one terminal)
./run-local-dynamodb.sh
# Create tables (in another terminal).
./create-tables.sh local-dynamodb ss dev
# List tables.
./list-tables.sh local-dynamodb
# Import all tables to that instance.
./import-all-tables.sh local-dynamodb ss dev
```

I tested the scripts using local DynamoDB (running in Docker container) and real AWS DynamoDB table - scripts work the same way in both environments (for real aws testing you need an AWS account and provide the profile with aws_access key and secret, of course).

Someone might ask: "Why did you use Python and not Clojure since this is a Clojure exercises repo?" Well, I used Clojure to manipulate the data in production code and unit tests - I just wanted to see how easy it is to import the test data using Python boto3 library (it was pretty easy).



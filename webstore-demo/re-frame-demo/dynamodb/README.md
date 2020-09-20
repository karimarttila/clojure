# DynamoDB Local Docker Version

# Instructions

## Easy Way Using Docker Compose

In this new Simple-Server version I wanted to experiment if I can create just one bash command and start local dynamodb docker container, create tables in local dynamodb and upload all initial data to those tables. I managed to do it: [run-docker-compose.sh](run-docker-compose.sh). The script first copies the data files to dev-resources in this directory so that the [Dockerfile](Dockerfile) can use them. Then the script builds the data uploader docker image. Then we start docker-compose with file [docker-compose-setup-local-ddb.yml](docker-compose-setup-local-ddb.yml) which starts first the dynamodb local docker container (waiting requests in port 8000), and then the data uploader which runs file [docker-compose-upload.sh](docker-compose-upload.sh) which first activates Python virtual env, then installs boto sdk (needed in import) and then creates tables using aws cli and then imports data using boto client.

## Running Scripts in Your Host

You can also use the scripts so that you run dynamodb local docker container withou docker compose and then run the scripts in your host, of course. The [run-docker-compose.sh](run-docker-compose.sh) was just a personal exercise. Instructions how to use the scripts locally follows.

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

- ss-<env>-session
- ss-<env>-users
- ss-<env>-product-group
- ss-<env>-product

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
./create-tables.sh local-dynamodb ss dev localhost
# List tables.
./list-tables.sh local-dynamodb localhost
# Import all tables to that instance.
./import-all-tables.sh local-dynamodb ss dev localhost
```

I tested the scripts using local DynamoDB (running in Docker container) and real AWS DynamoDB table - scripts work the same way in both environments (for real aws testing you need an AWS account and provide the profile with aws_access key and secret, of course).

Someone might ask: "Why did you use Python and not Clojure since this is a Clojure exercises repo?" Well, I used Clojure to manipulate the data in production code and unit tests - I just wanted to see how easy it is to import the test data using Python boto3 library (it was pretty easy).



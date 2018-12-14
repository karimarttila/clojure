# Azure Table Storage Local Docker Version

# Instructions

Use the scripts to start the local Azure Table Storage Docker version (```./run-local-table-storage``), create tables, list tables, describe tables and delete tables. 

NOTE: The scripts can create tables both for Azure Table Storage running in local Docker instance and for real Azure environment. BUT: Use these scripts in Azure environment only for testing purposes - the Terraform scripts create the actual Azure tables with the rest of the Azure infra. See: [simple-server-aks](https://github.com/karimarttila/azure/tree/master/simple-server-aks). I.e. it is a Cloud infra development best practice to keep all infra in one configuration setup (in our case: Terraform).

First create an Azure Storage Account. I'm using the same storage account as in the [Simple Server Azure AKS](https://github.com/karimarttila/azure/tree/master/simple-server-aks/) project, see script: [create-azure-storage-account.sh](https://github.com/karimarttila/azure/tree/master/simple-server-aks/scripts).

I couldn't figure how to create profiles for azure cli as you can do in the aws side. As a simple hack I created ~/.azure/ss-aks-profile.sh file which I source when I want to call Azure Table - the storage-name and storage-key are kept safely in my ~/.azure folder which is not leaked into this Github project. So, create that file in your ~/.azure folder and add the following environmental variables there:

```bash
export AZURE_STORAGE_ACCOUNT=<storage-name-you-created-earlier>
export AZURE_STORAGE_KEY=<storage-key-you-got-earlier>
``` 

... and source the file like this: ```source ~/.azure/ss-aks-profile.sh ```.

Then you are able to inject the storage name and storage key safely to scripts that are in this directory. 

If I later find out some way to create Azure profiles I fix this setup.


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
pip install azure-cosmosdb-table
```

TODO ****************************************** REWRITE ************

Create the credential section in you ~/.aws/credentials file, e.g.

```text
[local-table]
aws_access_key_id = XXXXXXXXXXXXXX___NOT
aws_secret_access_key = XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX___NOT
```

Then import data:

```bash
./run-local-dynamodb.sh                      # Start the DynamoDB Docker container.
./import-all-tables.sh local-dynamodb dev    # Import all tables to that instance.
```

I tested the scripts using local DynamoDB (running in Docker container) and real AWS DynamoDB table - scripts work the same way in both environments (for real aws testing you need an AWS account and provide the profile with aws_access key and secret, of course).

Someone might ask: "Why did you use Python and not Clojure since this is a Clojure exercises repo?" Well, I used Clojure to manipulate the data in production code and unit tests - I just wanted to see how easy it is to import the test data using Python boto3 library (it was pretty easy).



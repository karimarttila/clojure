# Azure Table Storage Local Database

# Instructions

Use the scripts to start the local Azure Table Storage Docker version (```./run-local-table-storage``), create tables, list tables, describe tables and delete tables. 

NOTE: The scripts can create tables both for Azure Table Storage running in local Docker instance and for real Azure environment. BUT: Use these scripts in Azure environment only for testing purposes - the Terraform scripts create the actual Azure tables with the rest of the Azure infra. See: [simple-server-aks](https://github.com/karimarttila/azure/tree/master/simple-server-aks). I.e. it is a Cloud infra development best practice to keep all infra in one configuration setup (in our case: Terraform).

First create an Azure Storage Account: ```create-azure-storage-account.sh```. 

I couldn't figure how to create profiles for azure cli as you can do in the aws side. As a simple hack I created ~/.azure/ss-aks-profile.sh file which I source when I want to call Azure Table - the storage-name and storage-key are kept safely in my ~/.azure folder which is not leaked into this Github project. So, create that file in your ~/.azure folder and add the following environmental variables there:

```bash
export AZURE_STORAGE_ACCOUNT=<storage-name-you-created-earlier>
export AZURE_STORAGE_KEY=<storage-key-you-got-earlier>
export AZURE_CONNECTION_STRING=<see-connection-string-in-storage-account"
``` 

... and source the file like this: ```source ~/.azure/ss-aks-profile.sh ```.

Then you are able to inject the storage name and storage key safely to scripts that are in this directory. 

If I later find out some way to create Azure profiles I fix this setup.

I use [Azurite](https://github.com/arafato/azurite) as a local development database. Just install Azurite like: ```npm install azurite``` and you can use it as a node module. I created a helper script ```run-local-table-storage.sh``` to start Azurite.

There are helper scripts to manipulate the four tables used for Clojure Simple Server:

- create-tables.sh
- delete-tables.sh
- describe-tables.sh
- list-tables.sh
- scan-table.sh
- import-table.sh
- import-all-tables.sh

The tables are:

- sseks<env>session
- sseks<env>users
- sseks<env>productgroup
- sseks<env>product

NOTE: Azure Table Storage doesn't accept hyphens in table names. I also should have renamed sseks to ssaks (as Azure AKS service), but never mind that.

First you need to make some installations:

```bash
# Create the virtual environment for Python.
./create-virtual-env.sh
# Activate the virtual env.
source venv3/bin/activate
# Install azure table storage library.
pip install azure-cosmosdb-table
```

After sourcing the ss-aks-profile.sh profile as described earlier you are able to create the tables and import the data:

```bash
./run-local-table-storage.sh                      # Start Azurite container.
./create-tables.sh local-table dev                # Create the tables in local Azurite table storage.
./create-tables.sh ss-aks-profile dev             # Create the tables in actual Azure table storage service.
./import-all-tables.sh local-table dev            # Import data to local Azurite table storage.
./import-all-tables.sh ss-aks-profile dev         # Import data to actual Azure table storage service.
./scan-table.sh local-table dev productgroup      # Scan table from local Azurite table storage.
./scan-table.sh ss-aks-profile dev productgroup   # Scan table from actual Azure table storage service.
```

I tested the scripts using local Azurite table storage (running in Docker container) and real Azure table storage service - scripts work the same way in both environments (for real Azure testing you need an Azure account and provide the profile with AZURE_STORAGE_ACCOUNT and AZURE_STORAGE_KEY, of course).

Someone might ask: "Why did you use Python and not Clojure since this is a Clojure exercises repo?" Well, I used Clojure to manipulate the data in production code and unit tests - I just wanted to see how easy it is to import the test data using Python azure.storage.table library (it was pretty easy).


# Warning

**NOTE**. While developing the Azure Table Storage version I was puzzled that when searching all products both local Azurite and real Azure Table Storage Service returned the right result. But when searching a certain product with PartitionKey and RowKey the real Azure Table Storage Service returned the right product but Azurite returned empty list. For the exact same code calling the Table Storage Java API. My only conclusion was that unless I had made some error with my test data (highly unlikely - I used the same table-importer.py to load the test data to both tables, then used Storage Explorer to verify that the exact product I'm looking for is in both tables) the Azurite version is not working properly. From this point on I decided to ditch the Azurite and use the real service in development. A bit sad since I thought that Azurite would have been a nice tool for local table development. I googled the issue and found out that some other developers had complained same kind of issues with Azurite.

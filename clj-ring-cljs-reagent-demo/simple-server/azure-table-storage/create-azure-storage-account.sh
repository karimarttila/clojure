#!/bin/bash

# Script adapted from https://docs.microsoft.com/en-us/azure/terraform/terraform-backend.

if [ $# -ne 3 ]
then
  echo "Usage: ./create-azure-storage-account.sh <location> <res-group-name> <storage-account-name>"
  echo "NOTE: Use the following azure cli commands to check the right account and to login to az first:"
  echo "  az login                                          => Login to azure cli."  
  echo "  az account list --output table                    => Check which Azure accounts you have."
  echo "  az account set -s \"<your-azure-account-name>\"   => Set the right azure account."
  exit 1
fi


LOCATION=$1
RESOURCE_GROUP_NAME=$2
STORAGE_ACCOUNT_NAME=$3

# Create resource group
az group create --name $RESOURCE_GROUP_NAME --location $LOCATION

# Create storage account
az storage account create --resource-group $RESOURCE_GROUP_NAME --name $STORAGE_ACCOUNT_NAME --sku Standard_LRS --encryption-services blob

# Get storage account key
ACCOUNT_KEY=$(az storage account keys list --resource-group $RESOURCE_GROUP_NAME --account-name $STORAGE_ACCOUNT_NAME --query [0].value -o tsv)

# Print values.
echo "storage_account_name: $STORAGE_ACCOUNT_NAME"
echo "access_key: $ACCOUNT_KEY"

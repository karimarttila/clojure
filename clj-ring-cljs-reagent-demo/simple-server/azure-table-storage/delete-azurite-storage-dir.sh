#!/bin/bash

MY_AZURITE_STORAGE_DIR=azurite/store-dir
echo "Deleting Azurite storage dir: $MY_AZURITE_STORAGE_DIR"
rm -rf $MY_AZURITE_STORAGE_DIR/*

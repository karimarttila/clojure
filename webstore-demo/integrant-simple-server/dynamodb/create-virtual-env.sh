#!/bin/bash

MY_VENV_DIR=venv3

echo "Run this script as: source ./create-virtual-env.sh"

if [ ! -d "$MY_VENV_DIR" ]; then
    python3 -m venv venv3
    source venv3/bin/activate
    pip3 install -r requirements.txt
else
    echo "$MY_VENV_DIR already existed. Delete it first if you want to re-create it."
fi




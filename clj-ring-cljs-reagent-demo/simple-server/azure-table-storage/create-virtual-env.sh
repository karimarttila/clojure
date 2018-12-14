#!/bin/bash

MY_VENV_DIR=venv3


if [ ! -d "$MY_VENV_DIR" ]; then
    virtualenv -p /usr/bin/python3 venv3
else
    echo "$MY_VENV_DIR already existed. Delete it first if you want to re-create it."
fi

echo "To activate virtual env:"
echo "  source venv3/bin/activate"



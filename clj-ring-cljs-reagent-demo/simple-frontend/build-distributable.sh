#!/bin/bash

lein clean
lein package
echo "Distributable ready."
echo "You can start the distributable with start-simple-frontend.sh script."


#!/bin/sh

echo "Usage: AWS_PROFILE=<YOUR-AWS-PROFILE> ./build-ami.sh"

packer -machine-readable build clickstream-generator-ami.json

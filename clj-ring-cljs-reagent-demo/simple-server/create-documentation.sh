#!/bin/bash

DOC_GEN_DIR=doc-gen
echo "Deleting $DOC_GEN_DIR directory"
rm -rf $DOC_GEN_DIR
echo "Deleting $DOC_GEN_DIR directory"
mkdir $DOC_GEN_DIR
echo "Generating documentation to $DOC_GEN_DIR directory"
SIMPLESERVER_CONFIG_FILE=resources/simpleserver.properties lein do clean, codox
echo "DONE - Generated documentation is in: $DOC_GEN_DIR"

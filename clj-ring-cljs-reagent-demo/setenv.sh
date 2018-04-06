#!/bin/bash

# Project: CIE
# File: setenv.sh
# Description: Sets JAVA_HOME, M2_HOME and sets PATH.
# NOTE: TODO.
# Copyright (c) 2017 Tieto
# Author: Kari Marttila
# Version history:
# - 2018-01-11: First version.
# NOTE: This script is called by myset.sh

# NOTE: For some reason Clojure 1.9 not working with Leiningen?
# Figure out later why?
#export JAVA_HOME=/mnt/local/jdk-9.0.1
export JAVA_HOME=/mnt/local/jdk1.8.0_65
export M2_HOME=/mnt/local/maven-3.3
echo "JAVA_HOME="$JAVA_HOME
export ANT_HOME=/mnt/local/apache-ant-1.10.1
export PATH=$JAVA_HOME/bin:$M2_HOME/bin:$ANT_HOME/bin:$PATH
echo "PATH="$PATH


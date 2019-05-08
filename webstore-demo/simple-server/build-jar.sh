#!/bin/bash


if [ $# -ne 1 ]
then
    echo "Usage: ./build-jar.sh <env:dev/prod>"
    echo "Example: ./build-jar.sh dev"
    exit 1
fi

MY_ENV=$1


case $MY_ENV in
  dev|prod)
       echo "Using $MY_ENV"
       ;;
  *)
       echo "Unknown choice: $MY_ENV"
       exit 2
       ;;
esac

#if [ "$MY_ENV" == "dev" ]; then
#  MY_ENV_ALIAS="$MY_ENV"
#elif [ "$MY_ENV" == "prod" ]; then
#  MY_ENV_ALIAS="$MY_ENV"
#else
#  echo
#  exit 2
#fi

MY_JAR_NAME=simple-server-standalone.jar

MY_ALIASES="-A:depstar:env-${MY_ENV}"

clj $MY_ALIASES -m hf.depstar.uberjar target/$MY_JAR_NAME

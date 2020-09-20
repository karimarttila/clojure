#!/bin/bash

curl -H "Content-Type: application/json" -X POST -d '{"ping":"Jee!"}' http://localhost:6161/api/ping

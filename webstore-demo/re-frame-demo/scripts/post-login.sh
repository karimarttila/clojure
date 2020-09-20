#!/bin/bash

curl -H "Content-Type: application/json" -X POST -d '{"email": "jamppa.jamppanen@foo.com", "password":"Jamppa"}' http://localhost:6161/api/login

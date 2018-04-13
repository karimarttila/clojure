#!/bin/bash

curl -H "Content-Type: application/json" -X POST -d '{"email": "jamppa.jamppanen@foo.com", "password":"123"}' http://localhost:3045/login

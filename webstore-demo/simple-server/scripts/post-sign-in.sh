#!/bin/bash

curl -H "Content-Type: application/json" -X POST -d '{"first-name":"Jamppa", "last-name":"Jamppanen", "email": "jamppa.jamppanen@foo.com", "password":"Jamppa"}' http://localhost:6161/signin

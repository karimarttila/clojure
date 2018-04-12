#!/bin/bash

curl -H "Content-Type: application/json" -X POST -d '{"first-name":"Jamppa", "last-name":"Tuominen", "email": "jamppa.tuominen@tieto.com", "password":"123"}' http://localhost:3045/signin

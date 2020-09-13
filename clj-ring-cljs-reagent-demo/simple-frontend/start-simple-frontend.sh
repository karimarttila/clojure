#!/bin/bash

echo "Some Simple Server needs to be listening in port 3045"
cd public
python3 -m http.server
cd ..

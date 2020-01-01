#!/bin/bash

clj -A:cider-clj:dev-src:env-dev-single-node

echo ""
echo "In emacs give command: "
echo "cider-connect host:port"
echo ""
echo "Usefull cider commands:"
echo "cider-load-all-project-ns"


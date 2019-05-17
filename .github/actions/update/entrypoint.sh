#!/bin/sh

set -e 

# Regenerate JSON
node ./missing-routes.js > github-rest-api-routes-not-available-on-github-enterprise-server-2-16.json

# Regenerate README
README=$( node ./index.js )
echo "${README}" > README.md

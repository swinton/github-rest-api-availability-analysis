#!/bin/sh

set -e

jq --raw-output 'to_entries[] | "\(.key)"' github-rest-api-routes-not-available-on-github-enterprise-server-2-16.json

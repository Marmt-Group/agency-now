#!/bin/bash

# deploy to url and then alias, followed by setting scale to at least 1 so it doesn't sleep
# See https://zeit.co/docs/guides/app-lifecycle-and-scalability
# Note, now.json name and alias is required for this to work
now && now alias && now scale marmt.io 1
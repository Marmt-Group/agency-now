#!/bin/bash

# deploy to url and then alias, followed by setting scale to at least 1 so it doesn't sleep
# See https://zeit.co/docs/guides/app-lifecycle-and-scalability
now && now alias && now scale marmt.io 1
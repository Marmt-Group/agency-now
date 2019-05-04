#!/bin/bash

# deploy to url and then alias, followed by setting scale to at least 1 so it doesn't sleep
# See https://zeit.co/docs/guides/app-lifecycle-and-scalability
# Note, now.json name and alias is required for this to work
now -e MAILJET_PUBLIC=@mailjet_public -e MAILJET_PRIVATE=@mailjet_private -e GMAP_KEY=@gmapkey -e GANALYTICS=@ganalytics -e SENTRY_KEY=@sentrykey  && now --target production
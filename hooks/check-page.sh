#!/bin/sh
# pre-push: the page must keep its Place order button
grep -q "Place order" index.html || { echo "check-page: the Place order button is missing"; exit 1; }
echo "check-page: OK"
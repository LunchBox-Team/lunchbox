#!/bin/sh
# pre-commit: stop console.log reaching the repository
if git diff --cached -U0 -- '*.js' | grep -q '^+.*console\.log'; then
  echo "no-console-log: remove console.log before committing"
  exit 1
fi
#!/bin/sh
# commit-msg: Conventional Commits, e.g. "feat: add soup" or "fix(cart): total"
if ! grep -qE '^(feat|fix|docs|style|refactor|test|chore)(\(.+\))?!?: ' "$1"; then
  echo "conventional-commits: start the message with feat:, fix:, docs:, chore: ..."
  exit 1
fi
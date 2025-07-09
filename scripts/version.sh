#!/usr/bin/env bash

# Runs changeset version
npx changeset version
npm run format
git add .
git commit -m "chore: version packages"

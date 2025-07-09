#!/usr/bin/env bash

# Runs changeset version
npx changeset version
git add .
git commit -m "chore: version packages"

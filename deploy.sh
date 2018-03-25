#!/bin/bash

if test $# -lt 1; then
  echo "You need to give the build number."
  exit
fi

echo "Building dist"
gulp build

echo "Updating files"
git checkout master
cp -rf dist/* .
rm -rf dist

echo "Updating master"
git add -A
git commit -m "Build $1"
git push

git checkout develop
echo "Success"

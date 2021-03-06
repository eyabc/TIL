#!/usr/bin/env sh

git add .
git commit -m "$*"
git push origin master

# abort on errors
set -e

# build
yarn docs:build

# navigate into the build output directory
cd .vuepress/dist

# if you are deploying to a custom domain
# echo 'www.example.com' > CNAME

git init
git add -A
git commit -m "$*"

# if you are deploying to https://<USERNAME>.github.io
# git push -f git@github.com:<USERNAME>/<USERNAME>.github.io.git master

# if you are deploying to https://<USERNAME>.github.io/<REPO>
git push -f https://github.com/eyabc/TIL.git master:gh-pages

cd -
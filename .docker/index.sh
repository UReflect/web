#!/bin/sh

rm -rf ./dist ./doc
yarn && yarn build --prod && yarn compodoc
docker build -t ur-web -f .docker/app/Dockerfile ./dist/web
docker build -t ur-web-doc -f .docker/doc/Dockerfile ./doc

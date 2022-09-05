#!bin/sh

set -ex

## Load the environment variables
set -a
. .env.local
set +a

echo "NEXT_FRONTEND_URL          = ${NEXT_FRONTEND_URL}"
echo "NEXT_MONGO_URL             = ${NEXT_MONGO_URL}"
# FUTURE: remove and use just the URL
echo "MONGO_INITDB_DATABASE      = ${MONGO_INITDB_DATABASE}"

cd bootstrap/src

## Seed database
echo 'Seeding database...'
node seed-db.mjs

## Seed files
echo 'Seeding files...'
node seed-fs.mjs

cd ../../

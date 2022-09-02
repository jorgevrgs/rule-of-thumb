#!bin/sh

set -ex

## Load the environment variables
set -a
. .env
set +a

echo "MONGO_INITDB_ROOT_USERNAME = ${MONGO_INITDB_ROOT_USERNAME}"
echo "MONGO_INITDB_ROOT_PASSWORD = ${MONGO_INITDB_ROOT_PASSWORD}"
echo "MONGO_INITDB_DATABASE      = ${MONGO_INITDB_DATABASE}"
echo "MONGO_INITDB_USERNAME      = ${MONGO_INITDB_USERNAME}"
echo "MONGO_INITDB_PASSWORD      = ${MONGO_INITDB_PASSWORD}"
echo "NEXT_FRONTEND_URL          = ${NEXT_FRONTEND_URL}"
echo "NEXT_MONGO_URL             = ${NEXT_MONGO_URL}"

cd bootstrap/src

## Seed database
echo 'Seeding database...'
node seed-db.mjs

## Seed files
echo 'Seeding files...'
node seed-fs.mjs

cd ../../

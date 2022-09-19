#!bin/sh

set -x

## Load the environment variables
set -a
. .env.docker
set +a

# Root user
echo "MONGO_INITDB_ROOT_USERNAME = ${MONGO_INITDB_ROOT_USERNAME}"
echo "MONGO_INITDB_ROOT_PASSWORD = ${MONGO_INITDB_ROOT_PASSWORD}"
# Database user
echo "MONGO_INITDB_DATABASE      = ${MONGO_INITDB_DATABASE}"
echo "MONGO_INITDB_USERNAME      = ${MONGO_INITDB_USERNAME}"
echo "MONGO_INITDB_PASSWORD      = ${MONGO_INITDB_PASSWORD}"

# Next.js
echo "NEXT_FRONTEND_URL          = ${NEXT_FRONTEND_URL}"
echo "NEXT_MONGO_URL             = ${NEXT_MONGO_URL}"

BUILD_VERSION=$(git rev-parse --short HEAD)
echo "BUILD_VERSION              = ${BUILD_VERSION}"
docker build -t rule-of-thumb/app:latest -f Dockerfile .
docker build -t rule-of-thumb/app:$BUILD_VERSION -f Dockerfile .
docker-compose up -d

docker ps

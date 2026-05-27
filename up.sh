#!/usr/bin/env bash

# Bails on error
set -e

# Print command being run
set -x

# Check there is .env
if ! [ -f  ./.env ];then
  cp ops/env-sample .env
fi

# Check Docker is running
if ! docker info > /dev/null 2>&1; then
    echo "❌ Error: Docker is not running"
    echo "💡 Please start Docker Desktop and try again"
    exit 1
fi

echo "Starting local vitepress web server..."

# Install dependencies using npm from Docker container
docker compose run --rm vitepress npm install

# Always rebuild image and recreate container before starting Vitepress web
# server so no cached artifacts are displayed in documentation
docker compose up -d --build --force-recreate

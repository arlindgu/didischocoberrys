#!/bin/bash
APP_NAME="didischocoberrys"
HOST_PORT=3001
CONTAINER_PORT=3000  # Port auf dem die App im Container läuft

echo "Stopping previous instance of $APP_NAME..."
docker stop $APP_NAME || true
echo "Removing previous instance of $APP_NAME..."
docker rm $APP_NAME || true

echo "Pulling changes from Git..."
git pull origin main

echo "Building Docker image for $APP_NAME..."
docker build -t $APP_NAME .

echo "Starting $APP_NAME container..."
docker run -d --name $APP_NAME -p $HOST_PORT:$CONTAINER_PORT $APP_NAME
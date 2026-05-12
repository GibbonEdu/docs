# Docker Setup for Gibbon Documentation

This Docker setup allows developers to run a local VitePress server for viewing Gibbon documentation without needing Node.js and npm to be installed locally.

## Prerequisites

Install Docker Desktop from [docker.com](https://www.docker.com/products/docker-desktop)

## Usage

From the project root, execute the following command to start the VitePress server:

```bash
./up.sh
```

This script will:
* Check if Docker Desktop is running.
* Check `.env` file exists and create it if not.
* Build and start the Vitepress server container

The documentation will be available at **http://localhost:5173**

To stop the server:
```bash
docker-compose down
```

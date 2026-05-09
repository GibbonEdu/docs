# Docker Setup for Gibbon Documentation

This Docker setup allows developers to run VitePress without needing Node.js and npm installed locally.

## Prerequisites

Install Docker Desktop from [docker.com](https://www.docker.com/products/docker-desktop)

## Usage

From the project root:

```bash
./up.sh
```

This script will:
- ✅ Check if Docker is running
- ✅ Verify `docker-compose.yml` exists
- ✅ Build and start the Vitepress server container

The documentation will be available at **http://localhost:5173**

To stop the server:
```bash
docker-compose down
```

ARG NODE_VERSION
FROM node:${NODE_VERSION}-alpine

# Install git and other dependencies
RUN apk add --no-cache git

# Set working directory
WORKDIR /app

# Expose the default VitePress port
EXPOSE 5173

# Run VitePress dev server
CMD ["npm", "run", "docs:dev", "--", "--host", "0.0.0.0"]

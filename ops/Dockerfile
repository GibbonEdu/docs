ARG NODE_VERSION
FROM node:${NODE_VERSION}-alpine

ARG NODE_ENV
ENV NODE_ENV ${NODE_ENV}

# Set working directory
WORKDIR /usr/src/app

# Install git
RUN apk add --no-cache git

# Swtich to non-root user
USER node

# Expose default VitePress port
EXPOSE 5173

# Run VitePress dev server
CMD ["npm", "run", "docs:dev", "--", "--host", "0.0.0.0"]

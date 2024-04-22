# syntax = docker/dockerfile:1

# Use the slim variant of the official Node.js 21.7.3 image as the base
FROM node:21.7.3-slim AS base

# Label the image to identify the fly.io runtime
LABEL fly_launch_runtime="Node.js"

# Set the working directory to /app in the container
WORKDIR /app

# Set the environment to production (this can be overridden at runtime)
ENV NODE_ENV=production

# Install the application dependencies
# Note that we do not need build tools for production if we are not building native modules
COPY package.json package-lock.json ./
RUN npm ci --only=production

# Copy the rest of the application code into the container
COPY . .

# Inform Docker that the container listens on port 3000 at runtime
EXPOSE 3000

# Define the command to run the application using npm start
CMD [ "npm", "start" ]

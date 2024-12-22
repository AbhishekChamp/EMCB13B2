# Dockerfile for MongoDB
FROM mongo:4.4

# Expose default MongoDB port for documentation purposes
EXPOSE 27017

# Copy the initialization script to the Docker container
COPY init.js /docker-entrypoint-initdb.d/
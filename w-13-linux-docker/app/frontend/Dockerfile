# Use the official node image as the base image
FROM node:16

# Set the working directory
WORKDIR /app

# Copy package.json
COPY package.json  ./

# Install dependencies
RUN npm install

# Copy the rest of the application
COPY . .

# Expose port 5173
EXPOSE 5173

# Command to run the development server
CMD ["npm", "run", "dev"]
# Use the official Node.js image as the base image
FROM node:23-alpine

# Set the working directory
WORKDIR /app

# Copy package.json and package-lock.json
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application code
COPY . .

EXPOSE 4001

# Build the React application
RUN npm run build

# Install serve to serve the build folder
RUN npm install -g serve

# Command to run the application in production
CMD ["serve", "-s", "dist", "-l", "4001"]



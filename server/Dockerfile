# Use an official Node.js runtime as a base image
FROM node:14-alpine

# Set the working directory in the container
WORKDIR /usr/src/app

# Copy package.json and package-lock.json to the working directory
COPY package*.json ./

# Install app dependencies
RUN npm install

# Copy the local app files to the container
COPY . .

# Expose port 3000 for the Express app
EXPOSE 3000

# Command to run the application
CMD ["npm", "start"]

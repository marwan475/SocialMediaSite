
FROM node:14-alpine

# Set the working directory in the container
WORKDIR /usr/src/app

# Copy package.json and package-lock.json to the working directory
COPY package*.json ./

# Install app dependencies
RUN npm install

# Copy the local React app files to the container
COPY . .

# Expose port 3000 to the outside world
EXPOSE 8080

# Command to run the application
CMD ["node", "index.js"]
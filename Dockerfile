# Use an official Node.js image
FROM node:18-alpine

# Set the working directory inside the container
WORKDIR /app

# Copy package.json and install dependencies
COPY package.json package-lock.json ./
RUN npm install

# Copy the rest of the application code
COPY . .

# Install TypeScript globally
RUN npm install -g ts-node-dev

# Expose the application port
EXPOSE 3000

# Command to run the application in development mode
CMD ["ts-node-dev", "--respawn", "src/server.ts"]

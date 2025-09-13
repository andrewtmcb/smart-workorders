# Use a production-ready Node.js image
FROM node:20-alpine AS build

# Set the working directory
WORKDIR /app

# Copy package.json and package-lock.json to leverage Docker cache
COPY package*.json ./

# Install dependencies
RUN npm ci

# Copy the rest of your application's source code
COPY . .

# Build the React application
RUN npm run build

# Start a new stage to create a lean production image
FROM node:20-alpine

# Set the working directory
WORKDIR /app

# Copy only the built frontend from the previous stage
COPY --from=build /app/build ./build

# Copy your server script (e.g., server.js) that serves the build and metrics
COPY server.js .

# Expose ports for both the web server and metrics
EXPOSE 3000
EXPOSE 9091

# Command to run the production server
CMD ["node", "server.js"]
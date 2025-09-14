# Use a production-ready Node.js image to build the app
FROM node:20-alpine AS build

# Set the working directory
WORKDIR /app

# Copy package.json and package-lock.json to leverage Docker cache
COPY package*.json ./

# Install dependencies
RUN npm ci

# Copy the rest of your application's source code
COPY . .

# Build the React application. This creates the 'build' folder.
RUN npm run build

# Start a new stage to create a lean production image
FROM node:20-alpine

# Set the working directory
WORKDIR /app

# Copy the server script and the production-ready build folder from the 'build' stage
COPY --from=build /app/build ./build
COPY --from=build /app/node_modules ./node_modules
COPY server.js .

# Expose the web server port
EXPOSE 3000

# Command to run the production server
CMD ["node", "server.js"]

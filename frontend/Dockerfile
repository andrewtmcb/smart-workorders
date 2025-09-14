FROM node:20-alpine AS build
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build

FROM node:20-alpine
WORKDIR /app
COPY --from=build /app/build ./build
COPY server.js .
# Expose ports for both the web server and metrics
EXPOSE 3000
CMD ["node", "server.js"]

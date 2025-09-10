
## Overview
This is the frontend application for Smart Workorders.  
It runs on React and is containerized for Kubernetes.  

The Kubernetes deployment expects the frontend container to listen on port 3000 and be served through a Service that exposes port 80.

---

## Requirements
Make sure you have the following installed:
- Node.js (>= 20)
- npm (>= 10)
- Docker
- kubectl
- Minikube

If you don’t have these, please check the main project README for setup instructions.

---

## Local Development

### Install dependencies
npm install



### Run locally
npm start

This runs the app at http://localhost:3000.

---

## Build and Run in Docker

### Build the image
docker build -t frontend:latest .



### Run the container locally
docker run -p 3000:3000 frontend:latest



---

## Deploy to Minikube

### Step 1: Start Minikube
Windows (PowerShell):
minikube start --driver=docker



Mac (zsh/bash):
minikube start --driver=docker



### Step 2: Point Docker to Minikube
Windows (PowerShell):
minikube docker-env | Invoke-Expression



Mac (zsh/bash):
eval $(minikube docker-env)


### Step 3: Build the image inside Minikube
docker build -t frontend:latest .



### Step 4: Apply Kubernetes configs
kubectl apply -f k8s/frontend.yaml



### Step 5: Access the app
Enable ingress (once per cluster):
minikube addons enable ingress



Get the service URL:
minikube service frontend-service --url





## Common Issues

- If your pod shows `ImagePullBackOff`, make sure you built the image **after pointing Docker to Minikube**.
- If the app doesn’t load on port 80, check logs:
kubectl logs deployment/frontend


- If you change code, rebuild the image and re-apply the config.



# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

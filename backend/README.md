# Backend (FastAPI)

This is the FastAPI backend for SmartOps. It provides APIs for the frontend and can be deployed in Kubernetes using Minikube.

## Prerequisites

- Python 3.11+
- Node.js and npm (for frontend only)
- Docker
- Minikube
- kubectl

## Local Development

Create a virtual environment:

python -m venv venv
.\venv\Scripts\activate # Windows
source venv/bin/activate # Mac/Linux


Install dependencies:

pip install fastapi uvicorn



Run the app locally:

uvicorn main:app --reload --host 0.0.0.0 --port 8000


Test in your browser:

- http://localhost:8000  
- http://localhost:8000/docs (interactive Swagger UI)

## Docker

Build the Docker image:

docker build -t backend:latest .


Run with Docker:

docker run -p 8000:8000 backend:latest


## Kubernetes (Minikube)

Point Docker to Minikube:

**Windows**
minikube docker-env | Invoke-Expression


**Mac/Linux**
eval $(minikube docker-env)


Build inside Minikube:

docker build -t backend:latest .


Deploy:

kubectl apply -f k8s/backend.yaml

Check pods:

kubectl get pods


Expose the service:

minikube service backend-service --url


## Notes

- If you add more dependencies, update the `Dockerfile` to install them with pip or create a `requirements.txt`.
- For frontend-to-backend communication inside Kubernetes, use the service name:
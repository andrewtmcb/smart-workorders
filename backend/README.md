# Backend (FastAPI)

This is the FastAPI backend for **SmartOps**. It provides APIs for the frontend and can be deployed in Kubernetes using Minikube.

---

## Prerequisites

- Python 3.11+
- Node.js and npm (required for frontend development)
- Docker
- Minikube
- kubectl

---

## Local Development

# (Recommended)
Create a file named .env in the backend/ directory of your project. Copy the contents below and fill in your specific values.

VERSION=1.0.0
PROJECT_NAME="Smart WorkOrders API"
ENVIRONMENT=local
BACKEND_CORS_ORIGINS=["http://localhost:3000"]
API_V1_STR=/api/v1
ALLOWED_HOSTS=["localhost", "127.0.0.1"]
SECRET_KEY=your_secret_key_here

DATABASE_HOST=postgres
DATABASE_PORT=5432
DATABASE_USER=smartops
DATABASE_PASSWORD={REDACTED}
DATABASE_NAME=smartops


1. **Create a virtual environment**  
   (Choose the appropriate command for your OS):

   **Windows:**
   ```sh
   python -m venv venv
   .\venv\Scripts\activate
   ```

   **Mac/Linux:**
   ```sh
   python -m venv venv
   source venv/bin/activate
   ```

2. **Install dependencies:**
   ```sh
   pip install -r requirements.txt
   ```

3. **Run the app locally:**
   ```sh
   uvicorn main:app --reload --host 0.0.0.0 --port 8000
   ```

4. **Test in your browser:**
   - [http://localhost:8000](http://localhost:8000)  
   - [http://localhost:8000/docs](http://localhost:8000/docs) (interactive Swagger UI)

---

## Docker

1. **Build the Docker image:**
   ```sh
   docker build -t backend:latest .
   ```

2. **Run with Docker:**
   ```sh
   docker run -p 8000:8000 backend:latest
   ```

---

## Kubernetes (Minikube)

1. **Point Docker to Minikube:**

   **Windows:**
   ```sh
   minikube docker-env | Invoke-Expression
   ```

   **Mac/Linux:**
   ```sh
   eval $(minikube docker-env)
   ```

2. **Build inside Minikube:**
   ```sh
   docker build -t backend:latest .
   ```

3. **Deploy:**
   ```sh
   kubectl apply -f k8s/backend.yaml
   ```

4. **Check pods:**
   ```sh
   kubectl get pods
   ```

5. **Expose the service:**
   ```sh
   minikube service backend-service --url
   ```

---

## Notes

- If you add more dependencies, update the `Dockerfile` to install them with pip or ensure they're listed in `requirements.txt`.
- For frontend-to-backend communication inside Kubernetes, use the backend
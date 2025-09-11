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
- For frontend-to-backend communication inside Kubernetes, use the backend service name.

---

*Feel free to request more sections or customizations!*
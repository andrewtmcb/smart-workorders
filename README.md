# Project Architecture

```
                        ┌────────────┐
                        │  Frontend  │ (React, port 3000)
                        └─────▲──────┘
                              │
                     ┌────────┴─────────┐
                     │ Ingress (NGINX)  │
                     └───────┬──────────┘
             ┌───────────────┼────────────────┐
             │                               │
     ┌───────▼───────┐                ┌───────▼───────┐
     │   Backend     │ (FastAPI,      │  Prometheus   │
     │   API (8000)  │  port 8000)    └──────▲───────┘
     └──────▲───────┘                      │
             │                          ┌───▼───┐
             │                          │Grafana│
             │                          └───────┘
     ┌───────┴─────────────┐
     │ MQTT Broker         │ ← mock IoT signals
     │ (Mosquitto)         │
     └─────────────────────┘
```

---

## Local Development Setup (Backend + Database)

1. **Start the database locally:**

   Using Kubernetes:
   ```sh
   kubectl apply -f k8s/postgres.yaml
   ```

   Or, using Docker Compose:
   ```sh
   docker-compose up -d postgres
   ```

---

## End-to-End Testing (Playwright)

We use **Playwright** to test main frontend workflows and ensure key business processes function correctly.

### Setup

1. Ensure dependencies are installed:

   ```sh
   npm install
   npx playwright install
   ```

---

                        ┌────────────┐
                        │  Frontend  │ (React, port 3000)
                        └─────▲──────┘
                              │
                     ┌────────┴─────────┐
                     │  Ingress (NGINX) │
                     └───────┬──────────┘
             ┌───────────────┼────────────────┐
             │                               │
     ┌───────▼───────┐                ┌───────▼───────┐
     │   Backend     │ (FastAPI, port │   Prometheus  │
     │   API (8000)  │      8000)     └───────▲───────┘
     └───────▲───────┘                      │
             │                          ┌───▼───┐
             │                          │Grafana│
             │                          └───────┘
     ┌───────┴─────────────┐
     │ MQTT Broker (Mosquitto│ ← mock IoT signals
     └──────────────────────┘



### Local Development Setup (Backend + DB)

1. Start the database locally:

kubectl apply -f k8s/postgres.yaml
# or, if using Docker Compose:
docker-compose up -d postgres



## End-to-End Testing (Playwright)

We use **Playwright** to test main frontend workflows and ensure key business processes function correctly.

### Setup

1. Ensure dependencies are installed:

npm install
npx playwright install



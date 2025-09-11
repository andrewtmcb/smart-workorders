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

```bash
kubectl apply -f k8s/postgres.yaml
# or, if using Docker Compose:
docker-compose up -d postgres
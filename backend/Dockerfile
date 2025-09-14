# Use a lightweight Python base
FROM python:3.11-slim

# Set working directory
WORKDIR /app

# Install curl and dependencies
RUN apt-get update && apt-get install -y curl && apt-get clean

# Ensure pip is up-to-date and install dependencies
COPY requirements.txt .
RUN pip install --upgrade pip && pip install --no-cache-dir -r requirements.txt

# Copy source code
COPY . .

# Use a non-root user for security
RUN useradd -m appuser
USER appuser

# Expose port
EXPOSE 8000

# Healthcheck
HEALTHCHECK --interval=10s --timeout=5s --retries=5 CMD curl -f http://localhost:8000 || exit 1

# Run the app with uvicorn
CMD ["uvicorn", "app.main:app", "--host", "0.0.0.0", "--port", "8000", "--reload"]

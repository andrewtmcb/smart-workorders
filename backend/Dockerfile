# Use a lightweight Python base
FROM python:3.11-slim

# Set working directory
WORKDIR /app

# Ensure pip is up-to-date
RUN pip install --upgrade pip

# Install dependencies
COPY requirements.txt .
RUN pip install --no-cache-dir -r requirements.txt

# Copy source code
COPY . .

# Use a non-root user for security
RUN useradd -m appuser
USER appuser

# Expose port
EXPOSE 8000

# Run the app with uvicorn
CMD ["uvicorn", "app:app", "--host", "0.0.0.0", "--port", "8000", "--reload"]

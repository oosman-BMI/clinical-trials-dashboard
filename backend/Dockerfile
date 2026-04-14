# ============================================================
# Twine Pulse — Dockerfile
# Packages the Python backend into a container for AWS ECS
# ============================================================

# Start from an official Python base image (slim = smaller size)
FROM python:3.11-slim

# Set the working directory inside the container
WORKDIR /app

# Copy the requirements file first (allows Docker to cache this layer)
COPY requirements.txt .

# Install all Python dependencies
RUN pip install --no-cache-dir -r requirements.txt

# Copy the rest of the backend code
COPY . .

# Expose port 8000 (the port FastAPI listens on)
EXPOSE 8000

# Command to start the application
CMD ["uvicorn", "api_server:app", "--host", "0.0.0.0", "--port", "8000"]

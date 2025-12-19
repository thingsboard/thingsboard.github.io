---
layout: docwithnav-trendz
title: Trendz Python Executor Configuration
description: How to configure Trendz Python Executor on Windows

---

* TOC
{:toc}

## Overview

Trendz Python Executor is required to run:

* Python Calculation fields
* All prediction models (except Fourier Transformation)
* Code generation for Metric Explorer

Starting from version 1.14.0, the only way to run these features is via Trendz Python Executor using Docker (or Kubernetes).

## Python Executor Standalone Installation

### Step 1: Create Docker Compose File

Create the Docker Compose file with the following configuration:

```yml
version: '3.0'
services:
  mypyexecutor:
    restart: always
    image: "thingsboard/trendz-python-executor:{{ site.release.trendz_ver }}"
    ports:
      - "8181:8181"
    environment:
      SCRIPT_ENGINE_RUNTIME_TIMEOUT: 30000
      EXECUTOR_MANAGER: 1
      EXECUTOR_SCRIPT_ENGINE: 6
      THROTTLING_QUEUE_CAPACITY: 10
      THROTTLING_THREAD_POOL_SIZE: 6
      NETWORK_BUFFER_SIZE: 10485760
    volumes:
      - mytrendz-data/python-executor:/python-executor

```
{: .copy-code}

Explanation of key fields:

* `8181` - Python executor port for communication with Trendz service
* `restart: always` - automatically restarts the executor on failure or system reboot
* `thingsboard/trendz-python-executor:{{ site.release.trendz_ver }}` - Docker image for Trendz Python Executor
* `SCRIPT_ENGINE_RUNTIME_TIMEOUT` - timeout for Python script execution
* `mytrendz-data/python-executor:/python-executor` - mounts the volume `mytrendz-data/python-executor` to Trendz Python Executor additional data directory


### Step 2: Create Volumes

Windows users should use Docker-managed volumes for Trendz data.
Create a Docker volume before executing the Docker run command.
Open “Docker Quickstart Terminal” and run:

```bash
docker volume create mytrendz-data-python-executor
```
{: .copy-code}

**Note:** Replace the volume name `mytrendz-data-python-executor` with the name you plan to use in `docker-compose.yaml`.

### Step 3: Start Python Executor

```bash
docker compose up -d
docker compose logs -f mypyexecutor
```
{: .copy-code}

### Step 4: Connect Trendz to Python Executor

Configure Trendz to communicate with the Python Executor.

Open Notepad as Administrator and edit:

```text
C:\Program Files (x86)\trendz\conf\trendz.yml
```

Locate the `script-engine` block and configure:

```yml
script-engine:
  provider: "${SCRIPT_ENGINE_PROVIDER:DOCKER_CONTAINER}"
  runtime-timeout: "${SCRIPT_ENGINE_TIMEOUT:60000}"
  callback-timeout: "${SCRIPT_ENGINE_TIMEOUT:60000}"
  docker-provider-url: "${SCRIPT_ENGINE_DOCKER_PROVIDER_URL:PYTHON_EXECUTOR_HOST:PYTHON_EXECUTOR_PORT}"
  websocket-buffer-size: "${SCRIPT_ENGINE_WEBSOCKET_BUFFER_SIZE:20971520}"
  websocket-concurrency: "${SCRIPT_ENGINE_WEBSOCKET_CONCURRENCY:5}"
```

Replace `PYTHON_EXECUTOR_HOST` and `PYTHON_EXECUTOR_PORT` with your Python Executor service values and ensure Trendz can reach this network destination.

## How to Migrate Trendz Python Executor 1.13.2 to Trendz Python Executor 1.14.0

If you already have a Python Executor with a version earlier than 1.14.0 connected to Trendz, you should migrate it before updating Trendz to 1.14.0.

### Modify Docker Compose File

Locate the `docker-compose.yaml` file from which the Python Executor was launched.

Change the Python Executor image tag to version 1.14.0:

```yml
    image: "thingsboard/trendz-python-executor:1.14.0"
```
{: .copy-code}

Add the following lines at the end of the Python Executor configuration:

```yml
   volumes:
      - mytrendz-data/python-executor:/python-executor
```
{: .copy-code}

Add the following lines at the end of the Docker Compose file:

```yml
volumes:
  mytrendz-data-python-executor:
    external: true
```
{: .copy-code}

The final `docker-compose.yaml` should look like:

```yml
version: '3.0'
services:
  mypyexecutor:
    restart: always
    image: "thingsboard/trendz-python-executor:1.14.0"
    ports:
      - "8181:8181"
    environment:
      SCRIPT_ENGINE_RUNTIME_TIMEOUT: 30000
      EXECUTOR_MANAGER: 1
      EXECUTOR_SCRIPT_ENGINE: 6
      THROTTLING_QUEUE_CAPACITY: 10
      THROTTLING_THREAD_POOL_SIZE: 6
      NETWORK_BUFFER_SIZE: 10485760
    volumes:
      - mytrendz-data/python-executor:/python-executor
volumes:
  mytrendz-data-python-executor:
    external: true
```
{: .copy-code}

### Create Volumes for Python Executor

Windows users should use Docker-managed volumes for Trendz data.
Create a Docker volume before executing the Docker run command.
Open “Docker Quickstart Terminal” and run:

```bash
docker volume create mytrendz-data-python-executor
```
{: .copy-code}

**Note:** Replace the volume name `mytrendz-data-python-executor` with the name you plan to use in `docker-compose.yaml`.

### Restart Python Executor

Restart the Python Executor to apply the changes:

```bash
docker compose restart -d
docker compose logs -f mypyexecutor
```
{: .copy-code}

## How to Connect Additional Libraries to the Python Executor

If necessary, you can add additional Python libraries to the **Python Executor** and use them in your Trendz Calculation Fields or Trendz Custom Prediction Models.

For example, if you want to add the **`emoji`** library (specific version 2.2.0), follow these steps.

### Step 1. Locate the Volume

The Python Executor data is mapped to a local folder via Docker volumes. By default:

```powershell
cd %USERPROFILE%\mytrendz-data\python-executor
```
{: .copy-code}

### Step 2. Add a `requirements.txt` File

Create a file named `requirements.txt` in this folder with the library you need. For example:

```powershell
echo emoji==2.2.0 > requirements.txt
```

### Step 3. Restart the Docker Container

After updating `requirements.txt`, restart the Python Executor container:

```powershell
docker compose ps 
docker compose restart mypyexecutor
```

### Step 4. Verify Installation

Check the logs to ensure the library installed successfully:

```powershell
docker compose logs mypyexecutor
```

You should see something like:

```text
Installing custom Python requirements...
Requirement already satisfied: emoji==2.2.0 in /usr/local/lib/python3.9/site-packages
```

## Next steps

{% assign currentGuide = "InstallationOptions" %}{% include templates/trndz-guides-banner.md %}

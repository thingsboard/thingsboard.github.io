---
layout: docwithnav-trendz
title: Trendz Python Executor Configuration
description: How to configure Trendz Python Executor on Linux or Mac OS

---

* TOC
{:toc}

## Overview

Trendz Python Executor is required to run:

* Python Calculation fields
* All prediction models (except Fourier Transformation)
* Code generation for Metric Explorer

Starting from version 1.14.0, the only way to run these features is via Trendz Python Executor using Docker (or Kubernetes).

## Prerequisites

### Windows

{% include templates/trendz/install/docker-requirements-windows.md %}

### Linux

{% include templates/trendz/install/docker-requirements-linux.md %}

## Python Executor Standalone Installation

### Step 1: Create Docker Compose File

Create the Docker Compose file with the following configuration:

```yml
services:
  trendz-python-executor:
    restart: always
    image: "thingsboard/trendz-python-executor:{{ site.release.trendz_ver }}"
    ports:
      - "8181:8181"
    environment:
      EXECUTOR_MANAGER: 1
      EXECUTOR_SCRIPT_ENGINE: 6
      THROTTLING_QUEUE_CAPACITY: 10
      THROTTLING_THREAD_POOL_SIZE: 6
      NETWORK_BUFFER_SIZE: 5242880
    volumes:
      - trendz-python-executor-conf:/python-executor-config-files
      - trendz-python-executor-data:/data
```
{: .copy-code}

Explanation of key fields:

* `8181` - Python executor port for communication with Trendz service
* `restart: always` - automatically restarts the executor on failure or system reboot
* `thingsboard/trendz-python-executor:{{ site.release.trendz_ver }}` - Docker image for Trendz Python Executor
* `trendz-python-executor-conf:/python-executor-config-files` - mounts the volume ``trendz-python-executor-conf` to Trendz Python Executor directory with configuration files
* `trendz-python-executor-data:/data` - mounts the volume `trendz-python-executor-data` to Trendz Python Executor additional data directory

### Step 2: Start Python Executor

```bash
docker compose up -d
docker compose logs -f trendz-python-executor
```
{: .copy-code}

### Step 3: Connect Trendz to Python Executor

* **Linux or Mac OS**

Configure Trendz to communicate with the Python Executor.

Edit `/usr/share/trendz/conf/trendz.conf` and add:

```bash
export SCRIPT_ENGINE_TIMEOUT=30000
export SCRIPT_ENGINE_PROVIDER=DOCKER_CONTAINER
export SCRIPT_ENGINE_DOCKER_PROVIDER_URL=PYTHON_EXECUTOR_HOST:PYTHON_EXECUTOR_PORT
```
{: .copy-code}

Replace `PYTHON_EXECUTOR_HOST` and `PYTHON_EXECUTOR_PORT` with your Python Executor service values and ensure Trendz can reach this network destination.

* **Windows**

Open Notepad as Administrator and edit:

```text
C:\Program Files (x86)\trendz\conf\trendz.yml
```
{: .copy-code}

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

### Step 1. Modify Docker Compose File

Locate the `docker-compose.yml` file from which the Python Executor was launched.

Change the Python Executor image tag to version 1.14.0 and update the `volumes` section to include configuration and data directories.

The final `docker-compose.yml` should look like this:

```yml
services:
  trendz-python-executor:
    restart: always
    image: "thingsboard/trendz-python-executor:{{ site.release.trendz_ver }}"
    ports:
      - "8181:8181"
    environment:
      EXECUTOR_MANAGER: 1
      EXECUTOR_SCRIPT_ENGINE: 6
      THROTTLING_QUEUE_CAPACITY: 10
      THROTTLING_THREAD_POOL_SIZE: 6
      NETWORK_BUFFER_SIZE: 5242880
    volumes:
      - trendz-python-executor-conf:/python-executor-config-files
      - trendz-python-executor-data:/data
```
{: .copy-code}

### Step 2. Restart Python Executor

Restart the Python Executor to apply the changes:

```bash
docker compose up -d
docker compose logs -f trendz-python-executor
```
{: .copy-code}

## How to Connect Additional Libraries to the Python Executor

If necessary, you can add additional Python libraries to the **Python Executor** and use them in your Trendz Calculation Fields or Trendz Custom Prediction Models.

For example, if you want to add the **`emoji`** library (specific version 2.2.0), follow these steps.

### Step 1. Open a shell in the running container

```bash
docker compose exec trendz-python-executor bash
```

### Step 2. Add library to `requirements.txt`

You need to append the library name and version to the `requirements.txt` file located in your configuration directory (`/python-executor-config-files`):

```bash
echo 'emoji==2.2.0' >> /python-executor-config-files/requirements.txt
```
{: .copy-code}

After append all necessary dependencies type `exit` to exit from a shell.

### Step 3. Restart the Docker Container

Find the container name and restart it:
```bash
docker compose restart trendz-python-executor
```
{: .copy-code}

### Step 4. Verify Installation

Check the logs to ensure the library was installed successfully:

```bash
docker compose logs trendz-python-executor
```
{: .copy-code}

You should see:

```text
Installing custom Python requirements...
Requirement already satisfied: emoji==2.2.0 in /usr/local/lib/python3.9/site-packages
```

After the container restarts, you can import and use the custom libraries in your Trendz Calculation Fields or Trendz Custom Prediction Models.

## Next steps

{% assign currentGuide = "InstallationOptions" %}{% include templates/trndz-guides-banner.md %}

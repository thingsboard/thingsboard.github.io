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
      - ~/.mytrendz-data/python-executor:/python-executor
```
{: .copy-code}

Explanation of key fields:

* `8181` - Python executor port for communication with Trendz service
* `restart: always` - automatically restarts the executor on failure or system reboot
* `thingsboard/trendz-python-executor:{{ site.release.trendz_ver }}` - Docker image for Trendz Python Executor
* `SCRIPT_ENGINE_RUNTIME_TIMEOUT` - timeout for Python script execution
* `~/.mytrendz-data/python-executor:/python-executor` - mounts the volume `~/.mytrendz-data/python-executor` to Trendz Python Executor additional data directory

### Step 2: Create Volumes

Run the following commands before starting the Docker container. These commands also change the owner of the newly
created folders to the Docker container user. The `chown` command requires *sudo* permissions and will prompt for your password:

```bash
mkdir -p ~/.mytrendz-data && sudo chown -R 799:799 ~/.mytrendz-data
mkdir -p ~/.mytrendz-data/python-executor && sudo chown -R 799:799 ~/.mytrendz-data/python-executor
```
{: .copy-code}

**Note:** Replace the directory `~/.mytrendz-data` with the directories you plan to use in `docker-compose.yaml`.

### Step 3: Start Python Executor

```bash
docker compose up -d
docker compose logs -f mypyexecutor
```
{: .copy-code}

### Step 4: Connect Trendz to Python Executor

Configure Trendz to communicate with the Python Executor.

Edit `/usr/share/trendz/conf/trendz.conf` and add:

```bash
export SCRIPT_ENGINE_TIMEOUT=30000
export SCRIPT_ENGINE_PROVIDER=DOCKER_CONTAINER
export SCRIPT_ENGINE_DOCKER_PROVIDER_URL=PYTHON_EXECUTOR_HOST:PYTHON_EXECUTOR_PORT
```
{: .copy-code}

Replace `PYTHON_EXECUTOR_HOST` and `PYTHON_EXECUTOR_PORT` with actual host and port values.

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
      - ~/.mytrendz-data/python-executor:/python-executor
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
      - ~/.mytrendz-data/python-executor:/python-executor
```
{: .copy-code}

### Create Volumes for Python Executor

Run the following commands before starting the Docker container. These commands also change the owner of the newly
created folders to the Docker container user. The `chown` command requires *sudo* permissions and will prompt for your password:

```bash
mkdir -p ~/.mytrendz-data && sudo chown -R 799:799 ~/.mytrendz-data
mkdir -p ~/.mytrendz-data/python-executor && sudo chown -R 799:799 ~/.mytrendz-data/python-executor
```
{: .copy-code}

**Note:** Replace the directory `~/.mytrendz-data` with the directories you plan to use in `docker-compose.yaml`.

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

The volume is usually at:

```bash
cd ~/.mytrendz-data/python-executor
```

### Step 2. Add a `requirements.txt` File

Create the file with the library:

```bash
echo 'emoji==2.2.0' > requirements.txt
```

### Step 3. Restart the Docker Container

Find the container name and restart it:

```bash
docker compose ps 
docker compose restart mypyexecutor
```

### Step 4. Verify Installation

Check the logs:

```bash
docker compose logs mypyexecutor
```

You should see:

```text
Installing custom Python requirements...
Requirement already satisfied: emoji==2.2.0 in /usr/local/lib/python3.9/site-packages
```

After the container restarts, you can import and use the custom libraries in your Trendz Calculation Fields or Trendz Custom Prediction Models.

## Next steps

{% assign currentGuide = "InstallationOptions" %}{% include templates/trndz-guides-banner.md %}

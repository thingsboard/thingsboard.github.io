---
layout: docwithnav-trendz
assignees:
- ashvayka
title: Installing ThingsBoard Trendz Analytics using Docker (Windows)
description: Installing ThingsBoard Trendz Analytics using Docker (Windows)

---

* TOC
{:toc}


This guide will help you to install and start Trendz Analytics using Docker on Windows. 

## Prerequisites

- [Install Docker Toolbox for Windows](https://docker-docs.uclv.cu/toolbox/toolbox_install_windows/)

## Step 1. Obtain the license key 

We assume you have already chosen subscription plan for Trendz and have license key. If not, please get your [Free Trial license](/pricing/?section=trendz-options&product=trendz-self-managed&solution=trendz-pay-as-you-go) before you proceed.
See [How-to get pay-as-you-go subscription](https://www.youtube.com/watch?v=dK-QDFGxWek){:target="_blank"} for more details.

Note: We will reference the license key you have obtained during this step as PUT_YOUR_LICENSE_SECRET_HERE guide.

## Step 2. Running Trendz service

##### Docker Compose setup

Make sure your have [logged in](https://docs.docker.com/engine/reference/commandline/login/) to docker hub using command line.

Create docker compose file for Trendz Analytics service:

```text
docker-compose.yml
```
{: .copy-code}

Add the following line to the yml file. Don't forget to replace “PUT_YOUR_LICENSE_SECRET_HERE” with your **license secret obtained on the first step**

```yml

version: '3.0'
services:
  mytrendz:
    restart: always
    image: "thingsboard/trendz:{{ site.release.trendz_ver }}"
    ports:
      - "8888:8888"
    environment:
      TB_API_URL: http://10.0.0.101:8080
      TRENDZ_LICENSE_SECRET: PUT_YOUR_LICENSE_SECRET_HERE
      TRENDZ_LICENSE_INSTANCE_DATA_FILE: /data/license.data
      SPRING_DATASOURCE_URL: jdbc:postgresql://postgres:5432/trendz
      SPRING_DATASOURCE_USERNAME: postgres
      SPRING_DATASOURCE_PASSWORD: postgres
      SCRIPT_ENGINE_PROVIDER: DOCKER_CONTAINER
      SCRIPT_ENGINE_DOCKER_PROVIDER_URL: mypyexecutor:8080
      SCRIPT_ENGINE_TIMEOUT: 30000
    volumes:
      - mytrendz-data:/data
      - mytrendz-logs:/var/log/trendz
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
  postgres:
    restart: always
    image: "postgres:15"
    ports:
      - "5432"
    environment:
      POSTGRES_DB: trendz
      POSTGRES_PASSWORD: postgres
    volumes:
      - mytrendz-data/db:/var/lib/postgresql/data
volumes:
  mytrendz-data:
    external: true
  mytrendz-logs:
    external: true
  mytrendz-data-db:
    external: true
```
{: .copy-code}

Where: 
    
- `TB_API_URL` - url for connecting to ThingsBoard Rest API (for example http://10.5.0.11:8080). Note that ThingsBoard IP address should be resolvable from Trendz docker container
- `PUT_YOUR_LICENSE_SECRET_HERE` - placeholder for your license secret obtained on the first step
- `8888:8888`            - connect local port 8888 to exposed internal HTTP port 8888
- `mytrendz-data:/data`   - mounts the volume `mytrendz-data` to Trendz data directory
- `mytrendz-data/db:/var/lib/postgresql/datad`   - mounts the volume `mytrendz-data/db` to Postgres data directory
- `mytrendz-logs:/var/log/trendz`   - mounts the volume `mytrendz-logs` to Trendz logs directory
- `mytrendz`             - friendly local name of this machine
- `--restart always`        - automatically start Trendz in case of system reboot and restart in case of failure.
- `thingsboard/trendz:{{ site.release.trendz_ver }}`          - Trendz docker image
- `thingsboard/trendz-python-executor:{{ site.release.trendz_ver }}`          - Trendz python script executor docker image
- `SCRIPT_ENGINE_RUNTIME_TIMEOUT`          - Python script execution timeout
    
##### Setup Docker volumes    
    
Windows users should use docker managed volume for Trendz DataBase. Create docker volume (for ex. `mytrendz-data`) before 
executing docker run command: Open “Docker Quickstart Terminal”. Execute the following command to create docker volume:

```yml
docker volume create mytrendz-data
docker volume create mytrendz-data-db
docker volume create mytrendz-logs
```
{: .copy-code}

**NOTE**: replace directory ~/.mytrendz-data and ~/.mytrendz-logs with directories you’re planning to used in docker-compose.yml.

##### Running service

{% assign serviceName = "trendz" %}
{% include templates/install/docker/docker-compose-up.md %}
    
After executing this command you can open `http://{your-host-ip}:8888` in you browser (for ex. `http://localhost:8888`). You should see Trendz login page.
   
##### Authentication

For first authentication you need to use **Tenant Administrator** credentials from your **ThingsBoard**

Trendz uses ThingsBoard as an authentication service. During first sign in ThingsBoard service should be also available 
to validate credentials.

## Detaching, stop and start commands

{% assign serviceName = "trendz" %}
{% assign serviceFullName = "Trendz" %}
{% include templates/install/docker/detaching-stop-start-commands.md %}

## Troubleshooting

### DNS issues

{% include templates/troubleshooting/dns-issues-windows.md %}

## Next steps

{% assign currentGuide = "InstallationOptions" %}{% include templates/trndz-guides-banner.md %}
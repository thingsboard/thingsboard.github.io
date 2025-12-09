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

{% include templates/trendz/install/docker-requirements-windows.md %}
{% include templates/trendz/install/thingsboard-requirements.md %}

## Installation Steps

### Step 1. Activate Trendz Analytics

{% include templates/trendz/install/activate-trendz-license.md %}

### Step 2. Docker Compose setup

Create a docker compose file for Trendz Analytics service:

```text
docker-compose.yml
```
{: .copy-code}

Add the following configuration to the YAML file.

```yml
services:
  trendz:
    restart: always
    image: "thingsboard/trendz:1.14.0"
    ports:
      - "8888:8888"
    environment:
      SPRING_DATASOURCE_URL: jdbc:postgresql://trendz-postgres:5432/trendz
      SPRING_DATASOURCE_USERNAME: postgres
      SPRING_DATASOURCE_PASSWORD: postgres
      SCRIPT_ENGINE_DOCKER_PROVIDER_URL: trendz-python-executor:8181
      SCRIPT_ENGINE_TIMEOUT: 30000
    volumes:
      - trendz-conf:/trendz-config-files
      - trendz-data:/data
    depends_on:
      - trendz-postgres
  trendz-python-executor:
    restart: always
    image: "thingsboard/trendz-python-executor:1.14.0"
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
  trendz-postgres:
    restart: always
    image: "postgres:16"
    ports:
      - "5432:5432"
    environment:
      POSTGRES_DB: trendz
      POSTGRES_PASSWORD: postgres
    volumes:
      - trendz-postgres-data:/var/lib/postgresql/data
volumes:
  trendz-conf:
    name: tb-trendz-conf
    driver: local
  trendz-data:
    name: tb-trendz-data
    driver: local
  trendz-python-executor-conf:
    name: tb-python-executor-conf
    driver: local
  trendz-python-executor-data:
    name: tb-python-executor-data
    driver: local
  trendz-postgres-data:
    name: tb-trendz-postgres-data
    driver: local
```
{: .copy-code}

Where:

- `8888:8888` - connect local port 8888 to exposed internal HTTP port 8888
- `trendz-conf:/trendz-config-files` - mounts the volume `trendz-conf` to Trendz directory with the configuration files
- `trendz-data:/data` - mounts the volume `trendz-data` to Trendz data directory
- `trendz-postgres-data:/var/lib/postgresql/data` - mounts the volume `trendz-postgres-data` to Postgres data directory
- `trendz` - name of the Trendz Docker service
- `--restart always` - automatically start Trendz in case of system reboot and restart in case of failure.
- `thingsboard/trendz:{{ site.release.trendz_ver }}` - Trendz docker image
- `thingsboard/trendz-python-executor:{{ site.release.trendz_ver }}` - Trendz python script executor docker image
- `SCRIPT_ENGINE_TIMEOUT` - Python script execution timeout

### Step 3. Start Trendz service

{% assign serviceName = "trendz" %}
{% include templates/install/docker/docker-compose-up.md %}

After executing this command you can open `http://{your-host-ip}:8888` in your browser (for ex. `http://localhost:8888`).
You should see Trendz login page.

### Step 4. Sync ThingsBoard With Trendz

{% include templates/trendz/install/sync-with-tb.md %}

## Authentication

{% include templates/trendz/install/authentication.md %}

## Detaching, stop and start commands

{% assign serviceName = "trendz" %}
{% assign serviceFullName = "Trendz" %}
{% include templates/install/docker/detaching-stop-start-commands.md %}

## Upgrade Trendz Service

{% capture upgrade_version_by_version%}
**Note, that you can upgrade Trendz from any version to the latest at once (for example, 1.2.0 -> {{ site.release.trendz_ver }} ,etc).**
{% endcapture %}
{% include templates/info-banner.md content=upgrade_version_by_version %}

Below is an example of how to upgrade from any Trendz version to {{ site.release.trendz_ver }}

* Create a dump of your database:

```bash
docker compose exec trendz-postgres sh -c "pg_dump -U postgres trendz > /var/lib/postgresql/data/trendz_dump"
```
{: .copy-code}

When a new Trendz release is available, follow these steps to update your installation without losing data:

{% capture old_manifests_info %}
**If you are upgrading using previous version of deployment files, make sure to follow steps described in this [instruction](/docs/trendz/install/old-docker-migrate-windows/) first.**
{% endcapture %}
{% include templates/warn-banner.md content=old_manifests_info %}

1. Change the version of the `thingsboard/trendz` and `thingsboard/trendz-python-executor` in the `docker-compose.yml` file to the {{ site.release.trendz_ver }}.

2. Execute the following commands:

```bash
docker pull thingsboard/trendz:{{ site.release.trendz_ver }}
docker compose stop trendz
docker compose run --rm -e UPGRADE_TRENDZ=true trendz
docker compose up -d
```
{: .copy-code}

## Troubleshooting

### DNS issues

{% include templates/troubleshooting/dns-issues-windows.md %}

## Post-installation steps

{% include templates/trendz/install/post-installation-steps.md %}

## Next steps

{% assign currentGuide = "InstallationOptions" %}{% include templates/trndz-guides-banner.md %}
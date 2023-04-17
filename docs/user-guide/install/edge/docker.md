---
layout: docwithnav-edge
title: Installing ThingsBoard Edge using Docker (Linux or Mac OS)
description: Installing ThingsBoard Edge using Docker (Linux or Mac OS)

---

* TOC
{:toc}

{% include templates/edge/install/compatibility-warning-general.md %}

{% assign docsPrefix = "edge/" %}

This guide will help you to install and start ThingsBoard Edge using Docker on Linux or Mac OS.

{% include templates/edge/install/prerequisites.md %}

#### Docker installation

- [Install Docker CE](https://docs.docker.com/engine/install/){:target="_blank"}
- [Install Docker Compose](https://docs.docker.com/compose/install/){:target="_blank"}

{% include templates/install/docker-install-note.md %}

{% include templates/edge/install/hardware-requirements.md %}

### Step 1. Running ThingsBoard Edge

{% include templates/edge/install/docker-images-location.md %}

Create docker compose file for ThingsBoard Edge service:

```text
nano docker-compose.yml
```
{: .copy-code}

Add the following lines to the yml file:

```yml
version: '3.0'
services:
  mytbedge:
    restart: always
    image: "thingsboard/tb-edge:{{ site.release.edge_full_ver }}"
    ports:
      - "8080:8080"
      - "1883:1883"
      - "5683-5688:5683-5688/udp"
    environment:
      SPRING_DATASOURCE_URL: jdbc:postgresql://postgres:5432/tb-edge
      CLOUD_ROUTING_KEY: PUT_YOUR_EDGE_KEY_HERE # e.g. 19ea7ee8-5e6d-e642-4f32-05440a529015
      CLOUD_ROUTING_SECRET: PUT_YOUR_EDGE_SECRET_HERE # e.g. bztvkvfqsye7omv9uxlp
      CLOUD_RPC_HOST: PUT_YOUR_CLOUD_IP # e.g. 192.168.1.250 or demo.thingsboard.io
    volumes:
      - ~/.mytb-edge-data:/data
      - ~/.mytb-edge-logs:/var/log/tb-edge
  postgres:
    restart: always
    image: "postgres:12"
    ports:
      - "5432"
    environment:
      POSTGRES_DB: tb-edge
      POSTGRES_PASSWORD: postgres
    volumes:
      - ~/.mytb-edge-data/db:/var/lib/postgresql/data
```
{: .copy-code}

{% include templates/edge/install/docker_compose_details_explain.md %}

{% include templates/install/docker/docker-create-folders-sudo-explained.md %}

```
mkdir -p ~/.mytb-edge-logs && sudo chown -R 799:799 ~/.mytb-edge-logs
```
{: .copy-code}

```
mkdir -p ~/.mytb-edge-data && sudo chown -R 799:799 ~/.mytb-edge-data
```
{: .copy-code}

**NOTE**: Replace directory `~/.mytb-edge-data` and `~/.mytb-edge-logs` with directories you’re planning to use in `docker-compose.yml`.

{% assign serviceName = "tbedge" %}
{% include templates/install/docker/docker-compose-up.md %}

### Step 2. Open ThingsBoard Edge UI

{% include templates/edge/install/open-edge-ui.md %}

### Step 3. Detaching, stop and start commands

{% assign serviceFullName = "ThingsBoard Edge" %}
{% include templates/install/docker/detaching-stop-start-commands.md %}

## Troubleshooting

{% include templates/edge/install/docker-troubleshooting.md %}

## Next Steps

{% include templates/edge/install/next-steps.md %}




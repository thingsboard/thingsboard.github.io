---
layout: docwithnav-pe-edge
title: Installing ThingsBoard Edge using Docker (Linux or Mac OS)
description: Installing ThingsBoard Edge using Docker (Linux or Mac OS)

---

* TOC
{:toc}

{% include templates/edge/install/compatibility-warning-general.md %}

{% assign docsPrefix = "pe/edge/" %}

This guide will help you to install and start ThingsBoard Edge using Docker on Linux or Mac OS.

{% include templates/edge/install/prerequisites.md %}

### Docker installation

- [Install Docker CE](https://docs.docker.com/engine/install/){:target="_blank"}
- [Install Docker Compose](https://docs.docker.com/compose/install/){:target="_blank"}

{% include templates/install/docker-install-note.md %}

## Guided Installation Using ThingsBoard Server Pre-configured Instructions

{% include templates/edge/install/tb-server-pre-configured-install-instructions.md %}

{% include templates/edge/install/manual-install-instructions-intro.md %}

### Step 1. Running ThingsBoard Edge

{% include templates/edge/install/docker-images-location.md %}

{% include templates/edge/install/copy-edge-credentials.md %}

Create docker compose file for ThingsBoard Edge service:

```text
nano docker-compose.yml
```
{: .copy-code}

Add the following lines to the yml file:

```yml
version: '3.8'
services:
  mytbedge:
    restart: always
    image: "thingsboard/tb-edge-pe:{{ site.release.pe_edge_full_ver }}"
    ports:
      - "8080:8080"
      - "1883:1883"
      - "5683-5688:5683-5688/udp"
    environment:
      SPRING_DATASOURCE_URL: jdbc:postgresql://postgres:5432/tb-edge
      EDGE_LICENSE_INSTANCE_DATA_FILE: /data/instance-edge-license.data
      CLOUD_ROUTING_KEY: PUT_YOUR_EDGE_KEY_HERE # e.g. 19ea7ee8-5e6d-e642-4f32-05440a529015
      CLOUD_ROUTING_SECRET: PUT_YOUR_EDGE_SECRET_HERE # e.g. bztvkvfqsye7omv9uxlp
      CLOUD_RPC_HOST: PUT_YOUR_CLOUD_IP # e.g. 192.168.1.1 or thingsboard.cloud
      CLOUD_RPC_SSL_ENABLED: 'false' # set it to 'true' if you are connecting edge to thingsboard.cloud 
    volumes:
      - tb-edge-data:/data
      - tb-edge-logs:/var/log/tb-edge
  postgres:
    restart: always
    image: "postgres:15"
    ports:
      - "5432"
    environment:
      POSTGRES_DB: tb-edge
      POSTGRES_PASSWORD: postgres
    volumes:
      - tb-edge-postgres-data:/var/lib/postgresql/data

volumes:
  tb-edge-data:
    name: tb-edge-data
  tb-edge-logs:
    name: tb-edge-logs
  tb-edge-postgres-data:
    name: tb-edge-postgres-data
```
{: .copy-code}

{% include templates/edge/install/docker_compose_details_explain.md %}

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




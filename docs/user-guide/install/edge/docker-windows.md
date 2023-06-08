---
layout: docwithnav-edge
title: Installing ThingsBoard Edge using Docker (Windows)
description: Installing ThingsBoard Edge using Docker (Windows)
---

* TOC
{:toc}

{% include templates/edge/install/compatibility-warning-general.md %}

{% assign docsPrefix = "edge/" %}

This guide will help you to install and start ThingsBoard Edge using Docker on Windows. 

{% include templates/edge/install/prerequisites.md %}

#### Docker installation

- [Install Docker Toolbox for Windows](https://docs.docker.com/toolbox/toolbox_install_windows/){:target="_blank"}

{% include templates/edge/install/hardware-requirements.md %}

### Step 1. Running ThingsBoard Edge

{% include templates/edge/install/docker-images-location.md %}

Windows users should use docker managed volume for ThingsBoard Edge DataBase. 
Create docker volume (for ex. `mytb-edge-data`) before executing docker run command:
Open "Docker Quickstart Terminal". Execute the following command to create docker volume:

``` 
docker volume create mytb-edge-data
docker volume create mytb-edge-logs
docker volume create mytb-edge-data-db
```
{: .copy-code}

Create docker compose file for ThingsBoard Edge service:

```text
docker-compose.yml
```
{: .copy-code}

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
      - mytb-edge-data:/data
      - mytb-edge-logs:/var/log/tb-edge
  postgres:
    restart: always
    image: "postgres:12"
    ports:
      - "5432"
    environment:
      POSTGRES_DB: tb-edge
      POSTGRES_PASSWORD: postgres
    volumes:
      - mytb-edge-data-db:/var/lib/postgresql/data
volumes:
  mytb-edge-data:
    external: true
  mytb-edge-logs:
    external: true
  mytb-edge-data-db:
    external: true
```
{: .copy-code}

{% include templates/edge/install/docker_compose_details_explain.md %}

{% assign serviceName = "tbedge" %}
{% include templates/install/docker/docker-compose-up.md %}

In order to get access to necessary resources from external IP/Host on Windows machine, please execute the following commands:
``` 
set PATH=%PATH%;"C:\Program Files\Oracle\VirtualBox"
VBoxManage controlvm "default" natpf1 "tcp-port8080,tcp,,8080,,8080"  
VBoxManage controlvm "default" natpf1 "tcp-port1883,tcp,,1883,,1883"
VBoxManage controlvm "default" natpf1 "tcp-port5683,tcp,,5683,,5683"
```
{: .copy-code}

Where:
- `C:\Program Files\Oracle\VirtualBox` - path to your VirtualBox installation directory

### Step 2. Open ThingsBoard Edge UI

{% include templates/edge/install/open-edge-ui.md %}

### Step 3. Detaching, stop and start commands

{% assign serviceName = "tbedge" %}
{% assign serviceFullName = "ThingsBoard Edge" %}
{% include templates/install/docker/detaching-stop-start-commands.md %}

## Troubleshooting

### DNS issues

{% include templates/troubleshooting/dns-issues-windows.md %}

## Next Steps

{% include templates/edge/install/next-steps.md %}

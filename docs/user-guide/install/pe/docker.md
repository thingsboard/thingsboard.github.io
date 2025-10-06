---
layout: docwithnav-pe
assignees:
- ashvayka
title: Installing ThingsBoard PE using Docker (Linux or MacOS)
description: Installing ThingsBoard PE IoT Platform using Docker (Linux or MacOS)
redirect_from: "/docs/pe/user-guide/install/docker/"
---

* TOC
{:toc}


This guide will help you to install and start ThingsBoard Professional Edition (PE) using Docker and Docker Compose on Linux or MacOS. 
This guide covers standalone ThingsBoard PE installation. 
If you are looking for a cluster installation instruction, please visit [cluster setup page](/docs/user-guide/install/pe/cluster-setup/).  

## Prerequisites

{% include templates/install/docker-install.md %}

{% include templates/install/docker-install-note.md %}

## Step 1. Obtain the license key 

We assume you have already chosen your subscription plan or decided to purchase a perpetual license. 
If not, please navigate to [pricing](/pricing/) page to select the best license option for your case and get your license. 
See [How-to get pay-as-you-go subscription](https://www.youtube.com/watch?v=dK-QDFGxWek){:target="_blank"} or [How-to get perpetual license](https://www.youtube.com/watch?v=GPe0lHolWek){:target="_blank"} for more details.

Note: We will reference the license key you have obtained during this step as PUT_YOUR_LICENSE_SECRET_HERE later in this guide.

## Step 2. Choose ThingsBoard queue service

{% include templates/install/install-queue.md %}

{% capture contenttogglespecqueue %}
In Memory <small>(built-in and default)</small>%,%inmemory%,%templates/install/pe-docker-queue-in-memory.md%br%
Kafka <small>(recommended for on-prem, production installations)</small>%,%kafka%,%templates/install/pe-docker-queue-kafka.md%br%
Confluent Cloud <small>(Event Streaming Platform based on Kafka)</small>%,%confluent-cloud%,%templates/install/pe-docker-queue-confluent-cloud.md{% endcapture %}

{% include content-toggle.liquid content-toggle-id="ubuntuThingsboardQueue" toggle-spec=contenttogglespecqueue %}

Where:

- `PUT_YOUR_LICENSE_SECRET_HERE` - placeholder for your license secret obtained on the third step
- `8080:8080`            - connect local port 8080 to exposed internal HTTP port 8080
- `1883:1883`            - connect local port 1883 to exposed internal MQTT port 1883
- `8883:8883`            - connect local port 8883 to exposed internal MQTT over SSL port 8883
- `7070:7070`            - connect local port 7070 to exposed internal Edge RPC port 7070
- `9090:9090`            - connect local port 9090 to exposed internal Remote Integration port 9090
- `5683-5688:5683-5688/udp`            - connect local UDP ports 5683-5688 to exposed internal COAP and LwM2M ports
- `tb-pe-license-data`   - name of the docker volume that stores the ThingsBoard's license instance data file
- `tb-postgres-data`   - name of the docker volume that stores the PostgreSQL's data
- `thingsboard-pe`             - friendly local name of this machine
- `restart: always`        - automatically start ThingsBoard in case of system reboot and restart in case of failure.
- `thingsboard/tb-pe-node:{{ site.release.pe_full_ver }}`          - docker image.

## Step 3. Initialize database schema & system assets

Before you start ThingsBoard, initialize the database schema and load built-in assets by running:   

```bash
docker compose run --rm -e INSTALL_TB=true -e LOAD_DEMO=true thingsboard-pe
```
{: .copy-code}

Environment variables:

- `INSTALL_TB=true` - Installs the core database schema and system resources (widgets, images, rule chains, etc.).
- `LOAD_DEMO=true` - Loads sample tenant account, dashboards and devices for evaluation and testing.

## Step 4. Start the platform & tail logs

Bring up all containers in detached mode, then follow the ThingsBoard logs:

```bash
docker compose up -d && docker compose logs -f thingsboard-pe
```
{: .copy-code}

After executing this command you can open `http://{your-host-ip}:8080` in you browser (for ex. `http://localhost:8080`). You should see ThingsBoard login page.

{% capture tb_web_report_localhost_info %}
**Note that web-reports will generate only if you access ThingsBoard via external IP address or domain name.**

**Web-report will not generate if you access ThingsBoard by** `http://localhost:8080`
{% endcapture %}
{% include templates/info-banner.md content=tb_web_report_localhost_info %}

Use the following default credentials:

- **System Administrator**: sysadmin@thingsboard.org / sysadmin
- **Tenant Administrator**: tenant@thingsboard.org / tenant
- **Customer User**: customer@thingsboard.org / customer
    
You can always change passwords for each account in account profile page.

You can safely detach from the log stream (e.g. Ctrl+C); containers will continue running.

## Inspect logs & control container lifecycle

If something goes wrong, you can stream the ThingsBoard container logs in real time:

```bash
docker compose logs -f thingsboard-pe
```
{: .copy-code}

Bring down every container defined in your Compose file:

```bash
docker compose down
```
{: .copy-code}

Launch all services in detached mode:

```bash
docker compose up -d
```
{: .copy-code}

## Upgrading
{% capture upgrade_version_by_version%}
**Note, that you have to upgrade versions one by one (for example 4.0.2 -> 4.1.0 -> 4.2.0 ,etc).**
{% endcapture %}
{% include templates/info-banner.md content=upgrade_version_by_version %}

When a new PE release is available, follow these steps to update your installation without losing data:

{% capture old_manifests_info %}
**If you are upgrading using previous version of deployment files, make sure to follow steps described in this [instruction](/docs/user-guide/install/pe/old-docker-migrate/) first.**
{% endcapture %}
{% include templates/warn-banner.md content=old_manifests_info %}

1. Change the version of the `thingsboard/tb-pe-node` and `thingsboard/tb-web-report` in the `docker-compose.yml` file to the subsequent version of thingsboard regarding your current one (e.g. {{ site.release.pe_full_ver }}) 

2. Execute the following commands:
 
```bash
docker pull thingsboard/tb-pe-node:{{ site.release.pe_full_ver }}
docker compose stop thingsboard-pe
docker compose run --rm -e UPGRADE_TB=true thingsboard-pe
docker compose up -d
```
{: .copy-code}

## Troubleshooting

### DNS issues

{% include templates/troubleshooting/dns-issues.md %}

## Next steps

{% assign currentGuide = "InstallationGuides" %}{% include templates/guides-banner.md %}

---
layout: docwithnav-pe-edge
title: Installing ThingsBoard Edge using Docker (Linux or Mac OS)
description: Installing ThingsBoard Edge using Docker (Linux or Mac OS)

---

* TOC
{:toc}


{% assign docsPrefix = "pe/edge/" %}
{% assign peDocsPrefix = "pe/" %}

{% include templates/edge/install/compatibility-warning-general.md %}

This guide provides step-by-step instructions for running **ThingsBoard Edge** on **Linux or Mac OS** using **Docker**.

{% include templates/edge/install/prerequisites.md %}

### Docker Installation

{% capture local-deployment %}
**ThingsBoard** supports **Docker Compose V2** (Docker Desktop or Compose plugin) starting from **3.4.2 release**. 

We strongly recommend **upgrading to and using Docker Compose V2**, as Docker no longer supports docker-compose as a standalone setup.

{% endcapture %}
{% include templates/info-banner.md content=local-deployment %}

- [Install Docker CE](https://docs.docker.com/engine/install/){:target="_blank"}
- [Install Docker Compose](https://docs.docker.com/compose/install/){:target="_blank"}

{% include templates/install/docker-install-note.md %}

## Guided Installation Using ThingsBoard Server Pre-configured Instructions

{% include templates/edge/install/tb-server-pre-configured-install-instructions.md %}

{% include templates/edge/install/manual-install-instructions-intro.md %}

### Step 1. Running ThingsBoard Edge

{% include templates/edge/install/docker-images-location.md %}

{% include templates/edge/install/copy-edge-credentials.md %}

### Step 2. Choose Queue and/or Database Services

**ThingsBoard Edge** is able to use different messaging systems/brokers for storing the messages and communication between ThingsBoard services. How to choose the right queue implementation?

* **In Memory** queue implementation is built-in and default. It is useful for development (PoC) environments and is not suitable for production deployments or any sort of cluster deployments.

* **Kafka** is recommended for production deployments. This queue is used on most of the ThingsBoard production environments now.

* **Hybrid** implementation combines PostgreSQL and Cassandra databases with Kafka queue service. It is recommended if you plan to manage 1M+ devices in production or handle high data ingestion rate (more than 5000 msg/sec).

Create a docker compose file for the **ThingsBoard Edge** service:

{% capture contenttogglespecqueue %}
In Memory <small>(built-in and default)</small>%,%inmemory%,%templates/edge/pe-docker-queue-in-memory.md%br%
Kafka <small>(recommended for on-prem, production installations)</small>%,%kafka%,%templates/edge/install/pe-docker-queue-kafka.md%br%
Hybrid <small>PostgreSQL+Cassandra with Kafka queue service </small>%,%hybrid%,%templates/edge/install/pe-docker-queue-hybrid.md{% endcapture %}

{% include content-toggle.liquid content-toggle-id="ubuntuThingsboardQueue" toggle-spec=contenttogglespecqueue %}

### Step 3. Open ThingsBoard Edge UI

{% include templates/edge/install/open-edge-ui.md %}

### Step 4. Detaching, Stop and Start Commands

{% assign serviceFullName = "ThingsBoard Edge" %}
{% include templates/edge/detaching-stop-start-edge.md %}

## Troubleshooting

{% include templates/edge/install/docker-troubleshooting.md %}

## Next Steps

{% include templates/edge/install/next-steps.md %}




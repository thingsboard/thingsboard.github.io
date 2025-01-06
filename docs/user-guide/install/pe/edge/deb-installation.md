---
layout: docwithnav-pe-edge
title: Installing ThingsBoard Edge on Ubuntu Server
description: Installing ThingsBoard Edge on Ubuntu Server

---

* TOC
{:toc}

{% include templates/edge/install/compatibility-warning-general.md %}

{% assign docsPrefix = "pe/edge/" %}

This guide describes how to install **ThingsBoard Edge** on Ubuntu 18.04 LTS / Ubuntu 20.04 LTS.

{% include templates/edge/install/prerequisites.md %}

## Guided Installation Using ThingsBoard Server Pre-configured Instructions

{% include templates/edge/install/tb-server-pre-configured-install-instructions.md %}

{% include templates/edge/install/manual-install-instructions-intro.md %}

### Step 1. Install Java 17 (OpenJDK) 

{% include templates/install/ubuntu-java-install.md %}

### Step 2. Configure ThingsBoard Edge Database

**ThingsBoard Edge** supports **SQL** and **hybrid** database approaches. See the architecture [page](/docs/pe/reference/#sql-vs-nosql-vs-hybrid-database-approach){: target="_blank"} for details.

{% capture contenttogglespec %}
PostgreSQL <small>(recommended for < 5K msg/sec)</small>%,%postgresql%,%templates/edge/install/ubuntu-db-postgresql.md%br%
Hybrid <br>PostgreSQL+Cassandra<br><small>(recommended for > 5K msg/sec)</small>%,%hybrid%,%templates/edge/install/ubuntu-db-hybrid.md{% endcapture %}

{% include content-toggle.liquid content-toggle-id="ubuntuThingsboardDatabase" toggle-spec=contenttogglespec %}

### Step 3. Choose Queue Service

**ThingsBoard Edge** can use different messaging systems and brokers for storing messages and enabling communication between its services. Choose the appropriate queue implementation based on your specific business needs:

* **In Memory**: The built-in and default queue implementation. It is useful for development or proof-of-concept (PoC) environments, but is not recommended for production or any type of clustered deployments due to limited scalability.

* **Kafka**: Recommended for production deployments. This queue is used in the most of ThingsBoard production environments now.

{% capture contenttogglespecqueue %}
In Memory <small>(built-in and default)</small>%,%inmemory%,%templates/install/queue-in-memory.md%br%
Kafka <small>(recommended for on-prem, production installations)</small>%,%kafka%,%templates/edge/install/ubuntu-queue-kafka.md%br%
Kafka in docker container <small>(recommended for on-prem, production installations)</small>%,%kafka-in-docker%,%templates/edge/install/ubuntu-queue-kafka-in-docker.md{% endcapture %}

{% include content-toggle.liquid content-toggle-id="ubuntuThingsboardQueue" toggle-spec=contenttogglespecqueue %}

### Step 4. ThingsBoard Edge Service Installation

Download the installation package.

```bash
wget https://dist.thingsboard.io/tb-edge-{{ site.release.pe_edge_ver }}.deb
```
{: .copy-code}

Go to the download repository and install **ThingsBoard Edge** service:

```bash
sudo dpkg -i tb-edge-{{ site.release.pe_edge_ver }}.deb
```
{: .copy-code}

### Step 5. Configure ThingsBoard Edge

{% include templates/edge/install/linux-configure-edge.md %}

### Step 6. Run installation script

{% include templates/edge/install/run-edge-install.md %} 

### Step 7. Restart ThingsBoard Edge Service

```bash
sudo service tb-edge restart
```
{: .copy-code}

### Step 8. Open ThingsBoard Edge UI

{% include templates/edge/install/open-edge-ui.md %} 

## Troubleshooting

ThingsBoard Edge logs stored in the following directory:
 
```bash
/var/log/tb-edge
```

You can issue the following command in order to check if there are any errors on the service side:
 
```bash
cat /var/log/tb-edge/tb-edge.log | grep ERROR
```
{: .copy-code}

{% include templates/edge/install/edge-service-commands.md %} 

## Next Steps

{% include templates/edge/install/next-steps.md %}

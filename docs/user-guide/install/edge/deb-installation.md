---
layout: docwithnav-edge
title: Installing ThingsBoard Edge on Ubuntu Server
description: Installing ThingsBoard Edge on Ubuntu Server

---

* TOC
{:toc}

{% include templates/edge/install/compatibility-warning-general.md %}

{% assign docsPrefix = "edge/" %}

This guide provides step-by-step instructions for installing **ThingsBoard Edge** on **Ubuntu 18.04 LTS and 20.04 LTS**.

{% include templates/edge/install/prerequisites.md %}

## Guided installation using pre-configured instructions in the Server UI

{% include templates/edge/install/tb-server-pre-configured-install-instructions.md %}

{% include templates/edge/install/manual-install-instructions-intro.md %}

### Step 1. Install Java 17 (OpenJDK) 

{% include templates/install/ubuntu-java-install.md %}

### Step 2. Configure the ThingsBoard Edge database

**ThingsBoard Edge** supports **SQL** and **hybrid** database approaches. See the architecture [page](/docs/reference/#sql-vs-nosql-vs-hybrid-database-approach){: target="_blank"} for details.

{% capture contenttogglespec %}
PostgreSQL <small>(recommended for < 5K msg/sec)</small>%,%postgresql%,%templates/edge/install/ubuntu-db-postgresql.md%br%
Hybrid <br>PostgreSQL+Cassandra<br><small>(recommended for > 5K msg/sec)</small>%,%hybrid%,%templates/edge/install/ubuntu-db-hybrid.md{% endcapture %}
{% include content-toggle.liquid content-toggle-id="ubuntuThingsboardDatabase" toggle-spec=contenttogglespec %}

### Step 3. Select the Queue service

**ThingsBoard Edge** can use different messaging systems and brokers for storing messages and enabling communication between its services. Choose the appropriate queue implementation based on your specific business needs:

* **In Memory**: The built-in and default queue implementation. It is useful for development or proof-of-concept (PoC) environments, but is not recommended for production or any type of clustered deployments due to limited scalability.

* **Kafka**: Recommended for production deployments. This queue is used in most of the ThingsBoard production environments now.

{% capture contenttogglespecqueue %}
In Memory <small>(built-in and default)</small>%,%inmemory%,%templates/install/queue-in-memory.md%br%
Kafka <small>(recommended for on-prem, production installations)</small>%,%kafka-in-docker%,%templates/edge/install/ubuntu-queue-kafka-in-docker.md{% endcapture %}

{% include content-toggle.liquid content-toggle-id="ubuntuThingsboardQueue" toggle-spec=contenttogglespecqueue %}

### Step 4. ThingsBoard Edge service installation

Download the installation package:

```bash
wget https://github.com/thingsboard/thingsboard-edge/releases/download/{{ site.release.edge_tag }}/tb-edge-{{ site.release.edge_ver }}.deb
```
{: .copy-code}

Go to the download repository and install ThingsBoard Edge service

```bash
sudo dpkg -i tb-edge-{{ site.release.edge_ver }}.deb
```
{: .copy-code}

### Step 5. Configure the ThingsBoard Edge

{% include templates/edge/install/linux-configure-edge.md %}

### Step 6. Run the installation Script

{% include templates/edge/install/run-edge-install.md %} 

### Step 7. Start the ThingsBoard Edge service

```bash
sudo service tb-edge start
```
{: .copy-code}

### Step 8. Open the ThingsBoard Edge UI

{% include templates/edge/install/open-edge-ui.md %} 

## Troubleshooting

The **ThingsBoard Edge** logs are stored in the following directory:
 
```bash
/var/log/tb-edge
```
To check for errors on the service side, run the following command:
 
```bash
cat /var/log/tb-edge/tb-edge.log | grep ERROR
```
{: .copy-code}

{% include templates/edge/install/edge-service-commands.md %} 

## Next Steps

{% include templates/edge/install/next-steps.md %}

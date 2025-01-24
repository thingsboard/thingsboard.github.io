---
layout: docwithnav-edge
title: Installing ThingsBoard Edge on CentOS/RHEL Server
description: Installing ThingsBoard Edge on CentOS/RHEL Server
---

* TOC
{:toc}

{% include templates/edge/install/compatibility-warning-general.md %}

{% assign docsPrefix = "edge/" %}

This guide describes how to install **ThingsBoard Edge** on **RHEL/CentOS 7/8.**

{% include templates/edge/install/prerequisites.md %}

## Guided Installation Using ThingsBoard Server Pre-configured Instructions

{% include templates/edge/install/tb-server-pre-configured-install-instructions.md %}

{% include templates/edge/install/manual-install-instructions-intro.md %}

#### Pre-installation step 
Before continue to installation execute the following commands in order to install necessary tools:

```bash
sudo yum install -y nano wget
sudo yum install -y https://dl.fedoraproject.org/pub/epel/epel-release-latest-7.noarch.rpm
```
{: .copy-code}

### Step 1. Install Java 17 (OpenJDK) 

{% include templates/install/rhel-java-install.md %}

### Step 2. Configure ThingsBoard Database

**ThingsBoard Edge** supports **SQL** and **hybrid** database approaches. See the architecture [page](/docs/reference/#sql-vs-nosql-vs-hybrid-database-approach){: target="_blank"} for details.

{% capture contenttogglespec %}
PostgreSQL <small>(recommended for < 5K msg/sec)</small>%,%postgresql%,%templates/edge/install/rhel-db-postgresql.md%br%
Hybrid <br>PostgreSQL+Cassandra<br><small>(recommended for > 5K msg/sec)</small>%,%hybrid%,%templates/edge/install/rhel-db-hybrid.md{% endcapture %}

{% include content-toggle.liquid content-toggle-id="rhelThingsboardDatabase" toggle-spec=contenttogglespec %}

### Step 3. Choose Queue Service
**ThingsBoard Edge** is able to use different messaging systems/brokers for storing the messages and communication between ThingsBoard services. How to choose the right queue implementation?

* **In Memory** queue implementation is built-in and default. It is useful for development(PoC) environments and is not suitable for production deployments or any sort of cluster deployments.

* **Kafka** is recommended for production deployments. This queue is used on the most of ThingsBoard production environments now. 

{% capture contenttogglespecqueue %}
In Memory <small>(built-in and default)</small>%,%inmemory%,%templates/install/queue-in-memory.md%br%
Kafka <small>(recommended for on-prem, production installations)</small> %,%kafka%,%templates/edge/install/rhel-queue-kafka.md{% endcapture %}

{% include content-toggle.liquid content-toggle-id="ubuntuThingsboardQueue" toggle-spec=contenttogglespecqueue %}

### Step 4. ThingsBoard Edge Service Installation

Download installation package.

```bash
wget https://github.com/thingsboard/thingsboard-edge/releases/download/{{ site.release.edge_tag }}/tb-edge-{{ site.release.edge_ver }}.rpm
```
{: .copy-code}

Go to the download repository and install ThingsBoard Edge service

```bash
sudo rpm -Uvh tb-edge-{{ site.release.edge_ver }}.rpm
```
{: .copy-code}


### Step 5. Configure ThingsBoard Edge

{% include templates/edge/install/linux-configure-edge.md %}

### Step 6. Run installation Script

{% include templates/edge/install/run-edge-install.md %} 

### Step 7. Restart ThingsBoard Edge Service

```bash
sudo service tb-edge restart
```
{: .copy-code}

### Step 8. Open ThingsBoard Edge UI

{% include templates/edge/install/open-edge-ui.md %} 

## Troubleshooting

ThingsBoard Edge logs are stored in the following directory:
 
```bash
/var/log/tb-edge
```

You can issue the following command in order to check if there are any errors on the service side:
 
```bash
cat /var/log/tb-edge/tb-edge.log | grep ERROR
```

{% include templates/edge/install/edge-service-commands.md %} 

## Next Steps

{% include templates/edge/install/next-steps.md %}
---
layout: docwithnav
assignees:
- ashvayka
title: Installing ThingsBoard CE on Ubuntu Server
description: Installing ThingsBoard CE on Ubuntu Server

---

* TOC
{:toc}

### Prerequisites

This guide describes how to install ThingsBoard on Ubuntu Server 18.04 LTS. 
Hardware requirements depend on chosen database and amount of devices connected to the system. 
To run ThingsBoard and PostgreSQL on a single machine you will need at least 1Gb of RAM.
To run ThingsBoard and Cassandra on a single machine you will need at least 8Gb of RAM.

### Step 1. Install Java 8 (OpenJDK) 

{% include templates/install/ubuntu-java-install.md %}

### Step 2. ThingsBoard service installation

Download installation package.

```bash
wget https://github.com/thingsboard/thingsboard/releases/download/v2.4/thingsboard-2.4.deb
```
{: .copy-code}

Install ThingsBoard as a service

```bash
sudo dpkg -i thingsboard-2.4.deb
```
{: .copy-code}

### Step 3. Configure ThingsBoard database

{% include templates/install/install-db.md %}

{% capture contenttogglespec %}
PostgreSQL <small>(recommended for < 5K msg/sec)</small>%,%postgresql%,%templates/install/ubuntu-db-postgresql.md%br%
Hybrid <br/>PostgreSQL+Cassandra<br/><small>(recommended for > 5K msg/sec)</small>%,%hybrid%,%templates/install/ubuntu-db-hybrid.md{% endcapture %}

{% include content-toggle.html content-toggle-id="ubuntuThingsboardDatabase" toggle-spec=contenttogglespec %} 

### Step 4. [Optional] Memory update for slow machines (1GB of RAM) 

{% include templates/install/memory-on-slow-machines.md %} 

### Step 5. Run installation script
{% include templates/run-install.md %} 


### Step 6. Start ThingsBoard service

{% include templates/start-service.md %}

{% capture 90-sec-ui %}
Please allow up to 90 seconds for the Web UI to start. This is applicable only for slow machines with 1-2 CPUs or 1-2 GB RAM.{% endcapture %}
{% include templates/info-banner.md content=90-sec-ui %}

### Post-installation steps

{% include templates/install/ubuntu-haproxy-postinstall.md %}

### Troubleshooting

{% include templates/install/troubleshooting.md %}

## Next steps

{% assign currentGuide = "InstallationGuides" %}{% include templates/guides-banner.md %}

---
layout: docwithnav
assignees:
- ashvayka
title: Installing ThingsBoard CE on CentOS/RHEL
description: Installing ThingsBoard CE on CentOS/RHEL

---

* TOC
{:toc}

### Prerequisites

This guide describes how to install ThingsBoard on RHEL/CentOS 7. 
Hardware requirements depend on chosen database and amount of devices connected to the system. 
To run ThingsBoard and PostgreSQL on a single machine you will need at least 1Gb of RAM.
To run ThingsBoard and Cassandra on a single machine you will need at least 8Gb of RAM.

Before continue to installation execute the following commands in order to install necessary tools:

```bash
sudo yum install -y nano wget
# Add latest EPEL release
sudo yum install -y https://dl.fedoraproject.org/pub/epel/epel-release-latest-7.noarch.rpm
```

### Step 1. Install Java 8 (OpenJDK) 

{% include templates/install/rhel-java-install.md %} 

### Step 2. ThingsBoard service installation

Download installation package.

```bash
wget https://github.com/thingsboard/thingsboard/releases/download/v2.4/thingsboard-2.4.rpm
```
{: .copy-code}

Install ThingsBoard as a service

```bash
sudo rpm -Uvh thingsboard-2.4.rpm
```
{: .copy-code}


### Step 3. Configure ThingsBoard database

{% include templates/install/install-db.md %}

{% capture contenttogglespec %}
PostgreSQL <small>(recommended for < 5K msg/sec)</small>%,%postgresql%,%templates/install/rhel-db-postgresql.md%br%
Hybrid <br/>PostgreSQL+Cassandra<br/><small>(recommended for > 5K msg/sec)</small>%,%hybrid%,%templates/install/rhel-db-hybrid.md{% endcapture %}

{% include content-toggle.html content-toggle-id="rhelThingsboardDatabase" toggle-spec=contenttogglespec %} 

### Step 4. [Optional] Memory update for slow machines (1GB of RAM) 

{% include templates/install/memory-on-slow-machines.md %} 

### Step 5. Run installation script
{% include templates/run-install.md %} 


### Step 6. Start ThingsBoard service

ThingsBoard UI is accessible on 8080 port by default. 
Make sure that your 8080 port is accessible via firewall.
In order to open 8080 port execute the following command:

```bash
sudo firewall-cmd --zone=public --add-port=8080/tcp --permanent
sudo firewall-cmd --reload
```   

{% include templates/start-service.md %}

{% capture 90-sec-ui %}
Please allow up to 90 seconds for the Web UI to start. This is applicable only for slow machines with 1-2 CPUs or 1-2 GB RAM.{% endcapture %}
{% include templates/info-banner.md content=90-sec-ui %}

### Post-installation steps

{% include templates/install/rhel-haproxy-postinstall.md %}

### Troubleshooting

{% include templates/install/troubleshooting.md %}

## Next steps


{% assign currentGuide = "InstallationGuides" %}{% include templates/guides-banner.md %}

---
layout: docwithnav
assignees:
- ashvayka
title: Installing ThingsBoard CE on Ubuntu Server
description: Installing ThingsBoard CE on Ubuntu Server

---

* TOC
{:toc}

## Prerequisites

This guide describes how to install ThingsBoard on Ubuntu 22.04 LTS / 24.04 LTS.
Hardware requirements depend on chosen database and amount of devices connected to the system. 
To run ThingsBoard and PostgreSQL on a single machine you will need at least 4Gb of RAM.
To run ThingsBoard and Cassandra on a single machine you will need at least 8Gb of RAM.

Check if required font libraries are installed:
```bash
dpkg -l libharfbuzz0b fontconfig fonts-dejavu-core
```
{: .copy-code}
Expected result: installed packages will appear in the output with the status **ii**.<br>
If some libraries are missing, or have a different status, install them using:
```bash
sudo apt update && sudo apt install -y libharfbuzz0b fontconfig fonts-dejavu-core
```
{: .copy-code}

## Step 1. Install Java 17 (OpenJDK) 

{% include templates/install/ubuntu-java-install.md %}

## Step 2. ThingsBoard service installation

Download installation package.

```bash
wget https://github.com/thingsboard/thingsboard/releases/download/{{ site.release.ce_tag }}/thingsboard-{{ site.release.ce_ver }}.deb
```
{: .copy-code}

Install ThingsBoard as a service

```bash
sudo dpkg -i thingsboard-{{ site.release.ce_ver }}.deb
```
{: .copy-code}

## Step 3. Configure ThingsBoard database

{% include templates/install/install-db.md %}

{% capture contenttogglespec %}
PostgreSQL <small>(recommended for < 5K msg/sec)</small>%,%postgresql%,%templates/install/ubuntu-db-postgresql.md%br%
Hybrid <br>PostgreSQL+Cassandra<br><small>(recommended for > 5K msg/sec)</small>%,%hybrid%,%templates/install/ubuntu-db-hybrid.md{% endcapture %}

{% include content-toggle.liquid content-toggle-id="ubuntuThingsboardDatabase" toggle-spec=contenttogglespec %} 

## Step 4. Choose ThingsBoard queue service

{% include templates/install/install-queue.md %}

{% capture contenttogglespecqueue %}
In Memory <small>(built-in and default)</small>%,%inmemory%,%templates/install/queue-in-memory.md%br%
Kafka <small>(recommended for on-prem, production installations)</small> %,%kafka-in-docker%,%templates/install/ubuntu-queue-kafka-in-docker.md%br%
Confluent Cloud <small>(Event Streaming Platform based on Kafka)</small>%,%confluent-cloud%,%templates/install/ubuntu-queue-confluent-cloud.md{% endcapture %}

{% include content-toggle.liquid content-toggle-id="ubuntuThingsboardQueue" toggle-spec=contenttogglespecqueue %} 

## Step 5. [Optional] Memory update for slow machines (4GB of RAM) 

{% include templates/install/memory-on-slow-machines.md %} 

## Step 6. Run installation script
{% include templates/run-install.md %} 


## Step 7. Start ThingsBoard service

{% include templates/start-service.md %}

{% capture 90-sec-ui %}
Please allow up to 90 seconds for the Web UI to start.{% endcapture %}
{% include templates/info-banner.md content=90-sec-ui %}

## Post-installation steps

{% include templates/install/ubuntu-haproxy-postinstall.md %}

## Troubleshooting

{% include templates/install/troubleshooting.md %}

## Next steps

{% assign currentGuide = "InstallationGuides" %}{% include templates/guides-banner.md %}

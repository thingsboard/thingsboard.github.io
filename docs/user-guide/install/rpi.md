---
layout: docwithnav
assignees:
- ashvayka
title: Installing ThingsBoard on Raspberry Pi
description: Installing ThingsBoard IoT Platform on Raspberry Pi

---

{% include templates/live-demo-banner.md %}

* TOC
{:toc}



### Prerequisites

This guide describes how to install ThingsBoard on a Raspberry Pi.
Hardware requirements depend on chosen database and amount of devices connected to the system. 
To run ThingsBoard and PostgreSQL you will need at least 4Gb of RAM.
To run ThingsBoard and Cassandra you will need at least 8Gb of RAM.


### Step 1. Install Java 17 (OpenJDK) 
{% include templates/install/ubuntu-java-install.md %}
{: .copy-code}

### Step 2. ThingsBoard service installation

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

### Step 3. Configure ThingsBoard database

{% include templates/install/rpi-db-postgresql.md %}

### Step 4. Choose ThingsBoard queue service

{% include templates/install/rpi-install-queue.md %}

{% capture contenttogglespecqueue %}
In Memory <small>(built-in and default)</small>%,%inmemory%,%templates/install/queue-in-memory.md%br%
AWS SQS <small>(managed service from AWS)</small>%,%aws-sqs%,%templates/install/ubuntu-queue-aws-sqs.md%br%
Google Pub/Sub <small>(managed service from Google)</small>%,%pubsub%,%templates/install/ubuntu-queue-pub-sub.md%br%
Azure Service Bus <small>(managed service from Azure)</small>%,%service-bus%,%templates/install/ubuntu-queue-service-bus.md%br%
Confluent Cloud <small>(Event Streaming Platform based on Kafka)</small>%,%confluent-cloud%,%templates/install/ubuntu-queue-confluent-cloud.md{% endcapture %}

{% include content-toggle.liquid content-toggle-id="ubuntuThingsboardQueue" toggle-spec=contenttogglespecqueue %} 

### Step 5. Memory update for slow machines (4GB of RAM) 

{% include templates/install/memory-on-slow-machines.md %} 

### Step 6. Run installation script
{% include templates/run-install.md %} 


### Step 7. Start ThingsBoard service

{% include templates/start-service.md %}

{% capture 90-sec-ui %}
Please allow up to 90 seconds for the Web UI to start.{% endcapture %}
{% include templates/info-banner.md content=90-sec-ui %}

### Troubleshooting

{% include templates/install/troubleshooting.md %}

## Next steps

{% assign currentGuide = "InstallationGuides" %}{% include templates/guides-banner.md %}

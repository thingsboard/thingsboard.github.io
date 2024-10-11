---
layout: docwithnav-pe
assignees:
- ashvayka
title: Installing ThingsBoard PE on CentOS/RHEL
description: Installing ThingsBoard PE on CentOS/RHEL

---

{% assign docsPrefix = "pe/" %}

* TOC
{:toc}

### Prerequisites

This guide describes how to install ThingsBoard on RHEL 8/9, CentOS 8/9, or their derivatives (Alma, Rocky, Oracle, etc). 
Hardware requirements depend on chosen database and amount of devices connected to the system. 
To run ThingsBoard and PostgreSQL on a single machine you will need at least 4Gb of RAM.
To run ThingsBoard and Cassandra on a single machine you will need at least 8Gb of RAM.

Before continue to installation execute the following commands in order to install necessary tools:

**For CentOS 8:**

```bash
# Install wget
sudo dnf install -y nano wget
# Add latest EPEL release for CentOS 8
sudo dnf install -y https://dl.fedoraproject.org/pub/epel/epel-release-latest-8.noarch.rpm
```
{: .copy-code}

**For CentOS 9:**

```bash
# Install wget
sudo dnf install -y nano wget
# Add latest EPEL release for CentOS 9
sudo dnf install -y https://dl.fedoraproject.org/pub/epel/epel-release-latest-9.noarch.rpm
```
{: .copy-code}

### Step 1. Install Java 17 (OpenJDK) 

{% include templates/install/rhel-java-install.md %}

### Step 2. ThingsBoard service installation

Download installation package.

```bash
wget https://dist.thingsboard.io/thingsboard-{{ site.release.pe_ver }}.rpm
```
{: .copy-code}

Install ThingsBoard as a service

```bash
sudo rpm -Uvh thingsboard-{{ site.release.pe_ver }}.rpm
```
{: .copy-code}

### Step 3. Obtain and configure license key 

We assume you have already chosen your subscription plan or decided to purchase a perpetual license. 
If not, please navigate to [pricing](/pricing/) page to select the best license option for your case and get your license. 
See [How-to get pay-as-you-go subscription](https://www.youtube.com/watch?v=dK-QDFGxWek){:target="_blank"} or [How-to get perpetual license](https://www.youtube.com/watch?v=GPe0lHolWek){:target="_blank"} for more details.

Once you get the license secret, you should put it to the thingsboard configuration file. 
Open the file for editing using the following command:

```bash 
sudo nano /etc/thingsboard/conf/thingsboard.conf
``` 
{: .copy-code}

Locate the following configuration block:

```bash
# License secret obtained from ThingsBoard License Portal (https://license.thingsboard.io)
# UNCOMMENT NEXT LINE AND PUT YOUR LICENSE SECRET:
# export TB_LICENSE_SECRET=
```

and put your license secret. Please don't forget to uncomment the export statement. See example below: 

```bash
# License secret obtained from ThingsBoard License Portal (https://license.thingsboard.io)
# UNCOMMENT NEXT LINE AND PUT YOUR LICENSE SECRET:
export TB_LICENSE_SECRET=YOUR_LICENSE_SECRET_HERE
``` 

### Step 4. Configure ThingsBoard database

{% include templates/install/install-db.md %}

{% capture contenttogglespec %}
PostgreSQL <small>(recommended for < 5K msg/sec)</small>%,%postgresql%,%templates/install/rhel-db-postgresql.md%br%
Hybrid <br>PostgreSQL+Cassandra<br><small>(recommended for > 5K msg/sec)</small>%,%hybrid%,%templates/install/rhel-db-hybrid.md{% endcapture %}


{% include content-toggle.liquid content-toggle-id="rhelThingsboardDatabase" toggle-spec=contenttogglespec %} 

### Step 5. Choose ThingsBoard queue service

{% include templates/install/install-queue.md %}

{% capture contenttogglespecqueue %}
In Memory <small>(built-in and default)</small>%,%inmemory%,%templates/install/queue-in-memory.md%br%
Kafka <small>(recommended for on-prem, production installations)</small>%,%kafka%,%templates/install/rhel-queue-kafka.md%br%
AWS SQS <small>(managed service from AWS)</small>%,%aws-sqs%,%templates/install/ubuntu-queue-aws-sqs.md%br%
Google Pub/Sub <small>(managed service from Google)</small>%,%pubsub%,%templates/install/ubuntu-queue-pub-sub.md%br%
Azure Service Bus <small>(managed service from Azure)</small>%,%service-bus%,%templates/install/ubuntu-queue-service-bus.md%br%
RabbitMQ <small>(for small on-prem installations)</small>%,%rabbitmq%,%templates/install/rhel-queue-rabbitmq.md%br%
Confluent Cloud <small>(Event Streaming Platform based on Kafka)</small>%,%confluent-cloud%,%templates/install/ubuntu-queue-confluent-cloud.md{% endcapture %}

{% include content-toggle.liquid content-toggle-id="ubuntuThingsboardQueue" toggle-spec=contenttogglespecqueue %} 

### Step 6. [Optional] Memory update for slow machines (4GB of RAM) 

{% include templates/install/memory-on-slow-machines.md %} 

### Step 7. Run installation script
{% include templates/run-install.md %} 


### Step 8. Start ThingsBoard service

ThingsBoard UI is accessible on 8080 port by default. 
Make sure that your 8080 port is accessible via firewall.
In order to open 8080 port execute the following command:

```bash
sudo firewall-cmd --zone=public --add-port=8080/tcp --permanent
sudo firewall-cmd --reload
```   

{% include templates/start-service.md %}

{% capture 90-sec-ui %}
Please allow up to 90 seconds for the Web UI to start.{% endcapture %}
{% include templates/info-banner.md content=90-sec-ui %}

### Step 9. Install ThingsBoard WebReport component

{% capture contenttogglespecreport %}
WebReport docker <small>(Recommended and simple installtion)</small>%,%dockerized%,%templates/install/rhel-webreport-docker.md%br%
WebReport service <small>(Install service and dependencies manually)</small>%,%service%,%templates/install/rhel-webreport-service.md%br%{% endcapture %}
{% include content-toggle.liquid content-toggle-id="rhelThingsboardWebreport" toggle-spec=contenttogglespecreport %} 

### Post-installation steps

{% include templates/install/rhel-haproxy-postinstall.md %}

### Troubleshooting

{% include templates/install/troubleshooting.md %}

## Next steps



{% assign currentGuide = "InstallationGuides" %}{% include templates/guides-banner.md %}

---
layout: docwithnav-pe
assignees:
- ashvayka
title: Installing ThingsBoard PE using Docker (Linux or Mac OS)
description: Installing ThingsBoard PE IoT Platform using Docker (Linux or Mac OS)
redirect_from: "/docs/pe/user-guide/install/docker/"
---

* TOC
{:toc}


This guide will help you to install and start ThingsBoard Professional Edition (PE) using Docker and Docker Compose on Linux or Mac OS. 
This guide covers standalone ThingsBoard PE installation. 
If you are looking for a cluster installation instruction, please visit [cluster setup page](/docs/user-guide/install/pe/cluster-setup/).  

## Prerequisites

{% include templates/install/docker-install.md %}

{% include templates/install/docker-install-note.md %}

## Step 1. Pull ThingsBoard PE Image

```bash
docker pull thingsboard/tb-pe:{{ site.release.pe_full_ver }}
```
{: .copy-code}
 
## Step 2. Obtain the license key 

We assume you have already chosen your subscription plan or decided to purchase a perpetual license. 
If not, please navigate to [pricing](/pricing/) page to select the best license option for your case and get your license. 
See [How-to get pay-as-you-go subscription](https://www.youtube.com/watch?v=dK-QDFGxWek){:target="_blank"} or [How-to get perpetual license](https://www.youtube.com/watch?v=GPe0lHolWek){:target="_blank"} for more details.

Note: We will reference the license key you have obtained during this step as PUT_YOUR_LICENSE_SECRET_HERE later in this guide.

## Step 3. Choose ThingsBoard queue service

{% include templates/install/install-queue.md %}

{% capture contenttogglespecqueue %}
In Memory <small>(built-in and default)</small>%,%inmemory%,%templates/install/pe-docker-queue-in-memory.md%br%
Kafka <small>(recommended for on-prem, production installations)</small>%,%kafka%,%templates/install/pe-docker-queue-kafka.md%br%
AWS SQS <small>(managed service from AWS)</small>%,%aws-sqs%,%templates/install/pe-docker-queue-aws-sqs.md%br%
Google Pub/Sub <small>(managed service from Google)</small>%,%pubsub%,%templates/install/pe-docker-queue-pub-sub.md%br%
Azure Service Bus <small>(managed service from Azure)</small>%,%service-bus%,%templates/install/pe-docker-queue-service-bus.md%br%
RabbitMQ <small>(for small on-prem installations)</small>%,%rabbitmq%,%templates/install/pe-docker-queue-rabbitmq.md%br%
Confluent Cloud <small>(Event Streaming Platform based on Kafka)</small>%,%confluent-cloud%,%templates/install/pe-docker-queue-confluent-cloud.md{% endcapture %}

{% include content-toggle.liquid content-toggle-id="ubuntuThingsboardQueue" toggle-spec=contenttogglespecqueue %}

Where:

- `PUT_YOUR_LICENSE_SECRET_HERE` - placeholder for your license secret obtained on the third step;
- `8080:8080`            - connect local port 8080 to exposed internal HTTP port 8080;
- `1883:1883`            - connect local port 1883 to exposed internal MQTT port 1883;
- `7070:7070`            - connect local port 7070 to exposed internal Edge RPC port 7070;
- `5683-5688:5683-5688/udp`            - connect local UDP ports 5683-5688 to exposed internal COAP and LwM2M ports; 
- `~/.mytbpe-data:/data`   - mounts the host's dir `~/.mytbpe-data` to ThingsBoard data directory;
- `~/.mytbpe-data/db:/var/lib/postgresql/data`   - mounts the host's dir `~/.mytbpe-data/db` to Postgres data directory;
- `~/.mytbpe-logs:/var/log/thingsboard`   - mounts the host's dir `~/.mytbpe-logs` to ThingsBoard logs directory;
- `mytbpe`             - friendly local name of this machine;
- `restart: always`        - automatically start ThingsBoard in case of system reboot and restart in case of failure.;
- `thingsboard/tb-pe:{{ site.release.pe_full_ver }}`          - docker image.

## Step 4. Running

{% include templates/install/docker/docker-create-folders-sudo-explained.md %}

```
mkdir -p ~/.mytbpe-data && sudo chown -R 799:799 ~/.mytbpe-data
mkdir -p ~/.mytbpe-logs && sudo chown -R 799:799 ~/.mytbpe-logs
```
{: .copy-code}

**NOTE**: replace directory `~/.mytbpe-data` and `~/.mytbpe-logs` with directories you're planning to used in `docker-compose.yml`. 

{% assign serviceName = "tbpe" %}
{% include templates/install/docker/docker-compose-up-and-ui-credentials.md %}

## Detaching, stop and start commands

{% assign serviceFullName = "ThingsBoard PE" %}
{% include templates/install/docker/detaching-stop-start-commands.md %}

## Upgrading

In case when database upgrade is needed:

* Stop `mytbpe` container

```bash
docker compose stop mytbpe
```
 {: .copy-code}

{% capture dockerComposeStandalone %}
If you still rely on Docker Compose as docker-compose (with a hyphen) execute next command:
<br>**docker-compose stop mytbpe**
{% endcapture %}
{% include templates/info-banner.md content=dockerComposeStandalone %}

* Update docker-compose.yml - TB image should be the latest version (see [Step 3](#step-3-choose-thingsboard-queue-service))

* Change upgradeversion variable to your **current** ThingsBoard version. For ex., if you are upgrading from 3.6.4:

 ```bash
echo '3.6.4' | sudo tee ~/.mytbpe-data/.upgradeversion
```
{: .copy-code}

* Execute the following commands:

```bash
docker compose run mytbpe upgrade-tb.sh
```
{: .copy-code}

{% capture dockerComposeStandalone %}
If you still rely on Docker Compose as docker-compose (with a hyphen) execute next command:
<br>**docker-compose run mytbpe upgrade-tb.sh**
{% endcapture %}
{% include templates/info-banner.md content=dockerComposeStandalone %}

* Start ThingsBoard:

```bash
docker compose up -d
```
{: .copy-code}

{% capture dockerComposeStandalone %}
If you still rely on Docker Compose as docker-compose (with a hyphen) execute next command:
<br>**docker-compose up -d**
{% endcapture %}
{% include templates/info-banner.md content=dockerComposeStandalone %}

## Troubleshooting

### DNS issues

{% include templates/troubleshooting/dns-issues.md %}

## Next steps

{% assign currentGuide = "InstallationGuides" %}{% include templates/guides-banner.md %}

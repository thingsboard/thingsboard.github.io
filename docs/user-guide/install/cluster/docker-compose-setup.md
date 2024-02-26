---
layout: docwithnav
assignees:
- ashvayka
title: Cluster setup with Docker Compose
description: ThingsBoard IoT platform cluster setup with Docker Compose guide

---

* TOC
{:toc}

This guide will help you to setup ThingsBoard in cluster mode using Docker Compose tool. 

## Prerequisites

ThingsBoard Microservices are running in dockerized environment.
Before starting please make sure Docker Engine and Docker Compose are installed in your system. 

{% include templates/install/docker-install.md %}

{% include templates/install/docker-install-note.md %}

## Step 1. Pull ThingsBoard CE Images

Make sure your have [logged in](https://docs.docker.com/engine/reference/commandline/login/) to docker hub using command line.

```bash
docker pull thingsboard/tb-node:{{ site.release.ce_full_ver }}
docker pull thingsboard/tb-web-ui:{{ site.release.ce_full_ver }}
docker pull thingsboard/tb-js-executor:{{ site.release.ce_full_ver }}
docker pull thingsboard/tb-http-transport:{{ site.release.ce_full_ver }}
docker pull thingsboard/tb-mqtt-transport:{{ site.release.ce_full_ver }}
docker pull thingsboard/tb-coap-transport:{{ site.release.ce_full_ver }}
docker pull thingsboard/tb-lwm2m-transport:{{ site.release.ce_full_ver }}
docker pull thingsboard/tb-snmp-transport:{{ site.release.ce_full_ver }}
```

## Step 2. Review the architecture page

Starting ThingsBoard v2.2, it is possible to install ThingsBoard cluster using new microservices architecture and docker containers. 
See [**microservices**](/docs/reference/msa/) architecture page for more details.

## Step 3. Clone ThingsBoard CE repository

```bash
git clone -b {{ site.release.branch }} https://github.com/thingsboard/thingsboard.git --depth 1
cd thingsboard/docker
```
{: .copy-code}

## Step 4. Configure ThingsBoard database

{% include templates/install/configure-db-docker-compose.md %}

## Step 5. Choose ThingsBoard queue service 

{% include templates/install/install-queue-docker-compose.md %}

{% capture contenttogglespecqueue %}
Kafka <small>(default, recommended for on-prem, production installations)</small>%,%kafka%,%templates/install/cluster-queue-kafka.md%br%
AWS SQS <small>(managed service from AWS)</small>%,%aws-sqs%,%templates/install/cluster-queue-aws-sqs.md%br%
Google Pub/Sub <small>(managed service from Google)</small>%,%pubsub%,%templates/install/cluster-queue-pub-sub.md%br%
Azure Service Bus <small>(managed service from Azure)</small>%,%service-bus%,%templates/install/cluster-queue-service-bus.md%br%
RabbitMQ <small>(for small on-prem installations)</small>%,%rabbitmq%,%templates/install/cluster-queue-rabbitmq.md%br%
Confluent Cloud <small>(Event Streaming Platform based on Kafka)</small>%,%confluent-cloud%,%templates/install/cluster-queue-confluent-cloud.md{% endcapture %}

{% include content-toggle.liquid content-toggle-id="ubuntuThingsboardQueue" toggle-spec=contenttogglespecqueue %} 

## Step 6. Enable monitoring (optional)

{% include templates/install/configure-monitoring-docker-compose.md %}

## Step 7. Running

{% assign dockerComposeFileLocation = "" %}
{% include templates/install/docker/docker-compose-setup-running.md %}

## Next steps

{% assign currentGuide = "InstallationGuides" %}{% include templates/guides-banner.md %}

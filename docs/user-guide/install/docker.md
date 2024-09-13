---
layout: docwithnav
assignees:
- ashvayka
title: Installing ThingsBoard using Docker (Linux or Mac OS)
description: Installing ThingsBoard IoT Platform using Docker (Linux or Mac OS)

---

{% include templates/live-demo-banner.md %}

* TOC
{:toc}

This guide will help you to install and start ThingsBoard using Docker on Linux or Mac OS.


## Prerequisites

{% include templates/install/docker-install.md %}

{% include templates/install/docker-install-note.md %}

## Running

In this instruction [thingsboard/tb-postgres](https://hub.docker.com/r/thingsboard/tb-postgres/) image will be used. It contains a single instance of ThingsBoard with PostgreSQL database.

Running this image requires a server with at least 4GB of RAM (8GB is recommended) and minimum load (few messages per second).

## Choose ThingsBoard queue service

{% include templates/install/install-queue.md %}

{% capture contenttogglespecqueue %}
In Memory <small>(built-in and default)</small>%,%inmemory%,%templates/install/docker-queue-in-memory.md%br%
Kafka <small>(recommended for on-prem, production installations)</small>%,%kafka%,%templates/install/docker-queue-kafka.md%br%
AWS SQS <small>(managed service from AWS)</small>%,%aws-sqs%,%templates/install/docker-queue-aws-sqs.md%br%
Google Pub/Sub <small>(managed service from Google)</small>%,%pubsub%,%templates/install/docker-queue-pub-sub.md%br%
Azure Service Bus <small>(managed service from Azure)</small>%,%service-bus%,%templates/install/docker-queue-service-bus.md%br%
RabbitMQ <small>(for small on-prem installations)</small>%,%rabbitmq%,%templates/install/docker-queue-rabbitmq.md%br%
Confluent Cloud <small>(Event Streaming Platform based on Kafka)</small>%,%confluent-cloud%,%templates/install/docker-queue-confluent-cloud.md{% endcapture %}

{% include content-toggle.liquid content-toggle-id="ubuntuThingsboardQueue" toggle-spec=contenttogglespecqueue %} 

Where: 

- `8080:9090`            - connect local port 8080 to exposed internal HTTP port 9090
- `1883:1883`            - connect local port 1883 to exposed internal MQTT port 1883
- `7070:7070`            - connect local port 7070 to exposed internal Edge RPC port 7070
- `5683-5688:5683-5688/udp`            - connect local UDP ports 5683-5688 to exposed internal COAP and LwM2M ports 
- `~/.mytb-data:/data`   - mounts the host's dir `~/.mytb-data` to ThingsBoard DataBase data directory
- `~/.mytb-logs:/var/log/thingsboard`   - mounts the host's dir `~/.mytb-logs` to ThingsBoard logs directory
- `mytb`             - friendly local name of this machine
- `restart: always`        - automatically start ThingsBoard in case of system reboot and restart in case of failure.
- `image: thingsboard/tb-postgres`          - docker image, can be also `thingsboard/tb-cassandra` or `thingsboard/tb`

{% include templates/install/docker/docker-create-folders-sudo-explained.md %}

```
mkdir -p ~/.mytb-data && sudo chown -R 799:799 ~/.mytb-data
mkdir -p ~/.mytb-logs && sudo chown -R 799:799 ~/.mytb-logs
```
{: .copy-code}

**NOTE**: Replace directory `~/.mytb-data` and `~/.mytb-logs` with directories you're planning to use in `docker-compose.yml`.

{% assign serviceName = "tb" %}
{% include templates/install/docker/docker-compose-up-and-ui-credentials.md %}

## Detaching, stop and start commands

{% assign serviceFullName = "ThingsBoard" %}
{% include templates/install/docker/detaching-stop-start-commands.md %}

## Upgrading

In order to update to the latest image, execute the following commands:

```
docker pull thingsboard/tb-postgres
docker compose stop
docker run -it -v ~/.mytb-data:/data --rm thingsboard/tb-postgres upgrade-tb.sh
docker compose rm mytb
docker compose up
```
{: .copy-code}

**NOTE**: if you use different database change image name in all commands from `thingsboard/tb-postgres` to `thingsboard/tb-cassandra` or `thingsboard/tb` correspondingly.
 
**NOTE**: replace host's directory `~/.mytb-data` with directory used during container creation. 

**NOTE**: if you have used one database and want to try another one, then remove the current docker container using `docker-compose rm` command and use different directory for `~/.mytb-data` in `docker-compose.yml`.

{% capture dockerComposeStandalone %}
If you still rely on Docker Compose as docker-compose (with a hyphen) here is the list of the above commands:
<br>**docker pull thingsboard/tb-postgres**
<br>**docker-compose stop**
<br>**docker run -it -v ~/.mytb-data:/data --rm thingsboard/tb-postgres upgrade-tb.sh**
<br>**docker-compose rm mytb**
<br>**docker-compose up**
{% endcapture %}
{% include templates/info-banner.md content=dockerComposeStandalone %}

## Troubleshooting

### DNS issues

{% include templates/troubleshooting/dns-issues.md %}

## Next steps

{% assign currentGuide = "InstallationGuides" %}{% include templates/guides-banner.md %}

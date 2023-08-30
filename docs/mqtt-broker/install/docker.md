---
layout: docwithnav-mqtt-broker
title: Installing TBMQ using Docker (Linux or Mac OS)
description: Installing TBMQ using Docker (Linux or Mac OS)

---

* TOC
{:toc}

This guide will help you to install and start standalone TBMQ using Docker on Linux or Mac OS.
If you are looking for a cluster installation instruction, please visit [cluster setup page](/docs/mqtt-broker/install/cluster/docker-compose-setup/).

## Prerequisites

To run TBMQ on a single machine you will need at least 2Gb of RAM.

- [Install Docker](https://docs.docker.com/engine/installation/)

{% include templates/install/docker-install-note.md %}

## Installation

Execute the following commands to download the script that will install and start TBMQ:

```shell
wget https://raw.githubusercontent.com/thingsboard/tbmq/main/msa/tbmq/configs/tbmq-install-and-run.sh && sudo chmod +x tbmq-install-and-run.sh && ./tbmq-install-and-run.sh
```
{: .copy-code}

The script downloads the _docker-compose.yml_ file, creates mounted directories, installs the database for TBMQ, and starts TBMQ.
Key configuration points for TBMQ in docker-compose file:

- `8083:8083` - connect local port 8083 to exposed internal HTTP port 8083
- `1883:1883` - connect local port 1883 to exposed internal MQTT port 1883
- `~/.tb-mqtt-broker-data/postgres:/var/lib/postgresql/data` - mounts the host's dir `~/.tb-mqtt-broker-data/postgres` to TBMQ DataBase data directory
- `~/.tb-mqtt-broker-data/kafka:/kafka` - mounts the host's dir `~/.tb-mqtt-broker-data/kafka` to Kafka data directory
- `~/.tb-mqtt-broker-data/log:/var/log/thingsboard-mqtt-broker` - mounts the host's dir `~/.tb-mqtt-broker-data/log` to TBMQ logs directory
- `~/.tb-mqtt-broker-data/data:/data` - mounts the host's dir `~/.tb-mqtt-broker-data/data` to TBMQ data directory that contains _.firstlaunch_ file after the DB is installed
- `tbmq` - friendly local name of this machine
- `restart: always` - automatically start TBMQ in case of system reboot and restart in case of failure
- `SECURITY_MQTT_BASIC_ENABLED: true` - enables MQTT basic security. **Note**: by default security is disabled

Once the installation process is complete you can access TBMQ UI by visiting the following URL `http://{your-host-ip}:8083` in your browser (e.g. [http://localhost:8083](http://localhost:8083)).

{% include templates/mqtt-broker/login.md %}

## Logs, stop and start commands

In case of any issues you can examine service logs for errors.
For example to see TBMQ logs execute the following command:

```
docker compose logs -f tbmq
```
{: .copy-code}

To stop the containers:

```
docker compose stop
```
{: .copy-code}

To start the containers:

```
docker compose start
```
{: .copy-code}

## Next steps

{% assign currentGuide = "InstallationGuides" %}{% include templates/mqtt-broker-guides-banner.md %}
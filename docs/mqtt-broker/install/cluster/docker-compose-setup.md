---
layout: docwithnav-mqtt-broker
title: Cluster setup using Docker Compose
description: Cluster setup using Docker Compose

---

* TOC
  {:toc}


This guide will help you to setup ThingsBoard in cluster mode using Docker Compose.

## Prerequisites

- [Install Docker CE](https://docs.docker.com/engine/installation/)
- [Install Docker Compose](https://docs.docker.com/compose/install/)

{% include templates/install/docker-install-note.md %}

## Step 1. Pull ThingsBoard MQTT Broker Image

Make sure your have [logged in](https://docs.docker.com/engine/reference/commandline/login/) to docker hub using command line.

```bash
docker pull thingsboard/tb-mqtt-broker:1.0.0-SNAPSHOT
```
{: .copy-code}

## Step 2. Clone ThingsBoard MQTT Broker repository

```bash
git clone https://github.com/thingsboard/thingsboard-mqtt-broker.git
cd thingsboard-mqtt-broker/docker
```
{: .copy-code}

## Step 3. Running

Execute the following command to create log folders for the services and chown of these folders to the docker container users.
To be able to change user, **chown** command is used, which requires sudo permissions (script will request password for a sudo access):

```bash
./scripts/docker-create-log-folders.sh
```
{: .copy-code}

Execute the following command to run installation:

```bash
./scripts/docker-install-tb-mqtt-broker.sh
```
{: .copy-code}

Execute the following command to start services:

```bash
./scripts/docker-start-services.sh
```
{: .copy-code}

After a while when all services will be successfully started you can make requests to `http://{your-host-ip}:8083` in you browser (for ex. `http://localhost:8083`)
and connect using MQTT protocol on 1883 port (for ex. `http://localhost:1883`).

{% include templates/mqtt-broker/authentication.md %}

In case of any issues you can examine service logs for errors.
For example to see ThingsBoard Mqtt Broker logs execute the following command:

```bash
docker-compose logs -f tb-mqtt-broker-1
```
{: .copy-code}

Or use `docker-compose ps` to see the state of all the containers.
Use `docker-compose logs --f` to inspect the logs of all running services.
See [docker-compose logs](https://docs.docker.com/compose/reference/logs/) command reference for details.

Execute the following command to stop services:

```bash
./scripts/docker-stop-services.sh
```
{: .copy-code}

Execute the following command to stop and completely remove deployed docker containers:

```bash
./scripts/docker-remove-services.sh
```
{: .copy-code}

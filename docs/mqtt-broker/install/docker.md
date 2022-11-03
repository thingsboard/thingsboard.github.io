---
layout: docwithnav-mqtt-broker
assignees:
- ashvayka
title: Installing ThingsBoard MQTT Broker using Docker (Linux or Mac OS)
description: Installing ThingsBoard MQTT Broker using Docker (Linux or Mac OS)

---

* TOC
  {:toc}


This guide will help you to install and start ThingsBoard MQTT Broker using Docker on Linux or Mac OS.

## Prerequisites

- [Install Docker CE](https://docs.docker.com/engine/installation/)
- [Install Docker Compose](https://docs.docker.com/compose/install/)

## Step 1. Pull ThingsBoard CE Images

Make sure your have [logged in](https://docs.docker.com/engine/reference/commandline/login/) to docker hub using command line.

```bash
docker pull thingsboard/thingsboard-mqtt-broker:1.0.0-SNAPSHOT
```

## Step 2. Clone ThingsBoard MQTT Broker repository

```bash
git clone https://github.com/thingsboard/thingsboard-mqtt-broker.git
cd thingsboard-mqtt-broker/docker
```

## Step 3. Running

Execute the following command to create log folders for the services and chown of these folders to the docker container users.
To be able to change user, **chown** command is used, which requires sudo permissions (script will request password for a sudo access):

`
$ ./scripts/docker-create-log-folders.sh
`

Execute the following command to run installation:

`
$ ./scripts/docker-install-tb-mqtt-broker.sh
`

Execute the following command to start services:

`
$ ./scripts/docker-start-services.sh
`

After a while when all services will be successfully started you can make requests to `http://{your-host-ip}:8083` in you browser (for ex. `http://localhost:8083`)
and connect using MQTT protocol on 1883 port (for ex. `http://localhost:1883`).

{% include templates/mqtt-broker/authentication.md %}

In case of any issues you can examine service logs for errors.
For example to see ThingsBoard Mqtt Broker logs execute the following command:

`
$ docker-compose logs -f tb-mqtt-broker
`

Or use `docker-compose ps` to see the state of all the containers.
Use `docker-compose logs --f` to inspect the logs of all running services.
See [docker-compose logs](https://docs.docker.com/compose/reference/logs/) command reference for details.

Execute the following command to stop services:

`
$ ./scripts/docker-stop-services.sh
`

Execute the following command to stop and completely remove deployed docker containers:

`
$ ./scripts/docker-remove-services.sh
`

Execute the following command to update particular or all services (pull newer docker image and rebuild container):

`
$ ./scripts/docker-update-service.sh [SERVICE...]
`

Where:

- `[SERVICE...]` - list of services to update (defined in docker-compose configurations). If not specified all services will be updated.

